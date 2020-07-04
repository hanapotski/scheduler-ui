import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sched from './views/Sched';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sched">
          <Sched />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
