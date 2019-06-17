import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import globalStyles from '../../../../styles/globalStyles';

export default function FieldRadio(props) {
  /**
  * Renders the radio options.
  */
  function renderOptions() {
    const { data } = props;

    return data.map((option) => {
      // Create a RadioOption component that will render a <div> element with styles.
      const RadioOption = styled.div`
        margin: 0 15px;
            
        label {
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
            height: 100%;
            width: 100%;
            left: 0;
            z-index: 2;
            opacity: 0;
            cursor: pointer;
          }
        }
    `;

      // Create a Span component that will render a <span> element with styles.
      const Span = styled.span`
        position: absolute;
        top: 0;
        left: 0;
        height: 40px;
        width: 40px;
        z-index: 1;
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
      
        ${props.value === option.value && `
          border-color: ${globalStyles.colors.wvColor};
          background: ${globalStyles.colors.wvColor};
        `}
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
              disabled={props.settings !== undefined && props.settings.disabled}
            />
            <Span/>
          </label>
        </RadioOption>
      );
    });
  }

  // Create a FieldSelectContainer component that will render a <div> element with styles.
  const RadioContainer = styled.div`
    text-align: center;
    display: flex;
  `;

  return (
    <RadioContainer>
      {renderOptions()}
    </RadioContainer>
  )

}

FieldRadio.defaultProps = {
  name: '',
  type: '',
  label: '',
  value: '',
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

FieldRadio.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  data: PropTypes.array,
  settings: PropTypes.object,
  handleChange: PropTypes.func,
}
