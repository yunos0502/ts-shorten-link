import React, { memo } from 'react';
import { NextPage } from 'next';
import Header from '../components/Layouts/Header';
import Footer from '../components/Layouts/Footer';
import LinkInput from '../components/LinkInput';
import LinkList from '../components/LinkList';

const Home: NextPage = memo(() => {
  return (
    <>
      <Header />
      <LinkInput />
      <LinkList />
      <Footer />
    </>
  );
});

export default Home;
