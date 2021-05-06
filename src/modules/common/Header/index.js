import React from 'react';

import { useIntl } from 'gatsby-plugin-intl';
import i18n from './i18n';
import { MenuLink, StyledHeader } from './style';
import { Container } from '../Layout/style';

const Header = () => {
  const intl = useIntl();

  return (
    <StyledHeader>
      <Container>
        <MenuLink to="/">{intl.formatMessage(i18n.landing)}</MenuLink>
        <MenuLink to="/second-section">{intl.formatMessage(i18n.imprint)}</MenuLink>
        <MenuLink to="/third-section">{intl.formatMessage(i18n.imprint)}</MenuLink>
        <MenuLink to="/fourth-section">{intl.formatMessage(i18n.imprint)}</MenuLink>
        <MenuLink to="/fifth-section">{intl.formatMessage(i18n.imprint)}</MenuLink>
      </Container>
    </StyledHeader>
  );
};

export default Header;
