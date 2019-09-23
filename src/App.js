import React from 'react';
import {Route} from 'react-router-dom';

// Application Component Imports
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Saved from './components/Saved';

function App() {

  return (
    <div className="app-wrapper">
      <Navigation />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} /> 
      <Route path="/dashboard/saved" component={Saved} />
    </div>
    
  );
}

export default App;
