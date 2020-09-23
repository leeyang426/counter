import React, { useState } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { SystemColor } from 'resources/styles/constants';

interface OptionType {
  id: string | number;
  name: string;
}

export interface SelectProps {
  width?: string;
  options: OptionType[];
  onSelect?: (option: OptionType) => void;
}

const { main, white } = SystemColor.primary;

const StyledDropdown = styled(Dropdown)`
  > button {
    width: ${(props) => props.width || '200px'};
    height: 36px;
    padding: 5px 10px;
    text-align: left;
    background: ${white};
    color: ${main};
    border: 1px solid ${main};
    font-size: 15px;
    font-weight: 400;
    position: relative;

    &:hover,
    &:focus,
    &:active {
      background: ${main} !important;
      color: ${white} !important;
      border: 1px solid ${main} !important;
      box-shadow: none !important;
    }

    &:after {
      position: absolute;
      right: 10px;
      top: 15px;
    }
  }

  &.show {
    > button {
      background: ${main} !important;
      color: ${white} !important;
      border: 1px solid ${main} !important;
    }
  }
`;

const StyledDropdownMenu = styled(DropdownMenu)`
  width: ${(props) => props.width || '200px'};
  padding: 3px 0;
  background: ${white};
`;

const StyledDropdownItem = styled(DropdownItem)`
  padding: 5px 10px;
  background: ${white};
  color: ${main};
  font-size: 15px;

  &:hover {
    background: ${lighten(0.1, main)};
    color: ${white};
  }

  &:focus,
  &:active {
    border: none;
    outline: none;
    color: ${white};
    background: ${lighten(0.05, main)};
  }
`;

const Select: React.FC<SelectProps> = ({ options, width, onSelect }: SelectProps) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]?.name);

  const handleSelect = (option: OptionType) => {
    setSelectedOption(option.name);
    if (onSelect) onSelect(option);
  };

  return (
    <StyledDropdown
      width={width}
      isOpen={isOpen}
      toggle={() => setOpen(!isOpen)}
      className="select"
    >
      <DropdownToggle caret>{selectedOption}</DropdownToggle>

      <StyledDropdownMenu width={width}>
        {options.map((option) => (
          <StyledDropdownItem key={option.id} onClick={() => handleSelect(option)}>
            {option.name}
          </StyledDropdownItem>
        ))}
      </StyledDropdownMenu>
    </StyledDropdown>
  );
};

export default Select;
