import React from 'react';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Wahidiya Book Shop. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
