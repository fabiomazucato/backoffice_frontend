import { createElement, useState } from 'react'
import { useSnackbar } from 'notistack'

/* Redux */
import { useSelector, useDispatch } from 'react-redux'
import { Creators as userActions } from '../../store/ducks/user'
import { IApplicationState } from '../../store/types'

/* Model */
import { IUser } from '../../models/User'

import View from './view'

function SignInContainer(): JSX.Element {
	const { enqueueSnackbar } = useSnackbar()
	const dispatch = useDispatch()

	const [loading, setLoading] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const labels = {
		email: { placeholder: 'E-mail', icon: 'at', order: 0 },
		password: { placeholder: 'Senha', icon: 'user', order: 1 }
	}

	/**
	 * Fetch API Peoples
	 */
	const fetchAuthenticate = async (): Promise<void> => {
		try {
			if (email !== 'admin@still.com.br' || password !== '123456') {
				setTimeout(() => {
					enqueueSnackbar('Login e/ou senha incorretos', {
						variant: 'error'
					})
					setLoading(false)
				}, 3000)
				return
			}

			// dispatch(
			// 	userActions.update({
			// 		id: Math.random(),
			// 		name: 'Administrador',
			// 		email,
			// 		password
			// 	})
			// )

			setTimeout(() => {
				setLoading(false)
				enqueueSnackbar('Você será redirecionado para o dashboard.', {
					variant: 'success'
				})
			}, 3000)
		} catch (err) {
			enqueueSnackbar(`Aconteceu um erro: ${err}`, {
				variant: 'error'
			})
		}
	}

	const handleAuthenticate = (): void => {
		if (!email && !password) return
		setLoading(true)
		fetchAuthenticate()
	}

	const viewProps = {
		email,
		password,
		setEmail,
		setPassword,
		handleAuthenticate,
		labels,
		loading
	}

	return createElement(View, viewProps)
}

export default SignInContainer
