/**
*
* Contacts
*
*/

import React from 'react';
import StyledContact from './style';
import sr from '../../scrollReveal.js';

class Contacts extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
  	sr.reveal(this.refs.contact);
  }
  render() {
    return (
    <StyledContact>
	    <div ref='contact'>
	    	<i className="fas fa-at" style={{color:'white','font-size': '3em','text-shadow': '1px 1px 1px #ccc'}}></i>
	    	kevinprakasa03@gmail.com
	    </div>
	    <div ref='contact'>
	    	<i className="fab fa-github" style={{color:'white','font-size': '3em','text-shadow': '1px 1px 1px #ccc'}}></i>
	    	<a href="https://github.com/kevinprakasa">github.com/kevinprakasa</a>
	    </div>
	    <div ref='contact'>
	    	<i className="fab fa-linkedin" style={{color:'white','font-size': '3em','text-shadow': '1px 1px 1px #ccc'}}></i>
	    	<a href="https://www.linkedin.com/in/kevin-prakasa">linkedin.com/in/kevin-prakasa</a>
	    </div>
    </StyledContact>
    );
  }
}

Contacts.propTypes = {

};

export default Contacts;
