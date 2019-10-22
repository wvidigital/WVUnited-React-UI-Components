import React from 'react';
import styled from 'styled-components';
import globalStyles from '../../styles/globalStyles';
import { textStyles } from '../../styles/theme';

export const Field = styled.div`
  display: inline-block;
  margin-bottom: 0;
  color: ${globalStyles.colors.textColor};
  background-color: ${globalStyles.colors.form};
  width: 100%;
  ${textStyles};
`;

export function Label(props) {
  const Label = styled.label`
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

    & ~ textarea {
      width: 100%;
      resize: vertical;
    }

    // File upload
    & ~ input[type='file'] {
      display: none;

      // Choose file button
      ~ label {
        position: absolute;
        right: 0;
        top: 27px; // If error messages are next to the label (instead of below the input), then this should be bottom positioned.
        width: auto;
        padding: 11px 10px 12px;
        border: 1px solid ${globalStyles.colors.wvColor};
        border-radius: 0 5px 5px 0;
        background-color: ${globalStyles.colors.wvColor};
        color: #fff;
        cursor: pointer;
        cursor: pointer;
      }
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

    &~ input:disabled {
      color: #888;
    }

    ${props.settings.disabled &&
      `
      &~ select,
      &~ input,
      &~ textarea {
        color: #888;
        cursor: not-allowed;
      }`}

    ${props.error &&
      `
      &~ select,
      &~ input,
      &~ textarea {
          border-color: ${globalStyles.colors.errorColor};
      }`}
  `;

  return <Label htmlFor={props.name}>{props.label}</Label>;
}

export const Error = styled.div`
  margin-bottom: 8px;
  color: ${globalStyles.colors.errorColor};
`;
