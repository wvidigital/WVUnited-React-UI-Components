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
import { text } from '@storybook/addon-knobs';

export const storiesItemBox = storiesOf('Complex components (Items)', module);

storiesItemBox
  .add('Form sidebar', () => <Sidebar data={formSidebar} />)
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
