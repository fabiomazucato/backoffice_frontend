import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from './store'

import { SnackbarProvider } from 'notistack'

/* Material UI */
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'

/* Components */
import Dashboard from './screens/Dashboard'

import theme from './assets/theme'

const app = (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<SnackbarProvider maxSnack={3}>
						<Dashboard />
					</SnackbarProvider>
				</ThemeProvider>
			</BrowserRouter>
		</PersistGate>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))
