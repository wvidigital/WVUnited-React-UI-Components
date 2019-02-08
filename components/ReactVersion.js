import React from 'react';

export default function ReactVersion() {
  const REACT_VERSION = React.version;

  return  (
      <div>React version: {REACT_VERSION}</div>
  );
}
