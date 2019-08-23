import React from 'react';
import { Text } from 'rebass/styled-components';
import styled from 'styled-components';

const Note = styled(props => (
  <Text
    bg={props.type === 'success' ? 'green.1' : 'none'}
    color="green.0"
    fontFamily="sans"
    fontSize={1}
    lineHeight="body"
    px={3}
    py={2}
    textAlign="center"
    {...props}
  />
))`
  align-items: center;
  border-radius: 20px;
  display: flex;
  font-style: italic;
  justify-content: center;
  max-width: 100%;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: capitalize;
  white-space: nowrap;
`;

export default Note;
