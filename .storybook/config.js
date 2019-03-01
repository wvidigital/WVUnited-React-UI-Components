import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {withKnobs} from "@storybook/addon-knobs";

import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import {withBackgrounds} from "@storybook/addon-backgrounds";

// Backgrounds decorator.
const backgrounds = withBackgrounds([
  { name: 'mwv grey' , value: '#efefef', default: true },
  { name: 'mwv orange', value: '#ff6600' },
  { name: 'mwv blue', value: '#00acca' },
  { name: 'child finder' , value: '#CAC4BB'},
  { name: 'twitter', value: '#00aced' },
  { name: 'facebook', value: '#3b5998' },
]);
addDecorator(backgrounds);

// Global decorators for info and props addons.
addDecorator(withInfo);
addDecorator(withKnobs);

// Load the list of viewports.
configureViewport({
  viewports: {
    ...INITIAL_VIEWPORTS
  }
});



function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
