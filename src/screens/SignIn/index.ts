import { createElement, useState, useEffect } from 'react'
import { useSnackbar } from 'notistack'

/* Redux */
import { useSelector, useDispatch } from 'react-redux'
import { Creators as userActions } from '../../store/ducks/user'
import { IApplicationState } from '../../store/types'

/* Model */
import { IUser } from '../../models/User'

/* Helpers */
import PathRoutes from '../../helpers/PathRoutes'

/* Contants */
import { typesNotification } from '../../constants/typesNotification'

import { IProps } from './types'
import View from './view'

function SignInContainer(props: IProps): JSX.Element {
	const dispatch = useDispatch()
	const { enqueueSnackbar } = useSnackbar()

	const [loading, setLoading] = useState(false)
	const [isActive, setIsActive] = useState(true)
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
						variant: typesNotification.ERROR
					})

					setLoading(false)
				}, 3000)
				return
			}

			const user: IUser = {
				id: String(Math.random()),
				name: 'Administrador',
				email,
				password
			}
			dispatch(userActions.updateUser(user))

			setTimeout(() => {
				setLoading(false)
				enqueueSnackbar('Você será redirecionado para o dashboard.', {
					variant: typesNotification.SUCCESS
				})

				props.history.push(PathRoutes.DASHBOARD_HOME)
			}, 3000)
		} catch (err) {
			setLoading(false)
			enqueueSnackbar(`Aconteceu um erro: ${err}`, {
				variant: typesNotification.ERROR
			})
		}
	}

	const handleAuthenticate = (): void => {
		if (!email && !password) return
		setLoading(true)
		fetchAuthenticate()
	}

	useEffect(() => {
		setIsActive(!(email.length > 5 && password.length > 5))
	}, [email, password])

	// useEffect(() => {
	// 	dispatch(userActions.resetUser())
	// })

	const viewProps = {
		email,
		password,
		setEmail,
		setPassword,
		handleAuthenticate,
		labels,
		loading,
		isActive
	}

	return createElement(View, viewProps)
}

export default SignInContainer
