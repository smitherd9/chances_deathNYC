import React from 'react';
import { render } from 'react-dom';
import Ethnicity from './ethnicity';
import Sex from './sex';
import Display from './display-results';
import Header from './header';




export default class AppContainer extends React.Component {

	render() {
		return (
		<div>
		
		<Header />
		<Display />
		<Ethnicity />
		<Sex />

		
		</div>

		);
	}
}