import {storiesOf} from "@storybook/react";
import React from "react";

import {selectFieldErrorProps, selectFieldProps} from "../../../../stories/data";
import FieldSelect from "./FieldSelect";

export const storiesFormFields = storiesOf('Form fields', module);

storiesFormFields
  .add('Select', () => (
    <FieldSelect { ...selectFieldProps}>Hello, this is my simple paragraph.</FieldSelect>
  ))
  .add('Select with validation error', () => (
    <FieldSelect { ...selectFieldErrorProps}>Hello, this is my simple paragraph.</FieldSelect>
  ));