import styled from 'styled-components';

const StyledLoadingScreen = styled.div`
	background-color: #02111B;
	width: 100vw;
	height: 100vh;
	padding: 5em;
	position: relative;
	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		width: 20%;
		height: 20%;
		filter: brightness(0) invert(1)  drop-shadow(8px 8px 10px blue);
	}
	@media screen and (max-width: 600px) {
		img {
			width: 40%;
			height: 40%;
		}
	}
`;

export default StyledLoadingScreen; 