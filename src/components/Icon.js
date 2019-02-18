import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// Need to add this to properly load the fonts.
import iconStyles from '../../fonts/mwv_icons/style.css';


function iconSize(props) {
  switch (props.size) {
    case 1:
      return 'small';
      break;
    case 2:
      return 'normal';
      break;
    case 3:
      return 'big';
      break;
    default:
      return 'normal';
      break;
  }
};


export default function Icon(props) {

  // Create a Icon component that will render a <p> element with styles.
  const Icon = styled.div`
  /* Styles for the icon label. */
 
  &.mwv-icon {
    display: flex;
    flex-direction: ${(props.text && props.inline) ? 'row' : 'column'};
    align-items: center;
    justify-content: center;
  
  .mwv-icon-label {
    font-family: 'Lato', Arial, sans-serif;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 300;
  }
  
  .mwv-icon-content {
    display: flex;
    margin-${(props.text && props.inline) ? 'right' : 'bottom'}: 6px;
  
    &:before {
     display: inline-block;
     font-family: 'mwv_icons';
     font-style: normal;
     font-weight: normal;
     line-height: 1;
     color: ${props.color};
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
    }


    // Child profile
    &-birthday:before {content: 'C';}
    &-gender:before {content: 'd';}
    &-favouriteGame:before {content: 'i';}
    &-chore:before {content: 'g';}
    &-house:before,
    &-livesWith:before {content: 'l';}

    &-school:before {content: 'M';}
    &-favouriteSubject:before {content: 'O';}
    &-grade:before {content: 'b';}
    &-vaccination:before {content: 'c';}
    &-healthStatus:before {content: 'P';}

    &-peoplegroup:before {content: 'L';}

    // Sponsor profile
    &-email:before {content: 'G';}
    &-lock:before {content: 'm';}
    &-phone:before {content: 'W';}
    &-iban:before {content: 'Y';}

    // Worldvision profile
    &-founded:before {content: 'D';}
    &-seat:before {content: 'r';}
    &-employees:before {content: 'n';}
    &-countries:before {content: 'p';}  
    
    // Family fields.
    &-female:before {content: 'J';}
    &-male:before,
    &-godchildren:before {content: 'S';}
    &-projects:before {content: 'T';}
    
    // Social.
    &-facebook:before {content: 'I';}
    &-instagram:before {content: 'R';}
    &-twitter:before {content: 'e';}
    &-youtube:before {content: 'k';}
    
    &-search:before {content: 'Z';}
    &-profile:before {content: 'f';}
    
    // Known.
    &-filter:before {content: 'K';}
    &-info:before {content: 'R';}
    &-heart:before {content: 'O';} // i have this above.
    
    &-marker:before {content: 'V';} // full location.
    &-watbubble:before {content: 'E';}    
    
    // Feed post icons.    
    &-post {
        &-text:before {content: 'B';}
        &-image:before {content: 's';}
        &-link:before {content: 't';}
        &-video:before {content: 'h';}
        &-donation:before {content: 'N';}
        &-message:before {content: 'G';}
        &-password:before {content: 'm';}
        &-attention:before {content: 'H';}
    }

    &-edit:before {content: 'X';}
    &-volume:before {content: 'j';}

    &-childid:before {content: 'u';}
    
  }
  
  
  // Style adjustments based on props for size and background.
         
  // Icon sizes based on props.
  &.small {
    .mwv-icon-label,
    .mwv-icon-content:before {
      font-size: 16px;
    }
  }
  
  &.normal .mwv-icon-content:before {
    font-size: 22px;
  }
  &.big .mwv-icon-content:before {
    font-size: 32px;
  }
  
  &.with-background .mwv-icon-content {
    display: flex;
    width: 36px;
    height: 36px;
    align-items: center;
    justify-content: center;
    
    border-radius: 50%;
    background-color: ${props.background};
    border: ${(props.border)? `1px solid ${props.color}`: 'none'};
  }
  
  &.with-background.normal .mwv-icon-content {
    width: 44px;
    height: 44px;
  }
  &.with-background.big .mwv-icon-content {
    width: 60px;
    height: 60px;
    border: ${(props.border) ? `3px solid ${props.color}`: 'none'};    
  }
}
  
`;

  return  (
    <Icon className={`mwv-icon ${iconSize(props)} ${(props.background !== '') ? 'with-background' : ''}`}>
      <span className={`mwv-icon-content mwv-icon-content-${props.type}`}></span>
      { (props.text) ? <span className='mwv-icon-label'>{props.text}</span> : null }
    </Icon>
  );
}

Icon.defaultProps = {
  background: '',
  color: '#ff6600',
  size: 2,
  inline: true,
  border: false,
};

Icon.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  size: PropTypes.number,
  inline: PropTypes.bool,
  border: PropTypes.bool,
}


