import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="modern-navbar">

      <div className="logo-section">
        <img src={logo} alt="logo" className="logo-img" />
        <h2>Foodie</h2>
      </div>

      <div className="nav-links">
        <Link to="/">🏠 Home</Link>
        <Link to="/login">🔐 Login</Link>
        <Link to="/cart">🛒 Cart</Link>
        <Link to="/admin">⚙ Admin</Link>
        <Link to="/pos">🖥 POS</Link>
        <Link to="/cloud-kitchen">🍽 Kitchen</Link>
      </div>

    </div>
  );
}

export default Navbar;