import React, { useState } from 'react';
import { connect } from 'react-redux';
import register from '../fetching/register';
import { history } from '../router/AppRouter';
import { startRegister } from '../actions/auth';
import { Link } from 'react-router-dom';

const Register = ({ startRegister }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const [error, setError] = useState('');

    const onUsernameChange = (e) => {
      const username = e.target.value;
      setUsername(username);
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
          startRegister({ username, email, password, confirmation }).then((result) => {
            if(result.message === 'Register') {
              setUsername('');
              setEmail('');
              setPassword('');
              setConfirmation('');

              setError('');
              
              history.push('/');
            } else {
              setError(result.message);
            }
          });
        } else {
          setError('Make Sure You Fill All Fields AND The Passwords Match!');
        }
    }

    return (
      <div className='form_register'>
        <form onSubmit={registerData}>
            {error && <div className='error'><i>{error}</i></div>}
            <div>
              <input
                className='form_register--input'
                name='username'
                type="text"
                placeholder="Username"
                autoFocus
                value={username}
                onChange={onUsernameChange}
              />
            </div>
            <div>
              <input
                className='form_register--input'
                name='email'
                type="email"
                placeholder="Email"
                value={email}
                onChange={onEmailChange}
              />
            </div>
            <div>
              <input
                className='form_register--input'
                name='password'
                type="password"
                placeholder="Password"
                value={password}
                onChange={onPasswordChange}
              />
            </div>
            <div>
              <input
                className='form_register--input'
                name='confirmation'
                type="password"
                placeholder="Password(Again)"
                value={confirmation}
                onChange={onConfirmationChange}
              />
            </div>
            <div>
              <button className='form_register--button'>Submit</button>
            </div>
        </form>
        Already have an account? <Link to='/login'>Log In here.</Link>
      </div>
    );
}

//Export the connected component
const mapDispatchToProps = (dispatch) => ({
  startRegister: ({ username, email, password, confirmation }) => dispatch(startRegister({ username, email, password, confirmation }))
});

export default connect(undefined, mapDispatchToProps)(Register);