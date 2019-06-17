import {storiesOf} from "@storybook/react";
import React from "react";

import {
  formGridProps,
  topNavigationProps,
  bottomNavigationProps
} from "./data";
import FormGrid from "../FormGrid";
import FormNavigation from "../../FormNavigation";
import FormSteps from "../../FormSteps";

export const storiesFormGrid = storiesOf('Form', module);

storiesFormGrid
  .add('Form top navigation', () => (
    <FormNavigation { ...topNavigationProps } />
  ))
  .add('Form bottom navigation', () => (
    <FormNavigation { ...bottomNavigationProps } />
  ))
  .add('Form grid', () => (
    <FormGrid fields={ formGridProps() } />
  ))
  .add('Form steps', () => (
    <FormSteps  />
  ));
