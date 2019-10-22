import { storiesOf } from '@storybook/react';

// Stories.
import '../src/legacy/components/Text/stories';
import '../src/legacy/components/Button/stories';
import '../src/legacy/components/Icon/stories';
import '../src/legacy/components/Form/Fields/stories';
import '../src/legacy/components/Form/FormGrid/stories';
import '../src/legacy/components/ItemBox/stories';
import '../src/legacy/components/Grid/stories';
import '../src/components/Doughnut/stories';

storiesOf('Information', module).add('Current versions', () => (
  <div>
    <p>{`React: ${React.version}`}</p>
  </div>
));
