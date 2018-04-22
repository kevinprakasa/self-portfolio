/**
*
* Projects
*
*/

import React from 'react';
import StyledProject from './style';
import projects from './projects';
import sr from '../../scrollReveal.js';
class Projects extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    sr.reveal('.card');
  }

  render() {
  	const cards = projects.item.map((pj,i) =>
				<div ref='card' className="card">
				 	<div className="cardImage"><img src={pj.img}></img></div>
				 	<div className="cardDesc">
				 		<h3>{pj.title}</h3>
				 		<p>{pj.desc}</p>
				 	</div>
				</div>
    );
 
    return (
      	<StyledProject>
      		{cards}
      	</StyledProject>
    );
  }
}

Projects.propTypes = {

};

export default Projects;
