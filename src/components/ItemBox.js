import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Heading from './Heading';
import LinkButton from "./LinkButton";
import Icon from "./Icon";
import Image from "./Image";
import Text from "./Text";


function renderImage(image) {
  if (image !== undefined) {
    return (
      <div>
        {(typeof image === 'string') ?
          <Image source={image}/> :
          <Image
            source={image.source}
            link={image.link}
            alt={image.alt}
            title={image.title}
          />
        }
      </div>
    )
  }
}

function renderTitle(title) {
  if (title !== undefined) {
    return <Heading size={3}>{title}</Heading>;
  }
}

function renderDescription(text) {
  if (text !== undefined) {
    return <Text>{text}</Text>;
  }
}

function renderLinkButton(button) {
  if (button !== undefined) {
    return <LinkButton text={button.text} link={button.link}/>;
  }
}

function renderInfoIcons(icons) {
  if (icons !== undefined) {
    return (
      <div className='child-info-icons'>
        { renderIcons(icons) }
      </div>
    )
  }
}

function renderIcons(icons) {
  return icons.map((item) =>
    <Icon
      type={item.type}
      text={item.label}
      background={'#006662'}
      color={'#fff'}
      size={1}
      inline={false}
      key={item.type}
    />
  );
}


export default function ItemBox(props) {
  const ItemBox = styled.div`  
    // max-width: 460px;
    max-width: 320px;
    border: 1px solid #d1d1d1;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top: 4px solid ${props.borderColor};
    
    padding: 20px;
    margin: 0 10px 20px;
    text-align: center;
    box-sizing: border-box;
    
    background-color: ${props.background};

    img {
      max-width: 100%;
    }
      
    .child-info-icons {

      // Flex is too messy for this,
      // so we go with safest approach.
      .mwv-icon {
        display: inline-block;
        width: 33.33333%;
        vertical-align: top;
        text-align: center;
        
        &-content {
          margin: 0 auto 6px;
        }
      }
    }
    
    .mwv-button {
      margin-top: 20px;
    }
    
    // Check if the first div contains heading
    // and remove it's margin-top.
    & > div:first-of-type {
      h3 {
        margin-top: 0;
      }
    }
`;

  return  (
    <ItemBox className='item-box-content'>
      {renderImage(props.data.image)}
      {renderTitle(props.data.title)}
      {renderDescription(props.data.description)}
      {renderInfoIcons(props.data.icons)}
      {renderLinkButton(props.data.button)}
    </ItemBox>
  );
}

ItemBox.defaultProps = {
  borderColor: '#ff6600',
  background: '#fff',
};

ItemBox.propTypes = {
  data: PropTypes.object.isRequired,
  borderColor: PropTypes.string,
  background: PropTypes.string,
}
