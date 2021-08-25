import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startEditPost, startLike, startUnlike } from '../actions/posts';
import unlike_image from '../images/unlike.png';
import like_image from '../images/like.png';

const PostItem = ({
        id, user, user_id, content, likes, time,
        uname,
        editPost,
        likesList = [],
        like, unlike
    }) => {
    const [editing, setEditing] = useState(false);
    const [newContent, setNewContent] = useState();
    const [message, setMessage] = useState();
    const [error, setError] = useState();

    const [button, setButton] = useState(false);

    const edit = () => {
        setEditing(true);
    }

    const savePost = () => {
        if (newContent.replace(/\s/g, '')) {
            editPost(id, { id, user, user_id, content: newContent, likes, time })
            .then((message) => {
                setError();
                setEditing(false);
                setMessage(message.message);
                setTimeout(() => {
                    setMessage();
                }, 2000)
            });
        } else {
            setError('Set The New Content.');
        }
    }

    const unEditPost = () => {
        setEditing(false);
    }

    const changeContent = (e) => {
        const newContent = e.target.value;
        //console.log(newContent);
        setNewContent(newContent);
    }

    const disableButton = () => {
        setButton(true);
        setTimeout(() => {
            setButton(false);
        }, 200);
    }

    const like_button = () => {
        disableButton();
        like(id);
    }

    const unlike_button = () => {
        disableButton();
        unlike(id);
    }

    if(editing){
        return (
            <div className='post editing'>
                {error && <p>{error}</p>}
                <textarea className='form_new--textarea' onChange={changeContent}>{content}</textarea>
                <div className='buttons'>
                    <button className='post_edit-button' disabled={!newContent} onClick={savePost}>Save</button>
                    <button className='post_unedit-button' onClick={unEditPost}>x</button>
                </div>
            </div>
        );
    }
    return (
        <div className='post'>
            <div className='post-content'>
                {message && <p className='message'>{message}</p>}
                <div className='post_user_edit'>
                    <Link className='user_link' to={`/user/${user_id}`}>@{user}</Link>
                    {uname === user && <button onClick={edit}><i>Edit</i></button>}
                </div>
                <div className='post_content'>{content}</div>
                <div className='post_time'><i>{time}</i></div>
                <div className='post_likes'><i>Likes:</i> <b>{likes}</b></div>
                
                    {
                        uname && (
                            likesList.includes(id) ?
                            <div className='like_section'>
                                <button className='like_button' disabled={button} onClick={unlike_button}>
                                    <img className='like_unlike_img' src={like_image} /><span>Like</span>
                                </button>
                            </div> :
                            <div className='like_section'>
                                <button className='unlike_button' disabled={button} onClick={like_button}>
                                    <img className='like_unlike_img' src={unlike_image} /><span>Like</span>
                                </button>
                            </div>
                            )
                    }
                
            </div>
        </div>
    );
};
//<h3>id: {id}</h3>
//{message && <p>{message}</p>}
//{uname === user && <button onClick={edit}>Edit</button>}
//<Link to={`/user/${user_id}`}>user: {user}</Link>
//<div>user id: {user_id}</div>
//<div>content: {content}</div>
//<div>likes: {likes}</div>
//{
//    uname && (
//        likesList.includes(id) ?
//        <button disabled={button} onClick={unlike_button}>Unlike</button> :
//        <button disabled={button} onClick={like_button}>Like</button>
//        )
//}
//<div>time: {time}</div>

const mapStateToProps = (state) => ({
    uname: state.auth.uname
});

const mapDispatchToState = (dispatch) => ({
    editPost: (id, updates) => dispatch(startEditPost(id, updates)),
    like: (id) => dispatch(startLike(id)),
    unlike: (id) => dispatch(startUnlike(id))
});

export default connect(mapStateToProps, mapDispatchToState)(PostItem);