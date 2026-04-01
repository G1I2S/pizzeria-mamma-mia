const Navbar = () => {
  const total = 25000
  const token = false

  const formatPrice = (price) => price.toLocaleString('es-CL')

  return (
    <nav className="navbar-custom">
      <span className="navbar-brand-custom">🍕 Mamma Mía</span>
      <div className="navbar-buttons">
        <button className="btn-nav">🍕 Home</button>
        {token ? (
          <>
            <button className="btn-nav">🔓 Profile</button>
            <button className="btn-nav">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn-nav">🔐 Login</button>
            <button className="btn-nav">🔐 Register</button>
          </>
        )}
      </div>
      <button className="btn-total">🛒 Total: ${formatPrice(total)}</button>
    </nav>
  )
}

export default Navbar
