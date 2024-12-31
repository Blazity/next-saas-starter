import Head from 'next/head';
import React from 'react';
import { EnvVars } from 'env';

interface MetadataHeadProps {
  title: string;
  description: string;
  author: string;
}

export default function MetadataHead(props: MetadataHeadProps) {
  const { title, description, author } = props;
  const title2 = title || EnvVars.SITE_NAME;

  return (
    <Head>
      <title>
        {title2}
      </title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
    </Head>
  );
}
