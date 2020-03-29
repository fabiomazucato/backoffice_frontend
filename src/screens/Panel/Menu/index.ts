import { createElement, useState } from 'react'

import { IProps } from './types'
import View from './view'
import { useStyles } from './styles'

function MenuContainer(props: IProps): JSX.Element {
	const { open, handleDrawerOpen, handleDrawerClose } = props

	const classes = useStyles()

	const viewProps = {
		classes,
		open,
		handleDrawerOpen,
		handleDrawerClose
	}

	return createElement(View, viewProps)
}
export default MenuContainer
