import styled from 'styled-components';
import Wallpaper from 'assets/wallpaper.jpg'
const  StyledAbout = styled.div`
	position: relative;
	background-image: url(${Wallpaper});
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	height: 90vh;
	.blackOpacity {
		background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
		opacity:0.7;
		filter: alpha(opacity=70);
		width: 100%;
		min-height: 100%;
		height: 100%;
		z-index: -1;
	}
	.aboutContent {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.white};
    border-radius: 1em;
    font-size: 2em;
		
		#whoisthis {
			font-weight: 800;
		}

	}	
	#kplogo {
		position: absolute;
		right: 10%;
		top: 30%;
		width: 15em;
		border-radius: 50%;
		margin: .3em;
	}
	#frontend {
		letter-spacing: 0.2em;
	}
	@media screen and (max-width: 768px) {
		font-size: 0.7em;
	}
	@media screen and (max-width: 650px) {
		font-size: 0.6em;
		.aboutContent {
			left: 50%;
			transform: translate(-50%,-50%);
			text-align: center;
			width: 95%;
		}
		#kplogo {
			top: 7%;
			left: 50%;
			transform: translateX(-50%);
		}
	}
`;

export default StyledAbout;