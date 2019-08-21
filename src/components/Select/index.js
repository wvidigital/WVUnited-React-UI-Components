import React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';
import { ReactComponent as ChevronDownSvg } from './chevron-down.svg';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const ChevronDown = styled(ChevronDownSvg)`
  color: ${p => p.theme.colors.blue[0]};
  position: absolute;
  right: ${p => p.theme.space[3]}px;
  top: 50%;
  transform: translateY(-50%);
`;

const Dropdown = styled(props => <Box as="select" {...props} />)`
  appearance: none;
  background: none;
  border: 2px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii[1]}px;
  color: ${p => p.theme.colors.text};
  font: ${p => p.theme.fontSizes[1]}px ${p => p.theme.fonts.sans};
  outline: none;
  padding: ${p => p.theme.space[3]}px
    ${p => p.theme.space[4] + p.theme.space[3]}px ${p => p.theme.space[3]}px
    ${p => p.theme.space[3]}px;
  position: relative;
  width: 100%;
`;

const Select = ({
  children,
  className,
  defaultValue,
  options,
  settings,
  ...props
}) => (
  <Wrapper className={className}>
    <ChevronDown />
    <Dropdown {...props}>
      {options.map(({ label, value }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ))}
      {children}
    </Dropdown>
  </Wrapper>
);

export default Select;
