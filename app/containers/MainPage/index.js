/**
 *
 * MainPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import StyledMainPage from './style.js'
import injectReducer from 'utils/injectReducer';
import makeSelectMainPage from './selectors';
import reducer from './reducer';
import LandingPage from 'components/LandingPage/index';
import Section from 'components/Section/index';
import About from 'components/About/index';
import Projects from 'components/Projects/index';
export class MainPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <StyledMainPage>
          <LandingPage/>
          <Section title="About Me"><About/></Section>
          <Section title="Projects"><Projects/></Section>

        </StyledMainPage>
      </div>
    );
  }
}

MainPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainpage: makeSelectMainPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'mainPage', reducer });

export default compose(
  withReducer,
  withConnect,
)(MainPage);
