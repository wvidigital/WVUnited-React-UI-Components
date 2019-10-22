import { storiesOf } from '@storybook/react';

// Stories.
import '../src/prev/components/Text/stories';
import '../src/prev/components/Button/stories';
import '../src/prev/components/Icon/stories';
import '../src/prev/components/Form/Fields/stories';
import '../src/prev/components/Form/FormGrid/stories';
import '../src/prev/components/ItemBox/stories';
import '../src/prev/components/Grid/stories';
import '../src/components/Doughnut/stories';

storiesOf('Information', module).add('Current versions', () => (
  <div>
    <p>{`React: ${React.version}`}</p>
  </div>
));
