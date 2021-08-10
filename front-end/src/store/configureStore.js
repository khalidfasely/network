import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import postsReducer from '../reducers/posts';

// We add thunk to dispatch actions

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        //authReducer
        combineReducers({
            auth: authReducer,
            posts: postsReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;    
}