import React from 'react';
import PropTypes from 'prop-types';
import 'date-input-polyfill';
import 'time-input-polyfill/auto';
import { Field, Label, Error } from '../../FormField/Field';

export default function FieldText(props) {
  // var inputs = [].slice.call( document.querySelectorAll('input[type="time"]') );
  // inputs.forEach(function($input){
  //   console.log('text', props.type, inputs)
  //   new TimePolyfill($input);
  // })
  return (
    <Field>
      <Label {...props} />
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.settings.placeholder}
        disabled={props.settings.disabled && 'disabled'}
      />
      {props.error && <Error>{props.error}</Error>}
    </Field>
  );
}

FieldText.defaultProps = {
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

FieldText.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  settings: PropTypes.object,
  handleChange: PropTypes.func,
};
