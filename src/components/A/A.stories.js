import React from 'react';
import { text } from '@storybook/addon-knobs';
import A from '.';

export default {
  title: 'A',
};

export const main = () => (
  <A href="https://reactjs.org" target="_blank">
    {text('text', 'Learn more')}
  </A>
);
