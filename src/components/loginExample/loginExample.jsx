import React from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from 'react-toolbox/lib/button';
import classes from './loginExampleStyles';
import LoginDetails from '../loginDetails';

const loginExample = ({
  recaptchaSuccess,
  recaptchaRequired,
  setRecaptchaSuccess,
  loginHandler,
  userName,
  password,
  onChangeUserName,
  onChangePassword,
}) => (
  <div className={classes.rootClasses}>
    { recaptchaRequired && (
    <ReCAPTCHA
      sitekey="site key"
      onChange={setRecaptchaSuccess}
    />
    )}
    <LoginDetails
      onChangeUserName={onChangeUserName}
      onChangePassword={onChangePassword}
      userName={userName}
      password={password}
    />
    <Button
      active={recaptchaRequired ? recaptchaSuccess : true}
      onClick={loginHandler({ userName, password })}
    />
  </div>
);

loginExample.propTypes = {
  recaptchaSuccess: PropTypes.bool.isRequired,
  recaptchaRequired: PropTypes.bool.isRequired,
  setRecaptchaSuccess: PropTypes.func.isRequired,
  loginHandler: PropTypes.func.isRequired,
  onChangeUserName: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  userName: PropTypes.string,
  password: PropTypes.string,
};

loginExample.defaultProps = {
  userName: '',
  password: '',
};

export default loginExample;
