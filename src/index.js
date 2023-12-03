import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { scrollSpy, scroller } from 'react-scroll';
import App from './App';


scrollSpy.update();

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
