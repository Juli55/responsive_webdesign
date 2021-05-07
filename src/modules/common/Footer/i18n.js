import { defineMessages } from 'react-intl';

const scope = 'footer';

export default defineMessages({
  text: {
    id: `${scope}.text`,
    defaultMessage: 'All rights reserved.'
  },
    privacyPolicy: {
    id: `${scope}.privacyPolicy`,
    defaultMessage: 'Privacy Policy'
  },
  imprint: {
    id: `${scope}.imprint`,
    defaultMessage: 'Impressum'
  }
});
