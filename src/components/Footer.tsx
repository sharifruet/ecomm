import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} ওয়াহীদিয়া ইসলামিয়া লাইব্রেরী। সকল স্বত্ত্ব সংরক্ষিত।</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
