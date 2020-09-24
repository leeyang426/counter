import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Spinner, { SpinnerProps } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'UI Components/Spinner',
  component: Spinner,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  visible: true,
};
