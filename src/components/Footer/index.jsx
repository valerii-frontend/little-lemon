import { Link } from "react-router-dom";
import footerImg from "../../assets/lemon.jpg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import facebookIcon from "../../assets/facebook.svg";
import youtubeIcon from "../../assets/youtube.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__row'>
          <div className='footer__col footer__col_img'>
            <div className='footer__img'>
              <img src={footerImg} alt='Cooking the dish with a lemon' />
            </div>
          </div>
          <div className='footer__col footer__col_menu'>
            <nav className='footer__nav'>
              <h3 className='footer__title'>Navigation</h3>
              <ul className='footer__list'>
                <li>
                  <Link className='link' to='/'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className='link' to='about'>
                    About
                  </Link>
                </li>
                <li>
                  <Link className='link' to='reservation'>
                    Reservation
                  </Link>
                </li>
                <li>
                  <Link className='link' to='order'>
                    Order online
                  </Link>
                </li>
                <li>
                  <Link className='link' to='menu'>
                    Menu
                  </Link>
                </li>
                <li>
                  <Link className='link' to='login'>
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='footer__col'>
            <div className='footer__contacts'>
              <h3 className='footer__title'>Contacts</h3>
              <ul className='footer__list'>
                <li>
                  <address>310 Kingsland Ave, Brooklyn, NY 11332, United States</address>
                </li>
                <li>
                  <a className='link' href='tel:+171438773991'>
                    &#9742; +171438773991
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer__col'>
            <div className='footer__social'>
              <h3 className='footer__title'>Social media</h3>
              <div className='footer__icons'>
                <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
                  <img src={instagramIcon} alt='instagramIcon' />
                </a>
                <a href='https://www.twitter.com' target='_blank' rel='noreferrer'>
                  <img src={twitterIcon} alt='twitterIcon' />
                </a>
                <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
                  <img src={facebookIcon} alt='facebookIcon' />
                </a>
                <a href='https://www.youtube.com' target='_blank' rel='noreferrer'>
                  <img src={youtubeIcon} alt='youtubeIcon' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='footer__copy'>
          &copy; developed by{" "}
          <a className='link' href='https://www.linkedin.com/in/valerii-lozghachov' target='_blank' rel='noreferrer'>
            v.lozghachov
          </a>
        </div>
      </div>
    </footer>
  );
}
