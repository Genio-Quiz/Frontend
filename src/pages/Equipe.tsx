import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Equipe = () => {
  const navigate = useNavigate();
  const areasProjeto = [
    {
      nome: "Frontend",
      cor: "bg-yellow-600",
      borda: "border-yellow-400",
      texto: "text-yellow-100",
      membros: [
        {
          nome: "Gabriel Msuoka",
          descricao: "Lider Frontend",
          imagem: "https://placehold.co/600x400/EEE/31343C",
          link: "https://github.com/MasuOkaa"
        },
        {
          nome: "Gabriel Ferreira",
          descricao: "Vice lider/Faz tudo",
          imagem: "https://placehold.co/600x400/EEE/31343C",
          link: "https://github.com/gabriel-szabados"
        }
      ]
    },
    {
      nome: "Backend",
      cor: "bg-blue-500",
      borda: "border-blue-400",
      texto: "text-blue-100",
      membros: [
        {
          nome: "Lucas Godinho",
          descricao: "Lider Backend/Dev",
          imagem: "https://placehold.co/600x400/EEE/31343C",
          link: "https://github.com/Lucas-G-Passos"
        }
      ]
    },
    {
      nome: "Database",
      cor: "bg-red-500",
      borda: "border-red-400",
      texto: "text-red-100",
      membros: [
        {
          nome: "Victor Dalbon",
          descricao: "Lider Database/Dev",
          imagem: "https://placehold.co/600x400/EEE/31343C",
          link: "https://github.com/mariana-costa"
        }
      ]
    },
    {
      nome: "Docente",
      cor: "bg-green-500",
      borda: "border-green-400",
      texto: "text-green-100",
      membros: [
        {
          nome: "Marcos Caldas ",
          descricao: "Professor de PWIII",
          imagem: "https://placehold.co/600x400/EEE/31343C",
          link: "https://github.com/marcoscaldas"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen p-4 bg-gradient-to-b from-#0c3840 to-#161d4e to-#95185d">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center hover:text-blue-300 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Voltar
          </button>
          <h1 className="text-5xl md:text-6xl font-['Fredoka_One'] mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-pink-500">Equipe Sabichão</h1>
          <a 
            href="https://github.com/Genio-Quiz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-300 transition-colors"
          >
            <FaGithub className="mr-2"/> GitHub
          </a>
        </div>

        {/* Area de Infos */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20">
          <h1 className="text-2xl font-bold mb-4 flex items-center">
            <FaGithub className="mr-3" /> Repositório do Projeto
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-200 mb-2">
                <strong>URL:</strong> {''}
                <a href="https://github.com/Genio-Quiz" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">
                  https://github.com/Genio-Quiz
                </a>
              </p>
              <p className="text-gray-200 mb-2">
                <strong>Descrição:</strong> Plataforma de quiz de DS.
              </p>
            </div>
            <div>
              <p className="text-gray-200 mb-2">
                <strong>Tecnologias:</strong> Vite, NestJs, MySql
              </p>
              <p className="text-green-200">  
                <strong >Status:</strong> Em desenvolvimento
              </p>
            </div>
          </div>
        </div>

        {/* Area dos Membros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areasProjeto.map((area, index) => (
            <div key={index} className={`${area.cor} rounded-2xl p-5 ${area.borda} border-2 shadow-lg`}>
              <h2 className={`text-xl font-bold ${area.texto} mb-4 text-center border-b ${area.borda} pb-2`}>
                {area.nome}
              </h2>
              
              <div className="space-y-4">
                {area.membros.map((membro, idx) => (
                  <a 
                    key={idx} 
                    href={membro.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start p-3 bg-white/20 rounded-xl border border-white/30 hover:bg-white/30 transition-all cursor-pointer"
                  >
                    <img 
                      src={membro.imagem} 
                      alt={membro.nome}
                      className="w-14 h-14 rounded-full object-cover mr-3 border-2 border-white/30"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-lg font-bold text-white">{membro.nome}</h3>
                      <p className="text-white/90 text-sm">{membro.descricao}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipe;