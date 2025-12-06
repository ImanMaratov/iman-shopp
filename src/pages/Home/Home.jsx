import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../store/slices/cartSlice'
import { products, categories } from '../../data/products'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Home.css'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  const handleViewDetails = (productId) => {
    navigate(`/product/${productId}`)
  }

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Добро пожаловать в Iman Shopp</h1>
          <p className="hero-subtitle">Лучшие сладости и напитки для вас</p>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Категории</h2>
          <div className="categories">
            <button
              className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              Все товары
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <h2 className="section-title">
            {selectedCategory === 'all' 
              ? 'Все товары' 
              : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

