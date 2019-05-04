import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { reducer as reduxFormReducer } from 'redux-form';
import { i18nReducer } from 'react-redux-i18n';

const rootReducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  authentication,
  registration,
  users,
  alert,
  i18n: i18nReducer,
});

export default rootReducer;