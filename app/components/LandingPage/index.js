/**
*
* LandingPage
*
*/

import React from 'react';
import StyledLandingPage from './style'
import Typed from 'typed.js';
class LandingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
   componentDidMount() {
		// You can pass other options here, such as typing speed, back speed, etc.
		const options = {
			strings: ["BONJOUR!","Thanks for your time..."],
			typeSpeed: 60,
			backSpeed: 60,
			loop: true,
			loopCount: Infinity,
			showCursor: true,
		  cursorChar: '|',
		  autoInsertCss: true,
		};
		// this.el refers to the <span> in the render() method
		this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }
  render() {
  	const options = {
	  strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
	  typeSpeed: 40
	};
	return (
	  <StyledLandingPage>
	  	<div className="blackOpacity"></div>
			<div className="content">
				<span id="bonjour" ref={(el) => { this.el = el; }}></span>
				<p id="hi">Hi, there! I'm Kevin Prakasa ;)</p>
				<p>A computer science student at University of Indonesia</p>
				<p>Currently looking for a summer internship...</p>
			</div>
		</StyledLandingPage>
	);
  }
}

LandingPage.propTypes = {

};

export default LandingPage;
