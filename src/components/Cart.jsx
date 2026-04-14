import { useState } from 'react'
import { pizzaCart } from '../pizzas'

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)

  const formatPrice = (price) => price.toLocaleString('es-CL')

  const increase = (id) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ))
  }

  const decrease = (id) => {
    const item = cart.find((item) => item.id === id)
    if (item.count === 1) {
      setCart(cart.filter((item) => item.id !== id))
    } else {
      setCart(cart.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      ))
    }
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0)

  return (
    <div className="cart-container">
      <h2 className="cart-title">Detalles del pedido:</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">No hay pizzas en el carrito.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-item-img" />
            <span className="cart-item-name">{item.name}</span>
            <span className="cart-item-price">${formatPrice(item.price)}</span>
            <div className="cart-item-controls">
              <button className="btn-count" onClick={() => decrease(item.id)}>-</button>
              <span className="cart-item-count">{item.count}</span>
              <button className="btn-count" onClick={() => increase(item.id)}>+</button>
            </div>
          </div>
        ))
      )}
      <h3 className="cart-total">Total: ${formatPrice(total)}</h3>
      <button className="btn-pay">Pagar</button>
    </div>
  )
}

export default Cart
