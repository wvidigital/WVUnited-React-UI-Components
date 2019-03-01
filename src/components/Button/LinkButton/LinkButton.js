import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function LinkButton(props) {

  // Create a Text component that will render a <p> element with styles.
  const LinkButton = styled.a`
  display: inline-block;
  padding: 10px 30px 12px;
  margin-top: 20px;

  background: ${props.background};
  color: ${props.color};

  transition: all .3s ease;
  border: 1px solid ${props.background};
  border-radius: 5px;

  font-family: 'Lato', Arial, sans-serif;
  font-size: 16px;
  line-height: 1;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active,
  &:active:focus {
      border-color: ${props.background};
      background: ${props.color};
      color: ${props.background};
      text-decoration: none;
      outline: 0;
    }
`;

  return  (
    <LinkButton href={props.link} title={props.text}>{props.text}</LinkButton>
  );
}

LinkButton.defaultProps = {
  background: '#ff6600',
  color: '#fff',
};

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
}
