import React from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/ProductList.module.css';

const products = [
    {
      id: 1,
      title: 'The Great Gatsby',
      description: 'A classic novel by F. Scott Fitzgerald.',
      price: 12.99,
      image: '/images/img1.png',
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      description: 'Harper Lee\'s renowned novel about racial injustice.',
      price: 10.99,
      image: '/images/img2.png',
    },
    // Add more product entries as needed
  ];

function ProductList() {
  return (
    <section className={styles.productList}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductList;
