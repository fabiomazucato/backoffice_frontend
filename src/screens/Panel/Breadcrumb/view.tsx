import React from 'react'

/* Material UI */
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'

import { IViewProps } from './types'

function Breadcrumb(props: IViewProps): JSX.Element {
	return (
		<Box>
			<Container maxWidth={undefined}>
				<Breadcrumbs
					separator='›'
					aria-label='breadcrumb'
				></Breadcrumbs>
			</Container>
		</Box>
	)
}

export default Breadcrumb
