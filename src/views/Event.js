import React from 'react';
import { capitalize } from '../helpers';

export default ({
  eventDate,
  eventTitle,
  leader,
  backups,
  keyboardist,
  guitarists,
  drummer,
  other,
}) => {
  return (
    <>
      <div>
        <p>
          Date:{' '}
          {eventDate.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <p>Title: {capitalize(eventTitle)}</p>
        <p>Leader: {capitalize(leader)}</p>
        <p>Backups: {backups.map((backup) => capitalize(backup)).join(', ')}</p>
        <p>Keyboardist: {capitalize(keyboardist)}</p>
        <p>Drummer: {capitalize(drummer)}</p>
        {other.map(({ name, instrument }) => (
          <p>
            {capitalize(instrument)}: {capitalize(name)}
          </p>
        ))}
      </div>
    </>
  );
};
