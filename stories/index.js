import React from 'react';
import { storiesOf } from '@storybook/react';

// Stories.
import {storiesText} from '../src/components/Text/stories';
import {storiesButton} from '../src/components/Button/stories';
import {storiesIcon} from '../src/components/Icon/stories';
import {storiesFormFields} from '../src/components/Form/Fields/stories';
import {storiesFormGrid} from '../src/components/Form/FormGrid/stories';
import {storiesItemBox} from '../src/components/ItemBox/stories';
import {storiesGrid} from "../src/components/Grid/stories";

storiesText;
storiesButton;
storiesIcon;
storiesFormFields;
storiesFormGrid;
storiesItemBox;
storiesGrid;

storiesOf('Information', module)
  .add('Current versions', () => (
    <div>
      <p>{`React: ${React.version}`}</p>
    </div>
  ));

