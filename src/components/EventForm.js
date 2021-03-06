import React, { useState, useEffect } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
const nanoid = require('nanoid');

export default function EventForm({
  initialData,
  onSubmit,
  errorMessage,
  onCancel,
  onArchive,
}) {
  const [data, setData] = useState({ ...DEFAULT_DATA, ...initialData });
  const [other, setOther] = useState([]);
  const {
    eventDate,
    eventName,
    leader,
    backups,
    keys,
    drums,
    electricGuitar,
    acousticGuitar,
    bass,
    lineup,
  } = data;

  const modifiers = {
    eventDate: new Date(eventDate),
  };

  const modifiersStyles = {
    eventDate: {
      color: 'white',
      backgroundColor: '#4299e1',
    },
  };

  const [invalid, setInvalid] = useState(true);

  useEffect(() => {
    if (eventDate === '' || leader === '' || eventName === '') {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  }, [eventDate, leader, eventName]);

  const handleSetData = ({ key, value }) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleSave = (e) => {
    onSubmit(e, data);
  };

  return (
    <div className="w-full max-w-md m-4">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSave}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="eventDate"
          >
            Date
          </label>
          <div className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <div className="text-center">
              <DayPicker
                onDayClick={(value) => {
                  handleSetData({ key: 'eventDate', value });
                }}
                selectedDay={eventDate}
                modifiers={modifiers}
                modifiersStyles={modifiersStyles}
              />
            </div>
          </div>
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
            onChange={({ target }) =>
              handleSetData({ key: 'eventName', value: target.value })
            }
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
            onChange={({ target }) =>
              handleSetData({ key: 'leader', value: target.value })
            }
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
            onChange={({ target }) =>
              handleSetData({ key: 'backups', value: target.value })
            }
            id="backups"
            name="backups"
            placeholder="John, Paul, Luke"
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
            onChange={({ target }) =>
              handleSetData({ key: 'keys', value: target.value })
            }
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
            onChange={({ target }) =>
              handleSetData({ key: 'drums', value: target.value })
            }
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
            onChange={({ target }) =>
              handleSetData({ key: 'electricGuitar', value: target.value })
            }
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
            onChange={({ target }) =>
              handleSetData({ key: 'acousticGuitar', value: target.value })
            }
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
            onChange={({ target }) =>
              handleSetData({ key: 'bass', value: target.value })
            }
            id="bass"
            name="bass"
            placeholder="Bass"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lineup"
          >
            Lineup
          </label>
          <textarea
            rows="4"
            // cols="50"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={lineup}
            onChange={({ target }) =>
              handleSetData({ key: 'lineup', value: target.value })
            }
            id="lineup"
            name="lineup"
            placeholder="Lineup"
          />
        </div>
        <div className="mb-4">
          <h3>Other</h3>
          <button
            onClick={() =>
              setOther([...other, { name: '', instrument: '', uid: nanoid() }])
            }
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="button"
          >
            Add one
          </button>
        </div>
        <div className="mb-4">
          {other.length > 0 &&
            other.map((item) => (
              <div key={item.uid} className="border p-5 mb-4 bg-gray-100">
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
        {errorMessage && (
          <p className="text-red-500 text-xs italic">{errorMessage}</p>
        )}
        <div className="flex justify-between">
          <button
            className={`bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
          {onArchive && (
            <button
              className="bg-red-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              onClick={onArchive}
            >
              Archive
            </button>
          )}
          <button
            className={`bg-blue-${invalid ? 200 : 500} hover:bg-blue-${
              invalid ? 200 : 700
            } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="submit"
            disabled={invalid}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

const DEFAULT_DATA = {
  eventDate: new Date(),
  eventName: '',
  leader: '',
  backups: '',
  keys: '',
  electricGuitar: '',
  acousticGuitar: '',
  bass: '',
  drums: '',
  other: [],
  Lineup: '',
};
