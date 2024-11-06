import './CartItem.css';

const CartItem = ({ item, cantidad, img }) => {
  if (!item) {
    return null; 
  }

  const subtotal = item.price * cantidad;

  return (
    <div className="CartItem">
      <div className="CartItem-Details">
        <img src={item.img} alt={item.name} className="CartItem-Image" /> 
        <h4>{item.name}</h4>
        <p>ID: {item.id}</p>
        <p>Precio: ${item.price.toFixed(2)}</p>
        <div className="CartItem-Cantidad">Cantidad: {cantidad}</div>
        <div className="CartItem-Subtotal">Subtotal: ${subtotal.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CartItem;