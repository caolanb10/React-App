import {
  all, call, put, takeEvery,
} from 'redux-saga/effects';
import { globalActions } from '@feature-global-actions';
import { loginService } from '@feature-login';

export const actionNameSpace = 'LOGIN';
export const actionTypes = {
  PERFORM_LOGIN: `${actionNameSpace}/PERFORM_LOGIN`,
  SET_RECAPTCHA_REQUIRED: `${actionNameSpace}/SET_RECAPTCHA_REQUIRED`,
  // SET_RECAPTCHA_SUCCESS: `${actionNameSpace}/SET_RECAPTCHA_SUCCESS`,
};

export const initialState = {
  recaptchaRequired: false,
  // recaptchaSuccess: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PERFORM_LOGIN:
      return {
        ...state,
        loginSuccess: action.payload,
      };
    case actionTypes.SET_RECAPTCHA_REQUIRED:
      return {
        ...state,
        recaptchaRequired: action.payload,
      };
    /*
    case actionTypes.SET_RECAPTCHA_SUCCESS:
      return {
        ...state,
        recaptchaSuccess: action.payload,
      };
      */
    default:
      return state;
  }
};

export const actionCreators = {
  performLogin: ({ userName, password }) => ({
    type: actionTypes.PERFORM_LOGIN,
    payload: {
      userName,
      password,
    },
  }),
  setRecaptchaRequired: ({ recaptchaRequired }) => ({
    type: actionTypes.SET_RECAPTCHA_REQUIRED,
    payload: recaptchaRequired,
  }),
  /*
  setRecaptchaSuccess: ({ value }) => ({
    type: actionTypes.SET_RECAPTCHA_SUCCESS,
    payload: value,
  })
  */
};

export function* performLogin({ userName, password }) {
  const response = yield call(loginService('POST', { userName, password }));
  const {
    data: {
      user,
    },
    included: {
      recaptchaRequired,
    },
  } = response;
  if (user) {
    yield put(globalActions.login({ user }));
  } else {
    yield put(globalActions.loginFailed);

    // recaptchaRequired from the response will resolve to true or false
    yield put(actionCreators.setRecaptchaRequired({ recaptchaRequired }));
    // yield put(actionCreators.setRecaptchaSuccess({ payload: false });
  }
}

export function* onRoute() {}

export function* watcherSagas() {
  yield all([
    takeEvery(actionTypes.PERFORM_LOGIN, performLogin),
  ]);
}

export const selectors = {};
