import styled from 'styled-components';
import Wallpaper from 'assets/wallpaper.jpg'
const StyledLandingPage = styled.div`
	position:relative;
	height: 100vh;
	background-image: url(${Wallpaper}) ;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	.content{
		color: ${(props) => props.theme.white};
		font-family: "Times New Roman", Times, serif;
		font-size: 1.5em;
		font-weight: 200;
		position: absolute;
		top: 30%;
		left: 5em;

		#bonjour {
			font-size: 4em;
			font-weight: 500;
			margin: 0;
		}
		#hi {
			font-size: 2em;
			margin: 0;
		}
		p {
			font-size: 1em;
		}
	}
	.blackOpacity {
		background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
		opacity:0.7;
		filter: alpha(opacity=70);
		width: 100%;
		min-height: 100%;
		height: 100%;
	}


`;

export default StyledLandingPage;