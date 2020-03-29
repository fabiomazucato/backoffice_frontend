import { IUser } from '../models/User'
import { IToken } from '../models/Token'

export interface IApplicationState {
	user: IUser
	token: IToken
	loading: boolean
}
