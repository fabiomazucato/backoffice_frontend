export interface IProps {}
export interface IViewProps {
	[x: string]: any
	classes: any
	open: boolean
	handleDrawerOpen: () => void
	handleDrawerClose: () => void
}
