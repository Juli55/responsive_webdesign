import React from 'react';

import Image from '../../common/Image';
import { Title } from '../../components/Text';
import { Button } from '../../components/Buttons';

// ATTENTION: Always import navigate from 'gatsby-plugin-intl' NEVER from 'gatsby'
import { useIntl, navigate } from 'gatsby-plugin-intl';
import i18n from './i18n';

const Landing = () => {
  const intl = useIntl();

  return (
    <>
      <Title type="italic">{intl.formatMessage(i18n.welcome)}</Title>
      <Image />
      <Button onClick={() => navigate('/imprint')}>
        {intl.formatMessage(i18n.goToImprint)}
      </Button>
    </>
  );
};

export default Landing;
