import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ItemBox from "./ItemBox";

import Slider from "react-slick";
import Icon from "./Icon";

export default function Grid(props) {

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <Icon
          type={'arrow-right'}
          size={3}
          background={'transparent'}
          color={'#fff'}
          border={true}
        /></div>
    );
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <Icon
          type={'arrow-left'}
          size={3}
          background={'transparent'}
          color={'#fff'}
          border={true}
        /></div>
    );
  }

  const settings = {
    slidesToShow: 3,
    draggable: true,
    dots: false,
    focusOnSelect: true,
    infinite: true,
    centerMode: true,
    centerPadding: '20px',
    initialSlide: 1,

    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,

    responsive: [{
      breakpoint: 1064,
      settings: {
        slidesToShow: 2,
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }, {
      breakpoint: 300,
      settings: "unslick" // destroys slick
    }]
  };

  // Create a Grid component that will render a <p> element with styles.
  const Grid = styled.div`
  display: flex;
  flex-direction: ${props.direction};
  flex-wrap: wrap;
  
  justify-content: space-evenly;
  
  margin: 0 0 8px;
  background: ${props.background};
  color: ${props.color};
  font-family: 'Lato', Arial, sans-serif;
  font-size: 16px;
  font-weight: 300;
  
  // Styles for slick.
  .slick-list {
    width: 1120px;
    margin: 0 auto;
    
    @media all and (max-width: 1440px) {
      width: calc(100% - 120px);
    }

    .item-box-content {
      margin: 0 20px 20px;
    }
  }
  
  .slick-prev,
  .slick-next {
    top: 50%;
  
    &:before {
      display: none;
    }
  }
  
  .slick-prev {
    left: -60px;
  }
  
  .slick-next {
    right: -60px;
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
  direction: 'row',
  background: 'transparent',
  color: '#333',
  isSlider: false,
};

Grid.propTypes = {
  items: PropTypes.array.isRequired,
  direction: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  isSlider: PropTypes.bool,
}


