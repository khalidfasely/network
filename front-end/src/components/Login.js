import React, { useState } from 'react';
import login from '../fetching/login';
import { history } from '../router/AppRouter';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const onUsernameChange = (e) => {
        const username = e.target.value;
        setUsername(username);
    }

    const onPasswordChange = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    const loginData = (e) => {
        e.preventDefault();

        const availableData = !!(username && password);

        if (availableData) {
            login({ username, password }).then((message) => {
                //console.log(message);
                if(message === 'Login Successfully') {
                    setUsername('');
                    setPassword('');

                    setError('');

                    history.push('/');
                } else {
                    setError(message);
                }
            });
            

        } else {
            setError('Make Sure You Fill Username AND Password Fields!');
        }
    }

    return (
        <form onSubmit={loginData}>
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
                name='password'
                type="password"
                placeholder="Password"
                value={password}
                onChange={onPasswordChange}
            />
            <button>Login</button>
        </form>
    );
};

export default Login;