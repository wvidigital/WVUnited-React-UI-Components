import React from 'react';
import PropTypes from 'prop-types';
import {Field, Label} from "../../FormField/Field";

export default function FieldTextArea(props) {
  return (
    <Field>
      <Label {...props}/>
      <textarea
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.settings.placeholder}
        disabled={props.settings.disabled && 'disabled'}
      />
    </Field>
  );
}

FieldTextArea.defaultProps = {
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

FieldTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  settings: PropTypes.object,
  handleChange: PropTypes.func,
}