import React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';

const HorizontalLine = styled(props => (
  <Box as="hr" bg="border" mb={3} mt={3} {...props} />
))`
  border: none;
  height: 1px;
`;

export default HorizontalLine;
