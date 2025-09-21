import React, { useState } from "react";

type Answer = {
  id: number;
  text: string;
  isCorrect: boolean;
};

type Question = {
  id: number;
  title: string;
  body: string;
  answers: Answer[];
};

export default function QuizEditor() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selected, setSelected] = useState<Question | null>(null);

  const addOrUpdateQuestion = () => {
    if (!selected) return;

    if (
      selected.title.trim() === "" ||
      selected.answers.every((a) => a.text.trim() === "") ||
      !selected.answers.some((a) => a.isCorrect)
    ) {
      alert(
        "Preencha o titulo e selecione a reposta correta"
      );
      return;
    }

    setQuestions((prev) => {
      const exists = prev.find((q) => q.id === selected.id);
      if (exists) {
        return prev.map((q) => (q.id === selected.id ? selected : q));
      } else {
        return [...prev, selected];
      }
    });
  };

  const selectQuestion = (id: number) => {
    const q = questions.find((q) => q.id === id);
    if (q) setSelected(q);
  };

  const newQuestion = () => {
    const nextId = questions.length ? Math.max(...questions.map((q) => q.id)) + 1 : 1;
    const emptyQuestion: Question = {
      id: nextId,
      title: `Questão ${nextId}`,
      body: "",
      answers: [
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
        { id: 4, text: "", isCorrect: false },
      ],
    };
    setSelected(emptyQuestion);
  };

  const updateTitle = (text: string) => {
    if (!selected) return;
    setSelected({ ...selected, title: text });
  };

  const updateBody = (text: string) => {
    if (!selected) return;
    setSelected({ ...selected, body: text });
  };

  const updateAnswer = (answerId: number, newText: string) => {
    if (!selected) return;
    const newAnswers = selected.answers.map((a) =>
      a.id === answerId ? { ...a, text: newText } : a
    );
    setSelected({ ...selected, answers: newAnswers });
  };

  const markCorrect = (answerId: number) => {
    if (!selected) return;
    const newAnswers = selected.answers.map((a) => ({
      ...a,
      isCorrect: a.id === answerId,
    }));
    setSelected({ ...selected, answers: newAnswers });
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#1A1A2E] via-[#16213E] to-[#E94560] p-8 flex justify-center">
      <div className="w-full max-w-6xl bg-gray-900 bg-opacity-80 shadow-lg rounded-xl flex overflow-hidden text-gray-100">
        <aside className="w-72 border-r border-gray-700 p-4 flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-pink-500 font-brand">Editor de Quiz</h2>

          <button
            onClick={newQuestion}
            className="mb-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-full transition"
          >
            + Nova Questão
          </button>

          <div className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-gray-800">
            <ul className="space-y-2">
              {questions.map((q) => (
                <li key={q.id}>
                  <button
                    onClick={() => selectQuestion(q.id)}
                    className={`w-full text-left px-3 py-2 rounded ${
                      selected?.id === q.id
                        ? "bg-pink-700 text-white border border-pink-400"
                        : "bg-gray-800 hover:bg-gray-700"
                    } transition`}
                  >
                    {q.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="flex-1 p-8 overflow-auto flex flex-col">
          {selected ? (
            <>
              <input
                className="text-2xl font-bold w-full mb-4 border-b border-pink-500 bg-transparent text-white outline-none placeholder-pink-300"
                value={selected.title}
                onChange={(e) => updateTitle(e.target.value)}
                placeholder="Título da Questão"
              />

              <textarea
                className="w-full p-3 border border-pink-500 rounded mb-6 resize-none bg-gray-800 text-white placeholder-pink-400 outline-none"
                rows={4}
                placeholder="Enunciado da pergunta..."
                value={selected.body}
                onChange={(e) => updateBody(e.target.value)}
              />

              <h3 className="text-xl font-semibold text-pink-400 mb-4">Alternativas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {selected.answers.map((answer) => (
                  <div key={answer.id} className="flex items-start gap-3">
                    <input
                      type="radio"
                      name={`correct-${selected.id}`}
                      checked={answer.isCorrect}
                      onChange={() => markCorrect(answer.id)}
                      className="mt-2 accent-pink-500"
                    />
                    <textarea
                      className={`flex-1 p-2 rounded border resize-none bg-gray-700 text-white placeholder-pink-300 outline-none ${
                        answer.isCorrect
                          ? "border-green-500"
                          : "border-pink-600"
                      }`}
                      rows={2}
                      placeholder={`Resposta ${answer.id}`}
                      value={answer.text}
                      onChange={(e) => updateAnswer(answer.id, e.target.value)}
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={addOrUpdateQuestion}
                className="self-start bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition"
              >
                Salvar Questão
              </button>
              <button
                onClick={addOrUpdateQuestion}
                className="self-start bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full transition"
              >
                Excluir Questão
              </button>
            </>
          ) : (
            <p className="text-gray-300 text-center text-lg mt-20">
              Selecione ou adicione uma questão para editar.
            </p>
          )}
        </main>
      </div>
    </div>
  );
}
