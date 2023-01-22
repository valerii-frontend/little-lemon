import React from "react";
import { Link } from "react-router-dom";
export default function Modal({ text, title, to }) {
  return (
    <div className='modal'>
      <h3>{title}</h3>
      <p>{text}</p>
      <Link className='btn' to={to}>
        OK
      </Link>
    </div>
  );
}
