import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';

import Grid from './Grid';

import {
  itemsChildfinder, itemsChildfinderResults,
  itemsFeed,
  itemsSlickFeed
} from '../../../stories/data';

export const storiesGrid = storiesOf('Grid', module);

storiesGrid
  .add('Grid row', () => (
    <Grid
      items={itemsFeed}
      direction={text('Direction', 'row')}
      width={text('Width', '1140px')}
    />
  ))
  .add('Grid row with slick slider', () => (
    <Grid items={itemsSlickFeed} direction={text('Direction', 'row')} isSlider />
  ))
  .add('Grid row with slick slider (4 items)', () => (
    <Grid
      items={itemsFeed}
      direction={text('Direction', 'row')}
      isSlider
      background={text('Background color', '#efefef')}
    />
  ))
  .add('Child finder', () => (
    <Grid items={itemsChildfinder} direction={text('Direction', 'row')} isSlider />
  ))
  .add('Child finder with results', () => (
    <Grid
      items={itemsChildfinderResults}
      isSlider
      direction={text('Direction', 'row')}
      background={text('Background color', '#cac4bb')}
    />
  ));
