import React, { useState } from 'react';
import register from '../fetching/register';
import { history } from '../router/AppRouter';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const [error, setError] = useState('');

    const onUsernameChange = (e) => {
      const username = e.target.value;
      setUsername(username);
      //if(username) {
      //  setUsername(username);
      //}
    }

    const onEmailChange = (e) => {
      const email = e.target.value;
      setEmail(email);
    }

    const onPasswordChange = (e) => {
      const password = e.target.value;
      setPassword(password);
    }

    const onConfirmationChange = (e) => {
      const confirmation = e.target.value;
      setConfirmation(confirmation);
    }

    const registerData = (e) => {
        e.preventDefault();

        const availableData = !!(username && email && password && confirmation && password === confirmation);

        if (availableData) {
          register({ username, email, password, confirmation }).then((message) => {
            if(message === 'Register') {
              setUsername('');
              setEmail('');
              setPassword('');
              setConfirmation('');

              setError('');
              
              history.push('/');
            } else {
              setError(message);
            }
          });
        } else {
          setError('Make Sure You Fill All Fields AND The Passwords Match!');
        }
    }

    return (
        <form onSubmit={registerData}>
            {error && <p>{error}</p>}
            <input
              name='username'
              type="text"
              placeholder="Username"
              autoFocus
              value={username}
              onChange={onUsernameChange}
            />
            <input
              name='email'
              type="email"
              placeholder="Email"
              value={email}
              onChange={onEmailChange}
            />
            <input
              name='password'
              type="password"
              placeholder="Password"
              value={password}
              onChange={onPasswordChange}
            />
            <input
              name='confirmation'
              type="password"
              placeholder="Password(Again)"
              value={confirmation}
              onChange={onConfirmationChange}
            />
            <button>Submit</button>
        </form>
    );
}

export default Register;