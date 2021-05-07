import styled from 'styled-components';

// ATTENTION: Always import Link from 'gatsby-plugin-intl' NEVER from 'gatsby'
import { Link } from 'gatsby-plugin-intl';

export const MenuLink = styled(Link)`
  color: black;
  margin: 0 0.5rem;
  text-decoration: none;
  font-size: 1.5rem;
`;

export const StyledHeader = styled.div`
    display: flex;
    background-color: rgba(179, 229, 252, .6);
    height: 160px;
    justify-content: center;
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1624px;
`;

export const FlexItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;
