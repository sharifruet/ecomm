import React from 'react';
import { Container, Navbar, Nav, Form, FormControl, Row, Col } from 'react-bootstrap';
import styles from '../styles/Header.module.css';
import { Search, Cart } from 'react-bootstrap-icons';

function Header() {
  return (
    <Container className={styles.header}>
      <Row>
        <Col sm={2}>
          <div className={styles.logo}><img src="/images/wil-logo.png" alt="Logo" /></div>
        </Col>
        <Col sm={10}>
          <h2>ওয়াহীদিয়া ইসলামিয়া লাইব্রেরী</h2>
          <Navbar bg="light" expand="lg" >
            <Container>
                <Nav className={`mr-auto ${styles.nav}`}>
                  <Nav.Link href="/">লাইব্রেরী</Nav.Link>
                  <Nav.Link href="/publications">প্রকাশনা</Nav.Link>
                  <Nav.Link href="/free-ebooks">ফ্রি ই-বুক</Nav.Link>
                  <Nav.Link href="/dawah">দাওয়া</Nav.Link>
                </Nav>
                <Form className={styles.search}>
                  <FormControl size="lg" type="text" placeholder="Search" />
                  <Search className={styles.searchIcon} />
                </Form>
                <Cart className={styles.cart} />
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
