import React, { useState } from 'react';

const MILESTONES = [
  {
    year: '2026',
    x: 80,
    color: '#eab308',
    title: 'Fase de Teste e Calibração',
    subtitle: 'CBS 0,9% e IBS 0,1%',
    desc: 'Alíquotas simbólicas nas notas fiscais para testar a plataforma digital da Receita e dos Estados sem aumento de carga tributária.'
  },
  {
    year: '2027',
    x: 160,
    color: '#b91c1c',
    title: 'Extinção de PIS e Cofins',
    subtitle: 'CBS Federal Plena & Simples Híbrido',
    desc: 'A CBS federal entra em vigor plena. PIS e Cofins são extintos. Microempresas do Simples Nacional podem optar por recolher CBS/IBS fora do DAS para transferir crédito a clientes PJ.'
  },
  {
    year: '2029–2032',
    x: 275,
    color: '#15803d',
    title: 'Transição dos Tributos Estaduais e Municipais',
    subtitle: 'Queda de ICMS e ISS · Subida do IBS',
    desc: 'Redução gradativa de 10% ao ano nas alíquotas de ICMS e ISS, enquanto o IBS estadual/municipal assume o recolhimento com base no destino do consumo.'
  },
  {
    year: '2033',
    x: 395,
    color: '#8d5b2c',
    title: 'Vigência Plena do IVA Dual',
    subtitle: 'Sistema Tributário Modernizado',
    desc: 'O antigo modelo de 5 tributos dá lugar definitivamente ao IVA Dual (CBS federal + IBS subnacional), com não-cumulatividade plena e devolução (cashback) para baixa renda.'
  }
];

export default function Fig15TaxReformTimeline() {
  const [activeMilestone, setActiveMilestone] = useState(MILESTONES[0]); // 2026 default

  const svgWidth = 460;
  const svgHeight = 220;
  const lineY = 120;

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center p-2 select-none">
      <div className="text-center mb-1">
        <h4 className="text-sm font-bold text-amber-950 uppercase tracking-wider">
          Figura 15 — Linha do Tempo da Reforma Tributária do Consumo
        </h4>
        <p className="text-xs text-stone-600">
          Emenda Constitucional 132/2023 e Lei Complementar 214/2025
        </p>
      </div>

      <div className="w-full aspect-2/1 max-h-[250px] relative">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full">
          {/* FAIXA HORIZONTAL DE TRANSIÇÃO (2029-2032) */}
          <rect 
            x={275} 
            y={lineY - 6} 
            width={120} 
            height="12" 
            fill="#86efac" 
            opacity="0.6" 
            rx="4" 
          />

          {/* LINHA TRONCO DA LINHA DO TEMPO */}
          <line 
            x1="40" 
            y1={lineY} 
            x2="430" 
            y2={lineY} 
            stroke="#8d5b2c" 
            strokeWidth="5" 
            strokeLinecap="round" 
          />

          {/* MARCOS DA LINHA DO TEMPO */}
          {MILESTONES.map((m) => {
            const isSelected = activeMilestone.year === m.year;
            return (
              <g 
                key={m.year} 
                className="cursor-pointer transition-transform"
                onClick={() => setActiveMilestone(m)}
              >
                {/* Círculo do marco */}
                <circle 
                  cx={m.x} 
                  cy={lineY} 
                  r={isSelected ? "11" : "8"} 
                  fill={m.color} 
                  stroke="#ffffff" 
                  strokeWidth="2.5" 
                  filter="drop-shadow(0 2px 4px rgba(0,0,0,0.25))"
                />

                {/* Texto Superior (Ano) */}
                <text 
                  x={m.x} 
                  y={lineY - 20} 
                  textAnchor="middle" 
                  fontSize="11" 
                  fill={isSelected ? '#b91c1c' : '#44403c'} 
                  fontWeight="800"
                >
                  {m.year}
                </text>

                {/* Resumo curto inferior ou superior */}
                {m.year === '2026' && (
                  <g transform={`translate(${m.x}, ${lineY - 34})`}>
                    <text x="0" y="0" textAnchor="middle" fontSize="7.5" fill="#854d0e" fontWeight="bold">
                      CBS 0,9% e IBS 0,1%
                    </text>
                    <text x="0" y="8" textAnchor="middle" fontSize="7" fill="#713f12">
                      em teste nas notas
                    </text>
                  </g>
                )}

                {m.year === '2027' && (
                  <g transform={`translate(${m.x}, ${lineY + 22})`}>
                    <text x="0" y="0" textAnchor="middle" fontSize="7.5" fill="#991b1b" fontWeight="bold">
                      CBS plena; fim de PIS/Cofins
                    </text>
                    <text x="0" y="9" textAnchor="middle" fontSize="7" fill="#7f1d1d">
                      Simples híbrido opcional
                    </text>
                  </g>
                )}

                {m.year === '2029–2032' && (
                  <g transform={`translate(${m.x + 40}, ${lineY - 32})`}>
                    <text x="0" y="0" textAnchor="middle" fontSize="7.5" fill="#166534" fontWeight="bold">
                      ICMS e ISS reduzidos aos poucos
                    </text>
                    <text x="0" y="9" textAnchor="middle" fontSize="7" fill="#14532d">
                      IBS estadual cresce
                    </text>
                  </g>
                )}

                {m.year === '2033' && (
                  <g transform={`translate(${m.x}, ${lineY + 22})`}>
                    <text x="0" y="0" textAnchor="middle" fontSize="7.5" fill="#78350f" fontWeight="bold">
                      IVA dual
                    </text>
                    <text x="0" y="9" textAnchor="middle" fontSize="7" fill="#5c2e0b">
                      em pleno vigor
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Cartão de Detalhe Interativo */}
      <div className="w-full mt-1 bg-amber-50 border border-amber-300 rounded-xl p-2.5 text-xs text-stone-800">
        <div className="flex justify-between items-center mb-1">
          <span className="font-extrabold text-amber-950 text-sm">{activeMilestone.year} · {activeMilestone.title}</span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-950">
            {activeMilestone.subtitle}
          </span>
        </div>
        <p className="text-[11px] text-stone-700 leading-snug">
          {activeMilestone.desc}
        </p>
      </div>
    </div>
  );
}
