/**
*
* Loading
*
*/

import React from 'react';
import kpAnimated from "assets/kp_animated.svg";
import StyledLoadingScreen from './style';
function Loading(props) {
  return (
  	<StyledLoadingScreen>
    	<img src={kpAnimated} alt="kpsvg"/>
    </StyledLoadingScreen>
  );
}

Loading.propTypes = {

};

export default Loading;
