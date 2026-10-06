import React, { useState } from 'react';

const LENS_CARDS = [
  {
    letter: 'C',
    name: 'Cidades',
    color: '#b91c1c',
    bg: 'bg-red-700',
    border: 'border-red-900',
    question: 'Como a configuração da cidade e do território muda este conceito?',
    cariri: 'Cidades médias e pequenas do Cariri: centro comercial denso, feiras livres, romarias em Juazeiro e comércio em bairros periféricos.'
  },
  {
    letter: 'A',
    name: 'Análise Institucional',
    color: '#8d5b2c',
    bg: 'bg-amber-900',
    border: 'border-amber-950',
    question: 'Quais regras formais e informais e custos de transação pesam?',
    cariri: 'Regras da família, honra, caderneta de fiado, barganha na feira e redes de confiança mútua da comunidade.'
  },
  {
    letter: 'J',
    name: 'Jurídico',
    color: '#15803d',
    bg: 'bg-emerald-800',
    border: 'border-emerald-950',
    question: 'Que instrumentos legais existem e estão subutilizados?',
    cariri: 'MEI (LC 128), Simples Nacional, Microcrédito (Lei 13.636), Liberdade Econômica (Lei 13.874) e Reforma Tributária (EC 132).'
  },
  {
    letter: 'U',
    name: 'Ubíquo',
    color: '#d97706',
    bg: 'bg-amber-600',
    border: 'border-amber-700',
    question: 'Que ferramenta no celular aplica o conceito aqui e agora?',
    cariri: 'Pix instantâneo, livro-caixa digital, planilhas no celular, WhatsApp Business e calculadoras financeiras de bolso.'
  }
];

export default function Fig3CajuLensModel({ activeConcept = "Conceito da Aula" }) {
  const [selectedLens, setSelectedLens] = useState(LENS_CARDS[0]);

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center p-2 select-none">
      <div className="text-center mb-1">
        <h4 className="text-sm font-bold text-amber-950 uppercase tracking-wider">
          Figura 3 — Modelo Visual da Metodologia CAJU
        </h4>
        <p className="text-xs text-stone-600">
          As quatro dimensões aplicadas a cada tema de finanças para pequenos negócios
        </p>
      </div>

      <div className="relative w-full max-w-sm aspect-square my-2 p-1">
        {/* Quadrantes 2x2 */}
        <div className="w-full h-full grid grid-cols-2 gap-2">
          {/* C - Cidades (Topo Esquerdo - Vermelho Caju) */}
          <div 
            onClick={() => setSelectedLens(LENS_CARDS[0])}
            className={`rounded-2xl p-3 flex flex-col justify-between cursor-pointer transition-all duration-200 border-2 ${
              selectedLens.letter === 'C' ? 'ring-4 ring-red-300 scale-102 shadow-lg' : 'opacity-90 hover:opacity-100 shadow'
            } ${LENS_CARDS[0].bg} text-white ${LENS_CARDS[0].border}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl font-extrabold font-heading">C</span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-black/20 px-1.5 py-0.5 rounded">Cidades</span>
            </div>
            <p className="text-[11px] leading-snug font-medium pr-3">
              {LENS_CARDS[0].question}
            </p>
          </div>

          {/* A - Análise Institucional (Topo Direito - Castanha) */}
          <div 
            onClick={() => setSelectedLens(LENS_CARDS[1])}
            className={`rounded-2xl p-3 flex flex-col justify-between cursor-pointer transition-all duration-200 border-2 ${
              selectedLens.letter === 'A' ? 'ring-4 ring-amber-300 scale-102 shadow-lg' : 'opacity-90 hover:opacity-100 shadow'
            } ${LENS_CARDS[1].bg} text-amber-50 ${LENS_CARDS[1].border}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl font-extrabold font-heading">A</span>
              <span className="text-[9.5px] font-bold uppercase tracking-wider bg-black/25 px-1.5 py-0.5 rounded">Institucional</span>
            </div>
            <p className="text-[11px] leading-snug font-medium pl-3">
              {LENS_CARDS[1].question}
            </p>
          </div>

          {/* J - Jurídico (Base Esquerdo - Verde Folha) */}
          <div 
            onClick={() => setSelectedLens(LENS_CARDS[2])}
            className={`rounded-2xl p-3 flex flex-col justify-between cursor-pointer transition-all duration-200 border-2 ${
              selectedLens.letter === 'J' ? 'ring-4 ring-emerald-300 scale-102 shadow-lg' : 'opacity-90 hover:opacity-100 shadow'
            } ${LENS_CARDS[2].bg} text-emerald-50 ${LENS_CARDS[2].border}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl font-extrabold font-heading">J</span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-black/25 px-1.5 py-0.5 rounded">Jurídico</span>
            </div>
            <p className="text-[11px] leading-snug font-medium pr-3">
              {LENS_CARDS[2].question}
            </p>
          </div>

          {/* U - Ubíquo (Base Direito - Amarelo Flor) */}
          <div 
            onClick={() => setSelectedLens(LENS_CARDS[3])}
            className={`rounded-2xl p-3 flex flex-col justify-between cursor-pointer transition-all duration-200 border-2 ${
              selectedLens.letter === 'U' ? 'ring-4 ring-amber-300 scale-102 shadow-lg' : 'opacity-90 hover:opacity-100 shadow'
            } ${LENS_CARDS[3].bg} text-white ${LENS_CARDS[3].border}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl font-extrabold font-heading">U</span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-black/20 px-1.5 py-0.5 rounded">Ubíquo</span>
            </div>
            <p className="text-[11px] leading-snug font-medium pl-3">
              {LENS_CARDS[3].question}
            </p>
          </div>
        </div>

        {/* NÚCLEO CENTRAL: CONCEITO DA AULA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white border-4 border-amber-950 shadow-xl flex flex-col items-center justify-center p-1.5 text-center pointer-events-none z-10">
          <span className="text-[9px] font-extrabold uppercase text-stone-500 tracking-wider">
            Lente
          </span>
          <span className="text-xs font-black text-amber-950 leading-tight">
            {activeConcept}
          </span>
          <span className="text-[8px] font-bold text-red-700 mt-0.5">
            URCA · Cariri
          </span>
        </div>
      </div>

      {/* Cartão Informativo Inferior */}
      <div className="w-full mt-1 bg-amber-50 border border-amber-300 rounded-xl p-2.5 text-xs text-stone-800">
        <div className="flex items-center gap-2 mb-1">
          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-white font-black text-xs ${selectedLens.bg}`}>
            {selectedLens.letter}
          </span>
          <span className="font-extrabold text-stone-900 text-sm">
            {selectedLens.name}
          </span>
        </div>
        <p className="text-[11px] text-stone-700 leading-snug">
          <span className="font-bold text-amber-950">Contexto no Cariri: </span>
          {selectedLens.cariri}
        </p>
      </div>
    </div>
  );
}
