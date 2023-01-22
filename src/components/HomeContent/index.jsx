import { Link } from "react-router-dom";
import "./HomeContent.css";
import mainImg from "../../assets/main.png";
import card_1 from "../../assets/card_1.png";
import card_2 from "../../assets/card_2.png";
import card_3 from "../../assets/card_3.png";
import deliveryIcon from "../../assets/truck.svg";

export default function HomeContent() {
  return (
    <main>
      <section className='home'>
        <div className='home__container'>
          <div className='home__row'>
            <div className='home__col'>
              <div className='home__text'>
                <h1 className='title home__title'>Little Lemon</h1>
                <h2 className='subtitle home__subtitle'>Chicago</h2>
                <p className='highlights home__highlights'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores necessitatibus error
                </p>
                <Link to='/reservation' className='btn home__btn'>
                  Reserve a table
                </Link>
              </div>
            </div>
            <div className='home__col'>
              <div className='home__img'>
                <img src={mainImg} alt='Bruchetta on the desk' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='specials'>
        <div className='specials__container'>
          <div className='specials__header'>
            <h1 className='specials__title title'>This weeks specials!</h1>
            <Link to='/menu' className='btn specials__btn'>
              Online Menu
            </Link>
          </div>
          <div className='specials__row'>
            <div className='specials__col'>
              <div className='specials__card card'>
                <div className='card__img'>
                  <img src={card_1} alt='Greek salad' />
                </div>
                <div className='card__content'>
                  <div className='card__head'>
                    <h3 className='card__title'>Greek salad</h3>
                    <span className='card__price'>$12.99</span>
                  </div>
                  <div className='card__text'>
                    Note that when a dish is clicked, the user is taken to another screen and that this highlights
                  </div>
                  <div className='card__footer'>
                    <Link to='/order' className='highlights card__highlights link'>
                      Order a delivery <img src={deliveryIcon} alt='truck vector icon' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='specials__col'>
              <div className='specials__card card'>
                <div className='card__img'>
                  <img src={card_2} alt='Bruchetta' />
                </div>
                <div className='card__content'>
                  <div className='card__head'>
                    <h3 className='card__title'>Bruchetta</h3>
                    <span className='card__price'>$5.99</span>
                  </div>
                  <div className='card__text'>
                    Note that when a dish is clicked, the user is taken to another screen and that this highlights
                  </div>
                  <div className='card__footer'>
                    <Link to='/order' className='highlights card__highlights link'>
                      Order a delivery <img src={deliveryIcon} alt='truck vector icon' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='specials__col'>
              <div className='specials__card card'>
                <div className='card__img'>
                  <img src={card_3} alt='Lemon Dessert' />
                </div>
                <div className='card__content'>
                  <div className='card__head'>
                    <h3 className='card__title'>Lemon Dessert</h3>
                    <span className='card__price'>$5.00</span>
                  </div>
                  <div className='card__text'>
                    Note that when a dish is clicked, the user is taken to another screen and that this highlights
                  </div>
                  <div className='card__footer'>
                    <Link to='/order' className='highlights card__highlights link'>
                      Order a delivery <img src={deliveryIcon} alt='truck vector icon' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
