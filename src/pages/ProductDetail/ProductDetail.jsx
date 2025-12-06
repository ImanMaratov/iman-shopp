import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/slices/cartSlice'
import { products } from '../../data/products'
import './ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="product-detail">
        <div className="container">
          <p>Товар не найден</p>
          <button onClick={() => navigate('/')} className="btn btn-primary">
            Вернуться на главную
          </button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <div className="product-detail">
      <div className="container">
        <button 
          className="back-button"
          onClick={() => navigate(-1)}
        >
          ← Назад
        </button>

        <div className="product-detail-content">
          <div className="product-detail-image">
            <img 
              src={product.image} 
              alt={product.name}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/500x500?text=No+Image'
              }}
            />
          </div>

          <div className="product-detail-info">
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-price">{product.price} сом</p>
            <div className="product-detail-description">
              <h3>Описание</h3>
              <p>{product.description}</p>
            </div>
            <button 
              className="btn btn-primary btn-large"
              onClick={handleAddToCart}
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

