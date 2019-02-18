import React from 'react';
import { storiesOf } from '@storybook/react';

// Addons.

import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

// Used for grid and mwv post icons only.
import { withBackgrounds } from '@storybook/addon-backgrounds';

// Components.
import Text from '../src/components/Text';
import Heading from '../src/components/Heading';
import ActionButton from '../src/components/ActionButton';
import LinkButton from '../src/components/LinkButton';
import TextLink from '../src/components/TextLink';
import Icon from '../src/components/Icon';
import Image from '../src/components/Image';
import ItemBox from "../src/components/ItemBox";
import Grid from "../src/components/Grid";


const storiesText = storiesOf('Texts', module);
const storiesButton = storiesOf('Links and buttons', module);
const storiesIcon = storiesOf('Icons and images', module);
const storiesGrid = storiesOf('Grid', module);
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
storiesText.addDecorator(withKnobs);
storiesButton.addDecorator(withKnobs);
storiesIcon.addDecorator(withKnobs);
storiesGrid.addDecorator(withKnobs);


// Backgrounds decorator.
const backgrounds = withBackgrounds([
    { name: 'mwv grey' , value: '#efefef', default: true },
    { name: 'mwv orange', value: '#ff6600' },
    { name: 'mwv blue', value: '#00acca' },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ]);
storiesGrid.addDecorator(backgrounds);
storiesIcon.addDecorator(backgrounds);


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
      action={action('clicked')}
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
  .add('Image', () => (
    <Image
      source={text('Source url', 'http://placekitten.com/400/400')}
      link={text('Link', 'http://placekitten.com/400/400')}
      alt={text('Alt tag', 'Pretty awesome kitten')}
      title={text('Title', 'Pretty awesome kitten')}
    />
  ));

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
  ));

storiesOf('Information', module)
  .add('Current versions', () => (
    <div>
      <p>{`React: ${React.version}`}</p>
    </div>
  ));


// Define some dummy JSON which will be later requested from the API.

// Child data for component-
// image, name, additional infos, button.
// This will all come dynamically from the API.

const copyButton = {
  description: 'Soufflé caramels muffin cake dragée muffin. Cookie fruitcake cake macaroon. Pastry tiramisu lemon drops cotton candy brownie brownie. Chupa chups brownie macaroon soufflé toffee cake chocolate cake.',
  button: {
    text: 'Click here',
    link: '#',
  }
};

const titleCopyButton = {
  title: 'Choose a child for me',
  description: 'Pastry dessert dessert bear claw sugar plum gummi bears pudding. Pie brownie donut. Marzipan jujubes gingerbread donut cupcake chocolate bar gummi bears. Cupcake ice cream tootsie roll sweet.',
  button: {
    text: 'Click here',
    link: '#',
  }
};

const imageCopyButton = {
  image: {
    source: 'http://placekitten.com/400/400',
    link: 'http://placekitten.com/400/400',
    alt: 'Maggie Smith',
    title: 'Maggie Smith'
  },
  title: 'Choose a child for me',
  description: 'Bear claw halvah fruitcake icing. Apple pie croissant candy bonbon sweet roll.',
  button: {
    text: 'Click here',
    link: '#',
  }
};

const childInfoCopy = {
  image: {
    source: 'http://placekitten.com/400/400',
    link: 'http://placekitten.com/400/400',
    alt: 'Maggie Smith',
    title: 'Maggie Smith'
  },
  title: 'Maggie Smith - 12.06.1990',
  icons: [
    {
      type: 'birthday',
      label: '12.06.1990'
    },
    {
      type: 'countries',
      label: 'Bolivien'
    },
    {
      type: 'gender',
      label: 'Girl'
    }
  ],
  button: {
    text: 'Sponsor Maggie',
    link: '#',
  }
};

const itemsFeed = [
  copyButton,
  titleCopyButton,
  imageCopyButton,
  childInfoCopy,
];
