import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import styles from './Scss/index/index.module.scss'

ReactDOM.render(
  <BrowserRouter >
    <div className={styles.Back}>
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);


