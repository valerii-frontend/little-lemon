import { Link } from "react-router-dom";
import Nav from "../Nav";
import "./Header.css";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__row'>
          <Link to='/' className='logo'>
            <img src={Logo} alt='Little Lemon Logo' />
            <span>little lemon</span>
          </Link>
          <Nav />
        </div>
      </div>
    </header>
  );
}
