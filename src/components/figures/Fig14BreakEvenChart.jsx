import React, { useState } from 'react';

export default function Fig14BreakEvenChart() {
  const [qMarmitas, setQMarmitas] = useState(400); // 400 no ponto de equilíbrio

  const price = 16.0;
  const variableCostUnit = 9.5;
  const fixedCost = 2600.0;

  const revenue = price * qMarmitas;
  const totalCost = fixedCost + variableCostUnit * qMarmitas;
  const profit = revenue - totalCost;

  // Escala SVG
  const svgWidth = 460;
  const svgHeight = 230;
  const chartLeft = 50;
  const chartBottom = 185;
  const chartTop = 25;
  const chartHeight = chartBottom - chartTop;
  const chartWidth = svgWidth - chartLeft - 20;

  const maxQ = 700;
  const maxVal = 12000;

  const getX = (q) => chartLeft + (q / maxQ) * chartWidth;
  const getY = (val) => chartBottom - (val / maxVal) * chartHeight;

  // Pontos das retas
  // Receita: (0, 0) até (700, 16 * 700 = 11200)
  const revP0 = `${getX(0)},${getY(0)}`;
  const revP1 = `${getX(700)},${getY(16 * 700)}`;

  // Custo: (0, 2600) até (700, 2600 + 9.5 * 700 = 9250)
  const costP0 = `${getX(0)},${getY(fixedCost)}`;
  const costP1 = `${getX(700)},${getY(fixedCost + variableCostUnit * 700)}`;

  // Ponto de equilíbrio
  const peQ = 400;
  const peVal = 6400;
  const peX = getX(peQ);
  const peY = getY(peVal);

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center p-2 select-none">
      <div className="text-center mb-1">
        <h4 className="text-sm font-bold text-amber-950 uppercase tracking-wider">
          Figura 14 — Ponto de Equilíbrio da Marmitaria
        </h4>
        <p className="text-xs text-stone-600">
          PE = Despesas fixas ÷ (Preço − CVu) = 2.600 ÷ 6,50 = 400 marmitas (R$ 6.400)
        </p>
      </div>

      <div className="w-full aspect-2/1 max-h-[250px] relative">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full">
          {/* ÁREA DE PREJUÍZO (polígono entre 0 e PE) */}
          <polygon 
            points={`${getX(0)},${getY(0)} ${getX(0)},${getY(fixedCost)} ${peX},${peY}`} 
            fill="#fee2e2" 
            opacity="0.75" 
          />
          <text x={getX(140)} y={getY(3800)} fontSize="9" fill="#b91c1c" fontWeight="bold">
            prejuízo
          </text>

          {/* ÁREA DE LUCRO (polígono entre PE e 700) */}
          <polygon 
            points={`${peX},${peY} ${getX(700)},${getY(fixedCost + variableCostUnit * 700)} ${getX(700)},${getY(16 * 700)}`} 
            fill="#dcfce7" 
            opacity="0.75" 
          />
          <text x={getX(580)} y={getY(8200)} fontSize="9.5" fill="#15803d" fontWeight="bold">
            lucro
          </text>

          {/* Eixos */}
          <line x1={chartLeft} y1={chartTop} x2={chartLeft} y2={chartBottom} stroke="#78350f" strokeWidth="1.5" />
          <line x1={chartLeft} y1={chartBottom} x2={svgWidth - 10} y2={chartBottom} stroke="#78350f" strokeWidth="1.5" />

          {/* Ticks Eixo Y (R$) */}
          {[0, 2000, 4000, 6000, 8000, 10000].map((v) => {
            const y = getY(v);
            return (
              <g key={`y-${v}`}>
                <text x={chartLeft - 6} y={y + 3} textAnchor="end" fontSize="8.5" fill="#78350f" fontWeight="600">
                  {v}
                </text>
                <line x1={chartLeft - 3} y1={y} x2={chartLeft} y2={y} stroke="#78350f" />
              </g>
            );
          })}
          <text x="12" y="24" fontSize="9.5" fontWeight="bold" fill="#78350f" transform="rotate(-90 15,30)">
            R$
          </text>

          {/* Ticks Eixo X (Marmitas por mês) */}
          {[0, 100, 200, 300, 400, 500, 600, 700].map((q) => {
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

          {/* Linha vertical pontilhada no PE */}
          <line x1={peX} y1={chartTop} x2={peX} y2={chartBottom} stroke="#44403c" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* RETA VERMELHA: CUSTO TOTAL */}
          <line x1={getX(0)} y1={getY(fixedCost)} x2={getX(700)} y2={getY(fixedCost + variableCostUnit * 700)} stroke="#b91c1c" strokeWidth="3" strokeLinecap="round" />

          {/* RETA VERDE: RECEITA */}
          <line x1={getX(0)} y1={getY(0)} x2={getX(700)} y2={getY(16 * 700)} stroke="#15803d" strokeWidth="3.5" strokeLinecap="round" />

          {/* Ponto de Cruzamento do Break-Even */}
          <circle cx={peX} cy={peY} r="6" fill="#8d5b2c" stroke="#ffffff" strokeWidth="2" />

          {/* Seta e rótulo do PE */}
          <g transform={`translate(${peX + 8}, ${peY + 8})`}>
            <text x="0" y="10" fontSize="9" fill="#78350f" fontWeight="800">
              PE: 400 marmitas
            </text>
            <text x="0" y="21" fontSize="8.5" fill="#78350f" fontWeight="600">
              (R$ 6.400 em vendas)
            </text>
          </g>

          {/* Legenda das Retas no Topo Esquerdo */}
          <g transform={`translate(${chartLeft + 15}, 22)`}>
            <line x1="0" y1="4" x2="16" y2="4" stroke="#15803d" strokeWidth="3" />
            <text x="22" y="7" fontSize="8" fill="#166534" fontWeight="bold">Receita = 16 × Q</text>

            <line x1="0" y1="16" x2="16" y2="16" stroke="#b91c1c" strokeWidth="3" />
            <text x="22" y="19" fontSize="8" fill="#991b1b" fontWeight="bold">Custo total = 2.600 + 9,50 × Q</text>
          </g>
        </svg>
      </div>

      {/* Slider Interativo do Aluno */}
      <div className="w-full mt-1 bg-amber-50 border border-amber-300 rounded-xl p-2 flex flex-col gap-1">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-amber-950">Vendas do mês: {qMarmitas} marmitas</span>
          <span className={`px-2 py-0.5 rounded font-bold ${
            profit > 0 ? 'bg-emerald-100 text-emerald-800' :
            profit < 0 ? 'bg-red-100 text-red-800' : 'bg-amber-200 text-amber-900'
          }`}>
            {profit > 0 ? `Lucro: +R$ ${profit.toFixed(2)}` : profit < 0 ? `Prejuízo: −R$ ${Math.abs(profit).toFixed(2)}` : 'Empate (Break-Even!)'}
          </span>
        </div>
        <input 
          type="range" min="100" max="700" step="20" value={qMarmitas} 
          onChange={(e) => setQMarmitas(Number(e.target.value))} 
          className="w-full accent-amber-800"
        />
        <div className="flex justify-between text-[10px] text-stone-600 font-mono">
          <span>Receita: R$ {revenue.toFixed(2)}</span>
          <span className="font-sans font-bold text-stone-800">Custo Total: R$ {totalCost.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
