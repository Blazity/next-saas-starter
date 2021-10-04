import styled from 'styled-components';
import { formatDate } from 'utils/formatDate';
import MDXRichText from 'components/MDXRichText';

import Head from 'next/head';
// import OpenGraphHead from 'views/SingleArticlePage/OpenGraphHead';
// import MetadataHead from 'views/SingleArticlePage/MetadataHead';
// import Header from 'views/SingleArticlePage/Header';
// import StructuredDataHead from 'views/SingleArticlePage/StructuredDataHead';
import { getAllPostsSlugs, getSinglePost } from 'utils/postsFetcher';
import React, { useEffect } from 'react';
import { getReadTime } from 'utils/readTime';
import Spacer from 'components/Spacer';
// import AuthorInfo from 'components/AuthorInfo';

export default function SingleArticlePage(props) {
  const { slug, content, meta, readTime } = props;
  const { title, description, date } = meta;

  const formattedDate = formatDate(new Date(date));

  useEffect(() => {
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
  }, []);

  return (
    <>
      <Head>
        <noscript>
          <link rel="stylesheet" href="/prism-theme.css" />
        </noscript>
      </Head>
      {/* <OpenGraphHead slug={slug} {...meta} /> */}
      {/* <StructuredDataHead slug={slug} {...meta} /> */}
      {/* <MetadataHead {...meta} /> */}
      <Container id="content">
        {/* <Header title={title} formattedDate={formattedDate} readTime={readTime} /> */}
        <MDXRichText {...content} />
        {/* <AuthorInfo /> */}
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const posts = getAllPostsSlugs();
  return {
    paths: posts.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug, content, meta } = await getSinglePost(params.slug);
  const serializedContent = await serializeContent(content, meta);
  return { props: { slug, content: serializedContent, meta, readTime: getReadTime(content) } };

  async function serializeContent(content, meta) {
    const { serialize } = await import('next-mdx-remote/serialize');
    return serialize(content, {
      scope: meta,
      mdxOptions: {
        remarkPlugins: [
          await import('@fec/remark-a11y-emoji'),
          await import('remark-breaks'),
          await import('remark-gfm'),
          await import('remark-footnotes'),
          await import('remark-external-links'),
          [await import('remark-toc'), { ordered: true, tight: true, maxDepth: 3 }],
          await import('remark-slug'),
          await import('remark-sectionize'),
        ],
        rehypePlugins: [],
      },
    });
  }
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90rem;
  padding: 0 1.2rem;
  margin: 0 auto;
  margin-bottom: 3.8rem;
`;
