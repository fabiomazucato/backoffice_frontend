import { createActions, createReducer } from 'reduxsauce'
import { IUser } from '../../models/User'

/**
 * Action types & creators
 */

export const { Types, Creators } = createActions({
	updateUser: ['user'],
	resetUser: []
})

/**
 * Handlers
 */
/**
 * Handlers
 */
const INITIAL_STATE: IUser = {
	id: '',
	name: '',
	email: '',
	password: '',
	phone: ''
}

const update = (state = INITIAL_STATE, action: any) => ({
	...state,
	...action.user
})

const reset = (state = INITIAL_STATE, action: any) => ({
	...state,
	id: '',
	name: '',
	email: '',
	password: '',
	phone: ''
})

/**
 * Reducer
 */
export const HANDLERS: any = {
	[Types.UPDATE_USER as string]: update,
	[Types.RESET_USER as string]: reset
}

export default createReducer(INITIAL_STATE, HANDLERS)
