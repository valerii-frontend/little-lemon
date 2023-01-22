import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header />
      <main className='page'>
        <div className='page__container'>
          <h1 className='title'>About Us</h1>
          <p>
            The <span>Little Lemon</span> it's a small, family-owned restaurant that located in a quiet, residential
            area. We known for its cozy atmosphere, friendly staff, and delicious home-style cooking.
          </p>
          <p>
            The restaurant was opened by a husband and wife team who had a passion for cooking and hospitality. They
            started out small, with just a few tables and a simple menu, but over time, they built up a loyal customer
            base and expanded the restaurant to seat more guests.
          </p>
          <p>
            The menu at the Little Lemon featured a variety of comfort food favorites, such as homemade soups and stews,
            hearty sandwiches, and classic desserts. The restaurant was particularly famous for its homemade lemon pie,
            which was made from a secret recipe passed down from the wife's grandmother.
          </p>
          <p>
            The Little Lemon quickly became a community staple, and it was not uncommon to see regular customers
            catching up with each other over a warm meal. The owners and staff of the restaurant were well-known for
            their kindness and generosity, often donating food and hosting events to support local charities.
          </p>
          <p>
            Despite some challenges over the years, such as changes in the neighborhood, the Little Lemon remained a
            beloved institution for many years. Eventually, the couple decided to retire, but they found a young
            passionate chef who loved the Little Lemon as much as they did, and sold the restaurant to him. The
            restaurant continued to thrive and bring joy to the community under the new ownership, becoming a legacy for
            the founders.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
