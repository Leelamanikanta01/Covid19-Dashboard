import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-main-container">
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/amst/image/upload/v1639762911/notfnd_e79uve.jpg"
        className="not-found-img"
        alt="not-found-pic"
      />
      <h1 className="not-found-heading">PAGE NOT FOUND</h1>
      <p className="not-found-description">
        We are .. Sorry Page you Requested Could Not Found
        <br />
        Please Trying Later
      </p>

      <div className="button-container">
        <Link to="/">
          <button className="not-found-btn" type="button">
            Home
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default NotFound
