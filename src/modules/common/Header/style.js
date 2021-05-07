import styled from 'styled-components';

// ATTENTION: Always import Link from 'gatsby-plugin-intl' NEVER from 'gatsby'
import { Link } from 'gatsby-plugin-intl';
import Container from '../../components/Container'
import { StyledButton } from '../../components/Button/style';

export const MenuLink = styled(Link)`
  color: black;
  margin: 0 0.5rem;
  text-decoration: none;
  font-size: 1rem;
`;

export const StyledHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    background-color: rgba(151, 239, 145, .5);
    box-shadow: 2px 2px 15px 0 rgba(0, 0, 0, 0.2);
    height: 86px;
    justify-content: center;
    z-index: 2;
`;

export const FlexContainer = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const RequestDemoButton = styled(StyledButton)`
    background: linear-gradient(16deg, rgba(227,125,125,1) 0%, rgba(189,59,59,1) 100%);
    padding: 1rem 1rem 1rem 1rem;
    border-radius: 12px;
    width: auto;
    color: white;
`;
