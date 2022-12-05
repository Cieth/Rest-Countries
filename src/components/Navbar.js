import React from 'react';
import styles from '../styles/Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={styles.Nav}>
      <h1>Where in the world?</h1>
      <span>Dark mode</span>
    </nav>
  );
};

export default Navbar;
