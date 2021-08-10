import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startAddPost } from '../actions/posts';
//import addPostApi from '../fetching/addPost';
//import { history } from '../router/AppRouter';

const AddPostForm = ({ startAddPost }) => {
    const [post, setPost] = useState('');
    const [message, setMessage] = useState('');

    const addPost = (e) => {
        e.preventDefault();
        if (post.replace(/\s/g, '')) {
    //        addPostApi({ content: post }).then((result) => {
    //            setPost('');
    //            setMessage(result.message);
    //            setTimeout(() => {
    //                setMessage('');
    //                
    //            }, 2000);
    //        });
            startAddPost({ post }).then((result) => {
                setPost('');
                setMessage(result.message);
                setTimeout(() => {
                    setMessage('');
                    
                }, 2000);
            })
        } else {
            setMessage('Set the post.');
        };
    };

    const onPostChange = (e) => {
        const postContent = e.target.value;
        setPost(postContent);
    }
    return (
        <form onSubmit={addPost}>
          {message && <p>{message}</p>}
          <textarea
            placeholder="Add a post to your profile"
            value={post}
            onChange={onPostChange}
          />
          <button>Add Post</button>
        </form>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startAddPost: ({ post }) => dispatch(startAddPost({ post }))
});

export default connect(undefined, mapDispatchToProps)(AddPostForm);