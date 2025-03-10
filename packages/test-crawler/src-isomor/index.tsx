import React from 'react';
import ReactDOM from 'react-dom';
import { AsyncCacheProvider } from 'react-async-cache';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { hotjar } from 'react-hotjar';
import { DocProvider } from './doc/useDoc';

// use hotjar only on github
if (window.location.host === 'apiel.github.io') {
    hotjar.initialize(1680523, 6);
}

ReactDOM.render((
    <AsyncCacheProvider>
        <DocProvider>
            <App />
        </DocProvider>
    </AsyncCacheProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
