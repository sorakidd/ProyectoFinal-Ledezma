import cart from './assets/cart.png';

const CartWidget = ({ width = 25, height = 25 }) => {
  return (
    <div>
      <img src={cart} alt="cart-widget" style={{ width, height }} />
      0
    </div>
  )
}

export default CartWidget;