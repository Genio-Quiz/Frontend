import { FaBrain } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import QuizCard from "./QuizCard";
import samuel from "../assets/samuel.png"
import points3 from "../assets/3points.png"
import edit from "../assets/edit.png"
import useAuth from "../contexts/Auth/useAuth";
export default function User() {
  const navigate = useNavigate();
  const auth = useAuth();
  const quizInfo = [
    {
      icon: "calculate",
      title: "Matemática",
      desc: "Venha ademazar!",
      grad: "bg-gradient-to-br from-red-500 to-orange-500",
      shadow: "hover:shadow-red-500/50",
    },
    {
      icon: "translate",
      title: "Português",
      desc: "Vamos verdascar?",
      grad: "bg-gradient-to-br from-green-400 to-cyan-400",
      shadow: "hover:shadow-cyan-400/50",
    },
    {
      icon: "history_edu",
      title: "História",
      desc: "Fala zezé!",
      grad: "bg-gradient-to-br from-blue-500 to-indigo-600",
      shadow: "hover:shadow-blue-500/50",
    },
    {
      icon: "code",
      title: "Programação",
      desc: "Desvende os códigos!",
      grad: "bg-gradient-to-br from-purple-500 to-pink-500",
      shadow: "hover:shadow-purple-500/50",
    },
  ];

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-white font-['Roboto'] relative overflow-x-hidden overflow-y-scroll">
      <div className="absolute top-10 left-0 w-52 h-52 bg-yellow-400 rounded-full opacity-30 animate-pulse -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full opacity-30 animate-pulse delay-75 translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-2/5 right-15 w-40 h-40 bg-cyan-400 rounded-full opacity-30 animate-pulse delay-150 translate-x-1/2 -translate-y-1/2" />
      <div className="relative z-10 w-full max-w-[1400px] h-full flex flex-col px-6 py-6 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:mb-[30px]">
          <div
            className="flex items-center gap-3 text-4xl cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <FaBrain className="text-yellow-400" />
            <h1 className="font-['Fredoka_One'] font-bold">Sabichão</h1>
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
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
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-[90%] flex justify-between">
            <div className="w-auto  shadow-xl  border-white/20 mb-1 flex gap-[10px] items-end">

              <div className="h-[100px] aspect-square overflow-hidden
            rounded-[10px] center-items justify-center flex" >
                <img src={samuel} className="h=[100%]" />
              </div>
              <h1 className="text-[20px] font-bold">{auth.user?.username}</h1>
              <p className="text-[15px] text-gray-400">{auth.user?.email}</p>
            </div>
            <div className="flex items-center">
              <button className="flex p-[6px] gap-[10px] border-solid border-[2px] rounded-[10px]
    ">
                <img src={edit} className="h-[20px]" />
                Editar</button>
              <button>
                <img src={points3} className="h-[25px]" />
              </button>
            </div>
          </div>
          <div className="w-full bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/20 mb-10">
            <h1 className="text-2xl font-bold">Minhas infos</h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos.
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {quizInfo.map((category, index) => (
              <QuizCard
                key={index}
                icon={category.icon}
                title={category.title}
                desc={category.desc}
                grad={category.grad}
                shadow={category.shadow}
              />
            ))}
          </div>
          <div className="mt-4 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()}{" "}
            <span
              className="cursor-pointer hover:text-blue-400"
              onClick={() => navigate("/equipe")}
            >
              Sabichão
            </span>
            . Todos os direitos reservados.
          </div>
        </div>
      </div>
    </div>
  );
};
