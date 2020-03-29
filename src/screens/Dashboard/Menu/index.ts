import { createElement, useState } from 'react'
import { Redirect } from 'react-router-dom'

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
