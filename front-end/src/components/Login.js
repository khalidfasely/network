import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { history } from '../router/AppRouter';

const Login = ({ startLogin }) => {
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
            startLogin({ username, password }).then((result) => {
                //console.log(result);
                if(result.message === 'Login Successfully') {
                    setUsername('');
                    setPassword('');

                    setError('');

                    history.push('/');
                } else {
                    setError(result.message);
                }
            });
            

        } else {
            setError('Make Sure You Fill Username AND Password Fields!');
        }
    }

    return (
        <div className='content-container_body form_login'>
            <form onSubmit={loginData}>
                {error && <div className='error'><i>{error}</i></div>}
                <div>
                    <input
                        className='form_login--input'
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
                    className='form_login--input'
                    name='password'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onPasswordChange}
                    />
                </div>
                <div>
                    <button className='form_login--button'>Login</button>
                </div>
            </form>
        </div>
    );
};


//Export the connected component
const mapDispatchToProps = (dispatch) => ({
    startLogin: ({ username, password }) => dispatch(startLogin({ username, password }))
});

export default connect(undefined, mapDispatchToProps)(Login);