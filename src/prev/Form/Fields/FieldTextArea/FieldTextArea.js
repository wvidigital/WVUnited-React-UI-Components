import React from 'react';
import PropTypes from 'prop-types';
import { Field, Label } from '../../FormField/Field';

export default function FieldTextArea(props) {
  // Map default value on first mount.
  const value =
    props.settings.defaultValue &&
    (props.settings.defaultValue.length > 0 && props.value === undefined)
      ? props.settings.defaultValue
      : props.value;

  return (
    <Field>
      <Label {...props} />
      <textarea
        id={props.name}
        name={props.name}
        type={props.type}
        value={value}
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
  error: '',
  settings: {
    errorMessage: '',
    placeholder: '',
    required: false,
    disabled: false,
    defaultValue: '',
  },
};

FieldTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  settings: PropTypes.object,
  handleChange: PropTypes.func,
};
