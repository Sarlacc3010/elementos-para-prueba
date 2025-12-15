import { useForm } from 'react-hook-form'

export default function CreateUser() {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = data => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 flex flex-col gap-2">
      <input {...register('name', { required: true })} placeholder="Nombre" />
      <input {...register('email', { required: true })} placeholder="Email" />
      <button className="bg-green-500 text-white p-2">Guardar</button>
    </form>
  )
}
