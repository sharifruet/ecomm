// src/components/ProductCard.tsx

import React from 'react';
import styles from '../styles/ProductCard.module.css';

interface Product {
  componentId: number;
  itemName: string;
  af1: {
    authorName: string,
    publisherName: string
  };
  salePrice: number;
  photo: string;
}

interface ProductCardProps {
  product: Product; // Specify the type for the 'product' prop
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.productCard}>
      <img src={"images/"+product.photo} alt={product.photo} />
      <h5>{product.itemName}</h5>
      <p>
        {product.af1.authorName}<br/>
        {product.af1.publisherName}
      </p>
      <p>মূল্য: ৳ {product.salePrice.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
