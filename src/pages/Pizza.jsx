import { useState, useEffect } from 'react'

const Pizza = () => {
  const [pizza, setPizza] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas/p001')
      .then((res) => res.json())
      .then((data) => setPizza(data))
  }, [])

  if (!pizza) return <p className="pizza-loading">Cargando...</p>

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
        <button className="btn-add">Añadir al carrito 🛒</button>
      </div>
    </div>
  )
}

export default Pizza
