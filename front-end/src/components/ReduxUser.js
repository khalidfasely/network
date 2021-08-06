import React from 'react';
import { connect } from 'react-redux';

const ReduxUser = (props) => {
    const user = props.uname;
    return (
        <div>
            {user}
        </div>
    );
}

//export default ReduxUser;
const mapStateToProps = (state) => {
    return {
        uname: state.auth.uname
    };
};

export default connect(mapStateToProps,undefined)(ReduxUser);