import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Router from './share_router';
import configureStore from './store';

const store = configureStore();


class Share extends Component {
    render() {
        return (
            <Provider store={store} >
                <Router />

            </Provider>
        );
    }
}


export default Share;
