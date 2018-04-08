import styled from 'styled-components';

const StyledSection = styled.div`
	background-color: ${(props) => props.theme.bluegrey};
	.secTitle {
		max-height: 12vh;
		font-size: 3.5em;
		text-align: right;
		color: ${(props) => props.theme.white};
		background-color: ${(props) => props.theme.darkgrey};
		padding : 0em 1em;
		text-transform: uppercase;
		white-space: nowrap;
		overflow: hidden;
	}

	@media screen and (max-width: 350px) {
		.secTitle {
			font-size: 2em;
		}
	}
`;

export default StyledSection;