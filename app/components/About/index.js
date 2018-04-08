/**
 *
 * About
 *
 */

import React from "react";

import StyledAbout from "./style";
import Kpai from "assets/kpai.jpg";
class About extends React.Component {
    // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <StyledAbout>
                <div className="blackOpacity" />
                <img src={Kpai} id="kplogo" />
                <div className="aboutContent">
                    <div className="container" />
                    <span id="whoisthis">Who is this guy?</span>
                    <p>
                        I'm a CS student who has a serious passion for <br />{" "}
                        Web Development especially in <br />
                        <u id="frontend">Front-End Development</u>
                    </p>
                    <p>
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
