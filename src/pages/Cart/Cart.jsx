import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity, clearCart } from '../../store/slices/cartSlice'
import './Cart.css'

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const handleRemove = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) {
      handleRemove(id)
      return
    }
    dispatch(updateQuantity({ id, quantity: newQuantity }))
  }

  const handleClearCart = () => {
    if (window.confirm('Вы уверены, что хотите очистить корзину?')) {
      dispatch(clearCart())
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <div className="container">
          <h1 className="cart-title">Корзина</h1>
          <div className="cart-empty">
            <p>Ваша корзина пуста</p>
            <a href="/" className="btn btn-primary">Вернуться к покупкам</a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart">
      <div className="container">
        <div className="cart-header">
          <h1 className="cart-title">Корзина</h1>
          <button 
            className="btn btn-secondary"
            onClick={handleClearCart}
          >
            Очистить корзину
          </button>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150x150?text=No+Image'
                    }}
                  />
                </div>
                <div className="cart-item-info">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">{item.price} сом</p>
                </div>
                <div className="cart-item-controls">
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="cart-item-total">
                    {item.price * item.quantity} сом
                  </p>
                  <button 
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2 className="summary-title">Итого</h2>
            <div className="summary-row">
              <span>Товаров: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>
            <div className="summary-row">
              <span>Сумма:</span>
              <span className="summary-total">{total} сом</span>
            </div>
            <button className="btn btn-primary btn-large checkout-btn">
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

