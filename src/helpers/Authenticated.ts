import { store } from '../store'

export const isAuthenticated: any = () => {
	const accessToken: any = store.getState().token.accessToken
	const refreshToken: any = store.getState().token.refreshToken
	const user: any = store.getState().user

	console.log('isAuthenticated', user)

	// if (
	// 	!accessToken &&
	// 	accessToken.length === 0 &&
	// 	!refreshToken &&
	// 	refreshToken.length === 0
	// ) {
	// 	return false
	// }

	if (!user.id) return false

	return true
}
