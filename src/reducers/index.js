import { combineReducers } from 'redux';

import fieldsReducer from './fields';
import requestsReducer from './requests';

export default combineReducers({
    fields: fieldsReducer,
    requests: requestsReducer,
});
