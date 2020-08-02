import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SIGNUP_URL = 'http://localhost:8000/signup';

export default ({ setLogin }) => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    const response = await fetch(SIGNUP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(({ message }) => message);

    if (response === 'success') {
      history.push('/');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        id="email"
        placeholder="Email"
      />
      <label htmlFor="password">Password</label>
      <input
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        id="password"
        type="password"
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
