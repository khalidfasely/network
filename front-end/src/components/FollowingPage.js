import React from 'react';
import { connect } from 'react-redux';
import PostsList from './PostsList';
import { startSetPostsFollowing } from '../actions/posts';

class Following extends React.Component {
    componentWillMount() {
        this.props.startSetPostsFollowing()//.then(() => {
        //    console.log(this.props.posts);
        //});
    }
    render() {
        return (
            <div>
                <h1>Following Page</h1>
                <PostsList posts={this.props.posts} />
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    posts: state.posts.posts
});

const mapDispatchToProps = (dispatch) => ({
    startSetPostsFollowing: () => dispatch(startSetPostsFollowing())
});

export default connect(mapStateToProps, mapDispatchToProps)(Following);
//export default Following;