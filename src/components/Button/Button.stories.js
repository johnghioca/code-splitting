import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Button from '.';

export default {
  title: 'Button',
};

export const main = () => (
  <Button onClick={action('click')}>{text('label', 'button')}</Button>
);

export const disabled = () => (
  <Button onClick={action('click')} disabled>
    {text('label', 'button')}
  </Button>
);
