import { storiesOf } from '@storybook/react';

// Stories.
import '../src/prev/Text/stories';
import '../src/prev/Button/stories';
import '../src/prev/Icon/stories';
import '../src/prev/Form/Fields/stories';
import '../src/prev/Form/FormGrid/stories';
import '../src/prev/ItemBox/stories';
import '../src/prev/Grid/stories';
import '../src/components/Doughnut/stories';

storiesOf('Information', module).add('Current versions', () => (
  <div>
    <p>{`React: ${React.version}`}</p>
  </div>
));
