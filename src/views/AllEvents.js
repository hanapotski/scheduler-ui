import React from 'react';
import Event from './Event';
import { getCachedUserData } from '../helpers';
import Signin from './Signin';
import { Link } from 'react-router-dom';

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
    backups: 'alyssa, mark',
    keys: 'hannah',
    electricGuitar: 'derick',
    acousticGuitar: 'euly',
    bass: 'bricks',
    drums: 'zion',
    other: [{ name: 'lloyd', instrument: 'percussion', uid: 'asdf' }],
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
    backups: 'alyssa, mark',
    keys: 'hannah',
    electricGuitar: 'derick',
    acousticGuitar: 'euly',
    bass: 'bricks',
    drums: 'zion',
    other: [{ name: 'lloyd', instrument: 'percussion' }],
  },
];

export default () => {
  const user = getCachedUserData();

  if (user && user.isVerified) {
    return (
      <div className="grid grid-cols-3 gap-4 ">
        {mockData.map((event) => (
          <Link to={`/events/${event.id}`}>
            <Event {...event} />
          </Link>
        ))}
      </div>
    );
  }

  return <Signin />;
};
