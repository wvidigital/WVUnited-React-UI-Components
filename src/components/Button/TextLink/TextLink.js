import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function TextLink(props) {

  // Create a Text component that will render a <p> element with styles.
  const TextLink = styled.a`
  /* Adapt the colors based on primary prop */
  background: ${props.background};
  color: ${props.color};
  font-family: 'Lato', Arial, sans-serif;
  font-size: 20px;
  font-weight: 300;
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
