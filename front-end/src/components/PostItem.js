import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startEditPost, startLike, startUnlike } from '../actions/posts';

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
            <div>
                {error && <p>{error}</p>}
                <textarea onChange={changeContent}>{content}</textarea>
                <button disabled={!newContent} onClick={savePost}>Save</button>
                <button onClick={unEditPost}>x</button>
            </div>
        );
    }
    return (
        <div>
            <h3>id: {id}</h3>
            {message && <p>{message}</p>}
            {uname === user && <button onClick={edit}>Edit</button>}
            <Link to={`/user/${user_id}`}>user: {user}</Link>
            <div>user id: {user_id}</div>
            <div>content: {content}</div>
            <div>likes: {likes}</div>
            {
                uname && (
                    likesList.includes(id) ?
                    <button disabled={button} onClick={unlike_button}>Unlike</button> :
                    <button disabled={button} onClick={like_button}>Like</button>
                    )
            }
            <div>time: {time}</div>
        </div>
    );
}; //<div>likes: {likes}</div>

const mapStateToProps = (state) => ({
    uname: state.auth.uname
});

const mapDispatchToState = (dispatch) => ({
    editPost: (id, updates) => dispatch(startEditPost(id, updates)),
    like: (id) => dispatch(startLike(id)),
    unlike: (id) => dispatch(startUnlike(id))
});

export default connect(mapStateToProps, mapDispatchToState)(PostItem);