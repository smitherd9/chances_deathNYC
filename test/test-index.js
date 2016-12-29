import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
// let should = require('chai').should();
import AppContainer from '../js/components/app-container';
import Home from '../js/components/home';


describe('App Container', function() {
	it('Renders the app', function() {
		let renderer = TestUtils.createRenderer();
		renderer.render(<AppContainer />);
		let result = renderer.getRenderOutput();
		console.log(result);
		result.props.className.should.equal('appContainer');
	});

});

describe('Home', function() {
	it('Renders the homepage', function() {
		let renderer = TestUtils.createRenderer();
		renderer.render(<Home />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('homeSection');
	});

});