import { createActions, createReducer } from 'reduxsauce'
import { IToken } from '../../models/Token'

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
	saveAccess: ['value'],
	saveRefresh: ['value'],
	resetToken: []
})

/**
 * Handlers
 */
const INITIAL_STATE: IToken = {
	accessToken: '',
	refreshToken: ''
}

const saveAccessToken = (state = INITIAL_STATE, action: any) => ({
	...state,
	accessToken: action.value
})
const saveRefreshToken = (state = INITIAL_STATE, action: any) => ({
	...state,
	refreshToken: action.value
})
const resetAllTokens = (state = INITIAL_STATE, action: any) => ({
	...state,
	accessToken: '',
	refreshToken: ''
})

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
	[Types.SAVE_ACCESS as string]: saveAccessToken,
	[Types.SAVE_REFRESH as string]: saveRefreshToken,
	[Types.RESET_TOKEN as string]: resetAllTokens
})
