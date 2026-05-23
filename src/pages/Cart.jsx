import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useUser } from '../context/UserContext'

const API_URL = 'http://localhost:5000'

const Cart = () => {
  const { cart, increase, decrease, total } = useCart()
  const { token } = useUser()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const formatPrice = (price) => price.toLocaleString('es-CL')

  const handleCheckout = async () => {
    setError('')
    try {
      const res = await fetch(`${API_URL}/api/checkouts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      })
      if (!res.ok) throw new Error('Checkout failed')
      setSuccess(true)
    } catch {
      setError('Error al procesar el pago. Intenta nuevamente.')
    }
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Detalles del pedido:</h2>
      {success ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h3 style={{ color: 'green' }}>¡Pedido realizado con éxito!</h3>
          <p>Gracias por tu compra. Tu pizza está en camino.</p>
        </div>
      ) : (
        <>
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
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button className="btn-pay" disabled={!token || cart.length === 0} onClick={handleCheckout}>
            Pagar
          </button>
        </>
      )}
    </div>
  )
}

export default Cart
