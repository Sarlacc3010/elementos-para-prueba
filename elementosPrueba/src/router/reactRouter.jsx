import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Users from '../pages/Users'
import UserDetail from '../pages/UserDetail'
import CreateUser from '../pages/Createuser'

export default function ReactRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/create" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  )
}