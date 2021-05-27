import React, { memo } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';

const ShortLinkApp = memo(({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>short-Link Bookmark</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Roboto+Mono:wght@200;400;700&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
});

export default ShortLinkApp;
