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
		svg {
			margin-right: 0.6em;
			position: relative;
			top: 0.25em;
		}
		a {
			text-decoration: none;
			color: white;
		}

	}
	
`;

export default StyledEducation;