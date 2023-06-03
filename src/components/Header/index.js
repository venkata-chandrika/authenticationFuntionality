// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="container">
    <ul className="list">
      <Link to="/">
        <li className="item">Home</li>
      </Link>
      <Link to="/about">
        <li className="item">About</li>
      </Link>
    </ul>
  </nav>
)

export default Header
