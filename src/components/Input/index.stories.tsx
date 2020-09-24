import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Input, { InputProps } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'UI Components/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Enter text',
  value: '',
  type: 'text',
};
