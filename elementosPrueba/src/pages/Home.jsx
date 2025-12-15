import { useEffect } from 'react'
import { useCounter } from '../hooks/useCounter'

export default function Home() {
  const { count, increment, decrement } = useCounter(0)

  useEffect(() => {
    console.log('Contador:', count)
  }, [count])

  return (
    <div className="p-4">
      <h1 className="text-xl mb-2">Home</h1>
      <p>Contador: {count}</p>
      <button onClick={increment} className="mr-2 bg-blue-500 px-2 text-white">
        +
      </button>
      <button onClick={decrement} className="bg-red-500 px-2 text-white">
        -
      </button>
    </div>
  )
}
