import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Heading from './Heading/index';
import LinkButton from "./LinkButton";
import Icon from "./Icon";
import Image from "./Image";
import Text from "./Text/index";
import FieldSelect from "./FieldSelect";


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


function renderFormFields(fields) {
  if (fields !== undefined) {
    return (
      <div className='form-fields'>
        { renderFormField(fields) }
      </div>
    )
  }
}

function renderFormField(field) {
  equalHeights();
  return field.map((props) =>
    <FieldSelect key={props.name} {...props} />
  );
}

function equalHeights() {

  let maxHeight = 0;
  let cards = document.getElementsByClassName('item-box-content');

  //only do this on desktop screens
  if (window.innerWidth >= 1024) {
    for (let card in cards) {
        let offsetHeight = card.clientHeight;
        if (offsetHeight > maxHeight) {
          maxHeight = offsetHeight;
        }
    }
  }
}


export default function ItemBox(props) {
  const ItemBox = styled.div`  
    // max-width: 460px;
    max-width: 320px;
    padding: 20px;
    margin: 0 10px 20px;
    
    border: 1px solid #d1d1d1;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top: 4px solid ${props.borderColor};
    box-shadow: 0px 2px 3px rgba(0,0,0,0.2);
    
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
    
    .form-fields {
      width: 100%;
      padding: 20px 0;
      text-align: left;
      
      
      .form__item {
        width: 100%;
        margin-bottom: 22px;
        
        input,
        select {
          width: 100%;
        }
      }
      
    }
`;

  return  (
    <ItemBox className='item-box-content'>
      {renderImage(props.data.image)}
      {renderTitle(props.data.title)}
      {renderDescription(props.data.description)}
      {renderInfoIcons(props.data.icons)}
      {renderFormFields(props.data.form_fields)}
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
