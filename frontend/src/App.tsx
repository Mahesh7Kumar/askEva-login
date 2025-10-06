import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register.tsx';
import Login from './pages/Login.tsx';
import Profile from './pages/Profile.tsx';

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<Login />} />
    </Routes>
    </div>
  )
}

export default App
