import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

/* screens */
import SignIn from '../screens/SignIn'
import NotFound from '../screens/NotFound'

function Routes(): JSX.Element {
	return (
		<Switch>
			<Route path='/' exact render={() => <Redirect to='/SignIn' />} />
			<Route path='/SignIn' exact component={SignIn} />
			<Route path='/404' exact component={NotFound} />
			<Redirect from='*' to='/404' />
		</Switch>
	)
}

export default Routes
