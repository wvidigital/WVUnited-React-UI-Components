import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import globalStyles from '../../../../styles/globalStyles';
import {textStyles} from "../../../../styles/theme";

export default function FieldDollarHandles(props) {
  /**
  * Renders the radio options.
  */
  function renderOptions() {
    const { data } = props;
    const occurrenceKey = (props.settings.occurrence) ?
      props.settings.occurrence : Object.keys(data)[0];

    return data[occurrenceKey].options.map((option) => {
      // Create a RadioOption component that will render a <div> element with styles.
      const RadioOption = styled.div`
        margin: 0 10px;
        
        label {
          position: relative;
          display: block;
          width: auto;
          padding: 12px 20px;
          color: black;
          border-radius: 5px;
          background: ${globalStyles.colors.formBackground};
          border: 1px solid ${globalStyles.colors.borderColor};
          ${textStyles};
          font-weight: bold;
          font-weight: bold;
          
          ${parseInt(props.value) === option.value && `
            border-color: ${globalStyles.colors.wvColor};
            background: ${globalStyles.colors.wvColor};
            color: #fff;
         `}
            
          input {
            position: absolute;
            top: 0;
            height: 100%;
            width: 100%;
            left: 0;
            z-index: 2;
            opacity: 0;
            cursor: pointer;
          }
        }
      `;

      return (
        <RadioOption key={option.value}>
          <label htmlFor={option.value}>
            {option.label}
            <input
              id={option.name}
              name={props.name}
              type={props.type}
              value={option.value}
              onChange={props.handleChange}
            />
          </label>
        </RadioOption>
      );
    });
  }

  // Create a FieldSelectContainer component that will render a <div> element with styles.
  const RadioContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin: 0 -10px;
    text-align: center;
  `;

  return (
    <RadioContainer>
      {renderOptions()}
    </RadioContainer>
  )
}

FieldDollarHandles.defaultProps = {
  name: '',
  type: '',
  label: '',
  error: '',
  data: {
    occurrence: {
      image: '',
      label: '',
      text: '',
      value: ''
    },
  },
  settings: {
    errorMessage: '',
    placeholder: '',
    required: false,
    defaultValue: '',
    occurrence: ''
  },
};

FieldDollarHandles.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  data: PropTypes.array,
  settings: PropTypes.object,
  handleChange: PropTypes.func,
}
