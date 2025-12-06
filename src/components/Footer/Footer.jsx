import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Iman Shopp</h3>
          <p className="footer-text">
            Ваш надежный магазин сладостей и напитков. 
            Качество и вкус в каждой покупке.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Навигация</h4>
          <ul className="footer-links">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/team">Наша команда</Link></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Контакты</h4>
          <ul className="footer-contacts">
            <li>📍 г. Бишкек, ул. Турусбекова 109/1</li>
            <li>📞 +996 500 979 101</li>
            <li>✉️ imanmaratov009@gmail.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Социальные сети</h4>
          <div className="footer-social">
            <a href="https://t.me/solweit" target="_blank" rel="noopener noreferrer">
              📱 Telegram
            </a>
            <a href="https://instagram.com/maratovw_88" target="_blank" rel="noopener noreferrer">
              📷 Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Iman Shopp. Все права защищены.</p>
      </div>
    </footer>
  )
}

export default Footer

