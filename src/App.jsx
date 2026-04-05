import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'

const App = () => {
  const [currentPage, setCurrentPage] = useState('register')
  const [total, setTotal] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleAddToCart = (price) => {
    setTotal((prev) => prev + price)
  }

  const handleNavigate = (page) => {
    if (page === 'home' && !isLoggedIn) return
    setCurrentPage(page)
  }

  const handleAuth = () => {
    setIsLoggedIn(true)
    setCurrentPage('home')
  }

  const renderPage = () => {
    if (currentPage === 'register') return <RegisterPage onNavigate={handleAuth} />
    if (currentPage === 'login') return <LoginPage onNavigate={handleAuth} />
    return <Home onAdd={handleAddToCart} />
  }

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} total={total} isLoggedIn={isLoggedIn} />
      {renderPage()}
      <Footer />
    </>
  )
}

export default App
