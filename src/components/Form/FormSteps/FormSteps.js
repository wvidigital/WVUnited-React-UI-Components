/*
*
* FormSteps create the steps for the tansaction forms. It also contains the progress bar....
*
* 
*/

import React from 'react';
import styled from 'styled-components';
import FormGrid from "../FormGrid";
import {formGridProps} from "../FormGrid/stories/data";

function FormSteps(props) {

    const FormSteps = styled.div`
    
    `;

    return (

      <FormGrid fields={ formGridProps() } />
    );
    // Shouldn't we return form grid here for a single step?
    // Should we add the navigation (and progress bar), submit step button components in here
}

export default FormSteps;