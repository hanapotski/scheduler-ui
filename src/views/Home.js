import React from 'react';
import Signin from './Signin';
import AllEvents from './AllEvents';

export default (props) => {
  const userData = getCachedUserData();

  return <>{!!userData ? <AllEvents /> : <Signin />}</>;
};

function getCachedUserData() {
  return localStorage.getItem('schedulerAppUser') || null;
}
