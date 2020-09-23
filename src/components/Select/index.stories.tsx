import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Select, { SelectProps } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'UI Components/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

const options = [
  { id: 1, name: 'Red' },
  { id: 2, name: 'Blue' },
];

export const Primary = Template.bind({});
Primary.args = {
  width: '200px',
  options,
};
