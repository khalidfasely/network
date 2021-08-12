import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

const Nav = ({ uname, u_is_admin, startLogout }) => {
    return (
        <nav>
            <Link to='/'>Network</Link>
            <div>
                <Link to='/'>{uname && uname}{u_is_admin && <span>(V)</span>}</Link>
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
  uname: state.auth.uname,
  u_is_admin: state.auth.is_admin
});

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);