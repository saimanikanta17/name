import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-bar-screen">
      <Link to="/" className="link-style">
        <h1 className="logo">
          COVID19<span className="span-logo">INDIA</span>
        </h1>
      </Link>
      <ul className="nav-links-container">
        <Link to="/" className="link-style">
          <button type="button" className="header-btn">
            Home
          </button>
        </Link>
        <Link to="/about" className="link-style">
          <button type="button" className="header-btn">
            About
          </button>
        </Link>
      </ul>
    </div>

    <div className="nav-links-mobile">
      <Link to="/" className="link-style">
        <h1 className="logo">
          COVID19<span className="span-logo">INDIA</span>
        </h1>
      </Link>
      <ul className="nav-links-container">
        <Link to="/" className="link-style">
          <button type="button" className="header-btn">
            Home
          </button>
        </Link>

        <Link to="/about" className="link-style">
          <button type="button" className="header-btn">
            About
          </button>
        </Link>
      </ul>
    </div>
  </nav>
)

export default Header
