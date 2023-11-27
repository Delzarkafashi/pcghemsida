import React, { createContext, useContext, useState } from 'react';


const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.name === product.name);

    if (existingItemIndex !== -1) {
      // Produkten finns redan i korgen, öka antalet
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // Produkten finns inte i korgen, lägg till med antal 1
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productName) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.name === productName
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) } // Minska kvantiteten, men inte under 0
          : item
      )
    );
  };


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
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

export {CartProvider, useCart} ;