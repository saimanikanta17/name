import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <nav className="nav-bar">
      <Link to="/" className="link-style">
        <h1 className="logo">
          COVID19<span className="span-logo">INDIA</span>
        </h1>
      </Link>
      <ul className="nav-links-container">
        <Link to="/" className="link-style">
          <button type="button">Home</button>
        </Link>
        <Link to="/about" className="link-style">
          <button type="button">About</button>
        </Link>
      </ul>
    </nav>
    <ul className="nav-links-sm-container">
      <Link to="/" className="link-style">
        <button type="button">Home</button>
      </Link>
      <Link to="/about" className="link-style">
        <button type="button">About</button>
      </Link>
    </ul>
  </>
)

export default Header
