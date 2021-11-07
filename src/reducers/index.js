import { combineReducers } from 'redux';

import authUser from './authedUser';
import users from './users';
import tweets from './tweets';

export default combineReducers({
    authUser,
    tweets,
    users,
});
