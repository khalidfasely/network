import { login, logout, setUser } from "../../actions/auth";

test('Should login fire correctly', () => {
    const uname = 'Admin';
    const is_admin = true;
    const action = login({ uname, is_admin });
    expect(action).toEqual({
        type: 'LOGIN',
        uname,
        is_admin
    });
});

test('Should logout fire correctly', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});

test('Should setUser fire correctly', () => {
    const uname = 'Admin';
    const is_admin = true;
    const action = setUser({ uname, is_admin });
    expect(action).toEqual({
        type: 'SET_USER',
        uname,
        is_admin
    });
})