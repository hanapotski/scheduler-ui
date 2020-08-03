import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SIGNIN_URL = 'http://localhost:8000/signin';

export default ({ setLogin }) => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    const response = await fetch(SIGNIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => data)
      .catch((err) => console.log(err));

    if (response && response.message === 'success') {
      localStorage.setItem('schedulerAppUser', JSON.stringify(response.data));
      history.push('/events');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        id="email"
        type="email"
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
      <button type="submit">Sign In</button>
      <button onClick={() => history.push('/signup')}>Create an Account</button>
    </form>
  );
};
