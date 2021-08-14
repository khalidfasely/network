import postsApi from '../fetching/posts';
import addPostApi from '../fetching/addPost';
import postsProfileApi from '../fetching/postsProfile';
import followApi from '../fetching/follow';
import unFollowApi from '../fetching/unfollow';
import postsFollowingApi from '../fetching/postsFollowing';

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

export const setPostsProfile = ({posts, user, follow}) => ({
    type: 'SET_POSTS_PROFILE',
    posts,
    user,
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

export const setPostsFollowing = ({ posts }) => ({
    type: 'POSTS_FOLLOWING',
    posts
});

export const startSetPostsFollowing = () => {
    return (dispatch) => {
        return postsFollowingApi().then((result) => {
            dispatch(setPostsFollowing(result));
            return result;
        });
    };
};