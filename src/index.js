import React from 'react';
import ReactDOM from 'react-dom';
import User from './user';
import styles from '../assets/index.css'
import Header from '../modules/header/index'

ReactDOM.render(
  <div>
    <User fontColor={styles['red']} />
    <Header brand />
  </div>,
  document.getElementById('root')
);