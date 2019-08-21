import React from 'react';
import { Button as RawButton } from 'rebass';
import styled from 'styled-components';

const Button = styled(RawButton)`
  background: none;
  cursor: pointer;
  outline: none;

  &:disabled {
    cursor: auto;
  }
`;

const IconButton = ({ children, icon, ...props }) => {
  return (
    <Button border="none" px={0} py={0} {...props}>
      {icon}
      {children}
    </Button>
  );
};

export default IconButton;
