import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className={"containerNavbar"}>
        <Link to="/">Coffe Shop</Link>

        <ul className="categories">
          <Link to="/">Todos</Link>
          <Link to="/category/colombiano">Colombiano</Link>
          <Link to="/category/brasilero">Brasilero</Link>
        </ul>

        <CartWidget />
      </div>
     <Outlet />
    </div>
  );
};

export default Navbar;
