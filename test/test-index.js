import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
// let should = require('chai').should();
import AppContainer from '../js/components/app-container';
import Home from '../js/components/home';
import Header from '../js/components/header';
import Intro from '../js/components/intro-screen';
import SearchSection from '../js/components/search-section';
import ResultsScreen from '../js/components/results-screen';
import Display1 from '../js/components/display1';
import Display2 from '../js/components/display2';
import Display3 from '../js/components/display3';





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


describe('Header', function() {
	it('Renders the header', function() {
		let renderer = TestUtils.createRenderer();
		renderer.render(<Header />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('header');
	});

});


describe('Intro', function() {
	it('Renders the intro screen', function() {
		let renderer = TestUtils.createRenderer();
		renderer.render(<Intro />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('intro');
	});

});



describe('SearchSection', function() {
	it('Renders the search section', function() {
		let renderer = TestUtils.createRenderer();
		renderer.render(<SearchSection />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('search');
		// result.props.className.should.equal('searchSection');
	});

});



describe('ResultsScreen', function() {
	it('Renders the results screen', function() {
		let renderer = TestUtils.createRenderer();
		renderer.render(<ResultsScreen />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('resultsScreen');
	});

});


describe('Display1', function() {
	it('Renders the diplay1 component', function() {
		let renderer = TestUtils.createRenderer();
		renderer.render(<Display1 />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('display');
	});

});



describe('Display2', function() {
	it('Renders the diplay2 component', function() {
		let renderer = TestUtils.createRenderer();
		renderer.render(<Display2 />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('display');
	});

});



describe('Display3', function() {
	it('Renders the diplay3 component', function() {
		let renderer = TestUtils.createRenderer();
		renderer.render(<Display3 />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('display');
	});

});