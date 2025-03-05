import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Doxbin from './components/Doxbin';
import IpcsHost from './components/IpcsHost';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/doxbin" component={Doxbin} />
          <Route path="/ipcs-host" component={IpcsHost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
