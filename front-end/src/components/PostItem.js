import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startEditPost } from '../actions/posts';

const PostItem = ({ id, user, user_id, content, likes, time, uname, editPost }) => {
    const [editing, setEditing] = useState(false);
    const [newContent, setNewContent] = useState();
    const [message, setMessage] = useState();
    const [error, setError] = useState();

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
        //editPost(id, { id, user, user_id, content: newContent, likes, time })
        //.then((message) => {
        //    setEditing(false);
        //    setMessage(message.message);
        //    setTimeout(() => {
        //        setMessage();
        //    }, 2000)
        //});
    }

    const unEditPost = () => {
        setEditing(false);
    }

    const changeContent = (e) => {
        const newContent = e.target.value;
        //console.log(newContent);
        setNewContent(newContent);
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
            <div>time: {time}</div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    uname: state.auth.uname
});

const mapDispatchToState = (dispatch) => ({
    editPost: (id, updates) => dispatch(startEditPost(id, updates))
});

export default connect(mapStateToProps, mapDispatchToState)(PostItem);



//import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//
//const PostItem = ({ id, user, user_id, content, likes, time, uname }) => {
//    const [editing, setEditing] = useState(false);
//    const [newContent, setNewContent] = useState();
//
//    const edit = () => {
//        setEditing(true);
//    }
//
//    const savePost = () => {
//        fetch(`/data/savep/${id}`, {
//            method: 'PUT',
//            body: JSON.stringify({
//                content: `${newContent}`
//            })
//        })
//        .then(response => response.json())
//        .then(message => {
//            // Print result
//            console.log(message);
//        })
//        .then(() => setEditing(false))
//        .catch(er => console.log(er));
//    }
//
//    const changeContent = (e) => {
//        const newContent = e.target.value;
//        console.log(newContent);
//        setNewContent(newContent);
//    }
//
//    if(editing){
//        return (
//            <div>
//                <textarea onChange={changeContent}>{content}</textarea>
//                <button onClick={savePost}>Save</button>
//            </div>
//        );
//    }
//    return (
//        <div>
//            <h3>id: {id}</h3>
//            {uname === user && <button onClick={edit}>Edit</button>}
//            <Link to={`/user/${user_id}`}>user: {user}</Link>
//            <div>user id: {user_id}</div>
//            <div>content: {content}</div>
//            <div>likes: {likes}</div>
//            <div>time: {time}</div>
//        </div>
//    );
//};
//
//const mapStateToProps = (state) => ({
//    uname: state.auth.uname
//});
//
//export default connect(mapStateToProps)(PostItem);