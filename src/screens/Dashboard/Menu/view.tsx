import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'

/* Material UI */
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import { mainListItems, secondaryListItems } from './ListItems'

import { IViewProps } from './types'

function MenuView(props: IViewProps): JSX.Element {
	const { classes, open, handleDrawerOpen, handleDrawerClose } = props

	return (
		<Drawer
			variant='permanent'
			classes={{
				paper: clsx(
					classes.drawerPaper,
					!open && classes.drawerPaperClose
				)
			}}
			open={open}
		>
			<div className={classes.toolbarIcon}>
				<IconButton onClick={handleDrawerClose}>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<Divider />
			<List>{mainListItems}</List>
			<Divider />
			<List>{secondaryListItems}</List>
		</Drawer>
	)
}

export default MenuView
