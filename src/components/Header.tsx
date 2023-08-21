import React from 'react';
import Link from 'next/link';
import { Container, Navbar, Nav, FormControl, InputGroup } from 'react-bootstrap';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className={styles.header}>
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <img
              src="/images/wil-logo.png"
              alt="Logo"
              className={styles.logo}
            />
          </Link>
          <h1 className={styles.siteName}>ওয়াহীদিয়া ইসলামিয়া লাইব্রেরী</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.nav}>
            <Link href="/">লাইব্রেরী</Link>
            <Link href="/publisher">প্রকাশনা</Link>
            <Link href="/free-ebook">ফ্রি ই-বুক</Link>
            <Link href="/dawah">দাওয়াহ</Link>
          </Nav>
          <InputGroup className={styles.search}>
            <FormControl placeholder="Search" />
          </InputGroup>
          <Link href="/cart" className={styles.cart}>
            Cart
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
