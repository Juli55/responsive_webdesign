import styled from 'styled-components';

// ATTENTION: Always import Link from 'gatsby-plugin-intl' NEVER from 'gatsby'
import { Link } from 'gatsby-plugin-intl';
import Container from '../../components/Container'
import { StyledButton } from '../../components/Button/style';
import { motion } from "framer-motion";

export const MenuLink = styled(Link)`
  color: ${(props) => props.color ? props.color : 'black'};
  text-decoration: none;
  font-size: .8rem;
  font-weight: 600;
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
    backdrop-filter: blur(16px);
`;

export const FlexContainerMain = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection ? props.flexDirection : 'row'};
  align-items: ${(props) => props.alignItems ? props.alignItems : 'center'};
  padding: ${(props) => props.padding ? props.padding : ''};
  gap: ${(props) => props.gap ? props.gap : ''};
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection ? props.flexDirection : 'row'};
  align-items: ${(props) => props.alignItems ? props.alignItems : 'center'};
  padding: ${(props) => props.padding ? props.padding : ''};
  gap: ${(props) => props.gap ? props.gap : ''};
`;

export const FlexItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const RequestDemoButton = styled(StyledButton)`
    background: linear-gradient(16deg, rgba(255,122,122,1) 0%, rgba(255,79,79,1) 100%);
    padding: .8rem 1rem .8rem 1rem;
    border-radius: 142px;
    width: auto;
    color: white;
    font-size: .8rem;
    font-weight: 600;
`;

export const HeaderMobileMenu = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 60%;
  background-color: rgb(12, 21, 48);
  padding: 2rem;
  z-index: 1000;
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  background: #424242;
  opacity: .8;
  z-index: 999;
`;

