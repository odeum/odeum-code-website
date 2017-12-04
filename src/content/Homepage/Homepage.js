import React from 'react'
import { ButtonPanel, LinkButton } from 'odeum-ui'
import {
	AlignCenter,
	HomepageHeader,
	HomepageTagLine,
	HomepageButonsContainer,
	LinkTo,
	HomepageButtonSpacer,
	HomepageFlexContainer,
	HomepageBox,
	HomepageSectionHeader,
	HomepageSection
} from './HomepageStyles'
import { Flex, Box } from 'grid-styled'

const Homepage = () => {
	return (
		<div>
			<AlignCenter>
				<Flex wrap>
					<Box width={[1]} pl={[10]} pr={[10]}>
						<HomepageHeader>ODEUM Code</HomepageHeader>
						<HomepageTagLine>A JavaScript framework for building ODEUM Apps with React</HomepageTagLine>
					</Box>
					<Box width={[1]} pl={[0, 10]} pr={[0, 10]}>
						<HomepageButonsContainer>
							<ButtonPanel>
								<LinkButton label={'Get Started'} icon={'code'} route={'/docs/hello-world'} color={'#13A085'} />
								<HomepageButtonSpacer />								
								<LinkButton label={'Take the Tutorial'} icon={'star'} route={'/tutorial/tutorial'} />
							</ButtonPanel>
						</HomepageButonsContainer>
					</Box>
				</Flex>
			</AlignCenter>

			<HomepageFlexContainer wrap>
				<HomepageBox width={[1, 1, 1, 1 / 2, 1 / 3]} pl={[0, 0, 0, 10, 10]} pr={[0, 0, 0, 10, 10]}>
					<HomepageSectionHeader>Declarative API</HomepageSectionHeader>
					<HomepageSection>ODEUM Code makes it super fast to build ODEUM Apps with React. Applying the simplicity of React to design and develop simple application views, ODEUM Code facilitates an <LinkTo to={'/docs/installation'}>Easy to use API</LinkTo> for getting your app working in minutes.</HomepageSection>
					<HomepageSection>The simple declarative ODEUM Code API will make your code more predictable and easier to debug.</HomepageSection>
				</HomepageBox>

				<HomepageBox width={[1, 1, 1, 1 / 2, 1 / 3]} pl={[0, 0, 0, 10, 10]} pr={[0, 0, 0, 10, 10]}>
					<HomepageSectionHeader>Component-Based</HomepageSectionHeader>
					<HomepageSection>ODEUM Code evolves from the same component model React introduces, alloving you to build encapsulated components that manage their own state, and then compose them to create the UI of your App.</HomepageSection>
					<HomepageSection>Decompose design workspaces and put everything neatly into our <LinkTo to={'/docs/installation'}>Menu</LinkTo> and <LinkTo to={'/tutorial/tutorial'}>Tab</LinkTo> containers.</HomepageSection>
				</HomepageBox>

				<HomepageBox width={[1, 1, 1, 1, 1 / 3]} pl={[0, 0, 0, 10, 10]} pr={[0, 0, 0, 10, 10]}>
					<HomepageSectionHeader>Fast Frontend Development</HomepageSectionHeader>
					<HomepageSection>By introducing not only the basic framework of your Web App, but also a plethora of <LinkTo to={'/docs/installation'}>Ready-made UI components</LinkTo>, you can build frontends for Web Apps and websites pretty fast. Reuse existing React components and apply our responsive component model to ensure perfect rendering on all devices.</HomepageSection>
					<HomepageSection>Through framework and visual UI primitives ODEUM Code is scaffolding your Web App with a quick launch in sight.</HomepageSection>
				</HomepageBox>
			</HomepageFlexContainer>
		</div>
	)
}

export default Homepage
