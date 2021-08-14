// auth reducer
const postsReducerDefaultState = {};

export default (state = (postsReducerDefaultState), action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                //...state,
                posts: action.posts
            }
        case 'ADD_POST':
            return {
                posts: [
                    action.post,
                    ...state.posts
                ]
            }
        case 'SET_POSTS_PROFILE':
            return {
                //...state,
                posts: action.posts,
                user: action.user,
                follow: action.follow
            }
        case 'FOLLOW':
            return {
                ...state,
                follow: {
                    ...state.follow,
                    follow_up: 'Something',
                    followers: parseInt(state.follow.followers) + 1
                }
            }
        case 'UNFOLLOW':
            return {
                ...state,
                follow: {
                    ...state.follow,
                    follow_up: 'None',
                    followers: parseInt(state.follow.followers) - 1
                }
            }
        case 'POSTS_FOLLOWING':
            return {
                posts: action.posts
            }
        default:
            return state;
    }
};