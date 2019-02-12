import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Text(props) {

  // Create a Text component that will render a <p> element with styles.
  const Text = styled.p`
  /* Adapt the colors based on primary prop */  
  background: ${props.background};
  color: ${props.color};
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  font-weight: 300;
`;

  return  (
    <Text>{props.children}</Text>
  );
}

Text.defaultProps = {
  background: '',
  color: '#333',
};

Text.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
}


