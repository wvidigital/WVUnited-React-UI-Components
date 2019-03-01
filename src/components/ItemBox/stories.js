import React from 'react';
import {storiesOf} from "@storybook/react";
import ItemBox from "./ItemBox";
import {
  childFinderCopy,
  childInfoCopy,
  copyButton,
  imageCopyButton,
  titleCopyButton
} from "../../../stories/data";


export const storiesItemBox = storiesOf('Complex components (Items)', module);

storiesItemBox
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
  ))
  .add('Item box with child finder form', () => (
    <ItemBox data={childFinderCopy} />
  ));