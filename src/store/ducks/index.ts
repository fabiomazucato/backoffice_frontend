import { combineReducers } from 'redux'

import user from './user'
import token from './token'
import loading from './loading'

export default combineReducers({
	user,
	token,
	loading
})
