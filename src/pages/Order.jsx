import { useState } from "react";

import Modal from "../components/Modal";

function Order() {
  const [modal, setModal] = useState({ ok: false, phone: "", number: "", time: "" });
  return (
    <>
      {modal.ok && (
        <Modal title='Thanks for the order' to='/' text='Please wait for a call to clarify the details of the order.' />
      )}
      <main className='page'>
        <div className='page__container'>
          <h1 className='title'>Order online</h1>
          <form className='reservation__form '>
            <div className='reservation__item'>
              <label htmlFor='login'>Name of the meal</label>
              <select id='meal' name='meal'>
                <option>Lemon and herb marinated olives</option>
                <option>Fried lemon and herb risotto balls</option>
                <option>Lemon and herb grilled shrimp skewers</option>
                <option>Lemon and herb roasted chicken with mixed vegetables</option>
                <option>Lemon and herb seared salmon with quinoa salad</option>
                <option>Lemon and herb spaghetti with meatballs</option>
                <option>Lemon tart with blackberry compote</option>
                <option>Lemon and herb sorbet</option>
                <option>Lemon and blueberry cheesecake</option>
                <option>Lemon and mint iced tea</option>
                <option>Lemon and elderflower gin fizz </option>
                <option>Lemon and basil iced lemonade</option>
              </select>
            </div>
            <div className='reservation__item'>
              <label htmlFor='number'>Number of servings</label>
              <input
                id='number'
                name='number'
                type='number'
                onChange={(e) => setModal({ ...modal, number: e.target.value })}
                value={modal.number}
              />
            </div>
            <div className='reservation__item'>
              <label htmlFor='phone'>Phone number</label>
              <input
                id='phone'
                name='phone'
                type='text'
                maxLength='10'
                pattern='[0-9]{10}'
                required
                onChange={(e) => setModal({ ...modal, phone: e.target.value })}
                value={modal.phone}
              />
            </div>
            <div className='reservation__item'>
              <label htmlFor='time'>Delivery time</label>
              <input
                id='time'
                name='time'
                type='time'
                onChange={(e) => setModal({ ...modal, time: e.target.value })}
                value={modal.time}
              />
            </div>
            <div className='reservation__item'>
              <label htmlFor='msg'>Message</label>
              <textarea
                id='msg'
                name='msg'
                cols='30'
                rows='10'
                style={{ height: 200, width: "100%", resize: "none" }}></textarea>
            </div>
            <button
              className='btn reservation__btn'
              style={{ marginTop: 20 }}
              onClick={(e) => {
                e.preventDefault();
                if (modal.phone && modal.number > 0 && modal.time) {
                  setModal({ ...modal, ok: true });
                }
              }}>
              Order
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Order;
