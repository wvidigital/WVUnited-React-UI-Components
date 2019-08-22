import { darken } from 'polished';
import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ActionButton = styled(props => (
  <Card
    aria-pressed={props.isActive}
    role="button"
    px={[3, 3, 0]}
    py={[3, 3, 0]}
    mx={0}
    tabIndex={0}
    {...props}
  />
))`
  align-items: center;
  border: none;
  box-shadow: ${p =>
    p.isActive ? `inset 0 0 0 2px ${p.theme.colors[p.color][0]}` : 'none'};
  color: ${p => p.theme.colors[p.color][0]};
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 140px;
  justify-content: center;
  max-width: 225px;
  outline: none;
  opacity: ${p => (p.activeAction === null || p.isActive ? '1' : '.5')};
  overflow: hidden;
  transition: box-shadow 0.2s, opacity 0.2s;

  ${p => p.theme.media.desktop`
    align-items: stretch;
    box-shadow: ${p =>
      p.isActive
        ? `inset 0 0 0 2px ${p.theme.colors[p.color][0]}, 0 4px ${darken(
            0.1,
            p.theme.colors[p.color][0],
          )}`
        : 'none'};
    flex: 0 1 auto;
    height: ${p => (p.isActive ? '176px' : '180px')};
    max-width: none;
    min-width: 280px;
    opacity: 1;
    position: relative;
    ${p => (p.isActive ? 'transition: none' : '')}
    width: ${p => (p.color === 'blue' ? '100%' : '280px')};

    &:active {
      box-shadow: ${p =>
        p.isActive ? `inset 0 0 0 2px ${p.theme.colors[p.color][0]}` : 'none'};
      ${p => (p.isActive ? 'height: 180px;' : '')};
    }
  `};
`;

export default ActionButton;
