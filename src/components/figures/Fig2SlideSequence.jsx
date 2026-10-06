import React from 'react';

export default function Fig2SlideSequence({ activeSlideIndex = 0, onSelectSlide }) {
  const SLIDE_TYPES = [
    { num: 1, name: 'Abertura (pergunta)', bg: 'bg-amber-500', text: 'text-amber-950', border: 'border-amber-600' },
    { num: 2, name: 'Conceito', bg: 'bg-amber-900', text: 'text-amber-50', border: 'border-amber-950' },
    { num: 3, name: 'Modelo / fórmula', bg: 'bg-amber-900', text: 'text-amber-50', border: 'border-amber-950' },
    { num: 4, name: 'Figura-chave', bg: 'bg-red-700', text: 'text-white', border: 'border-red-800' },
    { num: 5, name: 'Exemplo resolvido', bg: 'bg-amber-900', text: 'text-amber-50', border: 'border-amber-950' },
    { num: 6, name: 'Lente CAJU', bg: 'bg-emerald-800', text: 'text-emerald-50', border: 'border-emerald-950' },
    { num: 7, name: 'Realidade local', bg: 'bg-emerald-800', text: 'text-emerald-50', border: 'border-emerald-950' },
    { num: 8, name: 'Para lembrar', bg: 'bg-amber-500', text: 'text-amber-950', border: 'border-amber-600' },
    { num: 9, name: 'Checagem rápida', bg: 'bg-stone-800', text: 'text-white', border: 'border-black' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center p-2 select-none">
      <div className="text-center mb-2">
        <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wider">
          Figura 2 — Sequência Padrão dos 9 Slides de Cada Aula
        </h4>
        <p className="text-[11px] text-stone-600">
          Estrutura pedagógica fixa que reduz a carga cognitiva do estudante
        </p>
      </div>

      {/* Sequência horizontal deslizável no mobile */}
      <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
        <div className="flex items-center gap-1.5 min-w-[620px] px-2 py-1 justify-between">
          {SLIDE_TYPES.map((st, idx) => {
            const isActive = activeSlideIndex === idx;
            return (
              <React.Fragment key={st.num}>
                <button
                  onClick={() => onSelectSlide && onSelectSlide(idx)}
                  className={`flex flex-col items-center justify-between w-18 h-20 p-1.5 rounded-xl border-2 transition-all cursor-pointer ${
                    isActive ? 'ring-3 ring-amber-400 scale-105 shadow-md z-10' : 'opacity-90 hover:opacity-100 hover:scale-102'
                  } ${st.bg} ${st.text} ${st.border}`}
                >
                  <span className="text-[9px] font-mono opacity-80">slide {st.num}</span>
                  <span className="text-[10px] font-extrabold leading-tight text-center my-auto">
                    {st.name}
                  </span>
                </button>

                {idx < SLIDE_TYPES.length - 1 && (
                  <span className="text-stone-400 font-bold text-xs shrink-0 select-none">
                    &gt;
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="mt-2 text-center text-xs text-stone-600 italic">
        Duração típica: 25 a 40 minutos em sala · 10 a 15 minutos em modo estudo
      </div>
    </div>
  );
}
