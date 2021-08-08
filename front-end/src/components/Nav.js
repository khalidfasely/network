import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

const Nav = ({ uname, startLogout }) => {
    return (
        <nav>
            <Link to='/'>Network</Link>
            <div>
                <Link to='profile'>{uname && uname}</Link>
                <Link to='/all-posts'>All Posts</Link>
                { uname ?
                  <span>
                    <Link to='/following'>Following</Link>
                    <button onClick={startLogout}>Logout</button>
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

//Export the connected component
const mapStateToProps = (state) => ({
  uname: state.auth.uname
});

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);