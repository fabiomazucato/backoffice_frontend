/* screens */
import SignIn from '../screens/SignIn'
import SignOut from '../screens/SignOut'
import NotFound from '../screens/NotFound'

import Panel from '../screens/Panel'
import Home from '../screens/Home'
import SupermarketChain from '../screens/SupermarketChain'
import Collaborator from '../screens/Collaborator'
import Conductor from '../screens/Conductor'
import Vehicle from '../screens/Vehicle'
import CategoryProduct from '../screens/CategoryProduct'
import ProductBrand from '../screens/ProductBrand'
import Product from '../screens/Product'
import Router from '../screens/Router'
import RouterDestination from '../screens/RouterDestination'
import RouteEvent from '../screens/RouteEvent'
import Customer from '../screens/Customer'
import Order from '../screens/Order'
import Profile from '../screens/Profile'

export default class PathScreens {
	public static readonly SIGN_IN: any = SignIn
	public static readonly SIGN_OUT: any = SignOut
	public static readonly NOT_FOUND: any = NotFound

	public static readonly PANEL: any = Panel
	public static readonly PANEL_HOME: any = Home
	public static readonly PANEL_SUPERMARKET_CHAIN: any = SupermarketChain
	public static readonly PANEL_COLLABORATOR: any = Collaborator
	public static readonly PANEL_CONDUCTOR: any = Conductor
	public static readonly PANEL_VEHICLE: any = Vehicle
	public static readonly PANEL_CATEGORY_PRODUCT: any = CategoryProduct
	public static readonly PANEL_PRODUCT_BRAND: any = ProductBrand
	public static readonly PANEL_PRODUCT: any = Product
	public static readonly PANEL_ROUTER: any = Router
	public static readonly PANEL_ROUTER_DESTINATION: any = RouterDestination
	public static readonly PANEL_ROUTE_EVENT: any = RouteEvent
	public static readonly PANEL_CUSTOMER: any = Customer
	public static readonly PANEL_ORDER: any = Order

	public static readonly PANEL_PROFILE: any = Profile
}
