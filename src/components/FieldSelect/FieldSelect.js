import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import {textStyles} from "../../../stories/theme";


export default function FieldSelect(props) {

  /**
   * Handles the change of select options.
   */
  const handleChange = (e) => {
    const { name, handleChange } = props;
    const value = e.target.value;

    handleChange(name, value);
  }

  /**
   * Renders the select options.
   */
  function renderOptions() {
    const { field } = props;

    return field.data.map((option) => {
      const optionAttributes = {
        key: option.value,
        value: option.value,
      };

      return (
        <option {...optionAttributes}>
          {option.label}
        </option>
      );
    });
  }


  function renderErrors() {
    const errorMessages = props.fieldState.errorMessages;
    let hasErrors = '';
    const errors = errorMessages.map((error, i) => {
      let ErrorMessageComponent = error;

      return <span key={i} className="error">{ErrorMessageComponent}</span>;
    });

    if (errors.length) {
      hasErrors = 'form__item--has-errors';
      const messages = (<span className="form__item__errors">{errors}</span>);

      return {
        hasErrors,
        messages,
      };
    }

    return {
      hasErrors,
      messages: null,
    };
  }


  // Create a FieldSelectContainer component that will render a <div> element with styles.
  const FieldSelectContainer = styled.div`
    display: inline-block;
    margin-bottom: 0;
    ${textStyles};
    font-weight: 400;
    color: #363636;
    
    // Move below error styles to a reusable mixin.
    .form__item__errors {
      margin-bottom: 2px;
      color: #ff6b00;
      font-size: 14px;
    }
    
    &.form__item--has-errors input,
    &.form__item--has-errors select,
    &.form__item--has-errors textarea {
      border-color: #f37020 !important;
    }
    
    &.form__item--required-true .label__text:after {
      content: "*";
      display: inline-block;
      font-size: 16px;
      margin-left: 2px;
      margin-right: 2px;
      color: #ff6b00;
    }
  `;

    // Create a FieldSelect component that will render a <p> element with styles.
    const FieldSelect = styled.select`
      display: block;
      height: 44px;
      margin-top: 8px;
      padding: 10px 0 12px;
      background: #f1f1f1;
      border-radius: 5px;
      border: 1px solid #d6d6d6;
      box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
      ${textStyles};
    `;

    const errors = renderErrors();

    return (
      <FieldSelectContainer className={`form__item form__item--select form__item-${props.name} form__item--required-${props.fieldState.required} ${errors.hasErrors}`}>
        <label htmlFor={name}><span className="label__text">{props.field.label}</span> {errors.messages}</label>
        <FieldSelect
          name={props.name}
          onChange={() => handleChange(event)}
          value={props.fieldState.value}
        >
          {renderOptions()}
        </FieldSelect>
      </FieldSelectContainer>
    );
}

FieldSelect.defaultProps = {
  field: {
    data: [
      {
        label: '',
        value: ''
      }
    ],
    label: '',
    name: '',
    required: false,
  },
  fieldState: {
    errorMessages: [],
    name: '',
    required: true,
    value: '',
    visible: false
  },
};

FieldSelect.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.object,
  fieldState: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleVisibility: PropTypes.func.isRequired,
}
