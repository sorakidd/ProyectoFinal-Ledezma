import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

 // const getItem = (itemId) => {
  // return cart.find(prod => prod.id === itemId)
  //}

  const isInCart = (itemId) => {
    return cart.find(prod => prod.id === itemId);
  };

  const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);
  const total = cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);
  
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
      {children}
    </CartContext.Provider>
  ) }

  
  
  export default CartContext;