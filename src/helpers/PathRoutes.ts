export default class PathRoutes {
	public static readonly SIGN_IN: string = '/sign-in'
	public static readonly SIGN_OUT: string = '/sign-out'
	public static readonly RECOVER_PASSWORD: string = '/recover-password'
	public static readonly CHANGE_PASSWORD: string = '/change-password'
	public static readonly NOT_FOUND: string = '/404'

	public static readonly PANEL: string = '/panel'
	public static readonly PANEL_HOME: string = `${PathRoutes.PANEL}/home`
	public static readonly PANEL_SUPERMARKET_CHAIN: string = `${PathRoutes.PANEL}/supermarket-chain`
	public static readonly PANEL_COLLABORATOR: string = `${PathRoutes.PANEL}/collaborator`
	public static readonly PANEL_CONDUCTOR: string = `${PathRoutes.PANEL}/conductor`
	public static readonly PANEL_VEHICLE: string = `${PathRoutes.PANEL}/vehicle`
	public static readonly PANEL_CATEGORY_PRODUCT: string = `${PathRoutes.PANEL}/category-product`
	public static readonly PANEL_PRODUCT_BRAND: string = `${PathRoutes.PANEL}/product-brand`
	public static readonly PANEL_PRODUCT: string = `${PathRoutes.PANEL}/product`
	public static readonly PANEL_ROUTER: string = `${PathRoutes.PANEL}/router`
	public static readonly PANEL_ROUTER_DESTINATION: string = `${PathRoutes.PANEL}/router-destination`
	public static readonly PANEL_ROUTE_EVENT: string = `${PathRoutes.PANEL}/route-event`
	public static readonly PANEL_CUSTOMER: string = `${PathRoutes.PANEL}/customer`
	public static readonly PANEL_ORDER: string = `${PathRoutes.PANEL}/order`

	public static readonly PANEL_PROFILE: string = `${PathRoutes.PANEL}/profile`
}
