import React from 'react';
import { Card as RawCard } from 'rebass/styled-components';

const Card = props => (
  <RawCard bg="white" sx={{ borderRadius: 1 }} {...props} />
);

export default Card;
