import React from 'react';
import { Heading as RawHeading } from 'rebass/styled-components';

const Heading = props => (
  <RawHeading
    fontFamily="sans"
    sx={{ color: 'text', ...props.sx }}
    {...props}
  />
);

export const H1 = props => (
  <Heading as="h1" sx={{ fontSize: 5, ...props.sx }} {...props} />
);
export const H2 = props => (
  <Heading as="h2" sx={{ fontSize: 4, ...props.sx }} {...props} />
);
export const H3 = props => (
  <Heading as="h3" sx={{ fontSize: 3, ...props.sx }} {...props} />
);
export const H4 = props => (
  <Heading as="h4" sx={{ fontSize: 2, ...props.sx }} {...props} />
);
export const H5 = props => (
  <Heading as="h5" sx={{ fontSize: 2, ...props.sx }} {...props} />
);
export const H6 = props => (
  <Heading as="h6" sx={{ fontSize: 2, ...props.sx }} {...props} />
);

export default Heading;
