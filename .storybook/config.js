import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

// Does not seem to work globally.
addDecorator(withInfo);

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
