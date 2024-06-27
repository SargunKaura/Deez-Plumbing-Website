import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

// Snapshot test for App component
test('renders App component and matches snapshot', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});