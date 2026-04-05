import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [total, setTotal] = useState(0)

  const handleAddToCart = (price) => {
    setTotal((prev) => prev + price)
  }

  const renderPage = () => {
    if (currentPage === 'register') return <RegisterPage onNavigate={setCurrentPage} />
    if (currentPage === 'login') return <LoginPage onNavigate={setCurrentPage} />
    return <Home onAdd={handleAddToCart} />
  }

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} total={total} />
      {renderPage()}
      <Footer />
    </>
  )
}

export default App
