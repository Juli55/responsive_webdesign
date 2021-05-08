import React, { useState } from 'react';

import { useIntl } from 'gatsby-plugin-intl';
import i18n from './i18n';
import { MenuLink, StyledHeader, FlexContainer, FlexItem, RequestDemoButton,
  HeaderMobileMenu,
  Overlay } from './style';
import { Container } from '../Layout/style';

import logo from '../../../images/logo.svg'
import {Media, MediaContextProvider} from "../../../modules/helpers/Responsive";
import CancelIcon from '../../../assets/icons/cancel.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '100%' }
};

const variantOverlay = {
  open: { opacity: .8 },
  closed: { opacity: 0, display: 'none' }
};

const Header = () => {
  const intl = useIntl();

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MediaContextProvider>
        <Media at="sm">
      <Overlay onClick={() => setMenuOpen(!isMenuOpen)} transition={{
        duration: 0.5
      }} variants={variantOverlay} initial={{ opacity: 0 }} animate={isMenuOpen ? 'open' : 'closed'} style={{position: 'fixed', opacity: '.8', backgroundColor: 'black', zIndex: '999', width: '100%', height: '100%', left: '0', right: '0', top: '0', bottom: '0'}}></Overlay>
      <HeaderMobileMenu
        initial={{ opacity: 0 }}
        animate={isMenuOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.5
        }}
        variants={variants}>
        <FlexContainer
          flexDirection={'column'}
          justifyContent={'flex-start'}
          alignItems={'center'}>
          <div
            style={{ cursor: 'pointer', marginBottom: '4rem', marginRight: '2rem', alignSelf: 'flex-end' }}
            onClick={() => {
              setMenuOpen(!isMenuOpen);
            }}>
            <FontAwesomeIcon icon={faTimes} color={'white'} />
          </div>
          <MenuLink color={'white'} to="/">{intl.formatMessage(i18n.landing)}</MenuLink>
          <MenuLink color={'white'} to="/third-section">{intl.formatMessage(i18n.imprint)}</MenuLink>
          <MenuLink color={'white'} to="/fourth-section">{intl.formatMessage(i18n.imprint)}</MenuLink>
          <MenuLink color={'white'} to="/fifth-section">{intl.formatMessage(i18n.imprint)}</MenuLink>
        </FlexContainer>
      </HeaderMobileMenu>
        </Media>
      </MediaContextProvider>
    <StyledHeader>
      <FlexContainer>
        <FlexItem>
          <MenuLink to="/"><img src={logo} width={182} alt=""/></MenuLink>
        </FlexItem>
        <FlexItem>
          <MediaContextProvider>
          <Media at="sm">
            <>
              <div
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setMenuOpen(!isMenuOpen);
                  }}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </>
          </Media>
          <Media greaterThan="sm">
            <MenuLink to="/">{intl.formatMessage(i18n.landing)}</MenuLink>
            <MenuLink to="/second-section">{intl.formatMessage(i18n.imprint)}</MenuLink>
            <MenuLink to="/third-section">{intl.formatMessage(i18n.imprint)}</MenuLink>
            <MenuLink to="/fourth-section">{intl.formatMessage(i18n.imprint)}</MenuLink>
            <RequestDemoButton>request early access</RequestDemoButton>
          </Media>
          </MediaContextProvider>
        </FlexItem>
      </FlexContainer>
    </StyledHeader>
      </>
  );
};

export default Header;
