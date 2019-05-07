import React from 'react';
import { render } from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './_helpers';


import {App} from './routes';

import registerServiceWorker from './registerServiceWorker';

/*
import { configureFakeBackend } from './_helpers';
configureFakeBackend();
*/

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();






