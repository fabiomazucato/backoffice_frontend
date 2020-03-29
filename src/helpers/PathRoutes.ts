export default class PathRoutes {
	public static readonly SIGN_IN: string = '/sign-in'
	public static readonly RECOVER_PASSWORD: string = '/recover-password'
	public static readonly CHANGE_PASSWORD: string = '/change-password'
	public static readonly NOT_FOUND: string = '/404'

	public static readonly DASHBOARD: string = '/dashboard'
	public static readonly DASHBOARD_HOME: string = `${PathRoutes.DASHBOARD}/home`
	public static readonly DASHBOARD_NOT_FOUND: string = `${PathRoutes.DASHBOARD}/404`
}
