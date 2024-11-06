import './Cart.css';
import { useContext } from "react"; 
import CartContext from '../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom'; 

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h2>No hay items en el carrito</h2>
        <Link to='/' className='Option'>Productos</Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map(p => (
        <CartItem 
          key={p.id} 
          item={p} 
          cantidad={p.quantity} 
          img={p.img} 
        />
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
      <Link to='/checkout' className='Option'>Checkout</Link>
    </div>
  );
}

export default Cart;