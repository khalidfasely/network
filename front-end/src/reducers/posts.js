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
        default:
            return state;
    }
};