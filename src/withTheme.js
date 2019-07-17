import { createMuiTheme } from '@material-ui/core/styles';
import globalTheme from './theme';

export default theme => createMuiTheme(
  {
    ...theme,
    ...globalTheme,
  },
);
