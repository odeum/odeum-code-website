import React, { Component } from 'react'
import { 
	AppContainer,
	Header, 
	MenuPanel, 
	Menu,
	Tab,
	Workspace, 
	Footer } from 'odeum-app'

import { RenderFooterLabel, handleLink } from './content/FooterLabel'

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			helpID: 0
		}

		Menu.defaultProps = {
			setHelpID: this.setHelpID,
			icon: 'menu' 
		}

		Tab.defaultProps = {
			setHelpID: this.setHelpID,
			label: 'Tab', 
			icon: 'tab' 
		}

		Workspace.defaultProps = {
			setHelpID: this.setHelpID
		}

	}

	setHelpID = (helpID) => {
		return helpID === this.state.helpID ? null : this.setState({ helpID: helpID })
	}

	render() {
		return (
			<AppContainer>
				<Header logo={'default'}/>
				<MenuPanel>
					<Menu route={'/'} exact helpID={1}>
						Homepage
					</Menu>
				</MenuPanel>
				<Footer label={RenderFooterLabel} labelLink={handleLink()} helpID={this.state.helpID} />
			</AppContainer>
		)
	}
}

export default App


