import React from 'react'
import { PropagateLoader } from 'react-spinners'

export default function Loader(props: any): JSX.Element {
	const { pixel = 8, color = '#0893E3' } = props

	return (
		<div style={{ paddingTop: 10, paddingBottom: 15 }}>
			<PropagateLoader size={pixel} color={color} loading={true} />
		</div>
	)
}
