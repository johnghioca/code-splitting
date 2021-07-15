import React from 'react';
import { text, color } from '@storybook/addon-knobs';
import Wrapper from '.';

export default {
  title: 'Wrapper',
};

export const main = () => (
  <Wrapper style={{ backgroundColor: color('color', 'lightgray') }}>
    <div>{text('text', 'Main Wrapper Horizontal Padding Test')}</div>
  </Wrapper>
);
