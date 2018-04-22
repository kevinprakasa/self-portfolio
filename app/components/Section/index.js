/**
 *
 * Section
 *
 */

import React from "react";
import StyledSection from "./style";
import sr from '../../scrollReveal.js';
class Section extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	componentDidMount() {
		const config = {
      origin: 'left',
      duration: 1000,
      delay: 150,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    };
    sr.reveal(this.refs.title, config);
	}

	render() {
		return (
			<StyledSection>
				<div id={this.props.id} className="secTitle">
					<div ref='title'>{this.props.title}</div>
				</div>
				{this.props.children}
			</StyledSection>
		);
	}
}

Section.propTypes = {};

export default Section;
