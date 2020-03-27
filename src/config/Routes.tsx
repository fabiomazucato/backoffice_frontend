import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

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
		<Switch>
			<Route
				path='/'
				exact
				render={() => <Redirect to={PathRoutes.SIGN_IN} />}
			/>
			<Route
				path={PathRoutes.SIGN_IN}
				exact
				component={PathScreens.SIGN_IN}
			/>
			<PrivateRoute
				path={PathRoutes.DASHBOARD}
				component={PathRoutes.DASHBOARD}
			/>
			<Route
				path={PathRoutes.NOT_FOUND}
				exact
				component={PathScreens.NOT_FOUND}
			/>
			<Redirect from='*' to={PathRoutes.NOT_FOUND} />
		</Switch>
	)
}

export default Routes
