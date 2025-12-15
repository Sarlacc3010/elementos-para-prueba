import { useParams } from 'react-router-dom'

export default function UserDetail() {
  const { id } = useParams()

  return (
    <div className="p-4">
      <h1 className="text-xl">Detalle Usuario</h1>
      <p>ID: {id}</p>
    </div>
  )
}
