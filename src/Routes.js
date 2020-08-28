import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllEvents from './views/AllEvents';
import Home from './views/Home';

import AddEvent from './views/AddEvent';
import Signup from './views/Signup';
import MainWrapper from './components/MainWrapper';

const BASE_NAME = process.env.PUBLIC_URL || 'https://localhost:3000';

function App() {
  return (
    <Router basename={`${BASE_NAME}/`}>
      <MainWrapper>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/events">
            <AllEvents />
          </Route>
          <Route path="/event/:id">
            <AddEvent />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </MainWrapper>
    </Router>
  );
}

export default App;
