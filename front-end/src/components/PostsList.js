//import React from 'react';
//import PostItem from './PostItem';
//
//const PostsList = ({ posts }) => {
//    return (
//        <div>
//            {
//                posts.length === 0 ? (<div>
//                    No Posts
//                </div>
//                ) : (
//                    posts.map((post) => {
//                        return <PostItem key={post.id} {...post} />
//                    })
//                )
//            }
//        </div>
//    );
//};
//
//export default PostsList;
import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import PostItem from './PostItem';

class PostsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            postsP: [],
            currentPage: 1,
            postsPerPage: 10,
            currentPosts: []
        }
    }

    componentDidMount(){
        this.setState(() => ({ loading: true }));
        this.setComponentState();
    }
    setComponentState = () => {
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        setTimeout(() => {
            this.setState(() => ({ postsP: this.props.posts }));
            this.setState(() => ({ currentPosts: this.state.postsP.slice(indexOfFirstPost, indexOfLastPost) }));
            this.setState(() => ({ loading: false }));
        }, 500);
    }
    //componentWillMount(){
    //    this.setComponentState();
    //}
    componentWillUnmount(){
        //console.log(this.state.currentPosts);
    }
    componentDidUpdate(prevProps){//componentDidUpdate(prevProps, prevState, snapshot)
        //console.log(this.props.posts);
        //console.log(this.state.currentPosts);
        //console.log('componentDidUpdate');
        if(this.props.posts !== prevProps.posts) {
            this.setComponentState();
        }
    }

    paginate = (pageNumber) => {
        //console.log(pageNumber);
        this.setState(() => ({ currentPage: pageNumber }));
        setTimeout(() => {
            this.setComponentState();
        });
    };

    render() {
        if(this.state.loading){
            return <p>Loading...</p>
        }
        return (
            <div>
                {
                    this.props.posts.length === 0 ? (<div>
                        No Posts
                    </div>
                    ) : (
                        this.state.currentPosts.map((post) => {
                            return <PostItem key={post.id} likesList={this.props.likes} {...post} />
                        })
                    )
                }
                <Pagination
                    postsPerPage={this.state.postsPerPage}
                    postsP={this.state.postsP.length}
                    paginate={this.paginate}
                />
            </div>
        );
    };
    
};

export default PostsList;