import {
    FaFingerprint
  } from "react-icons/fa";
  const ResetPassword = () => {
    
  
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center p-4">
        <div 
          className="w-[90%] max-w-sm md:max-w-md lg:max-w-md p-5 
                  bg-white/10 backdrop-blur-md 
                  border border-white/20
                  flex-col flex items-center gap-3 
                  rounded-2xl shadow-lg shadow-slate-900/50 mb-4"
        >
  
          <span className="text-white text-3xl font-bold">Sabichão</span>
          <h1 className="text-lg md:text-xl font-semibold">Coloque sua nova senha</h1>
          <p className="text-xs md:text-sm text-gray-500 text-center">
          </p>
          <div className="w-full flex flex-col gap-3">
            <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2">
               <FaFingerprint />
              <input
                type="email"
                placeholder="Insira sua nova senha"
                className="bg-transparent border-0 w-full outline-none text-sm md:text-base gap-3"
              />
            </div>
            <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2">
               <FaFingerprint />
              <input
                type="email"
                placeholder="Confirme sua senha"
                className="bg-transparent border-0 w-full outline-none text-sm md:text-base gap-3"
              />
            </div>
          </div>
  
          <button className="w-full bg-blue-600 p-2 rounded-xl mt-3 hover:bg-blue-700 text-sm md:text-base">
           Confirmar
          </button>
  
          
  
          
        </div>
  
      </div>
    );
  };
  
  export default ResetPassword;