import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startAddPost } from '../actions/posts';
//import addPostApi from '../fetching/addPost';
//import { history } from '../router/AppRouter';

const AddPostForm = ({ startAddPost }) => {
    const [post, setPost] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

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
                setError('');
                setMessage(result.message);
                setTimeout(() => {
                    setMessage('');
                    
                }, 2000);
            })
        } else {
            setError('Set the post.');
        };
    };

    const onPostChange = (e) => {
        const postContent = e.target.value;
        setPost(postContent);
    }
    return (
        <div className='content-container_body'>
            <div className='form_new'>
                <form onSubmit={addPost}>
                  {message && <p className='message'><i>{message}</i></p>}
                  {error && <p className='error'><i>{error}</i></p>}
                  <textarea
                    className='form_new--textarea'
                    placeholder="Add a post to your profile"
                    value={post}
                    onChange={onPostChange}
                  />
                  <button className='form_new--button'>Add Post</button>
                </form>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startAddPost: ({ post }) => dispatch(startAddPost({ post }))
});

export default connect(undefined, mapDispatchToProps)(AddPostForm);