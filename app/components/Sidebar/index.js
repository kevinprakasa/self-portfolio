/**
*
* Sidebar
*
*/

import React from 'react';


import StyledSidebar from './style';

import About from 'assets/user.gif';
import Kplogo from 'assets/kp.gif';
import Experience from 'assets/interface.gif';
import Projects from 'assets/side-menu.gif';
import Education from 'assets/mortarboard.gif';
import Contact from 'assets/029-telephone-1.gif';
import Resume from 'assets/note.gif';
import Blog from 'assets/new-file.gif';

class Sidebar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      	<StyledSidebar>
      		<div className="bar">
      			<img className="kplogo" src={Kplogo}/>
      			<div className="navItem">
      				<span><img className="navlogo" src={About}/></span><a href="#">About </a>
      			</div>
      			<div className="navItem">
      				<span><img className="navlogo" src={Projects}/></span><a href="#">Projects</a>
      			</div>
      			<div className="navItem">
      				<span><img className="navlogo" src={Contact}/></span><a href="#">Contact</a>
      			</div>
      			<div className="navItem">
      				<span><img className="navlogo" src={Resume}/></span><a href="#">Resume</a>
      			</div>
      		</div>
      	</StyledSidebar>
    );
  }
}

Sidebar.propTypes = {

};

export default Sidebar;
