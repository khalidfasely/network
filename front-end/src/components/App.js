import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
import AddPostForm from './AddPostForm';
import PostsList from './PostsList';
import { startSetPosts } from '../actions/posts';
//import './App.css';

const App = ({ uname, posts, startSetPosts }) => {
    useEffect(() => {
        startSetPosts();
    }, [])
    //console.log(posts);
    return (
    <div>
        {uname && <AddPostForm />}
        <Counter />
        <PostsList posts={posts} />
    </div>
)};


const mapStateToProps = (state) => ({
    uname: state.auth.uname,
    posts: state.posts.posts
});

const mapDispatchToProps = (dispatch) => ({
    startSetPosts: () => dispatch(startSetPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);