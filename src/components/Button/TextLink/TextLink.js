import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {textStyles} from '../../../styles/theme';

export default function TextLink(props) {

  // Create a Text component that will render a <a> element with styles.
  const TextLink = styled.a`
  background: ${props.background};
  color: ${props.color};
  ${textStyles};
  text-decoration: none;
  
  &:hover,
  &:focus,
  &:active,
  &:active:focus {
    text-decoration: underline;
  }
`;

  return  (
    <TextLink href={props.link} title={props.text}>{props.text}</TextLink>
  );
}

TextLink.defaultProps = {
  background: '#fff',
  color: '#ff6600',
};

TextLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
}
