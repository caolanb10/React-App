import { compose, withProps, withStateHandlers } from 'recompose';
import { withTheme } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import classes from './HeaderStyles';
import Header from './Header';

const initialState = {};

const handlers = {};

const createProps = makeStyles()
export default compose(
  withTheme,
  withProps()
)(Header);
