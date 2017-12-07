import React from 'react';
import styles from './Logo.css';

const Logo = () => (
  <div className={styles.logo}>
    <div className={styles.logoImg} />
    <span>js</span><span className={styles.conf}>conf</span><span>.am</span>
  </div>
);

export default Logo;
