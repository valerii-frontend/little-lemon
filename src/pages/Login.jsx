import Header from "../components/Header";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Header />
      <main className='page'>
        <div className='page__container'>
          <h1 className='title'>Welcome</h1>

          <form className='reservation__form '>
            <div className='reservation__item'>
              <label htmlFor='login'>Login</label>
              <input id='login' name='login' />
            </div>
            <div className='reservation__item'>
              <label htmlFor='password'>Password</label>
              <input id='password' name='password' />
            </div>
            <button className='btn reservation__btn' style={{ marginTop: 20 }}>
              Enter
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Login;
