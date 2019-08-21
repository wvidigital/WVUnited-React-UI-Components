import React from 'react';
import { Text } from 'rebass';
import styled from 'styled-components';

const Bubble = styled(props => (
  <Text
    bg="green.1"
    color="green.0"
    fontFamily="sans"
    fontSize={1}
    lineHeight="body"
    px={[3, 3, 4]}
    py={[2, 2, 3]}
    {...props}
  />
))`
  align-items: center;
  border-radius: ${p => p.theme.radii[1]}px;
  display: inline-flex;
  position: relative;

  &:after {
    border: ${p => p.theme.space[2]}px solid transparent;
    border-top-color: ${p => p.theme.colors.green[1]};
    border-bottom: 0;
    content: '';
    bottom: 0;
    height: 0;
    left: ${p => p.theme.space[4]}px;
    margin-bottom: -${p => p.theme.space[2]}px;
    margin-left: -${p => p.theme.space[2]}px;
    width: 0;
    position: absolute;
  }
`;

export default Bubble;
