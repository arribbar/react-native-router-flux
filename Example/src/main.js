import React from 'react';
import { Provider } from 'react-redux';

import Router from './router';
import configureStore from './store';

const store = configureStore();

let App = () => {
    return (
        <Router />
    );
};

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Root;
