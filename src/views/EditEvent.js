import React, { useState, useEffect } from 'react';
const nanoid = require('nanoid');

export default () => {
  const [date, setDate] = useState('');
  const [eventName, setEventName] = useState('');
  const [leader, setLeader] = useState('');
  const [backups, setBackups] = useState('');
  const [keys, setKeys] = useState('');
  const [drums, setDrums] = useState('');
  const [electricGuitar, setElectricGuitar] = useState('');
  const [acousticGuitar, setAcousticGuitar] = useState('');
  const [bass, setBass] = useState('');
  const [other, setOther] = useState([]);

  const [errorMessage, setErrorMessage] = useState('');
  const [invalid, setInvalid] = useState(true);

  useEffect(() => {
    if (date === '' || leader === '' || eventName === '') {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  }, [date, leader, eventName]);

  const handleSubmit = (e, data) => {
    e.preventDefault();
    console.log(other);
  };
  return (
    <div className="w-full max-w-xs m-4">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={date}
            onChange={({ target }) => setDate(target.value)}
            id="date"
            name="date"
            type="date"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="eventName"
          >
            Event Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={eventName}
            onChange={({ target }) => setEventName(target.value)}
            id="eventName"
            name="eventName"
            placeholder="Event Name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Leader
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={leader}
            onChange={({ target }) => setLeader(target.value)}
            id="leader"
            name="leader"
            placeholder="Leader"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="backups"
          >
            Backups (separated by commas)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={backups}
            onChange={({ target }) => setBackups(target.value)}
            id="backups"
            name="backups"
            placeholder="john, paul, luke"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="keys"
          >
            Keys
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={keys}
            onChange={({ target }) => setKeys(target.value)}
            id="keys"
            name="keys"
            placeholder="Keys"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="drums"
          >
            Drums
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={drums}
            onChange={({ target }) => setDrums(target.value)}
            id="drums"
            name="drums"
            placeholder="Drums"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="electricGuitar"
          >
            Electric Guitar
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={electricGuitar}
            onChange={({ target }) => setElectricGuitar(target.value)}
            id="electricGuitar"
            name="electricGuitar"
            placeholder="Electric Guitar"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="acousticGuitar"
          >
            Acoustic Guitar
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={acousticGuitar}
            onChange={({ target }) => setAcousticGuitar(target.value)}
            id="acousticGuitar"
            name="acousticGuitar"
            placeholder="Acoustic Guitar"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="bass"
          >
            Bass
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={bass}
            onChange={({ target }) => setBass(target.value)}
            id="bass"
            name="bass"
            placeholder="Bass"
          />
        </div>
        <div className="mb-4">
          <h3>Other</h3>
          <button
            onClick={() =>
              setOther([...other, { name: '', instrument: '', uid: nanoid() }])
            }
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="button"
          >
            Add one
          </button>
        </div>
        <div className="mb-4">
          {other.length > 0 &&
            other.map((item) => (
              <div className="border p-5 mb-4 bg-gray-100">
                <div className="text-right text-red-500">
                  <button
                    onClick={() => {
                      const newItems = other.filter((i) => item.uid !== i.uid);
                      setOther(newItems);
                    }}
                  >
                    🅧
                  </button>
                </div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="instrument"
                >
                  Instrument
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={item.instrument}
                  onChange={({ target }) => {
                    const newItem = { ...item, instrument: target.value };
                    const newItems = other.map((item) => {
                      if (item.uid === newItem.uid) {
                        return newItem;
                      }
                      return item;
                    });
                    setOther(newItems);
                  }}
                  id="instrument"
                  name="instrument"
                  placeholder="Instrument"
                  required
                />
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={item.name}
                  onChange={({ target }) => {
                    const newItem = { ...item, name: target.value };
                    const newItems = other.map((item) => {
                      if (item.uid === newItem.uid) {
                        return newItem;
                      }
                      return item;
                    });
                    setOther(newItems);
                  }}
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
            ))}
        </div>
        <p className="text-red-500 text-xs italic">{errorMessage}</p>
        <div className="flex justify-end">
          <button
            className={`bg-blue-${invalid ? 200 : 500} hover:bg-blue-${
              invalid ? 200 : 700
            } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="submit"
            disabled={invalid}
          >
            save
          </button>
        </div>
      </form>
    </div>
  );
};
