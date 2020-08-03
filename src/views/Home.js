import React from 'react';
import Signin from './Signin';
import AllEvents from './AllEvents';
import { getCachedUserData } from '../helpers';

export default (props) => {
  const userData = getCachedUserData();

  return <>{!!userData ? <AllEvents /> : <Signin />}</>;
};
