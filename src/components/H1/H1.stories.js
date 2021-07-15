import React from 'react';
import { text } from '@storybook/addon-knobs';
import H1 from '.';

export default {
  title: 'H1',
};

export const main = () => (
  <H1>
    {text('text', 'This text is 32px on mobile and 40px on tablet and desktop')}
  </H1>
);
