export const logout = () => ({
    type: 'LOGOUT'
});

export const login = ({ uname } = {}) => ({
    type: 'LOGIN',
    uname
});