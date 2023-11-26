import React from 'react';
import { useCart } from '../CartContext';
import './korg.css';

const Korg = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const handleIncrease = (item) => {
    addToCart(item);
  };

  const handleDecrease = (item) => {
    removeFromCart(item.name);
  };

  const total = cartItems.reduce((temp, item) => {
    return (temp + (item.price * item.quantity));
    }, 0);

  const quantifier = cartItems.reduce((temp, item) => {
    return (temp + item.quantity);
    }, 0);

  return (
    <div className="cart-container">
      <h2>Din Korg</h2>
      <ul className="item-ul">
        {cartItems.map((item, index) => (
          <li key={index} className="item-info-row">
            <div className="items-btns">
              {item.name}
              <div>
                <button onClick={() => handleIncrease(item)}>+</button>
                <button onClick={() => handleDecrease(item)}>-</button>
              </div>
            </div>
            <div className="quantity-price">
              <div className="quantity"> Antal : {item.quantity} </div>
              <div className="price">{item.price} :-</div>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <hr />
        <div className="total">
          <div>Total :</div>
          <div className='quantity-total'>
            <div>{quantifier}</div>
            <div>{total}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Korg;




