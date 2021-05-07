import { useIntl } from 'gatsby-plugin-intl';
import i18n from './i18n';

import { FlexContainer, FlexItemFooter, MenuLink } from './style';
import React from 'react';

const FooterNavigation = () => {
  const intl = useIntl();

  return (
    <FlexContainer flexDirection={'column'} justifyContent={'flex-start'}>
      <FlexItemFooter>
        <MenuLink to="/privacy-policy">
          {intl.formatMessage(i18n.privacyPolicy)}
        </MenuLink>
          <MenuLink to="/imprint">{intl.formatMessage(i18n.imprint)}</MenuLink>
      </FlexItemFooter>
    </FlexContainer>
  );
};

export default FooterNavigation;
