import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// Need to add this to properly load the fonts.
import fonts from '../../../fonts/gill-sans-suomi-hand-script/style.css';

// Render the proper HTML tag depending on the props.
function renderHeading(props) {
  switch (props.size) {
    case 1:
      return <h1>{props.children}</h1>;
      break;
    case 2:
      return <h2>{props.children}</h2>;
      break;
    case 3:
      return <h3>{props.children}</h3>;
      break;
    default:
      return <h4>{props.children}</h4>;
      break;
  }
}

export default function Heading(props) {

  // Create a Heading component that will render a <h1> to <h3>
  // element with styles, depending on the prop for size.
  const Heading = styled.div`
  background: ${props.background};
  color: ${props.color};

  h1, h2, h3, h4, h5, h6 { 
    color: inherit;
    font-family: 'Gill Sans W04 Bold', Arial, sans-serif;
    font-size: 24px;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 12px;
  }
  
  h1 {
    font-size: 48px;
  }  
  h2 {
    font-size: 36px;
  }
`;

  return <Heading>{renderHeading(props)}</Heading>;
}

Heading.defaultProps = {
  size: 1,
  background: '',
  color: '#ff6600',
};

Heading.propTypes = {
  size: PropTypes.number,
  background: PropTypes.string,
  color: PropTypes.string,
}


