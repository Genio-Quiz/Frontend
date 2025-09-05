import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Signup from './components/auth/Signup'
import Signin from './components/auth/Signin'
import Equipe from './components/Equipe'
import Forget from './components/auth/Forget'
<<<<<<< HEAD
import QuizEditor from './components/QuizEditor'

=======
import ResetPassword from './components/auth/ResetPassword';
>>>>>>> ff4227fcfb54606278436d216ad6c7aa99ea5e70

function App() {

  return (
      <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/quizeditor" element={<QuizEditor />} /> {/* nova rota */}
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Forget" element={<Forget />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Equipe" element={<Equipe />} />
        <Route path="*" element={<Home/>} /> {/* rota padrao */}
      </Routes>
    </Router>
  )
}

export default App
