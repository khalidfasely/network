import React from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
import AddPostForm from './AddPostForm';
import PostsList from './PostsList';
import { startSetPosts } from '../actions/posts';
//import './App.css';
class App extends React.Component {
    //constructor(props) {
    //    super(props);
    //
    // this.state = {
    //        postsP: this.props.posts,
    //        currentPage: 1,
    //        postsPerPage: 10,
    //        currentPosts: []
    //    }
    //}
    //
    componentDidMount(){
        this.props.startSetPosts();
    //    .then(() => {
    //        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    //        const indexOfFirstPost = this.state.indexOfLastPost - this.state.postsPerPage;
    //        this.setState(() => ({ currentPosts: this.state.postsP.slice(indexOfFirstPost, indexOfLastPost) }));
    //        console.log(this.state.currentPosts);
    //    });
    //    //const currentPosts = postsP.slice(indexOfFirstPost, indexOfLastPost);
    //}
    //componentDidMount(){
    //    console.log(this.state.currentPosts);
    }
    render() {
        return (
            <div>
                {this.props.uname && <AddPostForm />}
                <Counter />
                <h1>Posts</h1>
                <PostsList posts={this.props.posts} likes={this.props.likes} />
            </div>
        )
    }
};


const mapStateToProps = (state) => ({
    uname: state.auth.uname,
    posts: state.posts.posts,
    likes: state.posts.likes
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