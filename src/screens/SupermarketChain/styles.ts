import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme =>
	// console.log(theme),
	({
		paper: {
			padding: theme.spacing(2),
			display: 'flex',
			overflow: 'auto',
			flexDirection: 'column'
		},
		fixedHeight: {
			height: 240
		}
	})
)
