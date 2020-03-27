import { IUser } from '../../models/User'

export interface IProps {}

export interface IViewProps {
	[x: string]: any
	email: string
	password: string

	setEmail: (field: string) => void
	setPassword: (field: string) => void

	handleAuthenticate: () => void

	labels: any
	loading: boolean
}
