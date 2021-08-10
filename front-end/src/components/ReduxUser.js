import React from 'react';
import { connect } from 'react-redux';

//const ReduxUser = (props) => {
//    const user = props.uname;
//    return (
//        <div>
//            {user}
//        </div>
//    );
//}

class ReduxUser extends React.Component {
    render () {
        return (
            <div>
                {this.props.uname}
                {this.props.linkUser}
            </div>
        );
    }
}

//export default ReduxUser;
const mapStateToProps = (state, props) => {
    return {
        uname: state.auth.uname,
        linkUser: props.match.params.id//(props.match ? props.match.params.id : undefined)
    };
};

export default connect(mapStateToProps,undefined)(ReduxUser);