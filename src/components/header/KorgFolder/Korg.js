import React from 'react';
import { useCart } from '../../CartContext';
import './korg.css';

const Korg = () => {
  const { cartItems, addToCart, removeFromCart, deleteFromCart } = useCart();

  const handleIncrease = (item) => {
    addToCart(item);
  };

  const handleDecrease = (item) => {
    removeFromCart(item.name);
  };

  const total = cartItems.reduce((temp, item) => {
    return temp + item.price * item.quantity;
  }, 0);

  const quantifier = cartItems.reduce((temp, item) => {
    return temp + item.quantity;
  }, 0);

  const handleBuy = () => {
    return (
      alert("LURAT")
    );
  }

  return (
    <div className="cart-container">
      <h2>Din Korg</h2>
      <table className="item-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Actions</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className='product-body'>
          {cartItems.map((item, index) => (
            <tr key={index}
            className='product-row'
            >
              <td>
                <img src={item.image} alt={item.name} className="product-image" />
              </td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>
                <button className="korgbttn-plus" onClick={() => handleIncrease(item)}>
                  +
                </button>
                <button className="korgbttn-minus" onClick={() => handleDecrease(item)}>
                  -
                </button>
              </td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <hr />
        <div className="total">
          <div className="total-row">Total</div>
          <div className="quantity-total">
            <div>Total products: {quantifier}</div>
            <div>Total price: {total} :-</div>
            <div className='del-buy'>
              <button className='korgbttn-buy' onClick={handleBuy}>Buy</button>
              <button className='korgbttn-del' onClick={deleteFromCart}>Remove All Items</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Korg;
