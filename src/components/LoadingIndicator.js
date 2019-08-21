import { rgba } from 'polished';
import { Card } from 'rebass';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const LoadingIndicator = styled(Card)`
  align-items: center;
  background: ${p => p.theme.colors.gray[0]};
  display: flex;
  flex: 1;
  height: ${p =>
    p.height
      ? typeof p.height === 'string'
        ? p.height
        : `${p.height}px`
      : `${p.theme.space[4]}px`};
  justify-content: center;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  width: ${p =>
    p.width
      ? typeof p.width === 'string'
        ? p.width
        : `${p.width}px`
      : 'auto'};

  > * {
    position: relative;
    z-index: 10;
  }

  &:before {
    animation: 1.6s ${shimmer} linear infinite;
    background: linear-gradient(
      to right,
      transparent 0%,
      ${p => rgba(p.theme.colors.gray[1], 0.25)} 50%,
      transparent 100%
    );
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }
`;

export default LoadingIndicator;
