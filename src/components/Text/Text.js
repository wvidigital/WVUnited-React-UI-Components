import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {textStyles} from '../../styles/theme';

export default function Text(props) {
  // Create a Text component that will render a <p> element with styles.
  const Text = styled.p`
  margin: 0 0 8px;
  background: ${props.background};
  color: ${props.color};
  ${textStyles};
  font-size: ${props.size};
  font-weight: 300;

   ${props.border && `
      display: inline-block;
      padding: 6px 30px 8px;
      margin: 20px 0;
      border-radius: 18px;
      font-style: italic;
   `}
`;

  return  (
    <Text>
      <span dangerouslySetInnerHTML={{ __html: props.children }}></span>
    </Text>
  );
}

Text.defaultProps = {
  background: 'white',
  color: '#333',
  size: '',
  border: false,
};

Text.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  border: PropTypes.boolean,
}


