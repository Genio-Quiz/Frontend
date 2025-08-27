import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Equipe = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-white hover:text-blue-300 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Voltar
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Equipe Sabichão</h1>
          <a 
            href="https://github.com/Genio-Quiz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-blue-300 transition-colors"
          >
            <FaGithub className="mr-2"/> GitHub
          </a>
        </div>

        {/* Project GitHub Info */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20">
          <h1 className="text-2xl font-bold text-white mb-4 flex items-center">
            <FaGithub className="mr-3" /> Repositório do Projeto
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-200 mb-2">
                <strong className="text-white">URL:</strong> {''}
                <a href="https://github.com/Genio-Quiz" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">
                  https://github.com/Genio-Quiz
                </a>
              </p>
              <p className="text-gray-200 mb-2">
                <strong className="text-white">Descrição:</strong> Plataforma de quiz de DS.
              </p>
            </div>
            <div>
              <p className="text-gray-200 mb-2">
                <strong className="text-white">Tecnologias:</strong> Vite, NestJs, MySql
              </p>
              <p className="text-green-200">  
                <strong className="text-white">Status:</strong> Em desenvolvimento
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Equipe;