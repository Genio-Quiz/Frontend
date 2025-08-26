import { BiCodeAlt, BiMath } from "react-icons/bi";
import { FaBrain } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-[96vw] h-[96vh] bg-white/10 rounded-lg border border-white/20 p-4 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 text-4xl text-white">
            <FaBrain className="text-blue-400" />
            <h1 className="font-bold">Sabichão</h1>
          </div>
          <div className="flex gap-3">
            <button 
              className="w-[120px] h-[44px] bg-blue-600 rounded-xl text-white hover:bg-blue-700 font-medium text-sm md:text-base" onClick={() => navigate("/signin")}>
              Entrar
            </button>
            <button className="w-[140px] h-[44px] bg-white rounded-xl border-2 border-blue-600 text-blue-600 font-medium text-sm md:text-base hover:bg-gray-300" onClick={() => navigate("/signup")}>
              Criar conta
            </button>
          </div>
        </div>
 
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full h-[65%] bg-white/5 rounded-2xl mt-4 p-8 flex items-center justify-center flex-col border border-white/10 backdrop-blur-sm">
            <h1 className="text-3xl font-bold text-white text-center mb-4">
              Bem vindo ao Sabichão
            </h1>
            <p className="text-gray-200 text-center max-w-2xl">
              A melhor plataforma de quiz?
            </p>
            <p className="text-gray-200 text-center max-w-2xl">
              Acesse conhecimento de forma rápida e intuitiva por meio de ondas cerebrais.
            </p>
            <p className="text-gray-200 text-center max-w-2xl">
              Venha ser um Sabichão ou uma Sabichona!
            </p>
          </div>
        </div>
        
        <div className="flex justify-between text-white gap-4 mt-6 h-[45%]">
          <div className="w-[23%] h-full bg-red-500/20 rounded-2xl flex flex-col items-center justify-center border border-red-400/30 backdrop-blur-sm cursor-pointer hover:bg-red-800/30">
            <BiMath className="text-4xl mb-2"/>
            <h1 className="text-lg font-bold">Matemática</h1> 
          </div>
          <div className="w-[23%] h-full bg-green-500/20 rounded-2xl flex flex-col items-center justify-center border border-green-400/30 backdrop-blur-sm cursor-pointer hover:bg-green-800/30">
            <h1 className="text-lg font-bold">Português</h1>            
          </div>
          <div className="w-[23%] h-full bg-blue-500/20 rounded-2xl flex flex-col items-center justify-center border border-blue-400/30 backdrop-blur-sm cursor-pointer hover:bg-blue-800/30">
            <h1 className="text-lg font-bold">Historia</h1>
          </div>
          <div className="w-[23%] h-full bg-yellow-500/20 rounded-2xl flex flex-col items-center justify-center border border-yellow-400/30 backdrop-blur-sm cursor-pointer hover:bg-yellow-800/30">
            <BiCodeAlt className="text-4xl mb-2"/>
            <h1 className="text-lg font-bold">Programação</h1>
          </div>
        </div>

        <div className="mt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} <span className="cursor-pointer hover:text-blue-400" onClick={()=>navigate("/equipe")}>Sabichão</span>. Todos os direitos reservados.
        </div>
      </div>
    </div>
  );
}

export default Home;