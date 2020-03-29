import PathRoutes from '../helpers/PathRoutes'
import PathScreens from '../helpers/PathScreens'

/* Material UI */
import DashboardIcon from '@material-ui/icons/Dashboard'
import HomeIcon from '@material-ui/icons/Home'
import StoreIcon from '@material-ui/icons/Store'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import LoyaltyIcon from '@material-ui/icons/Loyalty'
import AccountTreeIcon from '@material-ui/icons/AccountTree'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import MapIcon from '@material-ui/icons/Map'
import RoomIcon from '@material-ui/icons/Room'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ListAltIcon from '@material-ui/icons/ListAlt'

export const AccessRoutes = (userType: string = 'ADMIN') => {
	const sharedRoutes = [
		{
			name: 'Home',
			path: PathRoutes.PANEL_HOME,
			component: PathScreens.PANEL_HOME,
			iconType: '',
			icon: HomeIcon,
			menu: true
		},
		{
			name: 'Redes e Lojas',
			path: PathRoutes.PANEL_SUPERMARKET_CHAIN,
			component: PathScreens.PANEL_SUPERMARKET_CHAIN,
			iconType: '',
			icon: StoreIcon,
			menu: true
		},
		{
			name: 'Colaboradores',
			path: PathRoutes.PANEL_COLLABORATOR,
			component: PathScreens.PANEL_COLLABORATOR,
			iconType: '',
			icon: AssignmentIndIcon,
			menu: true
		},
		{
			name: 'Condutores',
			path: PathRoutes.PANEL_CONDUCTOR,
			component: PathScreens.PANEL_CONDUCTOR,
			iconType: '',
			icon: PeopleAltIcon,
			menu: true
		},
		{
			name: 'Veículos',
			path: PathRoutes.PANEL_VEHICLE,
			component: PathScreens.PANEL_VEHICLE,
			iconType: '',
			icon: DriveEtaIcon,
			menu: true
		},
		{
			name: 'Marcas',
			path: PathRoutes.PANEL_PRODUCT_BRAND,
			component: PathScreens.PANEL_PRODUCT_BRAND,
			iconType: '',
			icon: LoyaltyIcon,
			menu: true
		},
		{
			name: 'Categorias de produtos',
			path: PathRoutes.PANEL_CATEGORY_PRODUCT,
			component: PathScreens.PANEL_CATEGORY_PRODUCT,
			iconType: '',
			icon: AccountTreeIcon,
			menu: true
		},
		{
			name: 'Produtos',
			path: PathRoutes.PANEL_PRODUCT,
			component: PathScreens.PANEL_PRODUCT,
			iconType: '',
			icon: LocalOfferIcon,
			menu: true
		},
		{
			name: 'Roteiros',
			path: PathRoutes.PANEL_ROUTER,
			component: PathScreens.PANEL_ROUTER,
			iconType: '',
			icon: MapIcon,
			menu: true
		},
		{
			name: 'Destinos',
			path: PathRoutes.PANEL_ROUTER_DESTINATION,
			component: PathScreens.PANEL_ROUTER_DESTINATION,
			iconType: '',
			icon: RoomIcon,
			menu: true
		},
		{
			name: 'Clientes',
			path: PathRoutes.PANEL_CUSTOMER,
			component: PathScreens.PANEL_CUSTOMER,
			iconType: '',
			icon: BusinessCenterIcon,
			menu: true
		},
		{
			name: 'Pedidos',
			path: PathRoutes.PANEL_ORDER,
			component: PathScreens.PANEL_ORDER,
			iconType: '',
			icon: ListAltIcon,
			menu: true
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
