import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export const SiteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

export const HeaderContainer = styled(Container)`
  background-color: #000000cc;
  color: white;
`;

export const MainContainer = styled(Container)`
  flex: 1;
`;

export const FooterContainer = styled(Container)`
  background-color: #f5f5f7;
`;
