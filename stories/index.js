import React from 'react';
import { storiesOf } from '@storybook/react';

// Addons.

import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';

// Used for grid and mwv post icons only.
import { withBackgrounds } from '@storybook/addon-backgrounds';

// Components.
import Text from '../src/components/Text/index';
import Heading from '../src/components/Heading/index';
import ActionButton from '../src/components/ActionButton';
import LinkButton from '../src/components/LinkButton';
import TextLink from '../src/components/TextLink';
import Icon from '../src/components/Icon';
import Image from '../src/components/Image';
import ItemBox from "../src/components/ItemBox";
import Grid from "../src/components/Grid";

import FieldSelect from '../src/components/FieldSelect/index';
import {storiesFormFields} from '../src/components/FieldSelect/stories';

import {
  copyButton,
  titleCopyButton,
  imageCopyButton,
  childInfoCopy,
  itemsFeed,
  itemsSlickFeed,
  itemsChildfinder,
  itemsChildfinderResults,
} from "./data";


const storiesText = storiesOf('Texts', module);
const storiesButton = storiesOf('Links and buttons', module);
const storiesIcon = storiesOf('Icons and images', module);
// const storiesFormFields = storiesOf('Form fields', module);
const storiesGrid = storiesOf('Grid', module);


// Backgrounds decorator.
const backgrounds = withBackgrounds([
    { name: 'mwv grey' , value: '#efefef', default: true },
    { name: 'mwv orange', value: '#ff6600' },
    { name: 'mwv blue', value: '#00acca' },
    { name: 'child finder' , value: '#CAC4BB'},
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ]);
const backgroundChildfinderGrid = withBackgrounds([
  { name: 'child finder' , value: '#CAC4BB', default: true },
  { name: 'mwv grey' , value: '#efefef' },
  { name: 'mwv orange', value: '#ff6600' },
  { name: 'mwv blue', value: '#00acca' },
  { name: 'twitter', value: '#00aced' },
  { name: 'facebook', value: '#3b5998' },
]);
storiesIcon.addDecorator(backgrounds);
storiesGrid.addDecorator(backgroundChildfinderGrid);


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

storiesButton
  .add('Text link', () => (
    <TextLink
      text={'We have a text link here.'}
      link={'#'}
    />
  ))
  .add('Link button', () => (
    <LinkButton
      text={'Link button'}
      link={'http://worldvision.de'}
    />
  ))
  .add('Action button', () => (
    <ActionButton
      text={'Action button'}
      action={action('REQUEST_DATA')}
    />
  ));

storiesIcon
  .add('Simple icon', () => (
    <Icon
      type={text('Type', 'gender')}
    />
  ))
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

storiesFormFields;

storiesOf('Complex components (Items)', module)
  .add('Item box with copy and button', () => (
    <ItemBox data={copyButton} />
  ))
  .add('Item box with title, copy and button', () => (
    <ItemBox data={titleCopyButton} />
  ))
  .add('Item box with image, copy and button', () => (
    <ItemBox data={imageCopyButton} />
  ))
  .add('Item box with child information', () => (
    <ItemBox data={childInfoCopy} />
  ));


storiesGrid
  .add('Grid row', () => (
    <Grid items={itemsFeed} direction={text('Direction', 'row')} />
  ))
  .add('Grid row with slick slider', () => (
    <Grid items={itemsSlickFeed} direction={text('Direction', 'row')} isSlider={true} />
  ))
  .add('Grid row with slick slider (4 items)', () => (
    <Grid items={itemsFeed} direction={text('Direction', 'row')} isSlider={true} />
  ))
  .add('Child finder', () => (
    <Grid items={itemsChildfinder} direction={text('Direction', 'row')} isSlider={true} />
  ))
  .add('Child finder with results', () => (
    <Grid items={itemsChildfinderResults} direction={text('Direction', 'row')} isSlider={true} />
  ));

storiesOf('Information', module)
  .add('Current versions', () => (
    <div>
      <p>{`React: ${React.version}`}</p>
    </div>
  ));

