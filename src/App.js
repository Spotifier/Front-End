import React from 'react';
import {Route} from 'react-router-dom';

// Application Component Imports
import Navigation from './components/Navigation';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';

function App() {

  return (
    <div>
      <Navigation />
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} /> 
    </div>
    
  );
}

export default App;
