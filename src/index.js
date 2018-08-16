import 'materialize-css/dist/css/materialize.min.css';
import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/app.component';
import reducers from './reducers';

// dev only
import axios from 'axios';

if (process.env.NODE_ENV === 'development') {
    window.axios = axios;
}

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

console.log(`Envirnoment is: ${process.env.NODE_ENV}`);
console.log(`Stripe key is: ${process.env.REACT_APP_STRIPE_KEY}`);
console.log(`Send Grid key is: ${process.env.REACT_APP_SEND_GRID_KEY}`);