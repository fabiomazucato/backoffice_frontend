export interface IProps {
	open: boolean
	handleDrawerOpen: () => void
	handleDrawerClose: () => void
}
export interface IViewProps {
	[x: string]: any
	classes: any
	open: boolean
	handleDrawerOpen: () => void
	handleDrawerClose: () => void
}
