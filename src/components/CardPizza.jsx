const CardPizza = ({ name, price, ingredients, img, onAdd }) => {
  const formatPrice = (price) => price.toLocaleString('es-CL')

  return (
    <div className="pizza-card">
      <img src={img} alt={name} />
      <div className="pizza-card-body">
        <h5 className="pizza-name">Pizza {name}</h5>
        <p className="ingredients-label">Ingredientes:</p>
        <ul className="ingredients-list">
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>
        <p className="pizza-price">Precio: ${formatPrice(price)}</p>
        <div className="card-actions">
          <button className="btn-ver-mas">Ver Más »</button>
          <button className="btn-add" onClick={() => onAdd(price)}>Añadir 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
