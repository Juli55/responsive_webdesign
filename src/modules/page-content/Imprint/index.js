import React from 'react';

import { useIntl, navigate } from 'gatsby-plugin-intl';
import i18n from './i18n';
import { Title } from '../../components/Text';
import { Button } from '../../components/Button';

const Imprint = () => {
  const intl = useIntl();

  return (
    <>
      <Title type="italic">{intl.formatMessage(i18n.title)}</Title>
      <Button onClick={() => navigate('/')}>
        {intl.formatMessage(i18n.goBack)}
      </Button>
    </>
  );
};

export default Imprint;
