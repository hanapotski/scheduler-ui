import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllEvents from './views/AllEvents';
import Home from './views/Home';

import EditEvent from './views/EditEvent';
import Signup from './views/Signup';
import MainWrapper from './components/MainWrapper';

function App() {
  return (
    <MainWrapper>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/events">
            <AllEvents />
          </Route>
          <Route path="/events/:id">
            <EditEvent />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </MainWrapper>
  );
}

export default App;
