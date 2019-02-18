import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Text(props) {

  // Create a Text component that will render a <p> element with styles.
  const Text = styled.p`
  margin: 0 0 8px;
  background: ${props.background};
  color: ${props.color};
  font-family: 'Lato', Arial, sans-serif;
  font-size: 16px;
  font-weight: 300;
`;

  return  (
    <Text>{props.children}</Text>
  );
}

Text.defaultProps = {
  background: 'white',
  color: '#333',
};

Text.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
}


