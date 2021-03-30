
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

import React from 'react';
import Styles from './../src/components/decorators/Styles'
export const decorators = [
  (Story) => (
    <Styles>
      <Story />
    </Styles>
  ),
];