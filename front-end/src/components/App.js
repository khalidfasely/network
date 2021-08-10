import React from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
import AddPostForm from './AddPostForm';
import PostsList from './PostsList';
//import './App.css';

const App = ({ uname, posts }) => {
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

export default connect(mapStateToProps)(App);