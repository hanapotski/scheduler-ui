import React, { useState } from 'react';
import Signin from './Signin';
import AllEvents from './AllEvents';

export default () => {
  const [loggedIn, setLogin] = useState(false);
  return <>{loggedIn ? <AllEvents /> : <Signin setLogin={setLogin} />}</>;
};
