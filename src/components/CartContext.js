import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.name === product.name);

    if (existingItemIndex !== -1) {
      // Product already exists in the cart, increase quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // Product doesn't exist in the cart, add with quantity 1
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };
/*
  function deleteFromCart(id) {
    setCartItems(
      cartproducts =>
      cartproducts.filter(currentproduct => {
        return currentproduct.id != id;
      })
    )
  }
*/
  const removeFromCart = (productName) => {
    if (productName) {
      setCartItems((prevCartItems) =>
        prevCartItems
          .map((item) =>
            item.name === productName
              ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
              : item
          )
          .filter((item) => item.quantity > 0)
      );
    } else {
      setCartItems([]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };