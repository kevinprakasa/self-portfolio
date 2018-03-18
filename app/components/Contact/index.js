/**
*
* Education
*
*/

import React from 'react';
import StyledContact from './style';
function Contact() { 		
  return (
    <StyledContact>
	    <div>
	    	<img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"></img>
	    	kevinprakasa03@gmail.com
	    </div>
	    <div>
	    	<img src="https://image.flaticon.com/icons/svg/25/25231.svg"></img>
	    	<a href="github.com/kevinprakasa">github.com/kevinprakasa</a>
	    </div>
	    <div>
	    	<img src="https://www.shareicon.net/download/2017/06/30/888051_logo.ico"></img>
	    	<a href="linkedin.com/in/kevin-prakasa">linkedin.com/in/kevin-prakasa</a>
	    </div>
    </StyledContact>
  );
}

Contact.propTypes = {

};

export default Contact;
