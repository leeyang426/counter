import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { Button as BSButton, ButtonProps as BSButtonProps } from 'reactstrap';

import { SystemColor } from 'resources/styles/constants';

export interface ButtonProps extends BSButtonProps {
  primary?: boolean;
  round?: boolean;
}

const StyledButton = styled(BSButton)`
  border-radius: ${(props: ButtonProps) => (props.round ? '25px' : '5px')};

  &:focus {
    box-shadow: none !important;
  }
`;

const { main, white } = SystemColor.primary;

const PrimaryButton = styled(BSButton)`
  background: ${(props) => (props.outline ? white : main)};
  color: ${(props) => (props.outline ? main : white)};
  border-color: ${main};
  border-radius: ${(props: ButtonProps) => (props.round ? '25px' : '5px')};

  &:hover:not([disabled]):not(.disabled) {
    background: ${darken(0.06, main)};
    border-color: ${darken(0.06, main)};
  }

  &:not(:disabled):not(.disabled):focus,
  &:not(:disabled):not(.disabled):active {
    background: ${darken(0.1, main)};
    border-color: ${darken(0.1, main)};
    box-shadow: none !important;
  }

  &:disabled {
    background: ${(props) => (props.outline ? white : lighten(0.1, main))};
    color: ${(props) => (props.outline ? lighten(0.1, main) : white)};
    border-color: ${(props) => (props.outline ? lighten(0.1, main) : white)};
  }
`;

const Button: React.FC<ButtonProps> = ({ children, primary, ...props }: ButtonProps) => {
  if (primary) return <PrimaryButton {...props}>{children}</PrimaryButton>;
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
