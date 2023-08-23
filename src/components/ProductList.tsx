import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/ProductList.module.css';

function ProductList() {
  const bookApiUrl = "https://api.wahidiya.com/api/product";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from API
    fetch(bookApiUrl) // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <section className={styles.productList}>
      {products.map(product => (
        <ProductCard key={product.componentId} product={product} />
      ))}
    </section>
  );
}

export default ProductList;
