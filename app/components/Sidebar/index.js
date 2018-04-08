/**
 *
 * Sidebar
 *
 */

import React from "react";

import StyledSidebar from "./style";

import About from "assets/user.gif";
import Kplogo from "assets/kp.gif";
import Experience from "assets/interface.gif";
import Projects from "assets/side-menu.gif";
import Education from "assets/mortarboard.gif";
import Contact from "assets/029-telephone-1.gif";
import Resume from "assets/note.gif";
import Blog from "assets/new-file.gif";

class Sidebar extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyledSidebar>
        <div className="bar">
          <img className="kplogo" src={Kplogo} />
          <div className="navItem">
            <div className="defaultNav">
              <span>
                <i className="far fa-user-circle navlogo"></i>
              </span>
              <a href="#about">About </a>
            </div>
          </div>
          <div className="navItem">
            <div className="defaultNav">
              <span>
                <i className="fas fa-code navlogo"></i>
              </span>
              <a href="#project">Projects</a>
            </div>
          </div>
          <div className="navItem">
            <div className="defaultNav">
              <span>
                <i className="fas fa-phone navlogo"></i>
              </span>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="navItem">
            <div className="defaultNav">
              <span>
                <i className="fas fa-file-alt navlogo"></i>
              </span>
              <a href="https://drive.google.com/file/d/1I6TCYJxJ4WXUYcaybij5YNZUC_dpdY00/view?usp=sharing">
                Resume
              </a>
            </div>
          </div>
          <div className="mobileNavbar">
            <div className="mobileNavItem">
              <a href="#about"> <i className="far fa-user-circle navlogo"></i></a>
            </div>
            <div className="mobileNavItem">
              <a href="#project"> <i className="fas fa-code navlogo"></i></a>
            </div>
            <div className="mobileNavItem">
              <img className="kplogoMob" src={Kplogo} />
            </div>
            <div className="mobileNavItem">
              <a href="#phone"> <i className="fas fa-phone navlogo"></i></a>
            </div>
            <div className="mobileNavItem">
              <a href="https://drive.google.com/file/d/1I6TCYJxJ4WXUYcaybij5YNZUC_dpdY00/view?usp=sharing"> <i className="fas fa-file-alt navlogo"></i></a>
            </div>
          </div>
        </div>
      </StyledSidebar>
    );
  }
}

Sidebar.propTypes = {};

export default Sidebar;
