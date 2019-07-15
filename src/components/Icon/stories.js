import React from 'react';
import Icon from './Icon';
import Image from '../Image';
import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

export const storiesIcon = storiesOf('Icons and images', module);
storiesIcon
  .add('Simple icon', () => <Icon type={text('Type', 'gender')} />)
  .add('MWV simple icon with text', () => (
    <Icon
      text={text('Label', 'Nice icon label')}
      type={text('Type', 'email')}
      size={number('Size', 1)}
      background={text('Background color', '')}
      color={text('Color', '#ff6600')}
    />
  ))
  .add('Child finder icon', () => (
    <Icon
      text={text('Label', 'Nice icon label')}
      type={text('Type', 'birthday')}
      size={number('Size', 2)}
      background={text('Background color', '#006662')}
      color={text('Color', '#fff')}
      inline={boolean('Inline label', false)}
      border={boolean('Border', false)}
    />
  ))
  .add('MWV Timeline feed icon', () => (
    <Icon
      type={text('Type', 'post-image')}
      size={number('Size', 2)}
      background={text('Background color', '#ff6600')}
      color={text('Color', '#fff')}
      inline={boolean('Inline label', false)}
      border={boolean('Border', true)}
    />
  ))
  .add('Slider arrow icon', () => (
    <Icon
      type={text('Type', 'arrow-left')}
      size={number('Size', 3)}
      background={text('Background color', 'transparent')}
      color={text('Color', '#fff')}
      border={boolean('Border', true)}
    />
  ))
  .add('Image', () => (
    <Image
      source={text('Source url', 'http://placekitten.com/400/400')}
      link={text('Link', 'http://placekitten.com/400/400')}
      alt={text('Alt tag', 'Pretty awesome kitten')}
      title={text('Title', 'Pretty awesome kitten')}
    />
  ));
