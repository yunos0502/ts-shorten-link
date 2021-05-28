import React, { memo, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode
}

const AppLayout = memo(({ children }: LayoutProps) => (
    <>
      <Header />
      {children}
      <Footer />
    </>
  ));

export default AppLayout;
