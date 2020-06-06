// sample response
// 3 wrong cased, 1 right
const sampleResponse = {
  data: {
    display_name: 'cbarry',
    username: 'barryc10',
    email_address: 'barryc10@email.com',
    wrong_cased_variable: 'wrong',
  },
  included: {
    user_id: '123133',
  },
};

// Current Solution
const response = yield call(API);
const {
  display_name: displayName,
  email_address: emailAddress,
  wrong_cased_variable: wrongCasedVariable,
  username,
} = response;
const preferences = {
  displayName,
  emailAddress,
  wrongCasedVariable,
  username,
};
yield put(actions.setPreferences(preferences));


// Proposed Solution
import { camelCase } from 'feature-api-util';
const preferences = camelCase(yield call(API));
yield put(actions.setPreferences(preferences));
