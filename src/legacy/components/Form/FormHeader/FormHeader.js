/*
 *
 * FormSteps create the steps for the tansaction forms. It also contains the progress bar....
 *
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextLink from '../../Button/TextLink';
import Heading from '../../Heading/Heading';
import FormNavigation from '../FormNavigation';

function FormHeader(props) {
  const FormHeader = styled.div`
    & > div:first-child {
      padding: 60px 0;
      background-color: ${props.background};
    }
  `;

  return (
    <FormHeader>
      <Heading size={2} color={'white'}>
        {props.title}
      </Heading>
      <FormNavigation position={'top'} {...props} />
    </FormHeader>
  );
}

TextLink.defaultProps = {
  position: 'top',
  activeStep: 1,
  steps: 1,
  background: 'transparent',
};

FormHeader.propTypes = {
  position: PropTypes.string.isRequired,
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
  background: PropTypes.string,
};

export default FormHeader;
