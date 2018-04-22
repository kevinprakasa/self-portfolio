/**
 *
 * LandingPage
 *
 */

import React from "react";
import StyledLandingPage from "./style";
import Typed from "typed.js";
import sr from '../../scrollReveal.js';
class LandingPage extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	componentDidMount() {
		// You can pass other options here, such as typing speed, back speed, etc.
		const options = {
			strings: ["BONJOUR!", "Thanks for your time..."],
			typeSpeed: 60,
			backSpeed: 60,
			loop: true,
			loopCount: Infinity,
			showCursor: true,
			cursorChar: "|",
			autoInsertCss: true
		};
    const config = {
      origin: 'right',
      duration: 1000,
      delay: 150,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    };
    sr.reveal(this.refs.box1, config);
		// this.el refers to the <span> in the render() method
		this.typed = new Typed(this.el, options);
	}

	componentWillUnmount() {
		// Make sure to destroy Typed instance on unmounting
		// to prevent memory leaks
		this.typed.destroy();
	}
	render() {
		return (
			<StyledLandingPage>
				<div className="blackOpacity" />
				<div className="content">
					<div ref='box1'>
						<span
							id="bonjour"
							ref={el => {
								this.el = el;
							}}
						/>
						<p id="hi">Hi, there! I'm Kevin Prakasa ;)</p>
						<p>A computer science student at University of Indonesia</p>
						<p>Currently looking for a summer internship...</p>
					</div>
				</div>
			</StyledLandingPage>
		);
	}
}

LandingPage.propTypes = {};

export default LandingPage;
