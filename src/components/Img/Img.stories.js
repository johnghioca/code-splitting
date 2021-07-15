import React from 'react';
import { text } from '@storybook/addon-knobs';
import Img from '.';

export default {
  title: 'Img',
};

export const main = () => (
  <Img
    src={text('src', '//via.placeholder.com/768x300')}
    srcLarge={text('srcLarge', '//via.placeholder.com/1024x400')}
    alt={text('alt', 'This is sample alt text')}
  />
);
