import React from 'react';

import {
  GlobalStyle,
  ContentContainer
} from './style';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </>
  );
};

export default Layout;
