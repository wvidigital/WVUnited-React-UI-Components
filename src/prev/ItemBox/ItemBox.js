import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Heading from '../Heading';
import LinkButton from '../Button/LinkButton';
import ActionButton from '../Button/ActionButton';
import Icon from '../Icon';
import Image from '../Image';
import Text from '../Text';

import FormGrid from '../Form/FormGrid';
import globalStyles from '../../styles/globalStyles';

export default class ItemBox extends React.Component {
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

  renderImage() {
    const image = this.props.data.image;
    if (image !== undefined) {
      return (
        <div className="item-box-image">
          {typeof image === 'string' ? (
            <Image source={image} />
          ) : (
            <Image
              source={image.source}
              link={image.link}
              alt={image.alt}
              title={image.title}
            />
          )}
        </div>
      );
    }
  }

  renderTitle() {
    const title = this.props.data.title;
    if (title !== undefined) {
      return <Heading size={3}>{title}</Heading>;
    }
  }

  renderDescription() {
    const text = this.props.data.description;
    if (text !== undefined) {
      return <Text background={'transparent'}>{text}</Text>;
    }
  }

  renderButton() {
    const button = this.props.data.button;
    if (button !== undefined) {
      return button.action !== undefined ? (
        <ActionButton text={button.text} action={button.action} />
      ) : (
        <LinkButton text={button.text} link={button.link} />
      );
    }
  }

  renderInfoIcons() {
    const icons = this.props.data.icons;
    if (icons !== undefined) {
      return <div className="child-info-icons">{this.renderIcons()}</div>;
    }
  }

  renderIcons() {
    return this.props.data.icons.map(item => (
      <Icon
        type={item.type}
        text={item.label}
        background={'#006662'}
        color={'#fff'}
        size={1}
        inline={this.state.width < 640}
        key={item.type}
      />
    ));
  }

  renderFormFields() {
    const fields = this.props.data.form_fields;
    if (fields !== undefined) {
      return (
        <div className="form-fields">
          <FormGrid {...this.props.data.form_fields} />
          {/* { this.renderFormField() } */}
        </div>
      );
    }
  }

  renderFormField() {
    // equalHeights();
    return this.props.data.form_fields.map(props => (
      // <FieldSelect
      <FormField key={props.name} {...props} />
    ));
  }

  // equalHeights() {
  //
  //   let maxHeight = 0;
  //   let cards = document.getElementsByClassName('item-box-content');
  //
  //   //only do this on desktop screens
  //   if (window.innerWidth >= 1024) {
  //     for (let card in cards) {
  //         let offsetHeight = card.clientHeight;
  //         if (offsetHeight > maxHeight) {
  //           maxHeight = offsetHeight;
  //         }
  //     }
  //   }
  // }

  render() {
    const ItemBox = styled.div`
      max-width: 320px;
      padding: 20px;
      margin: 0 10px 20px;

      border: 1px solid #d1d1d1;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      border-top: 4px solid ${this.props.borderColor};

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

        & > div {
          display: inline-block;
          width: 100%;
        }

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

    return (
      <ItemBox className="item-box">
        {this.renderImage()}
        <div className="item-box-content">
          {this.renderTitle()}
          {this.renderDescription()}
          {this.renderInfoIcons()}
          {this.renderFormFields()}
          {this.renderButton()}
        </div>
      </ItemBox>
    );
  }
}

ItemBox.defaultProps = {
  borderColor: '#ff6600',
  background: '#fff',
};

ItemBox.propTypes = {
  data: PropTypes.object.isRequired,
  borderColor: PropTypes.string,
  background: PropTypes.string,
};
