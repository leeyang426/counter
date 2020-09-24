import React from 'react';
import styled from 'styled-components';

import { Input as BSInput, InputProps as BSInputProps } from 'reactstrap';

import { SystemColor } from 'resources/styles/constants';

export interface InputProps extends BSInputProps {
  noBorder?: boolean;
}

const { main } = SystemColor.primary;

const StyledInput = styled(BSInput)<InputProps>`
  background: transparent;
  border-width: ${({ noBorder }) => (noBorder ? 0 : '1px')}}

  &:focus {
    box-shadow: none;
    border-color: ${main};
  }
`;

const Input: React.FC<InputProps> = (props: InputProps) => {
  return <StyledInput {...props} />;
};

export default Input;
