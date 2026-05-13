import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useUser } from '../context/UserContext'

const Navbar = () => {
  const location = useLocation()
  const { total } = useCart()
  const { token, logout } = useUser()
  const formatPrice = (price) => (price || 0).toLocaleString('es-CL')

  return (
    <nav className="navbar-custom">
      <Link to="/" className="navbar-brand-custom" style={{ textDecoration: 'none' }}>
        🍕 Mamma Mía
      </Link>
      <div className="navbar-buttons">
        <Link
          to="/"
          className={`btn-nav ${location.pathname === '/' ? 'btn-nav-active' : ''}`}
          style={{ textDecoration: 'none' }}
        >
          🍕 Home
        </Link>
        {token ? (
          <>
            <Link
              to="/profile"
              className={`btn-nav ${location.pathname === '/profile' ? 'btn-nav-active' : ''}`}
              style={{ textDecoration: 'none' }}
            >
              🔓 Profile
            </Link>
            <button className="btn-nav" onClick={logout}>
              🔐 Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className={`btn-nav ${location.pathname === '/login' ? 'btn-nav-active' : ''}`}
              style={{ textDecoration: 'none' }}
            >
              🔐 Login
            </Link>
            <Link
              to="/register"
              className={`btn-nav ${location.pathname === '/register' ? 'btn-nav-active' : ''}`}
              style={{ textDecoration: 'none' }}
            >
              🔐 Register
            </Link>
          </>
        )}
      </div>
      <Link to="/cart" className="btn-total" style={{ textDecoration: 'none' }}>
        🛒 Total: ${formatPrice(total)}
      </Link>
    </nav>
  )
}

export default Navbar
