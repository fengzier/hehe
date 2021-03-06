import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, } from 'react-router';
import routes from './routes';

import './style/app.scss';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

let store = createStore(reducers);

render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
    </Provider>,
    document.getElementById('root')
);