import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Keep cart items saved in the browser local storage so refreshes don't wipe it out
    const savedCart = localStorage.getItem('rent_o_gear_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('rent_o_gear_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (itemData) => {
    setCart((prevCart) => {
      // Uniquely identify item combinations by their ID, brand, and selected size
      const existingIndex = prevCart.findIndex(
        (cartItem) => 
          cartItem.id === itemData.id && 
          cartItem.brand === itemData.brand && 
          cartItem.size === itemData.size
      );

      if (existingIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingIndex].quantity += 1;
        return newCart;
      }

      return [...prevCart, { ...itemData, quantity: 1 }];
    });
  };

  const removeFromCart = (id, brand, size) => {
    setCart((prevCart) => 
      prevCart.filter((item) => !(item.id === id && item.brand === brand && item.size === size))
    );
  };

  const clearCart = () => setCart([]);

  // Calculate dynamic business pricing metrics
  const totalItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItemsCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);