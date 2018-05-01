import React from 'react';
import ReactDOM from 'react-dom';
import MediaSmallComponent from './MediaSmallComponent';
import MediaLargeComponent from './MediaLargeComponent';

it('renders small without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MediaSmallComponent/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders large without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MediaLargeComponent/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
