/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Sidebar from 'components/Sidebar/index';
import MainPage from 'containers/MainPage/index';
import Loading from 'components/Loading/index';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
  	super();
    this.state = { isLoading: true };
	}

	componentDidMount() {
		setTimeout(() => this.setState({isLoading: false}), 4500 )
	   
	}
  render() {
    return (
    	this.state.isLoading ? 
    	<Loading/> : 
    	<div>
    		<Sidebar/>
    		<MainPage/>
    	</div>
    );
  }
}
