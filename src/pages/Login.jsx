import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { useState } from "react";

function Login() {
  const [modal, setModal] = useState({ ok: false, login: "", password: "" });
  return (
    <>
      <Header />
      {modal.ok && (
        <Modal
          title='Welcome to the Little Lemon'
          to='/little-lemon/menu'
          text='We are happy to see you here. Look our offer to the menu page'
        />
      )}
      <main className='page'>
        <div className='page__container'>
          <h1 className='title'>Welcome</h1>

          <form className='reservation__form '>
            <div className='reservation__item'>
              <label htmlFor='login'>Login</label>
              <input
                onChange={(e) => setModal({ ...modal, login: e.target.value })}
                value={modal.login}
                id='login'
                name='login'
                required
                minLength={3}
              />
            </div>
            <div className='reservation__item'>
              <label htmlFor='password'>Password</label>
              <input
                onChange={(e) => setModal({ ...modal, password: e.target.value })}
                value={modal.password}
                id='password'
                name='password'
                required
                minLength={8}
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (modal.login.length > 3 && modal.password > 8) {
                  setModal({ ...modal, ok: true });
                }
              }}
              className='btn reservation__btn'
              style={{ marginTop: 20 }}>
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
