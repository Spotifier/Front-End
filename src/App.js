import React from 'react';
import {Route} from 'react-router-dom';

// Application Component Imports
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {

  return (
    <div class="app-wrapper">
      <Navigation />
      <Route exact path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} /> 
    </div>
    
  );
}

export default App;
