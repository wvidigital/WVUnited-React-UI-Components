import React from 'react';
import PropTypes from 'prop-types';
import { Field, Label, Error } from '../../FormField/Field';

export default class FieldFileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '' };
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleFileChange(e) {
    e.preventDefault();

    // Multiple files upload could be added in the future.
    let file = e.target.files[0];
    if (file !== undefined) {
      // Attach the file to the event and execute the props parent change function.
      e.file = file;
      this.props.handleChange(e);
    }
  }

  render() {
    return (
      <Field style={{ position: 'relative' }}>
        <Label {...this.props} />
        {/*File upload input- used for actual upload, but visually hidden*/}
        <input
          id={this.props.name}
          name={this.props.name}
          type={this.props.type}
          accept={this.props.settings.fileExtensions}
          onChange={this.handleFileChange}
        />
        {/*Text input which shows the file name and field styles*/}
        <input
          id={`${this.props.name}_text`}
          name={this.props.name}
          type="text"
          value={this.props.value}
          placeholder={this.props.settings.placeholder}
          disabled="disabled"
        />
        <label htmlFor={this.props.name}>
          {this.props.settings.chooseFileButton}
        </label>

        {this.props.error && <Error>{this.props.error}</Error>}
      </Field>
    );
  }
}

FieldFileUpload.defaultProps = {
  name: '',
  type: '',
  label: '',
  error: '',
  settings: {
    errorMessage: '',
    placeholder: '',
    required: false,
    disabled: true,
    defaultValue: '',
  },
};

FieldFileUpload.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  settings: PropTypes.object,
  handleChange: PropTypes.func,
};
