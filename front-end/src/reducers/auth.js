// auth reducer
const authReducerDefaultState = {
    uname: undefined,
    is_admin: undefined
};

export default (state = (authReducerDefaultState), action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                uname: action.uname,
                is_admin: action.is_admin
            }
        case 'LOGIN':
            return {
                ...state,
                uname: action.uname,
                is_admin: action.is_admin
            };
        case 'LOGOUT':
            return {
                ...state,
                uname: undefined,
                is_admin: undefined
            };
        default:
            return state;
    }
};
