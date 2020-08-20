import React from 'react';
import { capitalize } from '../helpers';

export default ({
  eventDate,
  eventName,
  leader,
  backups,
  keys,
  electricGuitar,
  acousticGuitar,
  bass,
  drums,
  other,
  modifiedBy,
  createdBy,
  modifiedDate,
}) => {
  return (
    <>
      <div className="w-full lg:max-w-full lg:flex">
        <div className="w-full border-r border-b border-l border-t border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex">
              {eventDate.toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              {capitalize(eventName)}
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
                Backups: {capitalize(backups)}
              </p>
              <p>
                <span className="pr-4" role="img" aria-label="keyboard">
                  🎹
                </span>
                Keys: {capitalize(keys)}
              </p>
              <p>
                <span className="pr-4" role="img" aria-label="drums">
                  🥁
                </span>
                Drums: {capitalize(drums)}
              </p>
              <p>
                <span className="pr-4" role="img" aria-label="guitar">
                  🎸
                </span>
                Electric Guitar: {capitalize(electricGuitar)}
              </p>
              <p>
                <span className="pr-4" role="img" aria-label="guitar">
                  🎸
                </span>
                Acoustic Guitar: {capitalize(acousticGuitar)}
              </p>
              <p>
                <span className="pr-4" role="img" aria-label="guitar">
                  🎸
                </span>
                Bass: {capitalize(bass)}
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
