import { createStore, combineReducers } from "redux";
import authReducer from '../reducers/auth';

export default () => {
    const store = createStore(
        //authReducer
        combineReducers({
            auth: authReducer,
        })
    );
    return store;    
}