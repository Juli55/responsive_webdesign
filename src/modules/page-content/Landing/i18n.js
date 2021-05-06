import { defineMessages } from 'react-intl';

const scope = 'landing';

export default defineMessages({
  welcome: {
    id: `${scope}.welcome`,
    defaultMessage: 'Welcome to Gatsby!'
  },
  goToImprint: {
    id: `${scope}.goToImprint`,
    defaultMessage: 'Go to the imprint page'
  }
});
