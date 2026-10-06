import React from 'react';

export default function Fig1TrailMap({ onSelectLesson, activeLessonId, completedLessons = [] }) {
  // 12 Aulas: 1 a 6 linha superior (esquerda para direita), 7 a 12 linha inferior (direita para esquerda)
  const LESSON_ITEMS = [
    { id: 1, name: 'Gestão financeira', isExam2: false },
    { id: 2, name: 'Teorias estratégicas', isExam2: false },
    { id: 3, name: 'Planejamento', isExam2: true },
    { id: 4, name: 'Fluxo de caixa', isExam2: false },
    { id: 5, name: 'Custos e despesas', isExam2: true },
    { id: 6, name: 'Precificação', isExam2: true },
    { id: 7, name: 'Capital de giro', isExam2: true },
    { id: 8, name: 'Crédito e financ.', isExam2: true },
    { id: 9, name: 'Investimentos', isExam2: true },
    { id: 10, name: 'Indicadores', isExam2: true },
    { id: 11, name: 'Compliance e trib.', isExam2: false },
    { id: 12, name: 'Riscos', isExam2: false }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center p-2 select-none">
      <div className="text-center mb-2">
        <h3 className="text-base font-extrabold text-amber-950 font-heading">
          Trilha das 12 Aulas do Módulo 3
        </h3>
        <p className="text-xs text-stone-600">
          Educação Financeira para Pequenos Negócios · Ciências Econômicas URCA
        </p>
      </div>

      {/* Grid responsivo em formato de trilha de estações */}
      <div className="w-full relative py-3">
        {/* Linha 1: Aulas 1 a 6 */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4 relative z-10">
          {LESSON_ITEMS.slice(0, 6).map((item) => {
            const isCompleted = completedLessons.includes(item.id);
            const isActive = activeLessonId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectLesson && onSelectLesson(item.id)}
                className={`group flex flex-col items-center text-center p-2 rounded-xl transition-all cursor-pointer border ${
                  isActive 
                    ? 'ring-3 ring-amber-400 bg-amber-100/90 border-amber-500 shadow-md scale-105' 
                    : 'bg-white/80 hover:bg-white border-amber-900/10 shadow-sm hover:scale-102'
                }`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-extrabold text-white text-base shadow mb-1.5 transition-transform group-hover:scale-110 ${
                  item.isExam2 ? 'bg-red-700' : 'bg-emerald-800'
                }`}>
                  {item.id}
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-stone-900 leading-tight">
                  {item.name}
                </span>
                {item.isExam2 && (
                  <span className="mt-1 text-[8px] font-extrabold text-red-700 bg-red-100 px-1 py-0.2 rounded-full">
                    Avaliação 2
                  </span>
                )}
                {isCompleted && (
                  <span className="text-[8px] font-bold text-emerald-700 mt-0.5">
                    ✓ Concluída
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Linha 2: Aulas 7 a 12 */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 relative z-10">
          {LESSON_ITEMS.slice(6, 12).map((item) => {
            const isCompleted = completedLessons.includes(item.id);
            const isActive = activeLessonId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectLesson && onSelectLesson(item.id)}
                className={`group flex flex-col items-center text-center p-2 rounded-xl transition-all cursor-pointer border ${
                  isActive 
                    ? 'ring-3 ring-amber-400 bg-amber-100/90 border-amber-500 shadow-md scale-105' 
                    : 'bg-white/80 hover:bg-white border-amber-900/10 shadow-sm hover:scale-102'
                }`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-extrabold text-white text-base shadow mb-1.5 transition-transform group-hover:scale-110 ${
                  item.isExam2 ? 'bg-red-700' : 'bg-emerald-800'
                }`}>
                  {item.id}
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-stone-900 leading-tight">
                  {item.name}
                </span>
                {item.isExam2 && (
                  <span className="mt-1 text-[8px] font-extrabold text-red-700 bg-red-100 px-1 py-0.2 rounded-full">
                    Avaliação 2
                  </span>
                )}
                {isCompleted && (
                  <span className="text-[8px] font-bold text-emerald-700 mt-0.5">
                    ✓ Concluída
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Legenda da Trilha */}
      <div className="flex items-center gap-6 mt-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-red-700 shadow-sm inline-block"></span>
          <span className="text-stone-700 font-bold">Conteúdo da Avaliação 2 (Aulas 3, 5, 6, 7, 8, 9 e 10)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-emerald-800 shadow-sm inline-block"></span>
          <span className="text-stone-700 font-bold">Demais conteúdos do Módulo 3</span>
        </div>
      </div>
    </div>
  );
}
