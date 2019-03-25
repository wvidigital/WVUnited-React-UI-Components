/*
*
* FormField manages the different types of form fields.
* 
*/

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import globalStyles from '../../../styles/globalStyles';
import { textStyles } from '../../../styles/theme';

import FieldSelect from '../FieldSelect';

/**
 * Renders label and error messages
 */
function FormField(props) {

    // We may introduce a new color for correctly input value depending on the type
    // 3 different states:
    // pending, correct, error

    const [ fieldState, setFieldState ] = useState('');

    // Callback function via props from fields components
    function renderFieldState ( event ) {

        // setFieldState();

    }

    // Local error meets global error
    const errorMessage = props.formGridErrorMessage || props.fieldState.errorMessage ;

    // Create a FieldSelectContainer component that will render a <div> element with styles.
    const FormField = styled.div`
    display: inline-block;
    margin-bottom: 0;
    color: ${globalStyles.colors.textColor};
    width: 100%;
    ${textStyles};
    `;

    const Label = styled.span`
        &~ select, input {
            background: ${globalStyles.colors.formBackground};
        }
        ${props.required && `
            &~ select {
                color: ${globalStyles.colors.textColor};
            }
            &:after {
                content: "*";
                display: inline-block;
                font-size: ${globalStyles.fontSize};
                margin-left: 2px;
                margin-right: 2px;
            }`
        }
        ${errorMessage && `
            &~ select {
                color: ${globalStyles.colors.errorTextColor};
            }`
        }`;

    const ErrorMessage = styled.div`
        color: ${globalStyles.colors.errorTextColor};
    `;

    // Select the right component type
    const selectComponent = (props) => {
        switch (props.type) {
            case ('select'):
                return <FieldSelect {...props} />
            case ('text'):
            case ('password'):
            case ('radio'):
            case ('date'):
            case ('etc'):
            default:
                return <FieldSelect {...props} />
        }
    }

    return (
        <FormField>
            <Label htmlFor={props.name}>{props.label}</Label>
            {selectComponent(props)}
            <ErrorMessage>{errorMessage && errorMessage }</ErrorMessage>
        </FormField>
    )
}

FormField.defaultProps = {
    name: '',       
    type: 'input',
    label: '',
    required: false,
    data: [],
    fieldState: {
        name: '',
        value: '',
        errorMessages: '',
        required: false,
        visible: true
    },
}

FormField.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    data: PropTypes.array,
    fieldState: PropTypes.object,
    handleChange: PropTypes.func.isRequired,
    handleFormGridError: PropTypes.func,
    formGridErrorMessage: PropTypes.string,
    handleVisibility: PropTypes.func.isRequired,
}

export default FormField;