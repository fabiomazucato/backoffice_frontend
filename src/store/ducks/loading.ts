import { createActions, createReducer } from 'reduxsauce'

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
	initLoading: [],
	stopLoading: []
})

/**
 * Handlers
 */
const INITIAL_STATE: boolean = false

const init = (state = INITIAL_STATE, action: any) => true
const stop = (state = INITIAL_STATE, action: any) => false

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
	[Types.INIT_LOADING as string]: init,
	[Types.STOP_LOADING as string]: stop
})
