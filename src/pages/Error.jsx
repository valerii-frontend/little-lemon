import { Link } from "react-router-dom";
function Error() {
  return (
    <main className='page'>
      <div className='page__container'>
        <h1 className='title'>Page is not found - 404</h1>
        <p style={{ textAlign: "center" }}>
          Go to the
          <Link to='/' className='link' style={{ display: "inline", marginLeft: 10 }}>
            MAIN SCREEN
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Error;
