import { defineMessages } from 'react-intl';

const scope = 'title';

export default defineMessages({
  landing: {
    id: `${scope}.landing`,
    defaultMessage: 'Welcome to Gatsby'
  },
  notFound: {
    id: `${scope}.notFound`,
    defaultMessage: 'Page not found'
  },
  imprint: {
    id: `${scope}.imprint`,
    defaultMessage: 'Imprint'
  }
});
