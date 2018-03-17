/**
*
* Section
*
*/

import React from 'react';
import StyledSection from './style';

class Section extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    	<StyledSection>
    		<div className="secTitle">{this.props.title}</div>
    		{ this.props.children }
    	</StyledSection>
    );
  }
}

Section.propTypes = {

};

export default Section;
