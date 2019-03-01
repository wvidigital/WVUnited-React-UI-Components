import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useState, useEffect } from 'react';

import Heading from '../Heading';
import LinkButton from "../Button/LinkButton";
import Icon from "../Icon";
import Image from "../Image";
import Text from "../Text";
import FieldSelect from "../FieldSelect";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
}

function renderImage(image) {
  if (image !== undefined) {
    return (
      <div>
        {(typeof image === 'string') ?
          <Image source={image} /> :
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
  const width = useWindowWidth();
  return icons.map((item) =>
    <Icon
      type={item.type}
      text={item.label}
      background={'#006662'}
      color={'#fff'}
      size={1}
      inline={(width < 640)}
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
    
    // // Check if the first div contains heading
    // // and remove it's margin-top.
    // .item-box-content > div:first-of-type {
    //   h3 {
    //     margin-top: 0;
    //   }
    // }
    
    @media all and (max-width: 640px) {
      max-width: 100%;
      padding: 0;
      
      .item-box-content {
        padding: 20px;
      }
    }

    img {
      max-width: 100%;
      
      @media all and (max-width: 640px) {
        width: 100%;
        margin-bottom: -20px;
      }
    }
      
    .child-info-icons {

      .mwv-icon {
        justify-content: left;
        text-align: center;
        margin-bottom: 8px;
        
        
        @media all and (min-width: 640px) {
          display: inline-block;
          width: 33.33333%;
          vertical-align: top;
          margin-bottom: 0;          
          
          &-content {
            margin: 0 auto 6px;
          }
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
    <ItemBox className='item-box'>
      <div className='item-box-image'>
        {renderImage(props.data.image)}
      </div>
      <div className='item-box-content'>
        {renderTitle(props.data.title)}
        {renderDescription(props.data.description)}
        {renderInfoIcons(props.data.icons)}
        {renderFormFields(props.data.form_fields)}
        {renderLinkButton(props.data.button)}
      </div>
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
