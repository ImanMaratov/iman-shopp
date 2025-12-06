import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cartItems = useSelector(state => state.cart.items)
  const navigate = useNavigate()
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon">🍰</span>
          <span className="logo-text">Iman Shopp</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Главная
          </Link>
          <Link to="/team" className="nav-link" onClick={closeMenu}>
            Наша команда
          </Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>
            О нас
          </Link>
          <Link to="/contacts" className="nav-link" onClick={closeMenu}>
            Контакты
          </Link>
          <Link to="/login" className="nav-link" onClick={closeMenu}>
            Вход
          </Link>
          <button 
            className="cart-button" 
            onClick={() => {
              navigate('/cart')
              closeMenu()
            }}
          >
            🛒 Корзина {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </nav>

        <button 
          className={`burger-menu ${isMenuOpen ? 'burger-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header

