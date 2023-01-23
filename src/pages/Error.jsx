import Header from "../components/Header";
import Footer from "../components/Footer";

function Error() {
  return (
    <>
      <Header />
      <main className='page'>
        <h1 className='title'>Page is not found - 404</h1>
      </main>
      <Footer />
    </>
  );
}

export default Error;
