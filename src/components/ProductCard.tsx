// src/components/ProductCard.tsx

import React from 'react';
import styles from '../styles/ProductCard.module.css';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product; // Specify the type for the 'product' prop
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
