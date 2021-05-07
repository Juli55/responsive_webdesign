import styled from 'styled-components';

// ATTENTION: Always import Link from 'gatsby-plugin-intl' NEVER from 'gatsby'
import { Link } from 'gatsby-plugin-intl';
import Container from '../../components/Container'

export const MenuLink = styled(Link)`
  color: black;
  margin: 0 0.5rem;
  text-decoration: none;
  font-size: 1.3rem;
`;

export const StyledHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    background-color: rgba(102, 252, 164, .5);
    box-shadow: 2px 2px 15px 0 rgba(0, 0, 0, 0.2);
    height: 86px;
    justify-content: center;
    z-index: 1;
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
