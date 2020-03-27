import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'

/* Components */
import PropagateLoader from '../../components/PropagateLoader'

import branStill from '../../assets/images/brand/still.png'

import { useStyles } from './styles'
import { IViewProps } from './types'

function SignIn(props: IViewProps): JSX.Element {
	const { setEmail, setPassword, handleAuthenticate, labels, loading } = props

	const classes = useStyles()

	return (
		<Grid container component='main' className={classes.root}>
			<Grid item xs={false} sm={4} md={8} className={classes.image} />
			<Grid
				item
				xs={12}
				sm={8}
				md={4}
				component={Paper}
				elevation={6}
				square
			>
				<div className={classes.paper}>
					<div className={classes.avatar}>
						<img src={branStill} className={classes.avatarImage} />
					</div>
					<Typography component='h1' variant='h5'>
						Login
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							id='email'
							label={labels.email.placeholder}
							name='email'
							autoComplete='email'
							autoFocus
							onChange={e => setEmail(e.target.value)}
						/>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							name='password'
							label={labels.password.placeholder}
							type='password'
							id='password'
							autoComplete='current-password'
							onChange={e => setPassword(e.target.value)}
						/>

						<Button
							type='button'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}
							onClick={handleAuthenticate}
						>
							{!loading ? (
								'Acessar'
							) : (
								<PropagateLoader color={'#fff'} />
							)}
						</Button>
						<Grid container direction='row' justify='flex-end'>
							<Grid item>
								<Link href='#' variant='body2'>
									Esqueceu sua senha?
								</Link>
							</Grid>
						</Grid>
						<Box mt={5}>
							<Typography
								variant='body2'
								color='textSecondary'
								align='center'
							>
								{
									'Solução gerencial integrada e componentes do sistema de '
								}
								<br />
								{
									'gestão financeira, controle de estoque e vendas.'
								}
							</Typography>
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	)
}

export default SignIn
