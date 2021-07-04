import React from 'react';

import GlobalStyles from '../src/styles/global';
import ResetStyles from '../src/styles/reset';

export const decorators = [
  (Story) => (
    <>
      <ResetStyles />
      <GlobalStyles />
      <Story />
    </>
  )
];

export const parameters = {
  controls: { expanded: true },
};
