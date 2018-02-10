import styled  from 'styled-components';

const StyledSidebar = styled.div`

.bar {
	position: fixed;
	background-color: ${(props) => props.theme.black};
	color: ${(props) => props.theme.white};
	height:100vh;
	font-family: 'Times New Roman';
	width: 14em ;
	top: 0;
	left: 0;
	-webkit-box-shadow: 10px 10px 72px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 10px 10px 72px 0px rgba(0,0,0,0.75);
	box-shadow: 10px 10px 72px 0px rgba(0,0,0,0.75);

	.navItem {
		font-size :  1.2em;
		margin : 0.7em 0;
	}
	.navItem a {
		text-decoration: none;
		color: inherit;
	}
	.kplogo {
		width: 12em;
		margin: .5em 1em;
		
	}
	.navlogo {
		width: 2em;
		margin : 0 0.5em;
	}

}

`; 

export default StyledSidebar;