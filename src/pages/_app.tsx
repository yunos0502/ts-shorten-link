import React, { memo } from 'react';
import { Container, AppProps } from 'next/app';
// import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';

const ShortLinkApp = memo(({ Component, pageProps }: AppProps) => {
  return (
    <Container>
      <GlobalStyle />
      <Component {...pageProps} />
    </Container>
  );
});

export default ShortLinkApp;
