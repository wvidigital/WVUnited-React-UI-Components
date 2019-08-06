import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, array, number } from '@storybook/addon-knobs';

import Charts from './Charts';

export const storiesCharts = storiesOf('Charts', module);

storiesCharts.add('Doghnut', () => (
  <Charts
    labels={array('Labels', [
      'Livelihoods',
      'Health',
      'Education',
      'Community empowerment',
      'Nutrition',
      'Protection',
      'Emergency response',
    ])}
    values={array('Values', ['31', '30', '15', '10', '7', '4', '3'])}
    colors={array('Colors', [
      '#10A8CC',
      '#E96107',
      '#974E99',
      '#FFD555',
      '#076460',
      '#4EB68E',
      '#882F14',
      '#4fbe9d',
      '#014b65',
      '#0e6103',
      '#ede717',
      '#f2081d',
      '#aebcb9',
      '#243427',
    ])}
    borderWidth={number('Border width', 2)}
    borderColor={text('Border color', '#fff')}
    legendPosition={select('Legend position', [
      'top',
      'right',
      'bottom',
      'left',
    ])}
  />
));
