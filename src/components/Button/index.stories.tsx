import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'UI Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  isPrimary: true,
  outline: false,
  disabled: false,
  color: 'primary',
  size: 'md',
  isRound: false,
};
