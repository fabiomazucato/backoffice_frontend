import PathRoutes from '../helpers/PathRoutes'
import PathScreens from '../helpers/PathScreens'

export const AccessRoutes = (userType: string = 'ADMIN') => {
	const sharedRoutes = [
		{
			name: 'Home',
			path: PathRoutes.DASHBOARD_HOME,
			component: PathScreens.DASHBOARD_HOME,
			iconType: 'fas',
			icon: 'calendar-alt'
		},
		{
			name: 'Não encontrado',
			path: PathRoutes.DASHBOARD_NOT_FOUND,
			component: PathScreens.DASHBOARD_NOT_FOUND,
			iconType: 'fas',
			icon: 'calendar-alt'
		}
	]
	const routes: any = []

	// if (userType === 'ADMIN') {
	// 	routes.push({
	// 		name: 'Teste',
	// 		path: PathRoutes.DASHBOARD_HOME,
	// 		component: PathScreens.DASHBOARD_HOME,
	// 		iconType: 'fas',
	// 		icon: 'list-alt'
	// 	})
	// }

	routes.push(...sharedRoutes)

	return routes
}
