import React from 'react';
import PropTypes from 'prop-types';
import {Field, Label} from '../../FormField/Field';

export default function FieldSelect(props) {
  /**
  * Renders the select options.
  */
  function renderOptions() {
    const { data } = props;

    return data.map((option) => {
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

  return (
    <Field>
      <Label {...props}/>
      <select
        id={props.name}
        name={props.name}
        onChange={props.handleChange}
        value={props.value}
        disabled={props.settings.disabled && 'disabled'}
      >
        {renderOptions()}
      </select>
    </Field>
  );
}

FieldSelect.defaultProps = {
  name: '',
  type: '',
  label: '',
  error: '',
  data: [
    {
      label: '',
      value: ''
    }
  ],
  settings: {
    errorMessage: '',
    placeholder: '',
    required: false,
    disabled: false,
    defaultValue: ''
  },
};

FieldSelect.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  data: PropTypes.array,
  settings: PropTypes.object,
  handleChange: PropTypes.func,
}
