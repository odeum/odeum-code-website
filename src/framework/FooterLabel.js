import React from 'react'

export const handleLink = () => {
	return '/'
}

export const RenderFooterLabel = () => {
	const date = new Date()
	return (
		<div>
			<strong>ODEUM Code</strong> v0.2.22 © Copyright
			{' '}{date.getFullYear()}
		</div>
	)
}