import {Link, withRouter} from 'react-router-dom'

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
          <li>Home</li>
        </Link>
        <Link to="/about" className="link-style">
          <li>About</li>
        </Link>
      </ul>
    </nav>
    <ul className="nav-links-sm-container">
      <Link to="/" className="link-style">
        <li>Home</li>
      </Link>
      <Link to="/about" className="link-style">
        <li>About</li>
      </Link>
    </ul>
  </>
)

export default withRouter(Header)
