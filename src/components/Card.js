import React from 'react';
import { Card as RawCard } from 'rebass';

const Card = props => (
  <RawCard bg="white" borderRadius={1} boxShadow={0} {...props} />
);

export default Card;
