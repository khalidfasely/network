//import { createStore } from 'redux';
//
//const store = createStore((state = { count: 0 }, action) => {
//    switch(action.type) {
//        case 'INCREMENT':
//            return {
//                count: state.count + (action.incrementBy || 1)
//            };
//        default:
//            return state;
//    }
//});
//
//console.log(store.getState());
//
//store.dispatch({
//    type: 'INCREMENT'
//})
//
//store.dispatch({
//    type: 'INCREMENT'
//})
//
//store.dispatch({
//    type: 'INCREMENT',
//    incrementBy: 5
//})
//
//console.log(store.getState());

import { createStore, combineReducers } from 'redux';



// Store creation

//const store = createStore(
//    //authReducer
//    combineReducers({
//        auth: authReducer,
//    })
//);

const logout = () => ({
    type: 'LOGOUT'
});

const login = ({ uname } = {}) => ({
    type: 'LOGIN',
    uname
});

// auth reducer
const authReducerDefaultState = {
    uname: 'Admin'
};

const authReducer = (state = (authReducerDefaultState), action) => {
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

//const store = createStore(authReducer);
export default () => {
    const store = createStore(
        //authReducer
        combineReducers({
            auth: authReducer,
        })
    );
    return store;    
}
//const store = createStore(
//    //authReducer
//    combineReducers({
//        auth: authReducer,
//    })
//);

//console.log(store.getState().auth);

//const uname = ;

//store.dispatch(login({ uname: 'Admin' }));
//
//console.log(store.getState().auth);
//
//store.dispatch(logout());
//
//console.log(store.getState().auth);
//
