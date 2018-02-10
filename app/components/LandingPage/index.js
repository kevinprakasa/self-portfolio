/**
*
* LandingPage
*
*/

import React from 'react';
import StyledLandingPage from './style'

class LandingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
	return (
	  <StyledLandingPage>
	  	<div className="blackOpacity"></div>
			<div className="content">
				<span id="bonjour">BONJOUR!</span>
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
