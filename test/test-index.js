import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
import AppContainer from '../js/components/app-container';


describe('App Container', function() {
	it('Renders the app', function() {
		let renderer = TestUtils.createRenderer();
		renderer.render(<AppContainer />);
		let result = renderer.getRenderOutput();
		result.props.className.should.equal('hello');
	});
});