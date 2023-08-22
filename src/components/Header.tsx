import React from 'react';
import Link from 'next/link';
import { Container, Navbar, Nav, FormControl, InputGroup, NavDropdown } from 'react-bootstrap';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className={styles.header}>
      <Container>
        <Navbar.Brand href="/">
          <img src="/images/wil-logo.png" alt="Logo" className={styles.logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">লাইব্রেরী</Nav.Link>
            <Nav.Link href="/publications">প্রকাশনা</Nav.Link>
            <Nav.Link href="/free-ebooks">ফ্রি ই-বুক</Nav.Link>
            <Nav.Link href="/dawah">দাওয়াহ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default Header;