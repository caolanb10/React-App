import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import loginExample from './loginExample';
import { actionCreators, onRoute } from './ducks';

export const initialState = {
  recaptchaSuccess: false,
  userName: '',
  password: '',
};

export const stateHandlers = {
  setRecaptchaSuccess: () => value => !!value,
  onChangeUserName: () => userName => ({ userName }),
  onChangeUserPassword: () => password => ({ password }),
};

export const mapStateToProps = ({ user: recaptchaRequired }) => ({
  recaptchaRequired,
});

export const mapDispatchToProps = {
  loginHandler: actionCreators.performLogin,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(initialState, stateHandlers),
)(loginExample);
