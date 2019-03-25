import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import globalStyles from '../../../styles/globalStyles'
import { textStyles } from '../../../styles/theme';

export default function FieldSelect(props) {

  /**
  // Handles the change of select options.
  */
  const handleChange = (e) => {
    const { name, handleChange } = props;
    const value = e.target.value;

    handleChange(name, value);
  }

  /**
  // Handles the change of select options.
   */
  const handleFormGridError =(event) => {
    const { handleFormGridError } = props;

    handleFormGridError(event);
  }

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

  // Create a FieldSelect component that will render a <p> element with styles.
  const Select = styled.select`
    display: block;
    height: 44px;
    margin-top: 8px;
    margin-bottom: 6px;
    padding: 10px 0 12px;
    width: 100%;
    ${textStyles};
    border-radius: 5px;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
  `;
    
    return (
      <Select
        name={props.name}
        onChange={() => {
          handleChange(event)
          handleFormGridError(event)
          }
        }
        value={props.fieldState.value}
        disabled={props.fieldState.disabled && 'disabled'}
        id={props.name}
      >
        {renderOptions()}
      </Select>
    );
}

FieldSelect.defaultProps = {
  name: '',
  label: '',
  required: false,
  data: [
    {
      label: '',
      value: ''
    }
  ],
  fieldState: {
    errorMessages: '',
    name: '',
    required: true,
    value: '',
    visible: false
  },
};

FieldSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  data: PropTypes.array,
  fieldState: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleFormGridError: PropTypes.func,
  formGridErrorMessage: PropTypes.string,
  handleVisibility: PropTypes.func.isRequired,
}
