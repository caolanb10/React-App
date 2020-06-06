const actionNamespace = 'GLOBAL';

const globalActionTypes = {
  LOG_IN: `${actionNamespace}/LOG_IN`,
  LOG_IN_FAILED: `${actionNamespace}/LOG_IN_FAILED`,
};

const globalActions = {
  login: ({ user }) => ({ type: globalActionTypes.LOG_IN, payload: user }),
  loginFailed: () => ({ type: globalActionTypes.LOG_IN_FAILED }),
};

export { globalActionTypes, globalActions };
