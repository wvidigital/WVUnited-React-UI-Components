import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

export default function Charts(props) {
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

  return (
    <div>
      <Doughnut data={data} options={data.options} />
    </div>
  );
}

Charts.defaultProps = {
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
  ],
  borderWidth: 2,
  borderColor: '#fff',
  legendPosition: 'top',
};

Charts.propTypes = {
  values: PropTypes.array,
  labels: PropTypes.array,
  colors: PropTypes.array,
  label: PropTypes.string,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  legendPosition: PropTypes.string,
};
