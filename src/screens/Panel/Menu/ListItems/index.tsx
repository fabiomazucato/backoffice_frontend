import React from 'react'
import { Link } from 'react-router-dom'

/* Material UI */
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Icon from '@material-ui/core/Icon'

/* Helper */
import { AccessRoutes } from '../../../../helpers/AccessRoutes'

export const mainListItems = (): any => {
	const routes: Array<any> = AccessRoutes()

	const routesMenu = routes.filter(route => route.menu)
	console.log(routesMenu)

	return (
		<div>
			{routesMenu.map((item: any, index: number): any => (
				// <Link to={item.path}>
				<ListItem button component={Link} to={item.path} key={index}>
					<ListItemIcon>
						<Icon component={item.icon} />
					</ListItemIcon>
					<ListItemText primary={item.name} />
				</ListItem>
				// </Link>
			))}
		</div>
	)
}

export const secondaryListItems = (
	<div>
		{/* <ListSubheader inset>{'Segurança e Privacidade'}</ListSubheader> */}
		<ListItem button>
			<ListItemIcon>
				<AccountCircleIcon />
			</ListItemIcon>
			<ListItemText primary='Minha conta' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<ExitToAppIcon />
			</ListItemIcon>
			<ListItemText primary='Sair' />
		</ListItem>
	</div>
)
