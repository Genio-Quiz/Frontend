import { FaAt,  FaFingerprint, FaRegEyeSlash, FaRegEye, FaApple, FaGoogle, FaFacebook } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[90%] max-w-sm md:max-w-md lg:max-w-md p-5 bg-gray-900 flex-col flex items-center gap-3 rounded-xl shadow-slate-500 shadow-lg">
            <img src="src/assets/react.svg" alt="Logo" className="w-12 md:w-14" />
            <h1 className="text-lg md:text-xl font-semibold">Entrar</h1>
            <p className="text-xs md:text-sm text-gray-500 text-center">Não tem uma conta? <span className="text-white">Crie uma</span></p>
            <div className="w-full flex flex-col gap-3">
                <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2">
                    <FaAt/>
                    <input type="email" placeholder="Insira seu e-mail" className="bg-transparent border-0 w-full outline-none text-sm md:text-base gap-3" />
                </div>
                <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2 relative">
                    <FaFingerprint/>
                    <input type={showPassword ? "text": "password"} placeholder="Digite sua senha" className="bg-transparent border-0 w-full outline-none text-sm md:text-base gap-3" />
                    {showPassword ? 
                        (<FaRegEyeSlash className="absolute right-5 cursor-pointer" onClick={togglePasswordVisibility}/>) 
                            :
                        (<FaRegEye className="absolute right-5 cursor-pointer" onClick={togglePasswordVisibility}/>)
                    }
                </div>
            </div>
            <p className="text-xs md:text-sm text-gray-500">Esqueceu sua senha? <span className="text-white">Redefina</span></p>

            <button className="w-full bg-blue-600 p-2 rounded-xl mt-3 hover:bg-blue-700 text-sm md:text-base">Entrar</button>
            
            <div className="relative w-full flex items-center justify cennter py-3">
                <div className="w-2/3 h-[2px] bg-gray-800"></div>
                <h3 className="text-xs md:text-sm px-4 text-gray-500">Ou</h3>
                <div className="w-2/3 h-[2px] bg-gray-800"></div>
            </div>

            <div className="relative w-full flex items-center justify-between py-3">
                <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800">
                    <FaApple className="text-lg md:text-xl"/>
                </div>
                <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800">
                    <FaGoogle className="text-lg md:text-xl"/>
                </div>
                <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800">
                    <FaFacebook className="text-lg md:text-xl"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login