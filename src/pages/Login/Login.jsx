import { useState } from 'react'
import './Login.css'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isLogin) {
      // Логика входа
      console.log('Login attempt:', { email: formData.email, password: formData.password })
      alert('Функция входа будет реализована позже')
    } else {
      // Логика регистрации
      if (formData.password !== formData.confirmPassword) {
        alert('Пароли не совпадают')
        return
      }
      console.log('Registration attempt:', formData)
      alert('Функция регистрации будет реализована позже')
    }
  }

  const handleGoogleLogin = () => {
    console.log('Google login')
    alert('Вход через Google будет реализован позже')
  }

  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-title">{isLogin ? 'Вход' : 'Регистрация'}</h1>
        
        <div className="login-methods">
          <button
            className={`method-btn ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Вход
          </button>
          <button
            className={`method-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Регистрация
          </button>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {isLogin ? (
            <>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Пароль</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Введите пароль"
                  required
                />
              </div>
            </>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Имя (никнейм)</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Введите ваше имя"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Пароль</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Введите пароль"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Подтвердите пароль</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Подтвердите пароль"
                  required
                />
              </div>
            </>
          )}

          <button type="submit" className="btn btn-primary btn-large">
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>

        <div className="divider">
          <span>или</span>
        </div>

        <div className="social-login">
          <button 
            className="btn btn-google"
            onClick={handleGoogleLogin}
          >
            <span className="google-icon">🔍</span>
            Войти через Google
          </button>
        </div>

        <div className="login-footer">
          {isLogin ? (
            <>
              <p>
                Нет аккаунта? <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(false) }}>Зарегистрироваться</a>
              </p>
              <p>
                <a href="#forgot">Забыли пароль?</a>
              </p>
            </>
          ) : (
            <p>
              Уже есть аккаунт? <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(true) }}>Войти</a>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login

