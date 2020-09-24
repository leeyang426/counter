import React from 'react';

import { BrowserRouter as Router, Link } from 'react-router-dom';

import Routes from './routes';

function App(): JSX.Element {
  return (
    <Router>
      <div className="app">
        <p>
          <Link to="/home">Home</Link>
          <Link to="/demo">Demo</Link>
        </p>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
