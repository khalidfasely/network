import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configeStore from './store/configureStore';
//import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRoute from './router/AppRouter';
import { login, startSetUser } from './actions/auth';
//import './playground/redux-101';

//ReactDOM.render(
//  <BrowserRouter>
//    <AppRoute />
//  </BrowserRouter>,
//  document.getElementById('root')
//);

const store = configeStore();

const renderApp = () => {
  store.dispatch(startSetUser()).then((user) => {
    //console.log(user);
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <AppRoute />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  });
};

renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
