import { store } from '../store'
import { Creators as LoadingActions } from '../store/ducks/loading'

import { HttpCodes } from '../constants/http'
import { HandleNotification } from '../helpers/HandleNotification'

export const HandleError = (err: any): void => {
	console.log({ err })
	if (!err || !err.response || !err.response.status) {
		HandleNotification('ERROR', 'Erro de conexão...')

		store.dispatch(LoadingActions.stopLoading())
		throw ''
	}

	if (err.response.status === HttpCodes.APPLICATION_EXCEPTION) {
		HandleNotification('ERROR', err.response.data.error.message)

		store.dispatch(LoadingActions.stopLoading())
		throw ''
	}

	if (err.response.status === HttpCodes.NOT_FOUND) {
		HandleNotification('ERROR', 'Servidor indisponível...!')
		throw ''
	}
	if (err.response.status === HttpCodes.INTERNAL_SERVER_ERROR) {
		HandleNotification('ERROR', 'Servidor indisponível...')

		store.dispatch(LoadingActions.stopLoading())
		throw ''
	}
	if (err.response.status === HttpCodes.BAD_REQUEST) {
		throw err.response.data.content
	}

	throw ''
}
