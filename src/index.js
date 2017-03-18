import React from 'react';
import ReactDOM from 'react-dom';
import User from './user';
import styles from '../assets/index.css'

ReactDOM.render(
  <User fontColor={styles['red']} />,
  document.getElementById('root')
);