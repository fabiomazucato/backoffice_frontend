import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

/* Helpers */
import PathRoutes from '../helpers/PathRoutes'
import PathScreens from '../helpers/PathScreens'
import { isAuthenticated } from '../helpers/Authenticated'

const PrivateRoute = ({ component: Component, ...rest }: any): JSX.Element => (
	<Route
		{...rest}
		render={(props): JSX.Element => {
			return isAuthenticated() ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: PathRoutes.SIGN_IN,
						state: {
							from: props.location
						}
					}}
				/>
			)
		}}
	/>
)

function Routes(): JSX.Element {
	return (
		<HashRouter basename={'/'}>
			<Switch>
				<Route
					path={PathRoutes.SIGN_IN}
					exact
					component={PathScreens.SIGN_IN}
				/>
				<PrivateRoute
					path={PathRoutes.DASHBOARD}
					component={PathScreens.DASHBOARD}
				/>
				<Redirect from='*' to={PathRoutes.SIGN_IN} />
			</Switch>
		</HashRouter>
	)
}

export default Routes
