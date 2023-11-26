import React from 'react';
import { useCart } from '../components/CartContext';

// Exportera produktdatan
const productData = [
  {
    name: 'Produktnamn 1',
    price: 19.99,
    // andra produktattribut...
  },
  {
    name: 'Produktnamn 2',
    price: 24.99,
    // andra produktattribut...
  },
  {
    name: 'Produktnamn 3',
    price: 29.99,
    // andra produktattribut...
  },
];

const Products = () => {
  const { addToCart } = useCart();

  const handleBuyClick = (product) => {
    // Lägg till i korgen
    addToCart(product);
  };

  return (
    <div>
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

export default Products;
