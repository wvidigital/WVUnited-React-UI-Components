/*
 *
 * FormSteps create the steps for the tansaction forms. It also contains the progress bar....
 *
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import globalStyles from '../../../styles/globalStyles';
import { textStyles } from '../../../styles/theme';
import ActionButton from '../../Button/ActionButton';
import TextLink from '../../Button/TextLink';
import Heading from '../../Heading/Heading';
import fonts from '../../../../fonts/gill-sans-suomi-hand-script/style.css';

function FormNavigation(props) {
  const FormNavigation = styled.div`
    & > div {
      position: relative;
      display: flex;
      justify-content: space-between;

      ${props.position == 'top' &&
        `
                top: -20px;
            `}

      button {
        margin-top: 0;
      }
    }
  `;

  const renderNavigation = props => {
    switch (props.position) {
      case 'top':
        return (
          <div>
            {props.steps.map((step, stepNumber) => {
              const Step = styled.a`
                & > span {
                  display: block;
                  width: 40px;
                  height: 40px;
                  margin: 0 auto;
                  line-height: 40px;
                  text-align: center;
                  border-radius: 50%;
                  background: ${globalStyles.colors.formBackground};
                  color: ${globalStyles.colors.wvColor};
                  ${textStyles}
                  font-family: 'Gill Sans W04 Bold', Arial, sans-serif;

                  box-shadow: ${globalStyles.boxShadow};

                  ${props.activeStep == stepNumber &&
                    `
                                    background: ${globalStyles.colors.textColor};
                                    color: #fff;
                                `}
                }

                h4 {
                  margin-top: 10px;
                }
              `;

              return (
                <Step key={stepNumber}>
                  <span>{stepNumber + 1}</span>
                  <Heading size={5}>{step.title}</Heading>
                </Step>
              );
            })}
          </div>
        );
      case 'bottom':
        const previousStep = props.steps[props.activeStep - 1];
        const nextStep = props.steps[props.activeStep + 1];
        return (
          <div>
            {previousStep && (
              <TextLink
                text={`${props.activeStep}. ${previousStep.title}`}
                action={props.actionPrev}
              />
            )}
            {nextStep && (
              <ActionButton text={nextStep.title} action={props.actionNext} />
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return <FormNavigation>{renderNavigation(props)}</FormNavigation>;
}

FormNavigation.defaultProps = {
  position: 'top',
  activeStep: 1,
  steps: 1,
};

FormNavigation.propTypes = {
  actionPrev: PropTypes.func.isRequired,
  actionNext: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired,
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};

export default FormNavigation;
