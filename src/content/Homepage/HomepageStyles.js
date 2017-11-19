import styled from 'styled-components'
import { Link/* , Route */ } from 'react-router-dom'
// import { colors } from '../onedarkpro'

export const AlignCenter = styled.div`
	text-align: center;
`

export const HomepageButonsContainer = styled.div`
	padding-top: 40px;
	/* background: linear-gradient(-135deg,#bf37ff 0,#ff6a85 50%,#fe9c5a 80%); */
`

export const Badge = styled.img`
	margin: 0 0.5em 3em;
	height: 1.5em;
`

export const HomepageHeader = styled.h1`
	padding-top: 45px;
	color: #2C3E50;
	text-align: center;
	margin: 0;
	font-size: 50px;
	letter-spacing: -0.04em;
`

export const HomepageTagLine = styled.p`
	text-align: center;
	margin: 0;
	padding-top: 20px;
    font-size: 28px;
	font-weight: 200;
	letter-spacing: 0.01em;
`

export const LinkTo = styled(Link)`
	background-color: #BBEFFD; /* #3B97D3; #BBEFFD #D1DFE8 */ 
	border-bottom: 1px solid #000;
	color: #1a1a1a;
	text-decoration: none;
	cursor: auto;
	/* font-size: 17px; */
	line-height: 1.7;
	font-weight: 200;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	&:hover {
		background-color: #3B97D3;
    	border-bottom-color: #1a1a1a;
	}
`
export const HomepageButtonSpacer = styled.div`
	display: flex;
	margin-left: 10px;
	margin-right: 10px;
`