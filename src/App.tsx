import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/auth/Cadastro'
import Login from './components/auth/Registro'

function App() {

  return (
      <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Login />} /> {/* rota default */}
      </Routes>
    </Router>
  )
}

export default App
