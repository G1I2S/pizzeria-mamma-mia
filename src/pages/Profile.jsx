import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const Profile = () => {
  const { email, logout } = useUser()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="form-container">
      <h2>Mi Perfil</h2>
      <p><strong>Email:</strong> {email}</p>
      <button className="btn-submit" onClick={handleLogout}>Cerrar sesión</button>
    </div>
  )
}

export default Profile
