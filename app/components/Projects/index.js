/**
*
* Projects
*
*/

import React from 'react';
import StyledProject from './style';
import projects from './projects';
class Projects extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
  	const cards = projects.item.map(pj =>
				<div className="card">
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
