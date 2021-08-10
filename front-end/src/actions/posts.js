import postsApi from '../fetching/posts';
import addPostApi from '../fetching/addPost';

export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    posts
});

export const startSetPosts = () => {
    return (dispatch) => {
        return postsApi().then((result) => {
            dispatch(setPosts(result));
            //console.log(result);
            return result;
        });
    };
};

export const addPost = (post) => ({
    type: 'ADD_POST',
    post
});

export const startAddPost = ({ post }) => {
    return (dispatch) => {
        return addPostApi({ content: post }).then((result) => {
            dispatch(addPost(result.post));
            return result;
        });
    };
};