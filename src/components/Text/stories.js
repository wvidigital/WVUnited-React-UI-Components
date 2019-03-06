import {storiesOf} from '@storybook/react';
import {number, text} from '@storybook/addon-knobs';
import React from 'react';
import Text from './Text';
import Heading from '../Heading';

export const storiesText = storiesOf('Texts', module);
storiesText
  .add('Simple paragraph', () => (
    <Text>Hello, this is my simple paragraph.</Text>
  ))
  .add('Simple paragraph with optional colors', () => (
    <Text
      background={text('Background color', '#ff6600')}
      color={text('Color', '#fff')}>
      Hello, this is my simple paragraph.
    </Text>
  ))
  .add('Heading', () => (
    <Heading
      size={number('Size', 1)}
      background={text('Background color', '')}
      color={text('Color', '#ff6600')}>
      Hello, this is my heading.
    </Heading>
  ));
