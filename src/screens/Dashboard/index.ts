import { createElement, useState } from 'react'

import { IProps } from './types'
import View from './view'
import { useStyles } from './styles'

function DashboardContainer(props: IProps): JSX.Element {
	const classes = useStyles()

	const [open, setOpen] = useState(true)

	const handleDrawerOpen = () => {
		setOpen(true)
	}
	const handleDrawerClose = () => {
		setOpen(false)
	}

	const viewProps = {
		classes,
		open,
		handleDrawerOpen,
		handleDrawerClose
	}

	return createElement(View, viewProps)
}

export default DashboardContainer
