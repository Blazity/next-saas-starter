import Head from 'next/head';
import React from 'react';
import { EnvVars } from 'env';

interface OpenGraphHeadProps {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string;
  author: string;
}

export default function OpenGraphHead(props: OpenGraphHeadProps) {
  const { slug, title, description, date, tags } = props;

  const currentUrl = EnvVars.URL + 'blog/' + slug;
  const ogImageUrl = EnvVars.OG_IMAGES_URL + `${slug}.png`;
  const domainName = EnvVars.URL.replace('https://', '');

  return (
    <Head>
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={domainName} />
      <meta property="og:type" content="article" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="article:published_time" content={new Date(date).toString()} />
      <meta property="article:section" content={tags} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={description} />
      <meta name="robots" content="max-image-preview:large"></meta>
    </Head>
  );
}
