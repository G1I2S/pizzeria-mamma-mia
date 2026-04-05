const Navbar = ({ currentPage, onNavigate, total, isLoggedIn }) => {
  const formatPrice = (price) => price.toLocaleString('es-CL')

  return (
    <nav className="navbar-custom">
      <span className="navbar-brand-custom">🍕 Mamma Mía</span>
      <div className="navbar-buttons">
        {isLoggedIn && (
          <button
            className={`btn-nav ${currentPage === 'home' ? 'btn-nav-active' : ''}`}
            onClick={() => onNavigate('home')}
          >
            🍕 Home
          </button>
        )}
        {isLoggedIn ? (
          <>
            <button className="btn-nav">🔓 Profile</button>
            <button className="btn-nav">🔒 Logout</button>
          </>
        ) : (
          <>
            <button
              className={`btn-nav ${currentPage === 'login' ? 'btn-nav-active' : ''}`}
              onClick={() => onNavigate('login')}
            >
              🔐 Login
            </button>
            <button
              className={`btn-nav ${currentPage === 'register' ? 'btn-nav-active' : ''}`}
              onClick={() => onNavigate('register')}
            >
              🔐 Register
            </button>
          </>
        )}
      </div>
      {currentPage === 'home' && (
        <button className="btn-total">🛒 Total: ${formatPrice(total)}</button>
      )}
    </nav>
  )
}

export default Navbar
