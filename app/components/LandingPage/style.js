import styled from 'styled-components';
import Wallpaper from 'assets/1511845738428.jpg';
import mobileWallpaper from 'assets/15118457384289.jpg';
const StyledLandingPage = styled.div`
	position:relative;
	height: 100vh;
	background-image: url(${Wallpaper}) ;
	background-size: cover;
	background-position: 30% 50%;
	background-repeat: no-repeat;
	.content{
		color: ${(props) => props.theme.white};
		font-size: 1.5em;
		font-weight: 200;
		position: absolute;
		top: 30%;
		left: 5em;

		#bonjour {
			font-size: 3em;
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

	@media screen and (max-width: 768px) {
		background-image: url(${mobileWallpaper});
		.content {
			width: 80%;
			left: 50%;
			transform :translateX(-50%);
			margin: 0 auto;
			font-size: 1.5em;
			text-align: center;

			#bonjour {
				font-size: 2em;
				white-space: nowrap;
			}
			#hi {
				font-size: 2em;
			}
		}
	}

	@media screen and (max-width: 520px) {
			.content {
				top: 20%;
				left: 50%;
				transform :translateX(-50%);
				font-size: 1.1em;
				#bonjour {
					font-size: 1.2em;
					white-space: nowrap;
				}
				#hi {
					font-size: 1.2em;
				}
			}
	}

`;

export default StyledLandingPage;