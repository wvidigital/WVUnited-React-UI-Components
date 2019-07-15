import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { iconContentStyles } from '../../styles/theme';

function iconSize(props) {
  switch (props.size) {
    case 1:
      return 'small';
      break;
    case 2:
      return 'normal';
      break;
    case 3:
      return 'big';
      break;
    default:
      return 'normal';
      break;
  }
}

export default function Icon(props) {
  // Create a Icon component that will render a <p> element with styles.
  const Icon = styled.div`
  &.mwv-icon {
    display: flex;
    flex-direction: ${props.text && props.inline ? 'row' : 'column'};
    align-items: center;
    justify-content: center;
    
    ${iconContentStyles};
    .mwv-icon-content {
      margin-${props.text && props.inline ? 'right' : 'bottom'}: 6px;
  
      &:before {
       color: ${props.color};
     }
   }
  
  // Icon sizes based on props.
  &.small {
    .mwv-icon-label,
    .mwv-icon-content:before {
      font-size: 16px;
    }
  }
  
  &.normal .mwv-icon-content:before {
    font-size: 22px;
  }
  &.big .mwv-icon-content:before {
    font-size: 32px;
  }
  
  &.with-background .mwv-icon-content {
    display: flex;
    width: 36px;
    height: 36px;
    align-items: center;
    justify-content: center;
    
    border-radius: 50%;
    background-color: ${props.background};
    border: ${props.border ? `1px solid ${props.color}` : 'none'};
  }
  
  &.with-background.normal .mwv-icon-content {
    width: 44px;
    height: 44px;
  }
  &.with-background.big .mwv-icon-content {
    width: 60px;
    height: 60px;
    border: ${props.border ? `3px solid ${props.color}` : 'none'};    
  }
}
  
`;

  return (
    <Icon
      className={`mwv-icon ${iconSize(props)} ${
        props.background !== '' ? 'with-background' : ''
      }`}
    >
      <span
        className={`mwv-icon-content mwv-icon-content-${props.type}`}
      ></span>
      {props.text ? <span className="mwv-icon-label">{props.text}</span> : null}
    </Icon>
  );
}

Icon.defaultProps = {
  background: '',
  color: '#ff6600',
  size: 2,
  inline: true,
  border: false,
};

Icon.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  size: PropTypes.number,
  inline: PropTypes.bool,
  border: PropTypes.bool,
};
