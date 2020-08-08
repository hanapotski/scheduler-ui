import React from 'react';
import Event from './Event';
import { getCachedUserData } from '../helpers';
import Signin from './Signin';
import { useHistory } from 'react-router-dom';

const mockData = [
  {
    id: '123',
    createdBy: 'hannah joy',
    createdAt: new Date(),
    modifiedBy: null,
    modifiedDate: null,
    eventDate: new Date(),
    eventTitle: 'Sunday service',
    leader: 'Tin',
    backups: ['alyssa', 'mark'],
    keyboardist: 'hannah',
    guitarists: ['euly', 'derick'],
    drummer: 'zion',
    other: [{ name: 'lloyd', instrument: 'percussion' }],
  },
  {
    id: '123',
    createdBy: 'hannah joy',
    createdAt: new Date(),
    modifiedBy: null,
    modifiedDate: null,
    eventDate: new Date(),
    eventTitle: 'Sunday service',
    leader: 'Tin',
    backups: ['alyssa', 'mark'],
    keyboardist: 'hannah',
    guitarists: ['euly', 'derick'],
    drummer: 'zion',
    other: [{ name: 'lloyd', instrument: 'percussion' }],
  },
];

export default () => {
  const history = useHistory();
  const user = getCachedUserData();

  if (user && user.isVerified) {
    return (
      <div className="grid grid-cols-3 gap-4 ">
        {mockData.map((event) => (
          <button onClick={() => history.push(`/event/${event.id}`)}>
            <Event {...event} />
          </button>
        ))}
      </div>
    );
  }

  return <Signin />;
};
