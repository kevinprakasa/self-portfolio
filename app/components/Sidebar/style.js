import styled from "styled-components";

const StyledSidebar = styled.div`
	@import url("https://fonts.googleapis.com/css?family=Lora");
	.bar {
		position: fixed;
		background-color: ${props => props.theme.black};
		color: ${props => props.theme.white};
		height: 100vh;
		width: 14em;
		left: 0;
		-webkit-box-shadow: 10px 10px 72px 0px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 10px 10px 72px 0px rgba(0, 0, 0, 0.75);
		box-shadow: 10px 10px 72px 0px rgba(0, 0, 0, 0.75);

		.navItem {
			font-size: 1.2em;
			margin: 0.7em 0;
		}
		.navItem a {
			text-decoration: none;
			color: inherit;
		}
		.kplogo {
			width: 12em;
			margin: 0.5em 1em;
		}
		.navlogo {
			font-size: 2em;
			margin: 0 0.5em;
		}
		svg {
			width: 2em;
			margin: 0 0.5em;
		}
	}
	.mobileNavbar {
		display: none;
	}

	@media screen and (max-width: 768px) {
		.bar {
			z-index: 100;
			position: fixed;
			bottom: 0;
			width: 100vw;
			height: 4em;
			
				.kplogo, .navItem {
					display: none;
				}
			
			.mobileNavbar {
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-between;
				align-content: center;

				.mobileNavItem {
					margin: auto;
				}
				
				.mobileNavItem:hover {
					.navlogo {
						color: ${props => props.theme.bluegrey};
					}
				}
				.kplogoMob {
					width: 2.5em;
					margin: 0.5em 1em;
				}
				.navlogo {
					color: ${props => props.theme.white};
					font-size: 2.5em;
					transition: 0.3s;
				}
			}
		}
	}
`;

export default StyledSidebar;
