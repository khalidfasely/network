import React from 'react';

const PostItem = ({ id, user, user_id, content, likes, time }) => {
    return (
        <div>
            <h3>id: {id}</h3>
            <div>user: {user}</div>
            <div>user id: {user_id}</div>
            <div>content: {content}</div>
            <div>likes: {likes}</div>
            <div>time: {time}</div>
        </div>
    );
};

export default PostItem;