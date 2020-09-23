import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { Button as BSButton, ButtonProps as BSButtonProps } from 'reactstrap';

import { SystemColor } from 'resources/styles/constants';

export interface ButtonProps extends BSButtonProps {
  isPrimary?: boolean;
  isRound?: boolean;
}

const StyledButton = styled(BSButton)`
  border-radius: ${(props: ButtonProps) => (props.isRound ? '25px' : '5px')};

  &:focus {
    box-shadow: none !important;
  }
`;

const { primary, white } = SystemColor.primaryColor;

const PrimaryButton = styled(BSButton)`
  background: ${(props) => (props.outline ? white : primary)};
  color: ${(props) => (props.outline ? primary : white)};
  border-color: ${primary};
  border-radius: ${(props: ButtonProps) => (props.isRound ? '25px' : '5px')};

  &:hover:not([disabled]):not(.disabled) {
    background: ${darken(0.06, primary)};
    border-color: ${darken(0.06, primary)};
  }

  &:not(:disabled):not(.disabled):focus,
  &:not(:disabled):not(.disabled):active {
    background: ${darken(0.1, primary)};
    border-color: ${darken(0.1, primary)};
    box-shadow: none !important;
  }

  &:disabled {
    background: ${(props) => (props.outline ? white : lighten(0.1, primary))};
    border-color: ${(props) => (props.outline ? lighten(0.1, primary) : white)};
    color: ${(props) => (props.outline ? lighten(0.1, primary) : white)};
  }
`;

const Button: React.FC = ({ children, isPrimary, ...props }: ButtonProps) => {
  if (isPrimary) return <PrimaryButton {...props}>{children}</PrimaryButton>;
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
