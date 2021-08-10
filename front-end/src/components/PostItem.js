import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ id, user, user_id, content, likes, time }) => {
    return (
        <div>
            <h3>id: {id}</h3>
            <Link to={`/user/${user_id}`}>user: {user}</Link>
            <div>user id: {user_id}</div>
            <div>content: {content}</div>
            <div>likes: {likes}</div>
            <div>time: {time}</div>
        </div>
    );
};

export default PostItem;