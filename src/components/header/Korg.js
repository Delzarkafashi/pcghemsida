import React from 'react';
import { useCart } from '../CartContext';

const Korg = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const handleIncrease = (item) => {
    addToCart(item);
  };

  const handleDecrease = (item) => {
    removeFromCart(item.name);
  };

  return (
    <div>
      <h2>Din Korg</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - Antal: {item.quantity}{' '}
            <button onClick={() => handleIncrease(item)}>+</button>
            <button onClick={() => handleDecrease(item)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Korg;




