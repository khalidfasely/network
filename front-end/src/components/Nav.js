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
                  <>
                    <Link to='/following'>Following</Link>
                    <button onClick={logout}>Logout</button>
                  </> :
                  <>
                    <Link to='/login'>Log In</Link>
                    <Link to='/register'>Register</Link>
                  </>
                }
                
            </div>
          </nav>
    )
};

export default Nav;

//<nav class="navbar navbar-expand-lg navbar-light bg-light">
          //  <a class="navbar-brand" href="#">Network</a>
          //  <Link to='/'>Network</Link>
          //
          //  <div>
          //    <ul class="navbar-nav mr-auto">
          //          <li class="nav-item">
          //              <a class="nav-link" href="#"><strong>{'Anonymous'}</strong></a>
          //              <Link to='/Anonymous'>{'Anonymous'}</Link>
          //          </li>
          //      <li class="nav-item">
          //        <a class="nav-link" href="#">All Posts</a>
          //        <Link to='/all-posts'>All Posts</Link>
          //      </li>
          //          <li class="nav-item">
          //              <a class="nav-link" href="#">Following</a>
          //              <Link to='/following'>Following</Link>
          //          </li>
          //          <li class="nav-item">
          //              <a class="nav-link" href="#">Log Out</a>
          //              <button onClick={logout}>Log Out</button>
          //              <Link to='/login'>Log Out</Link>
          //          </li>
          //          <li class="nav-item">
          //              <a class="nav-link" href="#">Log In</a>
          //              <Link to='/login'>Log In</Link>
          //          </li>
          //          <li class="nav-item">
          //              <a class="nav-link" href="#">Register</a>
          //              <Link to='/register'>Register</Link>
          //          </li>
          //      </ul>
          //  </div>
          //</nav>


          //<nav class="navbar navbar-expand-lg navbar-light bg-light">
          //<Link to='/'>Network</Link>
          //<div>
          //  <ul class="navbar-nav mr-auto">
          //        <li class="nav-item">
          //            <Link to='/Anonymous'>{'Anonymous'}</Link>
          //        </li>
          //    <li class="nav-item">
          //      <Link to='/all-posts'>All Posts</Link>
          //    </li>
          //        <li class="nav-item">
          //            <Link to='/following'>Following</Link>
          //        </li>
          //        <li class="nav-item">
          //            <button onClick={logout}>Logout</button>
          //        </li>
          //        <li class="nav-item">
          //            <Link to='/login'>Log In</Link>
          //        </li>
          //        <li class="nav-item">
          //            <Link to='/register'>Register</Link>
          //        </li>
          //    </ul>
          //</div>
        //</nav>