import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <div>
        <h3>Ecommerce</h3>
        <button>Comidas</button>
        <button>Bebidas</button>
        <button>Electronicos</button>
      </div>
      <CartWidget/>
    </nav>
  );
};

export default NavBar; 