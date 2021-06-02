import React from 'react';

import { useIntl } from 'gatsby-plugin-intl';
import i18n from './i18n';

import { StyledFooter, FlexContainer, FlexItem, FlexItemFooter, ContentContainer, MenuLink, CopyRightText, Divider, FooterCopyRightBox } from './style';

import Logo from '../../../images/logo.svg';

const Footer = () => {
  const intl = useIntl();
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <ContentContainer>
        <FlexContainer
          justifyContent={'space-between'}>
          <FlexItemFooter flex={2}>
            <FlexContainer flexDirection={'column'} justifyContent={'flex-start'}>
              <FlexItem align={'flex-start'}>
                <img src={Logo} width={72} alt=""/>
                <p>&copy;{currentYear} Affililab {intl.formatMessage(i18n.text)}</p>
              </FlexItem>
            </FlexContainer>
          </FlexItemFooter>
          <FlexItemFooter>
            <MenuLink to="/privacy-policy">
              {intl.formatMessage(i18n.privacyPolicy)}
            </MenuLink>
            <MenuLink to="/imprint">{intl.formatMessage(i18n.imprint)}</MenuLink>
          </FlexItemFooter>
          <FooterCopyRightBox>
            <Divider/>
            <CopyRightText>
              Market Data copyright © 2021 QuoteMedia. Data delayed 15 minutes unless otherwise indicated (view delay times for all exchanges). RT=Real-Time, EOD=End of Day, PD=Previous Day. Market Data powered by QuoteMedia. Terms of Use.
            </CopyRightText>
            </FooterCopyRightBox>
        </FlexContainer>
      </ContentContainer>
    </StyledFooter>
  );
};

export default Footer;
