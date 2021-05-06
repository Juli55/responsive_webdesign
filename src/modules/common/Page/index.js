import React from 'react';
import SEO from '../../SEO';
import Layout from '../Layout';

import { useIntl } from 'gatsby-plugin-intl';
import i18n from './i18n';

const Page = ({ title, children }) => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO title={intl.formatMessage(i18n[title])} />
      {children}
    </Layout>
  );
};

export default Page;
