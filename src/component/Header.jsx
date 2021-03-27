import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className='header-container'>
      <img className="logo" src="logo1.png" alt="" />

      <ul className="header">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/login">Our Impact</NavLink>
        </li>
        <li>
          <NavLink to="/login">News&Views</NavLink>
        </li>
        <li>
          <NavLink to="/login">Why Empower Girls</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
