import Header from "../components/Header";
import Footer from "../components/Footer";

function Menu() {
  return (
    <>
      <Header />
      <main className='page'>
        <div className='page__container'>
          <h1 className='title'>Our Menu</h1>
          <div className='menu'>
            <div className='menu__col'>
              <h2 className='subtitle'>Appetizers:</h2>
              <ul>
                <li>Lemon and herb marinated olives</li>
                <li>Fried lemon and herb risotto balls</li>
                <li>Lemon and herb grilled shrimp skewers</li>
              </ul>
            </div>
            <div className='menu__col'>
              <h2 className='subtitle'>Entrees:</h2>
              <ul>
                <li>Lemon and herb roasted chicken with mixed vegetables</li>
                <li>Lemon and herb seared salmon with quinoa salad</li>
                <li>Lemon and herb spaghetti with meatballs</li>
              </ul>
            </div>
            <div className='menu__col'>
              <h2 className='subtitle'>Desserts:</h2>
              <ul>
                <li>Lemon tart with blackberry compote</li>
                <li>Lemon and herb sorbet</li>
                <li>Lemon and blueberry cheesecake</li>
              </ul>
            </div>
            <div className='menu__col'>
              <h2 className='subtitle'>Drinks:</h2>
              <ul>
                <li>Lemon and mint iced tea</li>
                <li>Lemon and elderflower gin fizz </li>
                <li>Lemon and basil iced lemonade</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Menu;
