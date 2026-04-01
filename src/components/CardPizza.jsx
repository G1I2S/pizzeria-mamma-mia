const CardPizza = ({ name, price, ingredients, img }) => {
  const formatPrice = (price) => price.toLocaleString('es-CL')

  return (
    <div className="pizza-card">
      <img src={img} alt={name} />
      <div className="pizza-card-body">
        <h5 className="pizza-name">Pizza {name}</h5>
        <p className="ingredients-label">Ingredientes:</p>
        <p className="ingredients-list">🍕 {ingredients.join(', ')}</p>
        <p className="pizza-price">Precio: ${formatPrice(price)}</p>
        <div className="card-actions">
          <button className="btn-ver-mas">Ver Más »</button>
          <button className="btn-add">Añadir 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
