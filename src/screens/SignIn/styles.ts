import { makeStyles } from '@material-ui/core/styles'

import backgroundSingin from '../../assets/images/background_singin.jpg'
import branStill from '../../assets/images/brand/still.png'

export const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh'
	},
	image: {
		backgroundImage: `url(${backgroundSingin})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(2)
	},
	avatarImage: {
		height: 120
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}))
