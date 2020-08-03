import React from 'react';
import Event from './Event';
import { getCachedUserData } from '../helpers';
import { useHistory } from 'react-router-dom';
const mockData = [
  {
    id: '123',
    createdBy: 'hannah',
    modifiedBy: null,
    modifiedDate: null,
    eventDate: new Date(),
    eventTitle: 'Sunday service',
    leader: 'Tin',
    backups: ['alyssa', 'mark'],
    keyboardist: 'hannah',
    guitarists: [
      { name: 'euly', type: 'acoustic' },
      { name: 'derick', type: 'electric' },
    ],
    drummer: 'zion',
    other: [{ name: 'lloyd', instrument: 'percussion' }],
  },
];
export default () => {
  const history = useHistory();

  const user = getCachedUserData();
  if (!user) {
    history.push('/');
  }

  return (
    <>
      <h1>Schedule</h1>
      {mockData.map((event) => (
        <Event {...event} />
      ))}
    </>
  );
};
