import React, { useState } from 'react';

// R$ 1.500 a 2% a.m. em 12 meses
// Price: PMT = 1500 * 0.02 / (1 - (1.02)^-12) = 141.84
// SAC: Amortização constante = 1500 / 12 = 125.00
// Mês 1: Juros = 1500 * 0.02 = 30.00 -> Parcela = 155.00
// Mês 12: Juros = 125 * 0.02 = 2.50 -> Parcela = 127.50
const MONTHS_SCHEDULE = Array.from({ length: 12 }, (_, i) => {
  const month = i + 1;
  const pricePmt = 141.84;
  const sacAmort = 125.0;
  const balance = 1500 - i * sacAmort;
  const sacInterest = balance * 0.02;
  const sacPmt = sacAmort + sacInterest;
  return { month, pricePmt, sacPmt, sacInterest };
});

export default function Fig12PriceVsSac() {
  const [selectedMonth, setSelectedMonth] = useState(MONTHS_SCHEDULE[5]); // Mês 6 default (ponto de cruzamento)

  const svgWidth = 460;
  const svgHeight = 220;
  const chartLeft = 45;
  const chartBottom = 175;
  const chartHeight = 145;
  const minVal = 110;
  const maxVal = 165;

  const getX = (m) => chartLeft + ((m - 1) / 11) * (svgWidth - chartLeft - 25);
  const getY = (val) => chartBottom - ((val - minVal) / (maxVal - minVal)) * chartHeight;

  // Gerar linhas
  const pricePoints = MONTHS_SCHEDULE.map(d => `${getX(d.month)},${getY(d.pricePmt)}`).join(' L ');
  const sacPoints = MONTHS_SCHEDULE.map(d => `${getX(d.month)},${getY(d.sacPmt)}`).join(' L ');

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center p-2 select-none">
      <div className="text-center mb-1">
        <h4 className="text-sm font-bold text-amber-950 uppercase tracking-wider">
          Figura 12 — R$ 1.500 a 2% a.m. em 12 Meses: Price × SAC
        </h4>
        <p className="text-xs text-stone-600">
          Price: parcelas iguais · SAC: parcelas decrescentes (amortização constante)
        </p>
      </div>

      <div className="w-full aspect-2/1 max-h-[250px] relative">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full">
          {/* Eixos */}
          <line x1={chartLeft} y1="20" x2={chartLeft} y2={chartBottom} stroke="#78350f" strokeWidth="1.5" />
          <line x1={chartLeft} y1={chartBottom} x2={svgWidth - 10} y2={chartBottom} stroke="#78350f" strokeWidth="1.5" />

          {/* Ticks Eixo Y (R$) */}
          {[120, 130, 140, 150, 160].map((val) => {
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
            R$
          </text>

          {/* Ticks Eixo X (Parcela 1 a 12) */}
          {MONTHS_SCHEDULE.map((d) => {
            const x = getX(d.month);
            return (
              <g key={`x-${d.month}`}>
                <text x={x} y={chartBottom + 13} textAnchor="middle" fontSize="9" fill="#78350f" fontWeight="600">
                  {d.month}
                </text>
                <line x1={x} y1={chartBottom} x2={x} y2={chartBottom + 3} stroke="#78350f" />
              </g>
            );
          })}
          <text x={svgWidth / 2} y={chartBottom + 27} textAnchor="middle" fontSize="9.5" fill="#78350f" fontWeight="bold">
            Parcela
          </text>

          {/* Linha Vermelha: Price */}
          <path d={`M ${pricePoints}`} fill="none" stroke="#b91c1c" strokeWidth="3" strokeLinecap="round" />

          {/* Linha Verde: SAC */}
          <path d={`M ${sacPoints}`} fill="none" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />

          {/* Pontos nas Linhas */}
          {MONTHS_SCHEDULE.map((d) => {
            const x = getX(d.month);
            const yPrice = getY(d.pricePmt);
            const ySac = getY(d.sacPmt);
            const isSelected = selectedMonth.month === d.month;

            return (
              <g key={`points-${d.month}`} className="cursor-pointer" onClick={() => setSelectedMonth(d)}>
                {/* Ponto Price (círculo) */}
                <circle cx={x} cy={yPrice} r={isSelected ? "5" : "3.5"} fill="#b91c1c" />
                {/* Ponto SAC (quadrado) */}
                <rect x={x - (isSelected ? 5 : 3.5)} y={ySac - (isSelected ? 5 : 3.5)} width={isSelected ? 10 : 7} height={isSelected ? 10 : 7} fill="#15803d" />
              </g>
            );
          })}

          {/* Legenda Topo Direito */}
          <g transform={`translate(${svgWidth - 200}, 16)`}>
            <circle cx="8" cy="6" r="4" fill="#b91c1c" />
            <text x="18" y="9" fontSize="8.5" fill="#991b1b" fontWeight="bold">Price: R$ 141,84 (fixas)</text>
            
            <rect x="4" y="16" width="8" height="8" fill="#15803d" />
            <text x="18" y="23" fontSize="8.5" fill="#166534" fontWeight="bold">SAC: decrescentes</text>
          </g>
        </svg>
      </div>

      {/* Info do mês clicado */}
      <div className="w-full mt-1 bg-amber-50 border border-amber-300 rounded-xl px-3 py-1.5 flex items-center justify-between text-xs">
        <div>
          <span className="font-extrabold text-amber-950">Parcela {selectedMonth.month} de 12: </span>
          <span className="text-red-700 font-bold ml-1">Price: R$ {selectedMonth.pricePmt.toFixed(2)}</span>
          <span className="text-stone-400 mx-1.5">|</span>
          <span className="text-emerald-700 font-bold">SAC: R$ {selectedMonth.sacPmt.toFixed(2)}</span>
        </div>
        <div className="text-[10px] bg-stone-200 text-stone-800 font-bold px-2 py-0.5 rounded">
          {selectedMonth.month <= 6 ? 'Price mais barato no início' : 'SAC mais barato no final'}
        </div>
      </div>
    </div>
  );
}
