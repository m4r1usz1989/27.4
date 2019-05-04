import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

import { ADD_COMMENT } from './actions'
import { EDIT_COMMENT } from './actions'
import { DELETE_COMMENT } from './actions'
import { LIKE_COMMENT } from './actions'
import { UNLIKE_COMMENT } from './actions'

const initialState = {
    comments: [],
    users: []
};

const app = combineReducers({
    comments,
    users
});