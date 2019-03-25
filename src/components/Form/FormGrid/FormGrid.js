/*
*
* FormGrid
*
* This component takes an array of field objects and puts them in a flexbox grid
* It will take care of field arrangement for short fields like putting two fields
* in one row if two short fields exist next to each other
* It provides additional error validations with regard to the input error
* If a user skips a required field it will render an error message
*/

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormField from '../FormField'

function FormGrid(props) {

    // Renders an array with fields that should render an error because it has been skipped by the user
    const [ errorFields, setErrorFields ] = useState([]);

    /**
    * Handles error message on form fields that are not completed when other fields below
    * are onChange
    */
    function handleFormGridError (event) {
        // Checks which required fields to not hold a value
        let fieldsWithoutValue = [];
        let selectedField = false;
        // Gets all fields without value
        props.fields.map((field, index) => {
            (field.field.required) && fieldsWithoutValue.push(index)
            if (event.target.name === field.field.name) 
                
                selectedField = index;
        })

        let fieldsShowError = [];
        // Filters only fields that are before the selected field
        fieldsWithoutValue.filter((item) => {
            (item < selectedField) && fieldsShowError.push(item)
        })
        setErrorFields(fieldsShowError)
    } 

    const FormGridContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        background-color: '#ccc';
    `;

    const FormGridField = styled.div`
        flex-basis: 50%;
        flex-grow: 2;
        margin: 5px;
    `;

    return (
        <FormGridContainer>
                {props.fields.map((field, index) => 
                <FormGridField key={index} order={index}>
                    <FormField 
                        // error function as prop
                        handleFormGridError={handleFormGridError} 
                        formGridErrorMessage={errorFields.includes(index) ? 'Hey you forgot something' : ''}
                        {...field.field} />
                </FormGridField>)
                }
        </FormGridContainer>
    )
}

FormGrid.defaultProps = {
    fields: {
        field: {
            name: '',       
            type: 'input',
            label: '',
            required: false,
            data: [],
        },
        fieldState: {
            name: '',
            value: '',
            errorMessages: '',
            required: false,
            visible: true
        },
    },
}

FormGrid.propTypes = {
    fields: PropTypes.array.isRequired
}

export default FormGrid;