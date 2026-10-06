import React, { useState } from 'react';

export default function Fig9ScaleEconomies() {
  const [volume, setVolume] = useState(300); // 300 default (caso da Dona Socorro)

  const fixedCost = 1700;
  const variableCostUnit = 9.50;

  const currentUnitCost = (fixedCost / volume) + variableCostUnit;

  // Dimensões SVG
  const svgWidth = 460;
  const svgHeight = 220;
  const chartLeft = 45;
  const chartBottom = 175;
  const chartHeight = 145;
  const minQ = 80;
  const maxQ = 800;
  const maxCost = 28;

  const getX = (q) => chartLeft + ((q - minQ) / (maxQ - minQ)) * (svgWidth - chartLeft - 20);
  const getY = (c) => chartBottom - (c / maxCost) * chartHeight;

  // Gerar curva
  const points = [];
  for (let q = 100; q <= 800; q += 20) {
    const c = (fixedCost / q) + variableCostUnit;
    points.push(`${getX(q)},${getY(c)}`);
  }
  const pathD = `M ${points.join(' L ')}`;

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center p-2 select-none">
      <div className="text-center mb-1">
        <h4 className="text-sm font-bold text-amber-950 uppercase tracking-wider">
          Figura 9 — Ganho de Escala: Diluição do Custo Fixo
        </h4>
        <p className="text-xs text-stone-600">
          O custo unitário cai à medida que o volume de marmitas produzidas aumenta
        </p>
      </div>

      <div className="w-full aspect-2/1 max-h-[250px] relative">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full">
          {/* Eixo Y e X */}
          <line x1={chartLeft} y1="20" x2={chartLeft} y2={chartBottom} stroke="#78350f" strokeWidth="1.5" />
          <line x1={chartLeft} y1={chartBottom} x2={svgWidth - 10} y2={chartBottom} stroke="#78350f" strokeWidth="1.5" />

          {/* Ticks do Eixo Y (R$ por marmita) */}
          {[0, 5, 10, 15, 20, 25].map((val) => {
            const y = getY(val);
            return (
              <g key={`y-${val}`}>
                <text x={chartLeft - 6} y={y + 3} textAnchor="end" fontSize="9" fill="#78350f" fontWeight="600">
                  {val}
                </text>
                <line x1={chartLeft - 3} y1={y} x2={chartLeft} y2={y} stroke="#78350f" />
              </g>
            );
          })}
          <text x="12" y="24" fontSize="9.5" fontWeight="bold" fill="#78350f" transform="rotate(-90 15,30)">
            R$ por marmita
          </text>

          {/* Ticks do Eixo X (Marmitas por mês) */}
          {[100, 200, 300, 400, 500, 600, 700, 800].map((q) => {
            const x = getX(q);
            return (
              <g key={`x-${q}`}>
                <text x={x} y={chartBottom + 13} textAnchor="middle" fontSize="8.5" fill="#78350f" fontWeight="600">
                  {q}
                </text>
                <line x1={x} y1={chartBottom} x2={x} y2={chartBottom + 3} stroke="#78350f" />
              </g>
            );
          })}
          <text x={svgWidth / 2} y={chartBottom + 27} textAnchor="middle" fontSize="9.5" fill="#78350f" fontWeight="bold">
            Marmitas por mês
          </text>

          {/* LINHA VERDE TRACEJADA: Custo Variável Unitário (R$ 9,50) */}
          <line 
            x1={chartLeft} 
            y1={getY(variableCostUnit)} 
            x2={svgWidth - 10} 
            y2={getY(variableCostUnit)} 
            stroke="#15803d" 
            strokeWidth="2" 
            strokeDasharray="5 3" 
          />

          {/* CURVA VERMELHA: Custo Unitário Total */}
          <path d={pathD} fill="none" stroke="#b91c1c" strokeWidth="3.5" strokeLinecap="round" />

          {/* PONTO ATUAL INTERATIVO */}
          <g>
            {/* Linhas guias pontilhadas até os eixos */}
            <line 
              x1={getX(volume)} 
              y1={getY(currentUnitCost)} 
              x2={getX(volume)} 
              y2={chartBottom} 
              stroke="#a8a29e" 
              strokeDasharray="2 2" 
            />
            <line 
              x1={chartLeft} 
              y1={getY(currentUnitCost)} 
              x2={getX(volume)} 
              y2={getY(currentUnitCost)} 
              stroke="#a8a29e" 
              strokeDasharray="2 2" 
            />

            {/* Círculo do ponto */}
            <circle 
              cx={getX(volume)} 
              cy={getY(currentUnitCost)} 
              r="6.5" 
              fill="#8d5b2c" 
              stroke="#ffffff" 
              strokeWidth="2.5" 
            />

            {/* Balão com valor */}
            <g transform={`translate(${Math.min(getX(volume) + 8, svgWidth - 130)}, ${Math.max(getY(currentUnitCost) - 26, 20)})`}>
              <rect x="0" y="0" width="120" height="22" rx="4" fill="#8d5b2c" />
              <text x="60" y="14" textAnchor="middle" fontSize="9" fill="#ffffff" fontWeight="bold">
                {volume} marmitas: R$ {currentUnitCost.toFixed(2)}
              </text>
            </g>
          </g>

          {/* Legenda no topo direito */}
          <g transform={`translate(${svgWidth - 210}, 18)`}>
            <line x1="0" y1="5" x2="18" y2="5" stroke="#b91c1c" strokeWidth="3" />
            <text x="24" y="8" fontSize="8" fill="#991b1b" fontWeight="bold">Custo unitário = CF ÷ Q + CVu</text>
            
            <line x1="0" y1="18" x2="18" y2="18" stroke="#15803d" strokeWidth="2" strokeDasharray="4 2" />
            <text x="24" y="21" fontSize="8" fill="#166534" fontWeight="bold">Custo variável (R$ 9,50)</text>
          </g>
        </svg>
      </div>

      {/* Slider interativo para testar escala */}
      <div className="w-full mt-2 bg-amber-50 border border-amber-300 rounded-xl p-2 flex flex-col gap-1">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-amber-950">Simular volume de produção:</span>
          <span className="font-extrabold text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded">
            {volume} marmitas/mês → Custo Unitário: R$ {currentUnitCost.toFixed(2)}
          </span>
        </div>
        <input 
          type="range" 
          min="100" 
          max="800" 
          step="20"
          value={volume} 
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-full accent-amber-800 cursor-pointer h-2 bg-amber-200 rounded-lg"
        />
        <div className="flex justify-between text-[10px] text-stone-600 font-mono">
          <span>100 unid. (R$ 26,50)</span>
          <span className="font-bold text-amber-900 font-sans">300 unid. (R$ 15,17 - Dona Socorro)</span>
          <span>800 unid. (R$ 11,63)</span>
        </div>
      </div>
    </div>
  );
}
