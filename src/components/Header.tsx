// src/components/Header.js

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/cart">Cart</Link>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
      <h1 className={styles.logo}>Wahidiya</h1>
    </header>
  );
}

export default Header;
