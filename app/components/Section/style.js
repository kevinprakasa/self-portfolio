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

	}
`;

export default StyledSection;