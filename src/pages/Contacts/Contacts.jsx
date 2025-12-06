import './Contacts.css'

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <h1 className="page-title">Контакты</h1>
        
        <div className="contacts-content">
          <div className="contacts-info">
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Адрес</h3>
              <p>г. Бишкек, ул. Турусбекова 109/1</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Телефон</h3>
              <a href="tel:+996500979101">+996 500 979 101</a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <a href="mailto:imanmaratov009@gmail.com">imanmaratov009@gmail.com</a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h3>Telegram</h3>
              <a href="https://t.me/solweit" target="_blank" rel="noopener noreferrer">
                @solweit
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📷</div>
              <h3>Instagram</h3>
              <a href="https://instagram.com/maratovw_88" target="_blank" rel="noopener noreferrer">
                @maratovw_88
              </a>
            </div>
          </div>

          <div className="map-container">
            <h2 className="map-title">Мы на карте</h2>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.5!2d74.6!3d42.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDUyJzEyLjAiTiA3NMKwMzYnMDAuMCJF!5e0!3m2!1sru!2skg!4v1234567890123!5m2!1sru!2skg"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта расположения магазина"
              ></iframe>
            </div>
            <p className="map-address">
              <strong>Адрес:</strong> г. Бишкек, ул. Турусбекова 109/1
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts

