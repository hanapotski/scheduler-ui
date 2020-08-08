import React from 'react';

export default function MainWrapper({ children }) {
  return (
    <div className="container mx-auto">
      <h1 className="text-center m-8 text-blue-500 text-6xl font-extrabold">
        PAW Scheduler
      </h1>
      <div className="flex">{children}</div>
    </div>
  );
}
