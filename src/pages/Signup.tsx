import { FaBrain } from "react-icons/fa";
import {
  FaAt,
  FaFingerprint,
  FaRegEyeSlash,
  FaRegEye,
  FaApple,
  FaGoogle,
  FaFacebook,
} from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [isAdmin, setAdmin] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleSignUp = async () => {
    if (!email || !username || !password || !confirmPassword) return;
    if (confirmPassword != password) return;
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, username, password, isAdmin }),
        }
      );
      const data = await response.json();
      if (response.ok) navigate("/signin");
      else alert(data.message || "Erro ao criar usuário");
    } catch (error) {
      console.error(error);
      alert("Erro ao criar usuário");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex items-center gap-3 text-4xl absolute top-px left-px p-[22px] cursor-pointer" onClick={()=>{navigate("/")}} >
                 <FaBrain className="text-yellow-400" />
                 <h1 className="font-['Fredoka_One'] font-bold">Sabichão</h1>
            </div>
      <div
        className="w-[90%] max-w-sm md:max-w-md lg:max-w-md p-5 
                bg-white/10 backdrop-blur-md 
                border border-white/20
                flex-col flex items-center gap-3 
                rounded-2xl shadow-lg shadow-slate-900/50 mb-4"
      >
        <span className="text-white text-3xl font-bold">Sabichão</span>
        <h1 className="text-lg md:text-xl font-semibold">Registrar</h1>
        <p className="text-xs md:text-sm text-gray-500 text-center">
          Já tem uma conta?{" "}
          <span
            className="text-white cursor-pointer hover:text-blue-400"
            onClick={() => navigate("/signin")}
          >
            Entrar
          </span>
        </p>
        <div className="w-full flex flex-col gap-3">
          {/* Email */}
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2">
            <FaAt />
            <input
              type="email"
              placeholder="Insira seu e-mail"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base gap-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Username */}
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2">
            <FaAt />
            <input
              type="email"
              placeholder="Insira seu username"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base gap-3"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Senha */}
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2 relative">
            <FaFingerprint />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Crie sua senha"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base gap-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <FaRegEyeSlash
                className="absolute right-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaRegEye
                className="absolute right-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>

          {/* Confirmar senha */}
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2 relative">
            <FaFingerprint />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirme sua senha"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base gap-3"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {showConfirmPassword ? (
              <FaRegEyeSlash
                className="absolute right-5 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              />
            ) : (
              <FaRegEye
                className="absolute right-5 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              />
            )}
          </div>
        </div>

        <button
          className="w-full bg-blue-600 p-2 rounded-xl mt-3 hover:bg-blue-700 text-sm md:text-base"
          onClick={handleSignUp}
        >
          Criar conta
        </button>

        <div className="relative w-full flex items-center justify-center py-3">
          <div className="w-2/3 h-[2px] bg-gray-800"></div>
          <h3 className="text-xs md:text-sm px-4 text-gray-500">Ou</h3>
          <div className="w-2/3 h-[2px] bg-gray-800"></div>
        </div>

        <div className="relative w-full flex items-center justify-between py-3">
          <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800">
            <FaApple className="text-lg md:text-xl" />
          </div>
          <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800">
            <FaGoogle className="text-lg md:text-xl" />
          </div>
          <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800">
            <FaFacebook className="text-lg md:text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
