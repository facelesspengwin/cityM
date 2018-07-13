import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';
import 'bootstrap/scss/bootstrap.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
