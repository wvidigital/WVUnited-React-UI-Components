import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Image(props) {

  // Create a Image component that will render a <img> element with styles.
  const Image = styled.img`
    display: block;
`;

  return  (
    <Image
      src={props.source}
      alt={props.alt}
      title={props.title}
    />
  );
}

Image.propTypes = {
  source: PropTypes.string.isRequired,
  link: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
}


