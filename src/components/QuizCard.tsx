import { useNavigate } from 'react-router-dom';

export default function QuizCard({ icon, title, desc, grad, shadow }:{ icon: string; title: string; desc: string; grad: string; shadow: string }) {
  const navigate = useNavigate();

  const acessarQuiz = () => {
    navigate(`/signin`);
  };

  return (
    <div 
      className={`quiz-card ${grad} hover:scale-105 hover:shadow-2xl ${shadow} cursor-pointer`}
      onClick={acessarQuiz}
    >
      <span className="material-icons text-7xl mb-4">{icon}</span>
      <h3 className="md:text-3xl text-1xl font-brand">{title}</h3>
      <div className="quiz-card-overlay">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-center px-4">{desc}</p>
      </div>
    </div>
  );
}