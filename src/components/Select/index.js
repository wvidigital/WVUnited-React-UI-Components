import React from 'react';
import { Box } from 'rebass/styled-components';
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

const Dropdown = styled(({ form, ...props }) => (
  <Box
    as="select"
    sx={{ borderRadius: 1, color: 'text', fontSize: 1, fontFamily: 'sans' }}
    {...props}
  />
))`
  appearance: none;
  background: none;
  border: 2px solid ${p => p.theme.colors.border};
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
