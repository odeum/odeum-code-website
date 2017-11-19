import React from 'react'
import { ButtonPanel } from 'odeum-ui'
import { AlignCenter, HomepageHeader, HomepageTagLine, HomepageButonsContainer, LinkTo, HomepageButtonSpacer } from './HomepageStyles'
import { LinkButton } from '../../framework/LinkButton'

// const RouteComponent = () => {
// 	return <div>Getting started ...</div>
// }

const Homepage = () => {
	return (
		<div>
			<AlignCenter>
				<HomepageHeader>ODEUM Code</HomepageHeader>
				<HomepageTagLine>A JavaScript framework for building ODEUM Apps with React</HomepageTagLine>
				<HomepageButonsContainer>
					<ButtonPanel>

						<LinkButton label={'Get Started'} icon={'code'} route={'/docs/hello-world'}/>
						<HomepageButtonSpacer />
						<LinkButton label={'Take the Tutorial'} icon={'star'} route={'/tutorial/tutorial'}/>

					</ButtonPanel>
				</HomepageButonsContainer>
				{/* <Route path={'/tutorial/tutorial'} component={RouteComponent} /> */}

			</AlignCenter>
			<div style={{ display: 'flex', lineHeight: '25px', marginTop: '50px', marginBottom: '65px', marginLeft: 'auto', marginRight: 'auto', width: '90%', fontSize: '17px', }}>

				<div style={{ marginLeft: '40px', marginRight: '40px' }}>
					<h3 style={{ fontSize: '24px', fontWeight: '200' }}>Declarative API</h3>
					<p>ODEUM Code makes it super fast to build ODEUM Apps with React. Applying the simplicity of React to design and develop simple application views, ODEUM Code facilitates an <LinkTo to={'/docs/installation'}>easy to use API</LinkTo> for getting your app working in minutes.</p>
					<p>The simple declarative ODEUM Code API will make your code more predictable and easier to debug.</p>
				</div>

				<div style={{  marginLeft: '40px', marginRight: '40px' }}>
					<h3 style={{ fontSize: '24px', fontWeight: '200' }}>Component-Based</h3>
					<p>ODEUM Code evolves from the same component model React introduces, alloving you to build encapsulated components that manage their own state, and then compose them to create the UI of your App.</p>
					<p>Decompose design workspaces and put everything neatly into our <LinkTo to={'/docs/installation'}>Menu</LinkTo> and <LinkTo to={'/tutorial/tutorial'}>Tab</LinkTo> containers.</p>
				</div>

				<div style={{ marginLeft: '40px', marginRight: '40px' }}>
					<h3 style={{ fontSize: '24px', fontWeight: '200' }}>Fast Frontend Development</h3>
					<p>By introducing not only the basic framework of your Web App, but also a plethora of <LinkTo to={'/docs/installation'}>ready-made UI components</LinkTo>, you can build frontends for Web Apps and websites pretty fast. Reuse existing React components and apply our responsive component model to ensure perfect rendering on all devices.</p>
					<p>Through framework and visual UI primitives ODEUM Code is scaffolding your Web App with a quick launch in sight.</p>
				</div>

			</div>
		</div>
	)
}

export default Homepage
