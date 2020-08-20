import React, { useState, useEffect } from 'react';
import Event from './Event';
import { getCachedUserData } from '../helpers';
import Signin from './Signin';
import { Link } from 'react-router-dom';
import EventForm from '../components/EventForm';

const ADD_EVENT_URL = 'http://localhost:8000/addEvent';
const ALL_EVENTS_URL = 'http://localhost:8000/events';

export default () => {
  const user = getCachedUserData();
  const [activeEvent, setActiveEvent] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch(ALL_EVENTS_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          return res.json();
        })
        .then(({ data }) => setEvents(data))
        .catch((err) => console.log(err));
      // TODO: add error handler
      if (!response) return;
    };
    if (events.length === 0) {
      fetchEvents();
    }
  }, [events]);

  const handleSubmit = async (e, data) => {
    e.preventDefault();
    const response = await fetch(ADD_EVENT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => data)
      .catch((err) => console.log(err));

    if (response.error) {
      setErrorMessage(response.error);
    }

    if (response.message === 'success') {
      setActiveEvent(null);
    }
  };

  if (user && user.isVerified) {
    if (activeEvent) {
      return (
        <EventForm
          initialData={activeEvent}
          onSubmit={handleSubmit}
          onCancel={() => setActiveEvent(null)}
        />
      );
    }

    return (
      <div>
        <div className="flex justify-center">
          <Link to="/event/null">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add New
            </button>
          </Link>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-6">
          {events.map((event) => (
            <button
              onClick={() => {
                setActiveEvent(event);
              }}
            >
              <Event {...event} />
            </button>
          ))}
        </div>
      </div>
    );
  }

  return <Signin />;
};
