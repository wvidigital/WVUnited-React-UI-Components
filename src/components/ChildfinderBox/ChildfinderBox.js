import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Heading from '../Heading';
import LinkButton from '../Button/LinkButton';
import ActionButton from '../Button/ActionButton';
import Icon from '../Icon';
import Image from '../Image';
import Text from '../Text';

import globalStyles from '../../styles/globalStyles';

export default class ChildfinderBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const ChildfinderBox = styled.div`
      position: relative;
      max-width: 320px;
      margin: 0 10px 20px;

      border: 1px solid #d1d1d1;
      border-radius: 4px;

      box-shadow: ${globalStyles.boxShadow};

      text-align: center;
      box-sizing: border-box;

      background-color: ${this.props.background};

      @media all and (max-width: 640px) {
        max-width: 100%;
        padding: 0;

        .item-box-content {
          padding: 20px;
        }
      }

      img {
        max-width: 100%;

        border-top-left-radius: 4px;
        border-top-right-radius: 4px;

        @media all and (max-width: 640px) {
          width: 100%;
          margin-bottom: -20px;
        }
      }

      button {
        width: 100%;
        padding: 16px 30px;
        border-radius: 0 0px 4px 4px;
      }

      p {
        font-weight: 400;
      }

      .icons {
        // padding: 0 20px;
        // text-align: left;

        .mwv-icon {
          display: inline-block;

          .mwv-icon-content {
            display: inline-block;
            vertical-align: middle;
          }
        }
      }

      ${this.props.data.type === 'info' &&
        `
      padding: 20px;
      
      .mwv-icon {
        padding: 12px 0;
        margin: 0 -20px;  
        border-top: 1px solid #eee;
        
        &:first-of-type {
          margin-top: 12px;
        }
        &:last-of-type {
          margin-bottom: 12px;
          border-bottom: 1px solid #eee;
        }
      }
   `}
    `;

    const image = this.props.data.image;

    return this.props.data.type === 'info' ? (
      <ChildfinderBox className={this.props.data.type}>
        {this.props.data.prefix && (
          <Text background={'transparent'}>{this.props.data.prefix}</Text>
        )}
        {this.props.data.icons.length > 0 &&
          this.props.data.icons.map(icon => (
            <Icon
              type={icon.type}
              text={icon.label}
              color={'white'}
              background={'#46BB95'}
              size={1}
              key={icon.type}
            />
          ))}
        {this.props.data.suffix && (
          <Text background={'transparent'}>{this.props.data.suffix}</Text>
        )}
      </ChildfinderBox>
    ) : (
      <ChildfinderBox>
        {image && <Image source={image} />}
        <div>
          {this.props.data.name && (
            <Heading size={3} font={'Lato'} color={'#333'}>
              {this.props.data.name}
            </Heading>
          )}

          {this.props.data.description && (
            <Text background={'transparent'}>
              {this.props.data.description}
            </Text>
          )}

          {this.props.data.waiting && (
            <Text background={'#ECF8F4'} color={'#46BB95'} border={true}>
              {this.props.data.waiting}
            </Text>
          )}
          <div className="icons">
            {this.props.data.birthdate && (
              <Icon
                type={'birthday'}
                text={this.props.data.birthdate}
                color={'#ccc'}
                size={1}
                key={'birthday'}
              />
            )}
          </div>
          <div className="icons">
            {this.props.data.country && (
              <Icon
                type={'birthday'}
                text={this.props.data.country}
                color={'#ccc'}
                size={1}
                key={'country'}
              />
            )}
          </div>

          {this.props.data.button && (
            <ActionButton text={this.props.data.button.text} />
          )}
        </div>
      </ChildfinderBox>
    );
  }
}

ChildfinderBox.defaultProps = {
  borderColor: '#ff6600',
  background: '#fff',
};

ChildfinderBox.propTypes = {
  data: PropTypes.object.isRequired,
  borderColor: PropTypes.string,
  background: PropTypes.string,
};
