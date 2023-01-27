import { useState } from "react";
import { fetchAPI } from "../api";
import "./styles/Reservation.css";
import { useEffect } from "react";

export default function Reservation() {
  const formInit = {
    date: "",
    time: "17:00",
    guests: "1",
    occasion: "birthday",
  };
  const [formData, setFormData] = useState(formInit);
  const [modal, setModal] = useState(null);
  const [modalData, setModalData] = useState(formInit);
  const [isSend, setIsSend] = useState(false);

  const [items, setItems] = useState(["Choose the date first"]);
  useEffect(() => {
    if (formData.date) {
      const date = new Date(formData.date);
      setItems(fetchAPI(date));
    }
  }, [formData.date]);
  const disablePastDate = () => {
    const dtToday = new Date();
    let month = dtToday.getMonth() + 1;
    let day = dtToday.getDate();
    const year = dtToday.getFullYear();
    if (month < 10) month = "0" + month.toString();
    if (day < 10) day = "0" + day.toString();
    const maxDate = year + "-" + month + "-" + day;
    return maxDate;
  };
  const sendForm = (e) => {
    e.preventDefault();
    setModalData({ ...formData });
    if (formData.date.length > 0) {
      setIsSend(true);
      setTimeout(() => {
        setModal(modalData);
        setFormData(formInit);
        setIsSend(false);
      }, 3000);
    }
  };
  return (
    <>
      <main className='reservation'>
        <h1 className='title'>Table reservation</h1>
        <div className='reservation__container'>
          <form className='reservation__form '>
            <div className='reservation__item'>
              <label htmlFor='res-date'>Choose date</label>
              <input
                type='date'
                data-testid='date'
                id='res-date'
                required
                min={disablePastDate()}
                value={formData.date}
                onChange={(e) => {
                  setFormData({ ...formData, date: e.target.value });
                }}
              />
            </div>
            <div className='reservation__item'>
              <label htmlFor='res-time'>Choose time</label>
              <select
                id='res-time '
                value={formData.time}
                onChange={(e) => {
                  setFormData({ ...formData, time: e.target.value });
                }}>
                {items.map((el) => (
                  <option key={el}>{el}</option>
                ))}
              </select>
            </div>
            <div className='reservation__item'>
              <label htmlFor='guests'>Number of guests</label>
              <input
                type='number'
                placeholder='1'
                min='1'
                max='10'
                id='guests'
                data-testid='guests'
                value={formData.guests}
                onChange={(e) => {
                  setFormData({ ...formData, guests: e.target.value });
                }}
              />
            </div>
            <div className='reservation__item'>
              <label htmlFor='occasion'>Occasion</label>
              <select
                id='occasion'
                value={formData.occasion}
                onChange={(e) => {
                  setFormData({ ...formData, occasion: e.target.value });
                }}>
                <option value='birthday'>Birthday</option>
                <option value='anniversary'>Anniversary</option>
                <option value='engagement'>Engagement</option>
                <option value='dinner'>Dinner</option>
              </select>
            </div>
            <button
              aria-label='On Click'
              disabled={formData.date === "" ? true : null}
              className='btn reservation__btn'
              data-testid='modal-btn'
              onClick={sendForm}>
              {!isSend && <span data-testid='modal-text'>Make Your reservation</span>}
              {isSend && (
                <div className='reservation__loaders' data-testid='modal-loader'>
                  <span className='reservation__loader'></span>
                  <span className='reservation__loader'></span>
                  <span className='reservation__loader'></span>
                </div>
              )}
            </button>
          </form>
        </div>
        {modal && (
          <div className='reservation__modal'>
            <div className='highlights'>
              <p className='subtitle'>
                We wait you with your{" "}
                <strong>{modalData.guests === "1" ? "guest" : `${modalData.guests} guests`}</strong>
              </p>
              <br />
              <p className='subtitle' style={{ color: "var(--primary)" }}>
                at <strong>{modalData.time}</strong> on <strong>{modalData.date.toLocaleString("en-US")}</strong>
              </p>
              <br />
              <p className='subtitle'>
                <em>to {modalData.occasion !== "dinner" ? `celebrate the ${modalData.occasion}` : "have dinner"}</em>
              </p>
            </div>
            <br />
            <div className='reservation__close btn' onClick={() => setModal(false)}>
              OK
            </div>
          </div>
        )}
      </main>
      {isSend && <div className='overlay'></div>}
    </>
  );
}
