import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import globalStyles from '../../../../styles/globalStyles';
import {textStyles} from "../../../../styles/theme";

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
        padding: 12px 15px;
        
        ${props.settings.border !== '' && `
          border-bottom: ${props.settings.border};
        `}       
          // Payment methods.
          ${option.description !== undefined && option.icon !== undefined && props.value === option.value &&`
          background: #f8f8f8;
        `}

        label {
          display: block;
          position: relative;
          padding-left: 50px;
          text-align: left;
          cursor: pointer;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;

          ${option.description !== undefined && `
            font-size: 20px;
          `}
              
          p {
            ${textStyles};
            line-height: 1;
          }
          
          img {
            display: block;
            width: 66px;
            
            // Desktop styles
            position: absolute;
            top: 0;
            right: 0;
          }
  
          // Align labels only when no description & image are provided.
          ${option.description === undefined && option.image === undefined && `
            line-height: 42px;
          `}
  
          input {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
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
            {option.description && <p>{option.description}</p>}
            {option.icon && <img src={option.icon} />}
            <input
              id={option.name}
              name={props.name}
              type={props.type}
              value={option.value}
              onChange={props.handleChange}
            />
            <Span/>
          </label>
        </RadioOption>
      );
    });
  }

  // Create a FieldSelectContainer component that will render a <div> element with styles.
  const RadioContainer = styled.div`
    display: flex;
    flex-direction: ${props.settings.direction};
    margin: 0 -15px;
    ${textStyles};
    text-align: center;
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
  error: '',
  data: [
    {
      label: '',
      description: '',
      value: '',
      image: ''
    }
  ],
  settings: {
    errorMessage: '',
    placeholder: '',
    required: false,
    defaultValue: '',
    direction: 'row',
    border: ''
  },
};

FieldRadio.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  data: PropTypes.array,
  settings: PropTypes.object,
  handleChange: PropTypes.func,
}
