import React, { useState } from 'react';
import { Info } from 'lucide-react';

const THEORIES = [
  { id: 'ciclo', name: 'Ciclo de Vida', x: 200, y: 70, desc: 'Fases do negócio: nascimento, sobrevivência, expansão e maturidade definem as necessidades de capital.' },
  { id: 'recursos', name: 'Recursos e Capacidades', x: 310, y: 140, desc: 'Visão Baseada em Recursos (RBV): ativos intangíveis como reputação comunitária e saberes tradicionais valem tanto quanto capital.' },
  { id: 'utilidade', name: 'Utilidade Esperada', x: 275, y: 260, desc: 'Aversão ao risco do empreendedor frente a cenários incertos (ex: medo de chuvas na romaria).' },
  { id: 'giro', name: 'Capital de Giro', x: 125, y: 260, desc: 'Teoria da liquidez operacional para financiar o intervalo entre compras de estoque e recebimento de vendas.' },
  { id: 'restricoes', name: 'Restrições Financeiras', x: 90, y: 140, desc: 'Dificuldade de obter crédito formal explicada por assimetria de informações e ausência de garantias reais.' }
];

export default function Fig6StrategicTheories() {
  const [selectedTheory, setSelectedTheory] = useState(THEORIES[0]);

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center p-2 select-none">
      <div className="text-center mb-1">
        <h4 className="text-sm font-bold text-amber-950 uppercase tracking-wider">
          Figura 6 — Decisão Financeira e o Ambiente Institucional
        </h4>
        <p className="text-xs text-stone-600">
          Toque em uma teoria para ver sua aplicação à realidade do pequeno negócio
        </p>
      </div>

      <div className="relative w-full aspect-4/3 max-h-[320px]">
        <svg viewBox="0 0 400 340" className="w-full h-full">
          {/* Anel Institucional da NEI (pontilhado verde) */}
          <circle 
            cx="200" 
            cy="170" 
            r="150" 
            fill="none" 
            stroke="#15803d" 
            strokeWidth="3.5" 
            strokeDasharray="9 6" 
            className="opacity-80"
          />

          {/* Rótulo inferior da NEI */}
          <text 
            x="200" 
            y="332" 
            textAnchor="middle" 
            fill="#166534" 
            fontSize="11" 
            fontWeight="700"
            fontFamily="Plus Jakarta Sans, sans-serif"
          >
            Ambiente Institucional (NEI): regras formais, informais e custos de transação
          </text>

          {/* Linhas conectoras do centro para os nós */}
          {THEORIES.map((t) => (
            <line 
              key={`line-${t.id}`}
              x1="200" 
              y1="170" 
              x2={t.x} 
              y2={t.y} 
              stroke={selectedTheory.id === t.id ? '#b91c1c' : '#a8a29e'} 
              strokeWidth={selectedTheory.id === t.id ? "3" : "1.5"}
              strokeDasharray={selectedTheory.id === t.id ? "none" : "3 3"}
            />
          ))}

          {/* Núcleo Central: DECISÃO FINANCEIRA */}
          <g>
            <circle cx="200" cy="170" r="46" fill="#b91c1c" stroke="#7f1d1d" strokeWidth="3" />
            <text x="200" y="166" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800">
              Decisão
            </text>
            <text x="200" y="181" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800">
              Financeira
            </text>
          </g>

          {/* Nós das 5 Teorias */}
          {THEORIES.map((t) => {
            const isSelected = selectedTheory.id === t.id;
            return (
              <g 
                key={t.id} 
                className="cursor-pointer transition-transform duration-200"
                onClick={() => setSelectedTheory(t)}
              >
                <circle 
                  cx={t.x} 
                  cy={t.y} 
                  r="34" 
                  fill={isSelected ? '#78350f' : '#92400e'} 
                  stroke={isSelected ? '#f59e0b' : '#ffffff'} 
                  strokeWidth={isSelected ? '3.5' : '2'}
                  filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))"
                />
                {/* Divide text in 2 lines if needed */}
                {t.name.split(' ').length > 2 ? (
                  <>
                    <text x={t.x} y={t.y - 4} textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="700">
                      {t.name.split(' ').slice(0, 2).join(' ')}
                    </text>
                    <text x={t.x} y={t.y + 8} textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="700">
                      {t.name.split(' ').slice(2).join(' ')}
                    </text>
                  </>
                ) : (
                  <>
                    <text x={t.x} y={t.y - 2} textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="700">
                      {t.name.split(' ')[0]}
                    </text>
                    <text x={t.x} y={t.y + 10} textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="700">
                      {t.name.split(' ')[1] || ''}
                    </text>
                  </>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Cartão de Detalhe da Teoria Selecionada */}
      <div className="w-full mt-1 bg-amber-50 border-2 border-amber-300/80 rounded-xl p-2.5 shadow-sm text-left">
        <div className="flex items-center gap-1.5 text-amber-950 font-bold text-xs mb-1">
          <Info size={15} className="text-amber-700" />
          <span>{selectedTheory.name}</span>
        </div>
        <p className="text-xs text-stone-700 leading-snug">
          {selectedTheory.desc}
        </p>
      </div>
    </div>
  );
}
