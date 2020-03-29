import { createElement } from 'react'

import { IProps } from './types'
import View from './view'
import { useStyles } from './styles'

function ProductContainer(props: IProps): JSX.Element {
	const classes = useStyles()

	const viewProps = {
		classes
	}

	return createElement(View, viewProps)
}

export default ProductContainer
