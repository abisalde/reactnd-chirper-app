import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading';

import authUser from './authedUser';
import users from './users';
import tweets from './tweets';

export default combineReducers({
    authUser,
    users,
    tweets,
    loadingBar,
});
