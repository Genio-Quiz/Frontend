import React, { useState, type JSX } from "react";


// Tipagem da questão
export type Question = {
  id: number;
  title: string;
  body: string;
};

export default function QuizEditor(): JSX.Element {
  const [questions, setQuestions] = useState<Question[]>([
    { id: 1, title: "lorem ipsum do...", body: "Escreva a pergunta aqui" },
    { id: 2, title: "questão 2 é sob...", body: "escreva a questão aqui" },
    { id: 3, title: "o conceito de es...", body: "" },
    { id: 4, title: "questão 3 aqui.", body: "" },
    { id: 5, title: "aiueo", body: "" },
    { id: 6, title: "Eu dou pro Carli", body: "" },
  ]);

  const [selectedId, setSelectedId] = useState<number>(2);
  const [subject, setSubject] = useState<string>("Matemática");

  const selected = questions.find((q) => q.id === selectedId) || questions[0];

  function addQuestion() {
    const nextId = questions.length
      ? Math.max(...questions.map((q) => q.id)) + 1
      : 1;
    const newQ: Question = {
      id: nextId,
      title: `Questão ${nextId}`,
      body: "",
    };
    setQuestions((s) => [...s, newQ]);
    setSelectedId(newQ.id);
  }

  function updateSelectedBody(text: string) {
    setQuestions((s) =>
      s.map((q) => (q.id === selectedId ? { ...q, body: text } : q))
    );
  }

  function updateSelectedTitle(text: string) {
    setQuestions((s) =>
      s.map((q) => (q.id === selectedId ? { ...q, title: text } : q))
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-200 flex items-start justify-center p-6">
      <div className="max-w-6xl w-full bg-gray-100 rounded shadow-lg flex overflow-hidden">
        {/* LEFT SIDEBAR */}
        <aside className="w-72 bg-white border-r border-gray-200 p-4 flex flex-col">
          <label className="text-gray-500 text-sm">Matéria</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-2 mb-4 rounded border px-3 py-2 text-lg font-semibold"
          >
            <option>Matemática</option>
            <option>Português</option>
            <option>Ciências</option>
          </select>

          <div className="flex-1 overflow-auto">
            <h4 className="text-gray-500 mb-2">Questões</h4>
            <ul className="space-y-3">
              {questions.map((q, i) => (
                <li key={q.id}>
                  <button
                    onClick={() => setSelectedId(q.id)}
                    className={`w-full text-left rounded px-3 py-2 flex items-center gap-3 ${
                      q.id === selectedId
                        ? "bg-white border border-blue-600 shadow"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    <span className="text-sm text-gray-600 mr-2">{i + 1}</span>
                    <span className="truncate font-medium">{q.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <button
              onClick={addQuestion}
              className="w-full rounded-lg border border-gray-200 py-2 text-green-600 font-semibold bg-white"
            >
              Adicionar questão
            </button>
          </div>
        </aside>

        {/* MAIN AREA */}
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-extrabold text-gray-800 text-center mb-6">
            Questão {selected?.id}
          </h1>

          <div className="bg-white border border-blue-200 rounded p-4 mb-6">
            <input
              value={selected?.title ?? ""}
              onChange={(e) => updateSelectedTitle(e.target.value)}
              className="w-full text-lg font-bold mb-2 outline-none"
              placeholder="Título da questão"
            />

            <textarea
              value={selected?.body ?? ""}
              onChange={(e) => updateSelectedBody(e.target.value)}
              rows={6}
              className="w-full bg-gray-50 border border-blue-200 rounded p-4 text-base resize-none outline-none"
              placeholder="Escreva a questão aqui"
            />
          </div>

          <h3 className="text-blue-600 font-bold mb-4">Respostas</h3>

          <div className="flex gap-6 flex-wrap">
            <AnswerCard colorClass="bg-red-500" label="Resposta 1" />
            <AnswerCard colorClass="bg-blue-500" label="Resposta 2" />
            <AnswerCard colorClass="bg-green-400" label="Resposta 3" />
            <AnswerCard colorClass="bg-yellow-400" label="Resposta 4" />
          </div>
        </main>
      </div>
    </div>
  );
}

// Componente para respostas
function AnswerCard({
  colorClass,
  label,
}: {
  colorClass: string;
  label: string;
}) {
  return (
    <div
      className={`w-40 h-40 rounded-lg shadow-md ${colorClass} p-4 text-white flex items-start`}
    >
      <div className="font-bold leading-tight">{label}</div>
    </div>
  );
}
