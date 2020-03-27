import React, { Fragment } from 'react'

/* Material UI */
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'

/* Components */
import Routes from '../../config/Routes'
import Header from './Header'
import Breadcrumb from './Breadcrumb'
import Footer from './Footer'
import Menu from './Menu'

//https://github.com/mui-org/material-ui/blob/8a3755775e91e457eda4a9a9d15ce07f6606104a/docs/src/pages/getting-started/templates/sign-in-side/SignInSide.js

const isAuthenticated = (): boolean => {
	return false
}

function Dashboard(): JSX.Element {
	return (
		<Fragment>
			{isAuthenticated() ? (
				<Fragment>
					<Header />
					<Breadcrumb />
					<Menu />
					<Container maxWidth='lg'>
						<Routes />
					</Container>
					<Footer />
				</Fragment>
			) : (
				<Routes />
			)}
		</Fragment>
	)
}

export default Dashboard
