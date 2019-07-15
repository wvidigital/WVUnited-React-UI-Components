import {storiesOf} from "@storybook/react";
import React from "react";

import {
  selectFieldProps,
  selectFieldErrorProps,
  textFieldProps,
  textFieldErrorProps,
  radioFieldProps,
  radioFieldErrorProps,
  checkboxFieldProps,
  checkboxFieldErrorProps,
  numberFieldProps,
  numberFieldErrorProps,
  textareaFieldProps,
  textareaFieldErrorProps,
  dollarHandlesFieldProps,
  fileUploadFieldProps,
  datepickerFieldProps,
  timepickerFieldProps,
  radioDescriptionFieldProps,
  radioDescriptionImageFieldProps
} from "../FormGrid/stories/data";


import FieldText from "./FieldText";
import FieldRadio from "./FieldRadio";
import FieldSelect from "./FieldSelect";
import FieldCheckbox from "./FieldCheckbox";
import FieldDollarHandles from "./FieldDollarHandles";
import FieldTextArea from "./FieldTextArea";
import FieldFileUpload from "./FieldFileUpload";

export const storiesFormFields = storiesOf('Form fields', module);

storiesFormFields
  .add('Select', () => (
    <FieldSelect { ...selectFieldProps} />
  ))
  .add('Select with validation error', () => (
    <FieldSelect { ...selectFieldErrorProps} />
  ))
  .add('Text', () => (
    <FieldText { ...textFieldProps} />
  ))
  .add('Text with validation error', () => (
    <FieldText { ...textFieldErrorProps} />
  ))
  .add('Radio', () => (
    <FieldRadio { ...radioFieldProps } />
  ))
  .add('Radio with description', () => (
    <FieldRadio { ...radioDescriptionFieldProps } />
  ))
  .add('Radio with description and image', () => (
    <FieldRadio { ...radioDescriptionImageFieldProps } />
  ))
  .add('Radio with validation error', () => (
    <FieldRadio { ...radioFieldErrorProps } />
  ))
  .add('Dollar Handles', () => (
    <FieldDollarHandles { ...dollarHandlesFieldProps } />
  ))
  .add('Checkbox', () => (
    <FieldCheckbox { ...checkboxFieldProps } />
  ))
  .add('Checkbox with validation error', () => (
    <FieldCheckbox { ...checkboxFieldErrorProps } />
  ))
  .add('Number', () => (
    <FieldText { ...numberFieldProps } />
  ))
  .add('Number with validation error', () => (
    <FieldText { ...numberFieldErrorProps } />
  ))
  .add('Text area', () => (
    <FieldTextArea { ...textareaFieldProps } />
  ))
  .add('Text area with validation error', () => (
    <FieldTextArea { ...textareaFieldErrorProps } />
  ))
  .add('File upload', () => (
    <FieldFileUpload { ...fileUploadFieldProps } />
  ))
  .add('Date picker', () => (
    <FieldText { ...datepickerFieldProps } />
  ))
  .add('Time picker', () => (
    <FieldText { ...timepickerFieldProps } />
  ));