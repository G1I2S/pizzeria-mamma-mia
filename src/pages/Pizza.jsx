import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { pizzas } from '../pizzas'

const Pizza = () => {
  const { id } = useParams()
  const { addToCart } = useCart()

  const pizza = pizzas.find((p) => p.id === Number(id))

  if (!pizza) return <p className="pizza-loading">Pizza no encontrada.</p>

  const formatPrice = (price) => price.toLocaleString('es-CL')

  return (
    <div className="pizza-detail-container">
      <img src={pizza.img} alt={pizza.name} className="pizza-detail-img" />
      <div className="pizza-detail-body">
        <h2 className="pizza-detail-name">Pizza {pizza.name}</h2>
        <p className="pizza-detail-desc">{pizza.desc}</p>
        <p className="ingredients-label">Ingredientes:</p>
        <ul className="ingredients-list">
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>
        <p className="pizza-detail-price">Precio: ${formatPrice(pizza.price)}</p>
        <button
          className="btn-add"
          onClick={() => addToCart({ id: pizza.id, name: pizza.name, price: pizza.price, img: pizza.img })}
        >
          Añadir al carrito 🛒
        </button>
      </div>
    </div>
  )
}

export default Pizza
