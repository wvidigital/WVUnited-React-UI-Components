import React from 'react';
import { Text as RawText } from 'rebass';

const Text = props => (
  <RawText fontFamily="sans" fontSize={1} lineHeight="body" {...props} />
);

export default Text;
