// src/components/ProductDetails.tsx

import React from 'react';

interface Product {
  componentId: number;
  itemName: string;
  description: string;
  salePrice: number;
  photo: string;
}

interface ProductCardProps {
  product: Product; // Specify the type for the 'product' prop
}

function ProductDetails({ product } : ProductCardProps) {
  //const selectedProduct = products.find(product => product.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.itemName}</h2>
      <p>{product.description}</p>
      <p>মূল্য: ৳{product.salePrice.toFixed(2)}</p>
      <img src={product.photo} alt={product.itemName} />
    </div>
  );
}

export default ProductDetails;
