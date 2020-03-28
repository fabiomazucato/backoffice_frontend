/* screens */
import SignIn from '../screens/SignIn'
import NotFound from '../screens/NotFound'

import Dashboard from '../screens/Dashboard'
import Home from '../screens/Home'

export default class PathScreens {
	public static readonly SIGN_IN: any = SignIn
	public static readonly NOT_FOUND: any = NotFound

	public static readonly DASHBOARD: any = Dashboard
	public static readonly DASHBOARD_HOME: any = Home
	public static readonly DASHBOARD_NOT_FOUND: any = NotFound
}
