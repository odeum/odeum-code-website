import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { Link } from 'react-router-dom'
// import { colors } from '../onedarkpro'

export const AlignCenter = styled.div`
	text-align: center;
`

export const HomepageFlexContainer = styled(Flex) `
	line-height: 25px;
	margin-top: 50px;
	margin-bottom: 65px;
	margin-left: auto;
	margin-right: auto;
	width: 90%;
	font-size: 17px;

	/* @media (min-width: 1340px) {
    	max-width: 1260px;
	}

	@media (min-width: 780px) {
    width: 90%;
	} */
`

export const HomepageBox = styled(Box) `
`

export const HomepageSectionHeader = styled.h3`
	font-size: 24px;
	font-weight: 200;
`

export const HomepageSection = styled.p`	
`

export const HomepageButonsContainer = styled.div`
	padding-top: 40px;
	/* background: linear-gradient(-135deg,#bf37ff 0,#ff6a85 50%,#fe9c5a 80%); */
`

export const HomepageHeader = styled.h1`
	padding-top: 45px;
	color: #2C3E50;
	text-align: center;
	margin: 0;
	font-size: 50px;
	letter-spacing: -0.04em;

	@media (max-width: 767px) {
		font-size: 40px;
	}
`

export const HomepageTagLine = styled.p`
	text-align: center;
	margin: 0;
	padding-top: 20px;
    font-size: 28px;
	font-weight: 200;
	letter-spacing: 0.01em;

	@media (max-width: 767px) {
		font-size: 24px;
	}
`

export const LinkTo = styled(Link) `
	background-color: #BBEFFD; /* #3B97D3; #BBEFFD #D1DFE8 */ 
	border-bottom: 1px solid rgba(0,0,0,0.2);
	color: #1a1a1a;
	text-decoration: none;
	cursor: auto;
	line-height: 1.7;
	font-weight: 200;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	&:hover {
		background-color: #81C1EA;
		color: #fff;
		/* font-weight: 500; */
    	border-bottom-color: #1a1a1a;
	}
`
export const HomepageButtonSpacer = styled.div`
	display: flex;
	margin-left: 10px;
	margin-right: 10px;

	@media (max-width: 767px) {
		margin-left: 0px;
		margin-right: 0px;
	}
`

export const ContentBox = styled.section`
    background: #f4f4f7;
    border: solid 1px #e0e0e3;
    border-radius: 8px;
    padding: 40px 10px;
    text-align: center;
    position: relative;
    box-shadow: inset 0 4px 15px 2px rgba(0, 0, 0, 0.06);
`
