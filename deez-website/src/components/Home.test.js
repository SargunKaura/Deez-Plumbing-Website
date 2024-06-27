import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from './Home';

test('renders Home component and matches snapshot', () => {
    const component = renderer.create(
        <Router>
            <Home />
        </Router>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
