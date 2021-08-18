// auth reducer
const postsReducerDefaultState = {};

export default (state = (postsReducerDefaultState), action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                //...state,
                posts: action.posts,
                likes: action.likes
            }
        case 'ADD_POST':
            return {
                posts: [
                    action.post,
                    ...state.posts
                ],
                likes: action.likes
            }
        case 'SET_POSTS_PROFILE':
            return {
                //...state,
                posts: action.posts,
                user: action.user,
                follow: action.follow,
                likes: action.likes
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
                posts: action.posts,
                likes: action.likes
            }
        case 'EDIT_POST':
            return {
                ...state,
                posts: state.posts.map((post) => {
                        if(post.id === action.id){
                            return {
                                ...post,
                                ...action.updates
                            };
                        } else {
                            return post;
                        }
                    })
                // The example above and The example below are the same functionality
                //posts: [
                //    ...state.posts.map((post) => {
                //        if(post.id === action.id){
                //            return {
                //                ...post,
                //                ...action.updates
                //            };
                //        } else {
                //            return post;
                //        }
                //    })
                //]
            }
        case 'LIKE':
            return {
                ...state,
                likes: [
                    ...state.likes,
                    action.id
                ],//...state.likes.push(action.id)
                posts: state.posts.map((post) => {
                    if(post.id === action.id){
                        return {
                            ...post,
                            likes: post.likes + 1
                        } 
                    } else {
                        return post;
                    }
                })
            };
        case 'UNLIKE':
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if(post.id === action.id){
                        return {
                            ...post,
                            likes: post.likes - 1
                        } 
                    } else {
                        return post;
                    }
                }),
                likes: state.likes.filter((item) => item !== action.id)
            };
        default:
            return state;
    }
};