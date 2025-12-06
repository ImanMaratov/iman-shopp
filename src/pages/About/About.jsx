import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h1 className="page-title">О нас</h1>
        
        <section className="about-section">
          <div className="about-content">
            <h2>Добро пожаловать в Iman Shopp!</h2>
            <p>
              Мы - современный онлайн-магазин сладостей и напитков, который предлагает 
              широкий ассортимент качественных продуктов для наших клиентов. Наша миссия - 
              сделать вашу жизнь слаще, предлагая только лучшие товары.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <h2>Наша история</h2>
            <p>
              Iman Shopp был основан с любовью к качественным сладостям и напиткам. 
              Мы начали свой путь с небольшой идеи - создать место, где каждый может 
              найти что-то особенное для себя и своих близких.
            </p>
            <p>
              Сегодня мы гордимся тем, что предлагаем широкий выбор тортов, чизкейков, 
              напитков и кофе, которые приносят радость нашим клиентам каждый день.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <h2>Почему выбирают нас?</h2>
            <div className="features">
              <div className="feature">
                <div className="feature-icon">✨</div>
                <h3>Качество</h3>
                <p>Мы тщательно отбираем каждый продукт, чтобы гарантировать высочайшее качество.</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🚀</div>
                <h3>Быстрая доставка</h3>
                <p>Мы доставляем ваши заказы быстро и аккуратно, чтобы вы могли наслаждаться свежими продуктами.</p>
              </div>
              <div className="feature">
                <div className="feature-icon">💝</div>
                <h3>Широкий ассортимент</h3>
                <p>У нас вы найдете все, что нужно для сладкого настроения - от тортов до кофе.</p>
              </div>
              <div className="feature">
                <div className="feature-icon">😊</div>
                <h3>Отличный сервис</h3>
                <p>Наша команда всегда готова помочь вам и ответить на все ваши вопросы.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <h2>Наши ценности</h2>
            <p>
              В Iman Shopp мы верим в качество, честность и заботу о наших клиентах. 
              Каждый день мы работаем над тем, чтобы сделать ваш опыт покупок приятным 
              и незабываемым. Ваше удовлетворение - наш приоритет!
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About

