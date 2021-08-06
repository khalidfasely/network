// auth reducer
const authReducerDefaultState = {
    uname: 'Khalid'
};

export default (state = (authReducerDefaultState), action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                uname: action.uname
            };
        case 'LOGOUT':
            return {
                ...state,
                uname: undefined
            };
        default:
            return state;
    }
};
