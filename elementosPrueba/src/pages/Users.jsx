import { Link } from 'react-router-dom'
import { useUsers } from '../services/userService'

export default function Users() {
  const { data, isLoading, error } = useUsers()

  if (isLoading) return <p>Cargando...</p>
  if (error) return <p>Error al cargar</p>

  return (
    <div className="p-4">
      <h1 className="text-xl mb-2">Usuarios</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            <Link className="text-blue-600" to={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
