import React from 'react';

export default ({ heading, message }) => {
  return (
    <div
      className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-20 py-3"
      role="alert"
    >
      {heading && <p className="font-bold">{heading}</p>}
      <p className="text-sm">{message}</p>
    </div>
  );
};
