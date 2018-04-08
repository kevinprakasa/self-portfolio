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
	    	<i className="fas fa-at" style={{color:'white','font-size': '3em','text-shadow': '1px 1px 1px #ccc'}}></i>
	    	kevinprakasa03@gmail.com
	    </div>
	    <div>
	    	<i className="fab fa-github" style={{color:'white','font-size': '3em','text-shadow': '1px 1px 1px #ccc'}}></i>
	    	<a href="github.com/kevinprakasa">github.com/kevinprakasa</a>
	    </div>
	    <div>
	    	<i className="fab fa-linkedin" style={{color:'white','font-size': '3em','text-shadow': '1px 1px 1px #ccc'}}></i>
	    	<a href="linkedin.com/in/kevin-prakasa">linkedin.com/in/kevin-prakasa</a>
	    </div>
    </StyledContact>
  );
}

Contact.propTypes = {

};

export default Contact;
