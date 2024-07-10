import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { staticRequest } from 'tinacms';
import Container from 'components/Container';
import MDXRichText from 'components/MDXRichText';
import { NonNullableChildrenDeep } from 'types';
import { formatDate } from 'utils/formatDate';
import { media } from 'utils/media';
import { getReadTime } from 'utils/readTime';
import Header from 'views/SingleArticlePage/Header';
import MetadataHead from 'views/SingleArticlePage/MetadataHead';
import OpenGraphHead from 'views/SingleArticlePage/OpenGraphHead';
import ShareWidget from 'views/SingleArticlePage/ShareWidget';
import StructuredDataHead from 'views/SingleArticlePage/StructuredDataHead';
import { Posts, PostsDocument, Query } from '.tina/__generated__/types';

export default function SingleArticlePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [readTime, setReadTime] = useState('');

  useEffect(() => {
    calculateReadTime();
    lazyLoadPrismTheme();

    function calculateReadTime() {
      const currentContent = contentRef.current;
      if (currentContent) {
        setReadTime(getReadTime(currentContent.textContent || ''));
      }
    }

    function lazyLoadPrismTheme() {
      const prismThemeLinkEl = document.querySelector('link[data-id="prism-theme"]');

      if (!prismThemeLinkEl) {
        const headEl = document.querySelector('head');
        if (headEl) {
          const newEl = document.createElement('link');
          newEl.setAttribute('data-id', 'prism-theme');
          newEl.setAttribute('rel', 'stylesheet');
          newEl.setAttribute('href', '/prism-theme.css');
          newEl.setAttribute('media', 'print');
          newEl.setAttribute('onload', "this.media='all'; this.onload=null;");
          headEl.appendChild(newEl);
        }
      }
    }
  }, []);

  const { slug, data } = props;
  const content = data.getPostsDocument.data.body;

  if (!data) {
    return null;
  }
  const { title, description, date, tags, imageUrl } = data.getPostsDocument.data as NonNullableChildrenDeep<Posts>;
  const meta = { title, description, date: date, tags, imageUrl, author: '' };
  const formattedDate = formatDate(new Date(date));
  const absoluteImageUrl = imageUrl.replace(/\/+/, '/');
  return (
    <>
      <Head>
        <noscript>
          <link rel="stylesheet" href="/prism-theme.css" />
        </noscript>
      </Head>
      <OpenGraphHead slug={slug} {...meta} />
      <StructuredDataHead slug={slug} {...meta} />
      <MetadataHead {...meta} />
      <CustomContainer id="content" ref={contentRef}>
        <ShareWidget title={title} slug={slug} />
        <Header title={title} formattedDate={formattedDate} imageUrl={absoluteImageUrl} readTime={readTime} />
        <MDXRichText content={content} />
      </CustomContainer>
    </>
  );
}

export async function getStaticPaths() {
  const postsListData = await staticRequest({
    query: `
      query PostsSlugs{
        getPostsList{
          edges{
            node{
              sys{
                basename
              }
            }
          }
        }
      }
    `,
    variables: {},
  });

  if (!postsListData) {
    return {
      paths: [],
      fallback: false,
    };
  }

  type NullAwarePostsList = { getPostsList: NonNullableChildrenDeep<Query['getPostsList']> };
  return {
    paths: (postsListData as NullAwarePostsList).getPostsList.edges.map((edge) => ({
      params: { slug: normalizePostName(edge.node.sys.basename) },
    })),
    fallback: false,
  };
}

function normalizePostName(postName: string) {
  return postName.replace('.mdx', '');
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  const { slug } = params as { slug: string };
  const variables = { relativePath: `${slug}.mdx` };
  const query = `
    query BlogPostQuery($relativePath: String!) {
      getPostsDocument(relativePath: $relativePath) {
        data {
          title
          description
          date
          tags
          imageUrl
          body
        }
      }
    }
  `;

  const data = (await staticRequest({
    query: query,
    variables: variables,
  })) as { getPostsDocument: PostsDocument };

  return {
    props: { slug, variables, query, data },
  };
}

const CustomContainer = styled(Container)`
  position: relative;
  max-width: 90rem;
  margin: 10rem auto;

  ${media('<=tablet')} {
    margin: 5rem auto;
  }
`;
