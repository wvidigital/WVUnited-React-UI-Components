import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import Text from '../components/Text';
import ReactVersion from '../components/ReactVersion';

storiesOf('Text', module)
  .add('Simple paragraph', () => (
    <Text>Hello, this is my simple paragraph.</Text>
  ))
  .add('Simple paragraph with dark background', () => (
    <Text darkBackground={1}>Hello, this is my simple paragraph.</Text>
  ));
storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))
  .add('Current version of React ', () => (
      <ReactVersion/>
  ));
