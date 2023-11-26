// src/pages/Product.js
import React from 'react';
import { useCart } from '../components/CartContext';
import '../pages/product.css';

// Export productData
export const productData = [
  {
    name: 'Produktnamn 1',
    price: 19.99,
    // other product attributes...
  },
  {
    name: 'Produktnamn 2',
    price: 24.99,
    // other product attributes...
  },
  {
    name: 'Produktnamn 3',
    price: 29.99,
    // other product attributes...
  },
];


const Product = () => {
  const { addToCart } = useCart();

  const handleBuyClick = (product) => {
    
    addToCart(product);
  };

  return (
    <div className='products'>
      {productData.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => handleBuyClick(product)}>Köp</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
