import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllEvents from './views/AllEvents';
import Home from './views/Home';

import Event from './views/Event';
import Signup from './views/Signup';
import MainWrapper from './components/MainWrapper';

function App() {
  return (
    <MainWrapper>
      <Router>
        <Switch>
          <Route path="/events">
            <AllEvents />
          </Route>
          <Route path="/events/:id">
            <Event />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </MainWrapper>
  );
}

export default App;
