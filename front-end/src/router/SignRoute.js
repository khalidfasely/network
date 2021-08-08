import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const SignRoute = ({
    IsAuthentication,
    component: Component,
    ...rest
}) => (
    // Look at the 166th lecture's Q&A to understand the defferent between props1/2
    <Route {...rest} component={(props) => (
        IsAuthentication ? (
            <Redirect to="/" />
        ) : (
            <div>
                <Component {...props} />
            </div>
        )
    )} />
);

const mapStateToProps = (state) => ({
    IsAuthentication: !!state.auth.uname
});

export default connect(mapStateToProps)(SignRoute);