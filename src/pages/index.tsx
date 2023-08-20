// src/pages/index.js

import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
