import React from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
import AddPostForm from './AddPostForm';
import PostsList from './PostsList';
import { startSetPosts } from '../actions/posts';
//import './App.css';
class App extends React.Component {
    componentWillMount(){
        this.props.startSetPosts();
    }
    render() {
        return (
            <div>
                {this.props.uname && <AddPostForm />}
                <Counter />
                <PostsList posts={this.props.posts} />
            </div>
        )
    }
};


const mapStateToProps = (state) => ({
    uname: state.auth.uname,
    posts: state.posts.posts
});

const mapDispatchToProps = (dispatch) => ({
    startSetPosts: () => dispatch(startSetPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

//import React, { useEffect } from 'react';
//import { connect } from 'react-redux';
//import Counter from './Counter';
//import AddPostForm from './AddPostForm';
//import PostsList from './PostsList';
//import { startSetPosts } from '../actions/posts';
////import './App.css';
//
//const App = ({ uname, posts, startSetPosts }) => {
//    useEffect(() => {
//        startSetPosts();
//    }, [])
//    //console.log(posts);
//    return (
//    <div>
//        {uname && <AddPostForm />}
//        <Counter />
//        <PostsList posts={posts} />
//    </div>
//)};
//
//
//const mapStateToProps = (state) => ({
//    uname: state.auth.uname,
//    posts: state.posts.posts
//});
//
//const mapDispatchToProps = (dispatch) => ({
//    startSetPosts: () => dispatch(startSetPosts())
//});
//
//export default connect(mapStateToProps, mapDispatchToProps)(App);