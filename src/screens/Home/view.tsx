import React from 'react'

/* Material UI */
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
// import Chart from './Chart'
// import Deposits from './Deposits'
// import Orders from './Orders'

import { IViewProps } from './types'

function Home(props: IViewProps): JSX.Element {
	const { classes } = props

	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={8} lg={9}>
				<Paper className={fixedHeightPaper}>{/* <Chart /> */}</Paper>
			</Grid>

			<Grid item xs={12} md={4} lg={3}>
				<Paper className={fixedHeightPaper}>{/* <Deposits /> */}</Paper>
			</Grid>

			<Grid item xs={12}>
				<Paper className={classes.paper}>{/* <Orders /> */}</Paper>
			</Grid>
		</Grid>
	)
}

export default Home
