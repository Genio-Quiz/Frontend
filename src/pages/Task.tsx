import { useEffect, useState } from "react";

export default function ExercisePage() {
    const [time, setTime] = useState(0);
    const [boxValue, setBoxValue] = useState<number|null>(null)
    const handleResponse = async () => {
        if (!boxValue) return;
        try {
            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/`
            )
        } catch (err){
            console.error(err);
            alert("Erro ao enviar Quiz")
            
        }
    }

    useEffect(() => {
        const interval = setInterval(() => setTime((t) => t + 1), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
    
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-60 left-20 w-52 h-52 bg-yellow-400 rounded-full opacity-30 animate-pulse -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full opacity-30 animate-pulse delay-75 translate-x-1/2 translate-y-1/2" />
                <div className="absolute top-2/5 right-15 w-40 h-40 bg-cyan-400 rounded-full opacity-30 animate-pulse delay-150 translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="relative w-full min-h-screen flex flex-col px-6 py-10 items-center justify-center">
                <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/20">

               
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl md:text-4xl font-['Fredoka_One'] text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-pink-500">
                            Exercício
                        </h2>
                        <div className="text-gray-200 font-semibold">
                            ⏱️ {time}s
                        </div>
                    </div>

              
                    <p className="text-lg text-gray-100 mb-8">
                        [Aqui vai o texto da questão — exemplo: "Qual dessas alternativas está correta sobre X?"]
                    </p>


                    <div className="flex flex-col gap-4">
                        {["Resposta A", "Resposta B", "Resposta C", "Resposta D"].map((opt, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-3 bg-white/10 border border-white/20 hover:border-white/40 rounded-xl px-4 py-3 cursor-pointer transition-all duration-200"
                            >
                                <input type="checkbox" className="w-5 h-5 accent-pink-500 rounded-[10px]" onClick={()=>setBoxValue(index)} value={opt}/>
                                <span className="text-gray-100">{opt} (placeholder)</span>
                            </label>
                        ))}
                    </div>

            
                    <button
                        className="mt-8 w-full bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-bold py-3 rounded-xl shadow-lg hover:opacity-90 transition-all"
                        onClick={handleResponse}
                    >
                        Enviar Resposta
                    </button>
                </div>

                <div className="mt-6 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} Sabichão. Todos os direitos reservados.
                </div>
            </div>
        </>
    );
}