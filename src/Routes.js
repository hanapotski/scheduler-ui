import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllEvents from './views/AllEvents';
import Home from './views/Home';
import Event from './views/Event';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/events">
          <AllEvents />
        </Route>
        <Route path="/events/:id">
          <Event />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
