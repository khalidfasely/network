import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { history } from '../router/AppRouter';
import { startLogout } from '../actions/auth';

const Nav = ({ uname, u_is_admin, startLogout }) => {
    return (
        <header>
          <div className='content-container'>
            <div className='header--content header'>
              <Link className='header--title' to='/'>Network</Link>
              <nav className='header--links'>
                <Link to='/' className='header--link underline'>{uname && uname}{u_is_admin && <span>(V)</span>}</Link>
                <Link to='/' className='header--link underline'>All Posts</Link>
                { uname ?
                  <>
                    <Link to='/following' className='header--link underline'>Following</Link>
                    <button onClick={startLogout} className='header--button'>Logout</button>
                  </> :
                  <>
                    <Link to='/login' className='header--button'>Log In</Link>
                    <Link to='/register' className='header--button'>Register</Link>
                  </>
                }
              </nav>
            </div>
          </div>
        </header>
    )
}; // onClick={() => startLogout().then(() => history.push('/login'))}

//Export the connected component
const mapStateToProps = (state) => ({
  uname: state.auth.uname,
  u_is_admin: state.auth.is_admin
});

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);