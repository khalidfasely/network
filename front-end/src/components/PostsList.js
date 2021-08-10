import React from 'react';
import PostItem from './PostItem';

const PostsList = ({ posts }) => {
    return (
        <div>
            {
                posts.length === 0 ? (<div>
                    No Posts
                </div>
                ) : (
                    posts.map((post) => {
                        return <PostItem key={post.id} {...post} />
                    })
                )
            }
        </div>
    );
};

export default PostsList;