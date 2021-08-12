import React from 'react';
import { connect } from 'react-redux';
import { startSetPostsProfile } from '../actions/posts';
import PostsList from './PostsList';
import ProfileHeader from './ProfileHeader';

class Profile extends React.Component {
    componentWillMount(){
        this.props.startSetPostsProfile(this.props.linkUser);
        
    }
    render () {
        return (
            <div>
                <ProfileHeader
                  linkUser={this.props.linkUser}
                  userProfile={this.props.userProfile}
                  follow={this.props.follow}
                  uname={this.props.uname}
                />
                <PostsList posts={this.props.postsProfile} />
            </div>
        );
    }
}

//export default ReduxUser
const mapStateToProps = (state, props) => {
    return {
        uname: state.auth.uname,
        linkUser: props.match.params.id,
        postsProfile: state.posts.posts,
        userProfile: state.posts.user,
        follow: state.posts.follow
    };
};

const mapDispatchToProps = (dispatch) => ({
    startSetPostsProfile: (id) => dispatch(startSetPostsProfile(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(Profile);


//import React from 'react';
//import { connect } from 'react-redux';
//import { startSetPostsProfile } from '../actions/posts';
//import PostsList from './PostsList';
//
////const ReduxUser = (props) => {
////    const user = props.uname;
////    return (
////        <div>
////            {user}
////        </div>
////    );
////}
//
//class ReduxUser extends React.Component {
//    componentDidMount(){
//        this.props.startSetPostsProfile(this.props.linkUser);
//        //console.log(this.props.postsProfile);
//        //setTimeout(() => {
//        //    console.log(this.props.postsProfile);
//        //}, 200)
//        setTimeout(() => {
//            console.log(this.props.follow);
//        }, 250)
//    }
//    //{
//    //    (this.props.userProfile && this.props.uname) && 
//    //    (
//    //        this.props.uname !== this.props.userProfile.username && this.props.follow.follow_up !== 'None' ?
//    //        <button>Follow</button> :
//    //        <button>Unfollow</button>
//    //    )
//    //}
//    render () {
//        return (
//            <div>
//                <div>{this.props.uname}</div>
//                <div>{this.props.linkUser}</div>
//                {this.props.userProfile && <div>{this.props.userProfile.user}</div>}
//                {this.props.follow && <div>Following: {this.props.follow.following} | Followers: {this.props.follow.followers}</div>}
//                {
//                    this.props.uname &&
//                    (
//                        this.props.uname === (this.props.userProfile && this.props.userProfile.username) ?
//                        <p>Nothing</p> :
//                        (
//                            (this.props.follow && this.props.follow.follow_up) !== 'None' ?
//                            <button>Unfollow</button> :
//                            <button>Follow</button>
//                        )
//                    )
//                }
//                <PostsList posts={this.props.postsProfile} />
//            </div>
//        );
//    }
//}
//
////export default ReduxUser;<div>{this.props.userProfile}</div>
//const mapStateToProps = (state, props) => {
//    return {
//        uname: state.auth.uname,
//        linkUser: props.match.params.id,//(props.match ? props.match.params.id : undefined)
//        postsProfile: state.posts.posts,
//        userProfile: state.posts.user,
//        follow: state.posts.follow
//    };
//};
//
//const mapDispatchToProps = (dispatch) => ({
//    startSetPostsProfile: (id) => dispatch(startSetPostsProfile(id))
//});
//
//export default connect(mapStateToProps,mapDispatchToProps)(ReduxUser);