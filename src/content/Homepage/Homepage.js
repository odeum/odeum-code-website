import React from 'react'
import { AlignCenter, HomepageHeader, HomepageTagLine, LinkTo } from './HomepageStyles'

// const RouteComponent = () => {
// 	return <div>Getting started ...</div>
// }

const Homepage = () => {
	return (
		<div>
			<AlignCenter>
				<HomepageHeader>ODEUM CODE</HomepageHeader>
				<HomepageTagLine>A JavaScript framework for building ODEUM Apps with React</HomepageTagLine>
				<p><LinkTo to={'/tutorial/tutorial'}>Get Started</LinkTo></p>
				{/* <Route path={'/tutorial/tutorial'} component={RouteComponent} /> */}
			</AlignCenter>
			<div style={{ display: 'flex', lineHeight: '25px', marginTop: '60px', marginBottom: '65px' }}>

				<div style={{ marginLeft: '40px' }}>
					<h3>Rapid Application Development</h3>
					<p>ODEUM Code makes it lightning fast to build ODEUM Apps with React. Applying the simplicity of React to design and develop simple application views, ODEUM Code facilitates an <LinkTo to={'/docs/installation'}>easy to use API</LinkTo> for getting your app working in minutes.</p>
					<p>A simple declarative API will make your code more predictable and easier to debug.</p>
				</div>

				<div style={{  marginLeft: '40px' }}>
					<h3>Component-Based</h3>
					<p>ODEUM Code evolves from the same compositional component model React introduces, alloving you to build encapsulated components that manage their own state, and then compose them to create the UI of your App.</p>
					<p>Start out with decomposing your App design workspaces and put everything neatly into our <LinkTo to={'/docs/installation'}>Menu</LinkTo> and <LinkTo to={'/tutorial/tutorial'}>Tab</LinkTo> containers and you're ready to launch your new web app.</p>
				</div>

				<div style={{ marginLeft: '40px' }}>
					<h3>Faster Frontend Development</h3>
					<p>By introducing not only the basic framework of your Web App, but also a bunch of <LinkTo to={'/docs/installation'}>ready-made UI components</LinkTo>, you can build frontends for Web Apps and websites pretty fast. You can reuse existing React components and simply apply our responsive component model to ensure perfect rendering on all devices.</p>
					<p>React can also render on the server using Node and power mobile apps using React Native.</p>
				</div>

			</div>
		</div>
	)
}

export default Homepage
