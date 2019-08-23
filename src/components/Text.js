import React from 'react';
import { Text as RawText } from 'rebass/styled-components';

const Text = props => (
  <RawText
    fontFamily="sans"
    sx={{ fontSize: 1, lineHeight: 'body', ...props.sx }}
    {...props}
  />
);

export default Text;
