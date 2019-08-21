import React from 'react';
import { darken } from 'polished';
import { Button as RawButton } from 'rebass';
import styled from 'styled-components';

const Button = styled(({ children, icon: Icon, ...props }) => (
  <RawButton
    bg="buttonBg"
    borderRadius={1}
    color="buttonText"
    px={3}
    py={3}
    type="button"
    {...props}
  >
    {children}
    {Icon && <Icon />}
  </RawButton>
))`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  transition: background 0.2s;

  &:hover {
    background: ${p => darken(0.1, p.theme.colors.buttonBg)};
  }

  &:disabled {
    cursor: auto;
  }
`;

export default Button;
