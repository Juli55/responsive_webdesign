import React from 'react';

import {
  GlobalStyle,
  Container
} from './style';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
