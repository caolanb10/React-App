
import {
  put, call, takeEvery, all,
} from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { loginService } from '../feature-login';
import {
  actionNameSpace,
  actionCreators,
  actionTypes,
  initialState,
  reducer,
  performLogin,
  watcherSagas,
} from './ducks';
import { globalActionTypes } from '../global-actions';

describe('ducks', () => {
  describe('actions', () => {
    it('snapshot the actionNameSpace', () => {
      expect(actionNameSpace).toMatchSnapshot();
    });
    it('snapshot the actionTypes', () => {
      expect(actionTypes).toMatchSnapshot();
    });
    describe('actionCreators', () => {
      it('should return an action of type PERFORM LOGIN', () => {
        const args = { userName: 'userName', password: 'password' };
        const expected = {
          type: actionTypes.PERFORM_LOGIN,
          payload: args,
        };
        const actual = actionCreators.performLogin(args);
        expect(actual).toEqual(expected);
      });
      it('should return an action of type SET_RECAPTCHA_REQUIRED', () => {
        const args = { recaptchaRequired: true };
        const expected = {
          type: actionTypes.SET_RECAPTCHA_REQUIRED,
          payload: true,
        };
        const actual = actionCreators.setRecaptchaRequired(args);
        expect(actual).toEqual(expected);
      });
      it('should return an action of type SET_RECAPTCHA_SUCCESS', () => {
        const args = { value: 'sjgfd83405t34tFOHosdg' };
        const expected = {
          type: actionTypes.SET_RECAPTCHA_SUCCESS,
          payload: true,
        };
        const actual = actionCreators.setRecaptchaSuccess(args);
        expect(actual).toEqual(expected);
      });
    });
  });
  describe('state', () => {
    it('snapshot initial state', () => {
      expect(initialState).toMatchSnapshot();
    });
    describe('reducer', () => {
      it('should return the initial state modified by the action '
        + 'payload for recaptchaSuccess', () => {
        const initState = {
          recaptchaRequired: false,
          recaptchaSuccess: false,
        };
        const action = {
          type: actionTypes.SET_RECAPTCHA_SUCCESS,
          payload: true,
        };
        const actual = reducer(initState, action);
        expect(actual).toEqual({
          recaptchaRequired: false,
          recaptchaSuccess: true,
        });
      });
    });
  });
  describe('sagas', () => {
    describe('watcherSaga', () => {
      it('should return the watcher sagas', () => {
        const actual = watcherSagas().next().value;
        expect(actual).toEqual(
          all([takeEvery(actionTypes.PERFORM_LOGIN, performLogin),
          ]),
        );
      });
    });
    describe('performLogin', () => {
      const sagaArgs = { userName: 'userName', password: 'password' };
      it('login successful', () => {
        const mockResponse = {
          data: {
            user: '3123151',
          },
          included: {
            recaptcha_required: false,
          },
        };
        return expectSaga(performLogin, sagaArgs)
          .provide([
            [call(loginService, { method: 'POST', data: sagaArgs }),
              mockResponse],
          ])
          .put({
            type: globalActionTypes.LOG_IN,
            payload: mockResponse.data.user,
          })
          .run();
      });
      it('login unsuccessful', () => {
        const mockResponse = {
          data: {
            user: false,
          },
          included: {
            recaptcha_required: true,
          },
        };
        return expectSaga(performLogin, sagaArgs)
          .provide([
            [call(loginService, { method: 'POST', data: sagaArgs }),
              mockResponse],
          ])
          .put({ type: globalActionTypes.LOG_IN_FAILED })
          .put({
            type: actionTypes.SET_RECAPTCHA_REQUIRED,
            payload: true,
          })
          .put({
            type: actionTypes.SET_RECAPTCHA_SUCCESS,
            payload: false,
          })
          .run();
      });
    });
  });
});
