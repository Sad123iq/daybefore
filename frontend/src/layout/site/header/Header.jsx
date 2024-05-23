import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className="container">
            <div className="headerInner">
                <img src="https://preview.colorlib.com/theme/wines/images/logo.png.webp" alt="" />
            </div>
        </div>
        <div className="headerBottom">
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/add">ADD</Link></li>
                <li><Link to="/shop">SHOP</Link></li>
                <li><Link to="/basket">BASKET</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header