import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut as ChartJSDoughnut } from 'react-chartjs-2';

const Doughnut = props => {
  const data = {
    datasets: [
      {
        label: props.label,
        data: props.values,
        backgroundColor: props.colors,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
      },
    ],
    labels: props.labels,
    options: {
      responsiveAnimationDuration: 1000,
      responsive: true,
      legend: {
        position: props.legendPosition,
      },
    },
  };

  return <ChartJSDoughnut data={data} options={data.options} />;
};

Doughnut.defaultProps = {
  values: [31, 30, 15, 10, 7, 4, 3],
  labels: [
    'Livelihoods',
    'Health',
    'Education',
    'Community empowerment',
    'Nutrition',
    'Protection',
    'Emergency response',
  ],
  colors: [
    '#10a8cc',
    '#e96107',
    '#974e99',
    '#ffd555',
    '#076460',
    '#4eb68e',
    '#882f14',
    '#4fbe9d',
    '#014b65',
    '#0e6103',
    '#ede717',
    '#f2081d',
    '#aebcb9',
    '#243427',
  ],
  borderWidth: 2,
  borderColor: '#fff',
  legendPosition: 'right',
};

Doughnut.propTypes = {
  values: PropTypes.array,
  labels: PropTypes.array,
  colors: PropTypes.array,
  label: PropTypes.string,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  legendPosition: PropTypes.string,
};

export default Doughnut;
