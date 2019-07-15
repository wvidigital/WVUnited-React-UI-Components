import React from 'react';
import { storiesOf } from '@storybook/react';

import LinkButton from './LinkButton';
import TextLink from './TextLink';
import ActionButton from './ActionButton';

export const storiesButton = storiesOf('Links and buttons', module);
storiesButton
  .add('Text link', () => (
    <TextLink
      text={'We have a text link here.'}
      action={() => console.log('action')}
    />
  ))
  .add('Link button', () => (
    <LinkButton text={'Link button'} link={'http://worldvision.de'} />
  ))
  .add('Action button', () => (
    <ActionButton text={'Action button'} action={() => console.log('action')} />
  ));
