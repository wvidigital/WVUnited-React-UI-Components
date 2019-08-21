import React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';

const Grid = styled(props => <Box {...props} />)`
  display: grid;
  gap: ${p => (p.gap ? p.theme.space[p.gap] || p.gap : p.theme.space[3])}px;
  grid-template-columns: repeat(${p => p.min || p.children.length}, 1fr);
`;

export default Grid;
