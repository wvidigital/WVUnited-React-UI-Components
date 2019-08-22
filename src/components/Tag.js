import React from 'react';
import { Text } from 'rebass';
import styled from 'styled-components';

const Tag = styled(props => (
  <Text
    as="div"
    bg={['tagBg', 'tagBg', 'blue.1']}
    color="tag"
    fontFamily="sans"
    fontSize={1}
    fontWeight="bold"
    lineHeight={1}
    p={2}
    {...props}
  />
))`
  align-items: center;
  border-radius: ${p => p.theme.radii[1]}px;
  display: flex;
`;

export default Tag;
