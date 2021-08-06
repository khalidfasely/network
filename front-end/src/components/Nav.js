import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { history } from '../router/AppRouter';

const Nav = () => {
    const [user, setUser] = useState('');
    const logout = () => {
        fetch('/data/logout')
        .then(res => res.json())
        .then(() => {
          setUser('');
        })
        .catch(er => console.log(er));
        history.push('/login');
    }
    useEffect(() => {
        fetch('/data/user')
        .then(response => response.json())
        .then(result => {
          (result.user !== 'AnonymousUser') ?
          setUser(result.user) :
          setUser('')
        })
        .catch(er => console.log(er));

      }, [user]);
    return (
        <nav>
            <Link to='/'>Network</Link>
            <div>
                <Link to='/Anonymous'>{user && user}</Link>
                <Link to='/all-posts'>All Posts</Link>
                { user ?
                  <span>
                    <Link to='/following'>Following</Link>
                    <button onClick={logout}>Logout</button>
                  </span> :
                  <span>
                    <Link to='/login'>Log In</Link>
                    <Link to='/register'>Register</Link>
                  </span>
                }
                
            </div>
          </nav>
    )
};

export default Nav;