import {storiesOf} from "@storybook/react";
import React from "react";

import {
  formGridProps,
  topNavigationProps,
  bottomNavigationProps,
  formHeaderProps,
} from "./data";
import FormGrid from "../FormGrid";
import FormNavigation from "../../FormNavigation";
import FormSteps from "../../FormSteps";
import FormHeader from "../../FormHeader";
import ActionButton from "../../../Button/ActionButton";

export const storiesFormGrid = storiesOf('Form', module);

storiesFormGrid
  .add('Form top navigation', () => (
    <FormNavigation { ...topNavigationProps } />
  ))
  .add('Form bottom navigation', () => (
    <FormNavigation { ...bottomNavigationProps }
                    action={()=>console.log('action')} />
  ))
  .add('Form Header', () => (
    <FormHeader { ...formHeaderProps } background={'#ff6600'} />
  ))
  .add('Form grid', () => (
    <FormGrid fields={ formGridProps() } />
  ))
  .add('Form steps', () => (
    <FormSteps  />
  ));
