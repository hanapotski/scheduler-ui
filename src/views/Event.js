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
  modifiedBy,
  createdBy,
  modifiedDate,
}) => {
  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-r border-b border-l border-t border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col leading-normal">
          <div className="text-left mb-8">
            <p className="text-sm text-gray-600 flex">
              {eventDate.toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              {capitalize(eventTitle)}
            </div>
            <p className="text-gray-700 text-base">
              <p>
                <span className="pr-4" role="img" aria-label="mic">
                  🎤
                </span>
                Leader: {capitalize(leader)}
              </p>
              <p>
                <span className="pr-4" role="img" aria-label="mic">
                  🎤
                </span>
                Backups:{' '}
                {backups.map((backup) => capitalize(backup)).join(', ')}
              </p>
              <p>
                <span className="pr-4" role="img" aria-label="keyboard">
                  🎹
                </span>
                Keyboardist: {capitalize(keyboardist)}
              </p>
              <p>
                <span className="pr-4" role="img" aria-label="drums">
                  🥁
                </span>
                Drummer: {capitalize(drummer)}
              </p>
              <p>
                <span className="pr-4" role="img" aria-label="guitar">
                  🎸
                </span>
                Guitarists:{' '}
                {guitarists.map((backup) => capitalize(backup)).join(', ')}
              </p>
              {other.map(({ name, instrument }) => (
                <p>
                  <span className="pr-4" role="img" aria-label="musical notes">
                    🎶
                  </span>
                  {capitalize(instrument)}: {capitalize(name)}
                </p>
              ))}
            </p>
          </div>
          <div className="flex">
            <div className="text-sm text-left">
              <p className="text-gray-900 leading-none">
                {modifiedBy
                  ? `last modified by: ${modifiedBy}`
                  : `created by: ${capitalize(createdBy)}`}
              </p>
              <p className="text-gray-600">
                {modifiedDate
                  ? `date: ${modifiedDate}`
                  : `date: ${eventDate.toLocaleString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
