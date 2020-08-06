import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const SIGNIN_URL = 'http://localhost:8000/signin';

export default ({ setLogin }) => {
  const history = useHistory();
  const form = useRef(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalid, setInvalid] = useState(true);

  useEffect(() => {
    for (let input of form.current) {
      if (
        (input.type === 'email' || input.type === 'password') &&
        input.validity.valid
      ) {
        setInvalid(false);
      }
    }
  }, [email, password]);

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
    <div className="w-full max-w-xs m-4">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
        ref={form}
      >
        <div class="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div class="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            onClick={() => history.push('/signup')}
          >
            Create an Account
          </button>
          <button
            className={`bg-blue-${invalid ? 200 : 500} hover:bg-blue-${
              invalid ? 200 : 700
            } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="submit"
            disabled={invalid}
          >
            Sign In
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 HomemadeCoder. All rights reserved.
      </p>
    </div>
  );
};
