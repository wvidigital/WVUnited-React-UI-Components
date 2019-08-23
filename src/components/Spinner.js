import { Box } from 'rebass/styled-components';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(Box)`
  animation: 1.6s ${rotate} linear infinite;
  border: ${p => p.border || 8}px solid;
  border-color: ${p => p.theme.colors.gray[1]} ${p => p.theme.colors.green[0]}
    ${p => p.theme.colors.green[0]} ${p => p.theme.colors.gray[1]};
  border-radius: 50%;
  height: ${p => p.size || 64}px;
  width: ${p => p.size || 64}px;
`;

export default Spinner;
