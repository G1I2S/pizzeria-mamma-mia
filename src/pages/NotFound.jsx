import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '8rem', color: '#e63946', margin: 0, lineHeight: 1 }}>404</h1>
      <h2 style={{ color: '#fff', margin: '1rem 0' }}>¡Página no encontrada!</h2>
      <p style={{ color: '#aaa', marginBottom: '2rem', fontSize: '1.1rem' }}>
        Parece que esta página se perdió como una pizza sin ingredientes... 🍕
      </p>
      <Link to="/" className="btn-submit" style={{ textDecoration: 'none', padding: '0.75rem 2rem' }}>
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound
