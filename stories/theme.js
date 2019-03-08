import fonts from '../fonts/lato/style.css';
import iconStyles from '../fonts/mwv_icons/style.css';

export const textStyles = `  
  font-family: 'Lato', Arial, sans-serif;
  font-size: 16px;
  font-weight: 300;
`;

export const errorStyles = `
  .form__item__errors {
    margin-bottom: 2px;
    color: #ff6b00;
    font-size: 14px;
  }
  
  &.form__item--has-errors input,
  &.form__item--has-errors select,
  &.form__item--has-errors textarea {
    border-color: #f37020 !important;
  }
        
  &.form__item--required-true .label__text:after {
    content: "*";
    display: inline-block;
    font-size: 16px;
    margin-left: 2px;
    margin-right: 2px;
    color: #ff6b00;
  }
`;

export const iconContentStyles = `
  .mwv-icon-label {
    font-family: 'Lato', Arial, sans-serif;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 300;
  }
  
  .mwv-icon-content {
    display: flex;
  
    &:before {
     display: inline-block;
     font-family: 'mwv_icons';
     font-style: normal;
     font-weight: normal;
     line-height: 1;
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
    &-arrow-left:before {content: 'v';}
    &-arrow-right:before {content: 'w';}
    
    // Position adjustment for arrows.
    &-arrow-left:before,
    &-arrow-right:before {
      position: relative;
      left: -4px;
    }
    &-arrow-right:before {
      left: 4px;
    }    
  }
`;