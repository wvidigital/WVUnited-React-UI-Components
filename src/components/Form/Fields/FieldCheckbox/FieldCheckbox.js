import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import globalStyles from '../../../../styles/globalStyles'

export default function FieldCheckbox(props) {
  // Create a CheckboxContainer component that will render a <label> element with styles.
  const CheckboxContainer = styled.label`
    display: block;
    position: relative;
    padding-left: 50px;
    line-height: 42px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
  `;

  // Create a Span component that will render a <span> element with styles.
  const Span = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #d8d8d8;
  
    &:after {
      content: "";
      position: absolute;
      left: 14px;
      top: 12px;
      width: 8px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  
    ${props.value == 'on' && `
      border-color: ${globalStyles.colors.wvColor};
      background: ${globalStyles.colors.wvColor};
    `}
  `;

  return (
    <CheckboxContainer htmlFor={props.name}>
      {props.label}
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        disabled={props.settings !== undefined && props.settings.disabled}
      />
      <Span/>
    </CheckboxContainer>
  );
}

FieldCheckbox.defaultProps = {
  name: '',
  type: '',
  label: '',
  value: '',
  settings: {
    errorMessage: '',
    placeholder: '',
    required: false,
    disabled: false,
    defaultValue: ''
  },
};

FieldCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  settings: PropTypes.object,
  handleChange: PropTypes.func,
}