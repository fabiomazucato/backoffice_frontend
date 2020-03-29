import { createElement, useEffect, useState } from 'react'

import View from './view'

function BreadcrumbContainer(): JSX.Element {
	const viewProps = {}

	return createElement(View, viewProps)
}

export default BreadcrumbContainer
