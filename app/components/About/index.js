/**
 *
 * About
 *
 */

import React from "react";
import sr from '../../scrollReveal.js';
import StyledAbout from "./style";
import Kpai from "assets/kpai.jpg";
class About extends React.Component {
    // eslint-disable-line react/prefer-stateless-function
    componentDidMount() {
      sr.reveal([this.refs.box1,this.refs.box2,this.refs.box3], 100);
    }

    render() {
        return (
            <StyledAbout>
                <div className="blackOpacity" />
                <img src={Kpai} id="kplogo" />
                <div className="aboutContent">
                    <span ref='box1' id="whoisthis">Who is this guy?</span>
                    <p ref='box2'>
                        I'm a CS student who has a serious passion for <br />{" "}
                        Web Development especially in <br />
                        <u id="frontend">Front-End Development</u>
                    </p>
                    <p ref='box3'>
                        I'm enthusiastic, and I love to learn new things (lately
                        learning on UI/UX Design)
                    </p>
                </div>
            </StyledAbout>
        );
    }
}

About.propTypes = {};

export default About;
