import {storiesOf} from "@storybook/react";
import React from "react";

import { formGridProps } from "./data";
import FormGrid from "../FormGrid";

export const storiesFormGrid = storiesOf('Form grid', module);

storiesFormGrid
  .add('Form grid', () => (
    <FormGrid fields={ formGridProps() } />
  ))
