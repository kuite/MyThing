import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  authentication,
  registration,
  users,
  alert
});

export default rootReducer;