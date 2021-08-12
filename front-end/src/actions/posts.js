import postsApi from '../fetching/posts';
import addPostApi from '../fetching/addPost';
import postsProfileApi from '../fetching/postsProfile';

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

export const setPostsProfile = ({posts, u, follow}) => ({
    type: 'SET_POSTS_PROFILE',
    posts,
    u,
    follow
});

export const startSetPostsProfile = (id) => {
    return (dispatch) => {
        return postsProfileApi(id).then((result) => {
            dispatch(setPostsProfile(result));
            //console.log(result);
            //dispatch(setPostsProfile(result.posts));
            return result;
        });
    };
};