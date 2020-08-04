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
        <p>
          <span role="img" aria-label="mic">
            🎤
          </span>
          Leader: {capitalize(leader)}
        </p>
        <p>
          <span role="img" aria-label="mic">
            🎤
          </span>
          Backups: {backups.map((backup) => capitalize(backup)).join(', ')}
        </p>
        <p>
          <span role="img" aria-label="keyboard">
            🎹
          </span>
          Keyboardist: {capitalize(keyboardist)}
        </p>
        <p>
          <span role="img" aria-label="drums">
            🥁
          </span>
          Drummer: {capitalize(drummer)}
        </p>
        <p>
          <span role="img" aria-label="guitar">
            🎸
          </span>
          Guitarists:{' '}
          {guitarists.map(
            ({ name, type }) => `
            ${capitalize(name)}(${capitalize(type)})`
          )}
        </p>
        {other.map(({ name, instrument }) => (
          <p>
            <span role="img" aria-label="musical notes">
              🎶
            </span>
            {capitalize(instrument)}: {capitalize(name)}
          </p>
        ))}
      </div>
    </>
  );
};
