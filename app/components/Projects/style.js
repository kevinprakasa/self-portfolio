import styled from 'styled-components';
import nb from 'assets/footer_lodyas.gif';
const StyledProject = styled.div`
	display: flex;
	flex-direction: row;
	max-width: 100%;
	flex-wrap: wrap;
	justify-content: space-around;
	background-image: url(${nb});
	background-size: cover;
	.card {
		position: relative;
		bottom: 0;
		opacity: 0.7;
		margin: 2em 1em;
		background-color: ${(props) => props.theme.white};
		flex-basis: 20em;
		-webkit-box-shadow: -1px 9px 67px 0px rgba(0,0,0,0.75);
		-moz-box-shadow: -1px 9px 67px 0px rgba(0,0,0,0.75);
		box-shadow: -1px 9px 67px 0px rgba(0,0,0,0.75);
		transition: 0.3s;
		.cardDesc {
			padding: 1em;
			color: ${(props) => props.theme.white};
			background-color: ${(props) => props.theme.black};
			h3 {
				text-align: center;
				text-decoration: underline;
				text-transform: uppercase;
				letter-spacing: space-between;
				font-weigth: 800;
			}
		}

		.cardImage img{
			width: 100%;
		}
	}

	.card:hover {
		-webkit-box-shadow: -1px 9px 101px 8px rgba(0,0,0,0.75);
		-moz-box-shadow: -1px 9px 101px 8px rgba(0,0,0,0.75);
		box-shadow: -1px 9px 101px 8px rgba(0,0,0,0.75);
		position: relative;
		bottom: 1em;
		opacity: 1;
	}
`;

export default StyledProject;