import React from 'react';
import reusableModule from '../reusableModule';
import styles from './Logo.css';

const Logo = () => (
  <div className={styles.logo} onClick={() => reusableModule()}>
    <div className={styles.logoImg} />
    <span>js</span><span className={styles.conf}>conf</span><span>.am</span>
  </div>
);

export default Logo;
