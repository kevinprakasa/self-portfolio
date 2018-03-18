import styled from 'styled-components';
import bg from 'assets/congruent_outline.gif';
const StyledEducation = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.5em 4em;
	background-image: url(${bg});
	background-size: contain;
	background-repeat: repeat;
	div {
		margin: 0.7em;
		font-size: 1.2em;
		color: white;
		img {
			width: 4em;
			margin-right: 2em;
		}
		a {
			text-decoration: none;
			color: white;
		}

	}
	
`;

export default StyledEducation;