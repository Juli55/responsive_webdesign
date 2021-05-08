import styled from 'styled-components';
import { Link } from 'gatsby-plugin-intl';
import { breakpoints } from '../../../utils/styledBreakpoints';

export const MenuLink = styled(Link)`
  color: #fff;
  margin: 0.5rem;
  text-decoration: none;
  @media (max-width: 628px) {
   flex: 1;
    text-align: center;
  }
  display: block;
`;

export const StyledFooter = styled.div`
  display: flex;
  background-color: rgb(12, 21, 48);
  text-align: center;
  color: #fff;
  bottom: 0;
  justify-content: center;
  width: 100%;
  margin-top: 4rem;
`;

export const ContentContainer = styled.div`
  align-self: center;
  max-width: 1228px;
  width: 100%;
 ${breakpoints("width", "", [
  { 1200: 'calc(100% - 80px)' },
  { 800: 'calc(100% - 60px)' },
  { 600: 'calc(100% - 40px)' },
  { 450: 'calc(100% - 20px)' }
])};
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'row'};
  min-height: 100px;
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: 628px) {
    flex-direction: column;
  }
`;

export const FlexItem = styled.div`
  align-self: ${(props) => (props.align ? props.align : 'center')};
  padding: .5rem;
  flex-grow: ${(props) => (props.grow ? props.grow : 1)};
`;

export const FlexItemFooter = styled.div`
  align-self: center;
  padding: .5rem;
  flex: ${(props) => (props.flex ? props.flex : 1)};
`;


export const FooterCopyRightBox = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const CopyRightText = styled.p`
  width: 70%;
  text-align: center;
  opacity: .2;
  align-self: center;
`

export const Divider = styled.div`
height: .2px;
width: 100%;
background-color: rgb(36, 42, 64);
opacity: 1;
`
