import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (pizza) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === pizza.id)
      if (existing) {
        return prev.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        )
      }
      return [...prev, { ...pizza, count: 1 }]
    })
  }

  const increase = (id) => {
    setCart((prev) =>
      prev.map((item) => item.id === id ? { ...item, count: item.count + 1 } : item)
    )
  }

  const decrease = (id) => {
    setCart((prev) => {
      const item = prev.find((item) => item.id === id)
      if (item.count === 1) {
        return prev.filter((item) => item.id !== id)
      }
      return prev.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
    })
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, increase, decrease, total }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
