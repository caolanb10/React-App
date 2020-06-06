/* eslint-env jest */
import {
  initialState,
  stateHandlers,
  mapStateToProps,
  mapDispatchToProps,
} from './loginExampleContainer';

const mockLogInFunction = jest.fn();
jest.mock('./ducks', () => ({
  actionCreators: {
    performLogin: mockLogInFunction,
  },
}));

describe('loginExampleContainer', () => {
  describe('initialState', () => {
    it('snapshot test of the initial state', () => {
      expect(initialState).toMatchSnapshot();
    });
  });

  describe('stateHandlers', () => {
    const {
      setRecaptchaSuccess,
      onChangeUserName,
      onChangeUserPassword,
    } = stateHandlers;

    describe('setRecaptchaSuccess', () => {
      it('should return true if there is any value', () => {
        const sampleAPIResponse = '1242134idfj0ergjwe';
        const actual = setRecaptchaSuccess()(sampleAPIResponse);
        expect(actual).toEqual(true);
      });
      it('should return false if there is no value', () => {
        const sampleAPIResponse = null;
        const actual = setRecaptchaSuccess()(sampleAPIResponse);
        expect(actual).toEqual(true);
      });
    });

    describe('onChangeUserPassword', () => {
      it('should update password state to the entered password', () => {
        let password = 'p';
        let actual = onChangeUserPassword()(password);
        expect(actual).toEqual(password);
        password = 'pa';
        actual = onChangeUserPassword()(password);
        expect(actual).toEqual(password);
      });
    });

    describe('onChangeUserName', () => {
      it('should update the username state to the entered username',
        () => {
          let username = 'u';
          let actual = onChangeUserName()(username);
          expect(actual).toEqual(username);
          username = 'us';
          actual = onChangeUserName()(username);
          expect(actual).toEqual(username);
        });
    });
  });
  describe('mapStateToProps', () => {
    const state = {
      user: {
        recaptchaSuccess: false,
        recaptchaRequired: false,
      },
    };
    it('should return an object with recaptchaSuccess '
      + 'and recaptchaRequired',
    () => {
      const expected = state.user;
      const actual = mapStateToProps(state);
      expect(actual).toEqual(expected);
    });
  });
  describe('maDispatchToProps', () => {
    const {
      loginHandler,
    } = mapDispatchToProps;
    it('should call action creator', () => {
      const username = 'userName';
      const password = 'password';
      loginHandler({ username, password });
      expect(mockLogInFunction)
        .toHaveBeenCalledWith({ username, password });
    });
  });
});
