import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Heading from '../Heading';
import Image from '../Image';
import Text from '../Text';

import globalStyles from '../../styles/globalStyles';


export default function Sidebar(props) {
console.error(props.data)

  const renderTitle = () => {
    if (props.data.title !== undefined) {
      return <Heading size={3} font={'Lato'} color ={'#000'}>{props.data.title}</Heading>;
    }
  }

  const renderDescription = () => {
    if(props.data.description !== undefined) {
      return <Text
        background={'transparent'}
        size={'20px'}
      >{props.data.description}</Text>;
    }
  }

  const renderImage= () => {
  const image = props.data.image;
    if (image !== undefined) {
      { return (typeof image === 'string') ?
        <Image source={image} /> :
        <Image
          source={image.source}
          link={image.link}
          alt={image.alt}
          title={image.title}
        />
      }
    }
  }

  const Sidebar = styled.div`
    max-width: 300px;
    padding: 34px 16px 40px;
    background: ${globalStyles.colors.formSidebarBackground}
    
    h3 {
      margin-top: 0;
      color: ${globalStyles.colors.textColor}
    }
    
    p {
      color: ${globalStyles.colors.textColor}
      text-align: center;
      b {
        font-weight: 400;
      }
    }
    
    img {
      width: 100%;
    }
  `;

  return (
    <Sidebar>
      {renderTitle()}
      {renderDescription()}
      {renderImage()}
    </Sidebar>

  );
}

Sidebar.defaultProps = {
  borderColor: globalStyles.colors.borderColor,
  background: globalStyles.colors.borderColor,
};

Sidebar.propTypes = {
  data: PropTypes.object.isRequired,
  borderColor: PropTypes.string,
  background: PropTypes.string,
}
