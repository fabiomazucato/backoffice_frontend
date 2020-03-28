import React, { Fragment } from 'react'
import { Route, NavLink } from 'react-router-dom'

/* Material UI */
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'

/* Components */
import Routes from '../../config/Routes'
import Header from './Header'
// import Breadcrumb from './Breadcrumb'
import Footer from './Footer'
import Menu from './Menu'

/* Helper */
import { AccessRoutes } from '../../helpers/AccessRoutes'

//https://github.com/mui-org/material-ui/blob/8a3755775e91e457eda4a9a9d15ce07f6606104a/docs/src/pages/getting-started/templates/sign-in-side/SignInSide.js

function Dashboard(props: any): JSX.Element {
	const { classes, open, handleDrawerOpen, handleDrawerClose } = props

	const routes: any = AccessRoutes()

	return (
		<div className={classes.root}>
			<Header
				open={open}
				handleDrawerOpen={handleDrawerOpen}
				handleDrawerClose={handleDrawerClose}
			/>
			<Menu
				open={open}
				handleDrawerOpen={handleDrawerOpen}
				handleDrawerClose={handleDrawerClose}
			/>
			<main className={classes.content}>
				<div className={classes.appBarSpacer}>
					<Container maxWidth='lg' className={classes.container}>
						{routes.map((route: any) => (
							<Route
								key={route.name}
								exact
								path={route.path}
								component={route.component}
							/>
						))}
					</Container>
					{/* <Footer /> */}
				</div>
			</main>
		</div>
	)
}

export default Dashboard
