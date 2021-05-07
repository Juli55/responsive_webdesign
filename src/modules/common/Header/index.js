import React from 'react';

import { useIntl } from 'gatsby-plugin-intl';
import i18n from './i18n';
import { MenuLink, StyledHeader, FlexContainer, FlexItem, RequestDemoButton } from './style';
import { Container } from '../Layout/style';

import logo from '../../../images/logo.svg'

const Header = () => {
  const intl = useIntl();

  return (
    <StyledHeader>
      <FlexContainer>
        <FlexItem>
          <MenuLink to="/"><img src={logo} width={182} alt=""/></MenuLink>
        </FlexItem>
        <FlexItem>
          <MenuLink to="/">{intl.formatMessage(i18n.landing)}</MenuLink>
          <MenuLink to="/second-section">{intl.formatMessage(i18n.imprint)}</MenuLink>
          <MenuLink to="/third-section">{intl.formatMessage(i18n.imprint)}</MenuLink>
          <MenuLink to="/fourth-section">{intl.formatMessage(i18n.imprint)}</MenuLink>
          <MenuLink to="/fifth-section">{intl.formatMessage(i18n.imprint)}</MenuLink>
          <RequestDemoButton>request early access</RequestDemoButton>
        </FlexItem>
      </FlexContainer>
    </StyledHeader>
  );
};

export default Header;
