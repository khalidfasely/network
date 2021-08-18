import postsApi from '../fetching/posts';
import addPostApi from '../fetching/addPost';
import postsProfileApi from '../fetching/postsProfile';
import followApi from '../fetching/follow';
import unFollowApi from '../fetching/unfollow';
import postsFollowingApi from '../fetching/postsFollowing';
import editPostApi from '../fetching/editPost';
import likeApi from '../fetching/like';
import unlikeApi from '../fetching/unlike';

export const setPosts = ({ posts, likes }) => ({
    type: 'SET_POSTS',
    posts,
    likes
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

export const addPost = ({ post, likes }) => ({
    type: 'ADD_POST',
    post,
    likes
});

export const startAddPost = ({ post }) => {
    return (dispatch) => {
        return addPostApi({ content: post }).then((result) => {
            dispatch(addPost(result));
            return result;
        });
    };
};

export const setPostsProfile = ({posts, user, follow, likes}) => ({
    type: 'SET_POSTS_PROFILE',
    posts,
    user,
    follow,
    likes
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

export const follow = () => ({
    type: 'FOLLOW'
});

export const startFollow = (following) => {
    return (dispatch) => {
        return followApi(following).then((result) => {
            dispatch(follow());
            return result;
        });
    };
};

export const unfollow = () => ({
    type: 'UNFOLLOW'
});

export const startUnfollow = (following) => {
    return (dispatch) => {
        return unFollowApi(following).then((result) => {
            dispatch(unfollow());
            return result;
        });
    };
};

export const setPostsFollowing = ({ posts, likes }) => ({
    type: 'POSTS_FOLLOWING',
    posts,
    likes
});

export const startSetPostsFollowing = () => {
    return (dispatch) => {
        return postsFollowingApi().then((result) => {
            dispatch(setPostsFollowing(result));
            return result;
        });
    };
};

export const editPost = (id, updates) => ({
    type: 'EDIT_POST',
    id,
    updates
});

export const startEditPost = (id, updates) => {
    return (dispatch) => {
        return editPostApi(id, updates.content).then((message) => {
            dispatch(editPost(id, updates));
            return message;
        });
    };
};

export const like = (id) => ({
    type: 'LIKE',
    id
});

export const startLike = (id) => {
    return (dispatch) => {
        return likeApi(id).then((result) => {
            dispatch(like(id));
            return result;
        });
    };
};

export const unlike = (id) => ({
    type: 'UNLIKE',
    id
});

export const startUnlike = (id) => {
    return (dispatch) => {
        return unlikeApi(id).then((result) => {
            dispatch(unlike(id));
            return result;
        });
    };
};