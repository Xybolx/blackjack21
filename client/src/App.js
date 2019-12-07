import React, { useState, useMemo } from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SignUp from './components/signUp';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
