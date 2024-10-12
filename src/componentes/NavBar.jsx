import CartWidget from "./CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div>
      <Link to="/">
        <h3 style={{ float: 'left' }}>Ecommerce</h3>
      </Link>
      </div>
      <div className="Categories">
        <NavLink to="/category/celulares" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
        <NavLink to="/category/televisores" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Televisores</NavLink>
        <NavLink to="/category/consolas" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Consolas</NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};


export default NavBar; 