import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';

// Styles for the slick slider.
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Icon from '../Icon';
import ItemBox from '../ItemBox';
import { textStyles } from '../styles/theme';

export default function Grid(props) {
  const iconProps = {
    size: 3,
    background: 'transparent',
    color: '#fff',
    border: true,
  };

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <Icon type={'arrow-right'} {...iconProps} />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <Icon type={'arrow-left'} {...iconProps} />
      </div>
    );
  }

  const settings = {
    slidesToShow: 3,
    draggable: true,
    dots: false,
    focusOnSelect: true,
    infinite: true,
    centerMode: true,
    centerPadding: '50px',
    initialSlide: 1,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1080, // iPhone and Galaxy portrait
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // iPhone 4s
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 300,
        settings: 'unslick', // destroys slick
      },
    ],
  };

  let rightArrowPositionPx = props.width / 2 - 44;

  // Create a Grid component that will render a <div> element with styles.
  const Grid = styled.div`
  display: ${props.isSlider} ? 'flex' : 'block';
  flex-direction: ${props.direction};
  flex-wrap: wrap;
  justify-content: space-evenly;

  margin: 0 0 8px;
  background: ${props.background};
  color: ${props.color};
  ${textStyles};

  // Styles for slick.
  .slick-list {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: ${props.width}px;
    // margin: 0 auto;
    padding: 0 !important;

    .slick-track {
      left: 50px; // equal to centerPadding setting.
    }

    // Do we need to pass the breakpoint as prop?
    @media all and (max-width: 1440px) {
      width: 100%;
    }

    .item-box {
      margin: 0 20px 20px;
    }
  }

  .slick-prev,
  .slick-next {
    left: calc(50% - ${props.width / 2}px);
    width: 44px;
    height: 100%;
    z-index: 2;

    color: transparent;
    outline: none;
    background: transparent;

    @media all and (max-width: 1440px) {
      left: 0;
    }

    &:before {
      position: absolute;
      display: block;
      width: inherit;
      height: 100%;
      opacity: 1;
      content: '';
      background-image: linear-gradient(to left, transparent, ${
        props.background
      } 100%);
    }

    .mwv-icon {
      position: relative;
      top: 50%;
      margin-top:-30px;

      @media all and (max-width: 1440px) {
        display: none;
      }

    }
  }

  .slick-prev {
    .mwv-icon {
      left: -100px;
    }
  }

  .slick-next {
    left: calc(50% + ${rightArrowPositionPx}px);

    @media all and (max-width: 1440px) {
      left: calc(100% - 44px);
    }

    &:before {
      background-image: linear-gradient(to right, transparent, ${
        props.background
      } 100%);
    }

    .mwv-icon {
      right: -100px;
    }
  }
`;

  if (props.isSlider) {
    return (
      <Grid>
        <Slider {...settings}>
          {props.items.map((item, index) => {
            return <ItemBox key={index} data={item} />;
          })}
        </Slider>
      </Grid>
    );
  } else {
    return (
      <Grid>
        {props.items.map((item, index) => {
          return <ItemBox key={index} data={item} />;
        })}
      </Grid>
    );
  }
}

Grid.defaultProps = {
  isSlider: false,
  direction: 'row',
  width: '1140',
  background: 'transparent',
  color: '#333',
};

Grid.propTypes = {
  items: PropTypes.array.isRequired,
  isSlider: PropTypes.bool,
  direction: PropTypes.string,
  width: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
};
