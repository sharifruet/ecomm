// src/components/ProductDetails.tsx

import React from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ProductDetailsProps {
  productId: string | string[] | undefined;
}

const products: Product[] = [
  {
    id: 1,
    title: 'The Great Gatsby',
    description: 'A classic novel by F. Scott Fitzgerald.',
    price: 12.99,
    image: '/images/great_gatsby.jpg',
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    description: 'Harper Lee\'s renowned novel about racial injustice.',
    price: 10.99,
    image: '/images/to_kill_a_mockingbird.jpg',
  },
  // Add more product entries as needed
];

function ProductDetails({ productId }: ProductDetailsProps) {
  const selectedProduct = products.find(product => product.id === Number(productId));

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{selectedProduct.title}</h2>
      <p>{selectedProduct.description}</p>
      <p>Price: ${selectedProduct.price.toFixed(2)}</p>
      <img src={selectedProduct.image} alt={selectedProduct.title} />
    </div>
  );
}

export default ProductDetails;
