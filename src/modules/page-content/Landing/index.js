import React from 'react';

import Image from '../../common/Image';
import { Title } from '../../components/Text';
import { Button } from '../../components/Button';

// ATTENTION: Always import navigate from 'gatsby-plugin-intl' NEVER from 'gatsby'
import { useIntl, navigate } from 'gatsby-plugin-intl';
import First from './Sections/First'
import HowItWorks from './Sections/HowItWorks'
import Advantages from './Sections/Advantages'
import RequestAccess from './Sections/RequestAccess'
import i18n from './i18n';

const Landing = () => {
  const intl = useIntl();

  return (
    <>
        <First />
        <HowItWorks/>
        <Advantages />
    </>
  );
};

export default Landing;
