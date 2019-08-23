import React from 'react';
import { Box } from 'rebass/styled-components';
import styled from 'styled-components';

const HorizontalLine = styled(props => (
  <Box as="hr" sx={{ bg: 'border', mb: 3, mt: 3 }} {...props} />
))`
  border: none;
  height: 1px;
`;

export default HorizontalLine;
