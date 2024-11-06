import React from 'react';
import Item from '../Item/Item'; 
import './CartItem.css';

const CartItem = ({ item, cantidad }) => {
  if (!item) {
    return null; // O puedes mostrar un mensaje de error
  }
 
  const subtotal = item.price * cantidad;

  return (
    <div className="CartItem">
      <Item 
        id={item.id} 
        name={item.name} 
        img={item.img} 
        price={item.price} 
        stock={item.stock} 
      />
      <div className="CartItem-Cantidad">Cantidad: {cantidad}</div>
      <div className="CartItem-Subtotal">Subtotal: ${subtotal}</div>
    </div>
  );
};

export default CartItem;