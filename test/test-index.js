import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import AppContainer from '../js/components/app-container';
import Home from '../js/components/home';
import Header from '../js/components/header';
import Intro from '../js/components/intro-screen';
import SearchSection from '../js/components/search-section';
import ResultsScreen from '../js/components/results-screen';
import DisplayResults from '../js/components/display-results';
import Display1 from '../js/components/display1';
import Display2 from '../js/components/display2';
import Display3 from '../js/components/display3';
import EthnicityDisplay from '../js/components/ethnicity-display';
import YearDisplay from '../js/components/year-display';
import SexDisplay from '../js/components/sex-display';
import LeadingCause from '../js/components/leading-cause';
import DeathNum from '../js/components/death-num';
import { Chart } from '../js/components/c3-chart';
import Ethnicity from '../js/components/ethnicity';
import Sex from '../js/components/sex';
import Year from '../js/components/year';




describe('App Container', () => {
	it('Renders the app', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<AppContainer />);
		let result = renderer.getRenderOutput();
		console.log(result);
		result.props.className.should.equal('appContainer');
	});

});

describe('Home', () => {
	it('Renders the homepage', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<Home />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('homeSection');
	});

});


describe('Header', () => {
	it('Renders the header', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<Header />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('header');
	});

});


describe('Intro', () => {
	it('Renders the intro screen', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<Intro />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('intro');
	});

});



describe('SearchSection', () => {
	it('Renders the search section', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<SearchSection />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('search');
		// result.props.className.should.equal('searchSection');
	});

});



describe('ResultsScreen', () => {
	it('Renders the results screen', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<ResultsScreen />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('resultsScreen');
	});

});



describe('DisplayResults', () => {
	it('Renders the 3 results components', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<DisplayResults />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('resultsScreen');
	});

	it('calls componentDidUpdate', () => {
    const wrapper = mount(<DisplayResults/>);
    wrapper.update();
    expect(DisplayResults.prototype.componentDidUpdate.calledOnce).to.equal(true);
  });

});





describe('Display1', () => {
	it('Renders the diplay1 component', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<Display1 />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('display');
	});

});



describe('Display2', () => {
	it('Renders the diplay2 component', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<Display2 />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('display');
	});

});



describe('Display3', () => {
	it('Renders the diplay3 component', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<Display3 />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('display');
	});

});



describe('EthnicityDisplay', () => {
	it('Renders the EthnicityDisplay component', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<EthnicityDisplay />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('results');
	});

});



describe('SexDisplay', () => {
	it('Renders the SexDisplay component', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<SexDisplay />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('results');
	});

});



describe('YearDisplay', () => {
	it('Renders the YearDisplay component', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<YearDisplay />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('results');
	});

});



describe('LeadingCause', () => {
	it('Renders the LeadingCause component', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<LeadingCause />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('results');
	});

});



describe('DeathNum', () => {
	it('Renders the DeathNum component', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<DeathNum />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('results');
	});

});



describe('Chart', () => {
	it('Renders the Chart component', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(Chart);
		let result = renderer.getRenderOutput();
		result.props.id.should.equal('chart');
	});

});


