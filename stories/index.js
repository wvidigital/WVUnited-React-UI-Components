import React from 'react';
import { storiesOf } from '@storybook/react';

// Addons.
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

// Components.
import { Button } from '@storybook/react/demo';
import Text from '../components/Text';
import Heading from '../components/Heading';
import ReactVersion from '../components/ReactVersion';


const storiesText = storiesOf('Text components', module);
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
storiesText.addDecorator(withKnobs);

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
storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));
storiesOf('Information', module)
  .add('Current version of React ', () => (
    <p>{React.version}</p>
  ));