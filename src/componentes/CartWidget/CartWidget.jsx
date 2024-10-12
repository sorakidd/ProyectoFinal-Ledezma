import cart from './assets/cart.png';

const CartWidget = ({ width = 25, height = 25 }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 40 }}>
      <img src={cart} alt="cart-widget" style={{ width, height }} />
      0
    </div>
  )
}

export default CartWidget;