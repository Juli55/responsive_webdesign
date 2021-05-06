import React from 'react';

import {
  FooterContainer,
  GlobalStyle,
  HeaderContainer,
  MainContainer,
  SiteContainer
} from './style';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <SiteContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <MainContainer>
          <main style={{ textAlign: 'center' }}>{children}</main>
        </MainContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </SiteContainer>
    </>
  );
};

export default Layout;
