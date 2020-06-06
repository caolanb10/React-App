/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import LoginExample from './loginExample';

jest.mock('react-google-recapctcha', () => ({
  ReCAPTCHA: 'ReCAPTCHA',
}));
jest.mock('../LoginDetails', () => 'LoginDetails');
jest.mock('@themed-components', () => ({
  Button: 'Button',
}));

const props = {
  recaptchaSuccess: false,
  recaptchaRequired: false,
  setRecaptchaSuccess: jest.fn(),
  loginHandler: jest.fn(),
  userName: 'username',
  password: '***',
  onChangeUserName: jest.fn(),
  onChangePassword: jest.fn(),
};

describe('loginExample', () => {
  it('snapshot with no recaptcha required', () => {
    const snapshot = shallow(
      <LoginExample {...props} />,
    );
    expect(snapshot).toMatchInlineSnapshot();
  });
  it('snapshot with recaptcha required', () => {
    const recaptchaProps = { ...props, recaptchaRequired: true };
    const snapshot = shallow(
      <LoginExample {...recaptchaProps} />,
    );
    expect(snapshot).toMatchInlineSnapshot();
  });
});
