import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import EventForm from '../components/EventForm';

const ADD_EVENT_URL = 'http://localhost:8000/addEvent';

export default () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');

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

    if (!response) return;

    if (response.error) {
      setErrorMessage(response.error);
    }

    if (response.message === 'success') {
      history.push('/');
    }
  };

  return (
    <EventForm
      onSubmit={handleSubmit}
      errorMessage={errorMessage}
      onCancel={() => history.push('/')}
    />
  );
};
