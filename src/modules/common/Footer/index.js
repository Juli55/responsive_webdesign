import React from 'react';

import { useIntl } from 'gatsby-plugin-intl';
import i18n from './i18n';

const Footer = () => {
  const intl = useIntl();
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{textAlign: 'center'}}>
      <div>&copy;{currentYear} {intl.formatMessage(i18n.text)}</div>
    </footer>
  );
};

export default Footer;
