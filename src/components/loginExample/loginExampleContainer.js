import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import loginExample from './loginExample';
import { actionCreators, onRoute } from './ducks';

export const initialState = {
  // for refactored example this is no longer needed
  recaptchaSuccess: false,
  userName: '',
  password: '',
};

export const stateHandlers = {
  setRecaptchaSuccess: () => value => !!value,
  onChangeUserName: () => userName => ({ userName }),
  onChangeUserPassword: () => password => ({ password }),
};

export const mapStateToProps =
  ({ user: { recaptchaRequired, recaptchaSuccess } }) => ({
    recaptchaRequired,
    recaptchaSuccess,
  });

export const mapDispatchToProps = {
  loginHandler: actionCreators.performLogin,
  // setRecaptchaSuccess: actionCreators.setRecaptchaSuccess,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(initialState, stateHandlers),
)(loginExample);
