import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

const API_URL = 'http://localhost:5000'

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null)
  const [email, setEmail] = useState(localStorage.getItem('email') || null)

  const login = async (email, password) => {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    if (!res.ok) throw new Error('Login failed')
    const data = await res.json()
    setToken(data.token)
    setEmail(data.email)
    localStorage.setItem('token', data.token)
    localStorage.setItem('email', data.email)
  }

  const register = async (email, password) => {
    const res = await fetch(`${API_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    if (!res.ok) throw new Error('Register failed')
    const data = await res.json()
    setToken(data.token)
    setEmail(data.email)
    localStorage.setItem('token', data.token)
    localStorage.setItem('email', data.email)
  }

  const logout = () => {
    setToken(null)
    setEmail(null)
    localStorage.removeItem('token')
    localStorage.removeItem('email')
  }

  const getProfile = async () => {
    const res = await fetch(`${API_URL}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    if (!res.ok) throw new Error('Could not fetch profile')
    return await res.json()
  }

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
