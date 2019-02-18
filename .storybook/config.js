import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {withKnobs} from "@storybook/addon-knobs";

// Global decorators for info and props addons.
addDecorator(withInfo);
addDecorator(withKnobs);

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
