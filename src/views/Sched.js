import React, { useState } from 'react';

export default () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <label htmlFor="date">Date</label>
      <input
        id="date"
        type="date"
        value={date}
        onChange={({ target }) => setDate(target.value)}
      />
    </>
  );
};
