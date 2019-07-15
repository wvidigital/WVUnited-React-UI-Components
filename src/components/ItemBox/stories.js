import React from 'react';
import { storiesOf } from '@storybook/react';

import ItemBox from './ItemBox';
import Sidebar from '../Sidebar';
import {
  childFinderCopy,
  childInfoCopy,
  copyButton,
  imageCopyButton,
  titleCopyButton,
  formSidebar,
} from '../../../stories/data';
import ChildfinderBox from '../ChildfinderBox';
import { text } from '@storybook/addon-knobs';

// const childFinderBoxCopy =  {
//   description: text('description', '14-year-old männlich'),
//   birthdate: text('birthdate','01.01.2005'),
//   button: {
//     text: text('button text','Mehr erfahren'),
//   },
//   country: text('country',"Malawi"),
//   image: text('image', "https://cdn.pixabay.com/photo/2016/09/01/10/23/image-1635747_960_720.jpg"),
//   name: text('name',"Tenson"),
//   waiting: text('waiting', "Waiting 10 Monaten"),
// };

const iconsCopy = {
  icons: [
    { type: 'waterdrop', label: 'Clean Water' },
    { type: 'health', label: 'Healthcare' },
    { type: 'pencil', label: 'Education' },
    { type: 'corn', label: 'Nutritious Food' },
    { type: 'protection', label: 'Child Protection' },
    { type: 'house', label: 'Disaster Response' },
  ],
  prefix:
    'Depending on the needs of a child’s community, your sponsorship provides things like:',
  suffix: '…and so much more!',
  type: 'info',
};

export const storiesItemBox = storiesOf('Complex components (Items)', module);

storiesItemBox
  .add('Form sidebar', () => <Sidebar data={formSidebar} />)
  .add('Child finder box', () => <ChildfinderBox data={childFinderBoxCopy} />)
  .add('Child finder box list with icons', () => (
    <ChildfinderBox data={iconsCopy} />
  ))
  .add('Item box with copy and button', () => <ItemBox data={copyButton} />)
  .add('Item box with title, copy and button', () => (
    <ItemBox data={titleCopyButton} />
  ))
  .add('Item box with image, copy and button', () => (
    <ItemBox data={imageCopyButton} />
  ))
  .add('Item box with child information', () => (
    <ItemBox data={childInfoCopy} />
  ))
  .add('Item box with child finder form', () => (
    <ItemBox data={childFinderCopy} />
  ));
