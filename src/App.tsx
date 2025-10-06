import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Equipe from './pages/Equipe';
import Forget from './components/auth/Forget';
import QuizEditor from './pages/QuizEditor';
import ResetPassword from './components/auth/ResetPassword';
import PrivateRoute from './pages/PrivateRoute';
import User from "./pages/User"
import RankingGeral from './pages/RankingGeral'
import Task from "./pages/Task.jsx"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route
          path="/quizeditor"
          element={
            <PrivateRoute>
              <QuizEditor />
            </PrivateRoute>
          }
        />
        <Route path="/Exercise" element={<Task />} />
        <Route path="/User" element={<User />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Forget" element={<Forget />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Equipe" element={<Equipe />} />
        <Route path="/RankingGeral" element={<RankingGeral />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;