import './ProductCard.css'

const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x300?text=No+Image'
          }}
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price} сом</p>
        <div className="product-actions">
          <button 
            className="btn btn-primary"
            onClick={() => onAddToCart(product)}
          >
            Добавить в корзину
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => onViewDetails(product.id)}
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

