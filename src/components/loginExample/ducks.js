import {
  call, put, takeEvery, takeLatest,
} from 'redux-saga/effects';

export const actionNameSpace = 'LOGIN';

export const actionTypes = {
  PERFORM_LOGIN: `${actionNameSpace}/PERFORM_LOGIN`,
  SET_RECAPTCHA_REQUIRED: `${actionNameSpace}/SET_RECAPTCHA_REQUIRED`,
};

export const initialState = {
  recaptchaRequired: false,
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
    default:
      return state;
  }
};

export const actionCreators = {
  performLogin: ({ userName, password }) => ({
    type: actionTypes.PERFORM_LOGIN,
    userName,
    password,
  }),
};

export const watcherSagas = {

};

export const onRoute = {

};

export const workerSagas = {

};

export const selectors = {};
