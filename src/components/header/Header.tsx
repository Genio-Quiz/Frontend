import { FaBrain } from "react-icons/fa";
import useAuth from "../../contexts/Auth/useAuth";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const auth = useAuth()
  const navigate = useNavigate()

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sticky top-3 left-0 z-50 p-6 py-4 mx-6 backdrop-blur-md rounded-xl bg-gray-50/10 border border-white/20">
      <div className="flex items-center gap-3 text-4xl cursor-pointer" onClick={() => { navigate("/") }} >
        <FaBrain className="text-yellow-400" />
        <h1 className="font-['Fredoka_One'] font-bold">Sabichão</h1>
      </div>
      <div className="flex gap-3 flex-wrap justify-center mb-2">
        {auth.user ? (
          <>
            <button
              className="px-6 py-2 rounded-full font-bold text-sm md:text-base bg-pink-500 text-white hover:bg-white hover:text-pink-500 transition"
              onClick={() => navigate("/quizeditor")}
            >
              Quiz editor
            </button>
            <button
              className="px-6 py-2 rounded-full font-bold text-sm md:text-base bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
              onClick={auth.logout}
            >
              Sair
            </button>
          </>
        ) : (
          <>
            <button
              className="px-6 py-2 rounded-full font-bold text-sm md:text-base bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
              onClick={() => navigate("/signin")}
            >
              Entrar
            </button>
            <button
              className="px-6 py-2 rounded-full font-bold text-sm md:text-base bg-pink-500 text-white hover:bg-white hover:text-pink-500 transition"
              onClick={() => navigate("/signup")}
            >
              Criar conta
            </button>
          </>
        )}
      </div>
    </div>
  )
}