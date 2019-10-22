/*
 *
 * FormField manages the different types of form fields.
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import globalStyles from '../../styles/globalStyles';
import { textStyles } from '../../styles/theme';

import FieldSelect from '../Fields/FieldSelect';
import FieldText from '../Fields/FieldText';
import FieldTextArea from '../Fields/FieldTextArea';
import FieldRadio from '../Fields/FieldRadio';
import FieldCheckbox from '../Fields/FieldCheckbox';
import { Field } from './Field';

/**
 * Renders label and error messages
 */
export default function FormField(props) {
  // Below is commented out as it currently does not allow rendering in container app.
  // We may introduce a new color for correctly input value depending on the type
  // 3 different states:
  // pending, correct, error

  // const [ fieldState, setFieldState ] = useState('');
  //
  // // Callback function via props from fields components
  // function renderFieldState ( event ) {
  //     // setFieldState();
  // }

  // Local error meets global error
  const errorMessage = props.formGridErrorMessage || props.errorMessage; // eventually add this somewhere in the props.

  // Create a FieldSelectContainer component that will render a <div> element with styles.
  const FormField = styled.div`
    display: inline-block;
    margin-bottom: 0;
    color: ${globalStyles.colors.textColor};
    background-color: ${globalStyles.colors.form};
    width: 100%;
    ${textStyles};
  `;

  const Label = styled.span`
    // Styles for the subsequent fields.
    & ~ select,
    & ~ input,
    & ~ textarea {
      display: block;
      width: 100%;
      margin-top: 8px;
      margin-bottom: 6px;
      padding: 10px 10px 12px;
      ${textStyles};
      border: 1px solid ${globalStyles.colors.borderColor};
      border-radius: 5px;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      background: ${globalStyles.colors.formBackground};
      box-sizing: border-box;
    }

    & ~ select,
    & ~ input {
      height: 44px;
    }

    & ~ select {
      padding: 10px 0 12px;
    }

    ${props.settings.required &&
      `
            &~ select,
            &~ input {
                color: ${globalStyles.colors.textColor};
            }
            &:after {
                content: "*";
                display: inline-block;
                font-size: ${globalStyles.fontSize};
                color: ${globalStyles.colors.errorColor};
                margin-left: 2px;
                margin-right: 2px;
            }`}
    ${errorMessage &&
      `
            &~ select,
            &~ input,
            &~ textarea {
                border-color: ${globalStyles.colors.errorColor};
            }`}
  `;

  const ErrorMessage = styled.div`
    color: ${globalStyles.colors.errorColor};
  `;

  // Select the right component type
  const selectComponent = props => {
    switch (props.type) {
      case 'select':
        return <FieldSelect {...props} />;
      case 'text':
      case 'number':
        return <FieldText {...props} />;
      case 'radio':
        return <FieldRadio {...props} />;
      case 'checkbox':
        return <FieldCheckbox {...props} />;
      case 'textarea':
        return <FieldTextArea {...props} />;
      case 'date':
      case 'password':
      case 'etc':
      default:
        return <FieldSelect {...props} />;
    }
  };

  /**
   * Handles the change of input.
   */
  const handleChange = event => {
    const { handleChange } = props;
    // const value = event.target.value;

    handleChange(event);
  };
  console.log('form field props ', props);

  return (
    <FormField>
      {/* Exclude checkbox fields here */
      props.type !== 'checkbox' && (
        <Label htmlFor={props.name}>{props.label}</Label>
      )}
      {selectComponent(props)}
      <ErrorMessage>{errorMessage && errorMessage}</ErrorMessage>
    </FormField>
  );
}

FormField.defaultProps = {
  name: '',
  type: '',
  label: '',
  value: '',
  settings: {
    errorMessage: '',
    placeholder: '',
    required: false,
    disabled: false,
    defaultValue: '',
  },
  visible: false,
};

FormField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  settings: PropTypes.object,
  handleChange: PropTypes.func,
  handleFormGridError: PropTypes.func,
  formGridErrorMessage: PropTypes.string,
  handleVisibility: PropTypes.func,
};
