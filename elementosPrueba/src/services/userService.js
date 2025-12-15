import { useQuery } from '@tanstack/react-query'

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!res.ok) throw new Error('Error al cargar usuarios')
  return res.json()
}

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  })
}
