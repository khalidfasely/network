import React from 'react';
import { connect } from 'react-redux';
import { startSetPostsProfile } from '../actions/posts';
import PostsList from './PostsList';

//const ReduxUser = (props) => {
//    const user = props.uname;
//    return (
//        <div>
//            {user}
//        </div>
//    );
//}

class ReduxUser extends React.Component {
    componentDidMount(){
        this.props.startSetPostsProfile(this.props.linkUser);
        //console.log(this.props.postsProfile);
        //setTimeout(() => {
        //    console.log(this.props.postsProfile);
        //}, 200)
    }
    render () {
        return (
            <div>
                {this.props.uname}
                {this.props.linkUser}
                <PostsList posts={this.props.postsProfile} />
            </div>
        );
    }
}

//export default ReduxUser;
const mapStateToProps = (state, props) => {
    return {
        uname: state.auth.uname,
        linkUser: props.match.params.id,//(props.match ? props.match.params.id : undefined)
        postsProfile: state.posts.posts
    };
};

const mapDispatchToProps = (dispatch) => ({
    startSetPostsProfile: (id) => dispatch(startSetPostsProfile(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(ReduxUser);