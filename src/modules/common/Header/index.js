import React from 'react';

import { useIntl } from 'gatsby-plugin-intl';
import i18n from './i18n';
import { MenuLink } from './style';
import { Container } from '../Layout/style';

const Header = () => {
  const intl = useIntl();

  return (
    <header>
      <Container>
        <MenuLink to="/">{intl.formatMessage(i18n.landing)}</MenuLink>
        <MenuLink to="/imprint">{intl.formatMessage(i18n.imprint)}</MenuLink>
      </Container>
    </header>
  );
};

export default Header;
