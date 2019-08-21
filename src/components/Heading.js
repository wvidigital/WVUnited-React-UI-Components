import React from 'react';
import { Heading as RawHeading } from 'rebass';

const Heading = props => (
  <RawHeading color="text" fontFamily="sans" {...props} />
);

export const H1 = props => <Heading as="h3" fontSize={5} {...props} />;
export const H2 = props => <Heading as="h3" fontSize={4} {...props} />;
export const H3 = props => <Heading as="h3" fontSize={3} {...props} />;
export const H4 = props => <Heading as="h4" fontSize={2} {...props} />;
export const H5 = props => <Heading as="h5" fontSize={2} {...props} />;
export const H6 = props => <Heading as="h6" fontSize={2} {...props} />;

export default Heading;
