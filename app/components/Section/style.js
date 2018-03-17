import styled from 'styled-components';

const StyledSection = styled.div`
@import url('https://fonts.googleapis.com/css?family=Lora');
	background-color: ${(props) => props.theme.bluegrey};
	height: 100vh;
	.secTitle {
		max-height: 11%;
		font-size: 3.5em;
		text-align: right;
		color: ${(props) => props.theme.white};
		background-color: ${(props) => props.theme.darkgrey};
		padding : 0em 1em;
		text-transform: uppercase;

	}
`;

export default StyledSection;