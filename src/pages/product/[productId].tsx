// src/pages/product/[productId].js

import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import ProductDetails from '../../components/ProductDetails';
import Footer from '../../components/Footer';

function ProductPage() {
  const router = useRouter();
  const { productId } = router.query;

  // Fetch product details using productId

  return (
    <div>
      <Header />
      <main>
        <ProductDetails productId={productId} />
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;
