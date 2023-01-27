import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import menuIcon from "../../assets/menu.svg";
import closeIcon from "../../assets/close.svg";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className='nav'>
      <span className='nav__icon' onClick={() => setMenu(!menu)}>
        {menu && <img src={closeIcon} alt='close icon' />}
        {!menu && <img src={menuIcon} alt='menu chocolate icon' />}
      </span>
      <ul className={`nav__list ${menu ? "active" : ""}`}>
        <li>
          <NavLink className='link' to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to='about'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to='reservation'>
            Reservation
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to='order'>
            Order online
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to='menu'>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to='login'>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
