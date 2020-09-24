import React from 'react';
import styled from 'styled-components';

import { ReactComponent as SpinnerSVG } from 'resources/images/svgs/spinner.svg';

import { SystemColor } from 'resources/styles/constants';

export interface SpinnerProps {
  visible?: boolean;
  color?: string;
}

const { main } = SystemColor.primary;

const defaultProps: SpinnerProps = {
  visible: true,
  color: main,
};

const StyledSpinner = styled(SpinnerSVG)<SpinnerProps>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  stroke: ${({ color }) => color};
  transition: opacity 0.2s, stroke 0.2s;
`;

const Spinner: React.FC<SpinnerProps> = (props: SpinnerProps) => {
  return <StyledSpinner {...props} />;
};

Spinner.defaultProps = defaultProps;

export default Spinner;
