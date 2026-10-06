import React, { useState } from 'react';

const MONTHS_DATA = [
  { m: 'Jan', val: 9.0, action: null },
  { m: 'Fev', val: 14.0, action: 'guardar', isPeak: true, note: 'Romaria das Candeias (+R$ 5 mil)' },
  { m: 'Mar', val: 9.0, action: null },
  { m: 'Abr', val: 8.0, action: 'usar reserva', isDip: true, note: 'Pós-quaresma (-R$ 1 mil)' },
  { m: 'Mai', val: 8.0, action: 'usar reserva', isDip: true, note: 'Mês fraco (-R$ 1 mil)' },
  { m: 'Jun', val: 8.0, action: 'usar reserva', isDip: true, note: 'Estiagem religiosa (-R$ 1 mil)' },
  { m: 'Jul', val: 12.0, action: 'guardar', isPeak: true, note: 'Morte de Padre Cícero (+R$ 3 mil)' },
  { m: 'Ago', val: 8.0, action: 'usar reserva', isDip: true, note: 'Mês de transição (-R$ 1 mil)' },
  { m: 'Set', val: 15.0, action: 'guardar', isPeak: true, note: 'Romaria das Dores (+R$ 6 mil)' },
  { m: 'Out', val: 9.0, action: null },
  { m: 'Nov', val: 15.0, action: 'guardar', isPeak: true, note: 'Romaria de Finados (+R$ 6 mil)' },
  { m: 'Dez', val: 10.0, action: null, note: 'Festas de fim de ano (+R$ 1 mil)' }
];

export default function Fig7SeasonalPlanning() {
  const [selectedMonth, setSelectedMonth] = useState(MONTHS_DATA[8]); // Setembro default

  // Dimensões SVG
  const svgWidth = 460;
  const svgHeight = 220;
  const chartLeft = 40;
  const chartBottom = 180;
  const chartHeight = 150;
  const maxVal = 18; // 18 mil

  const getY = (val) => chartBottom - (val / maxVal) * chartHeight;
  const fixedExpenseY = getY(9.0);

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center p-2 select-none">
      <div className="text-center mb-1">
        <h4 className="text-sm font-bold text-amber-950 uppercase tracking-wider">
          Figura 7 — Planejamento com Sazonalidade
        </h4>
        <p className="text-xs text-stone-600">
          Barraca de romaria em Juazeiro do Norte: guardar no pico para cobrir o vale
        </p>
      </div>

      <div className="w-full aspect-2/1 max-h-[260px] relative">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full">
          {/* Linhas de grade e eixo Y */}
          <line x1={chartLeft} y1="30" x2={chartLeft} y2={chartBottom} stroke="#78350f" strokeWidth="1.5" />
          <line x1={chartLeft} y1={chartBottom} x2={svgWidth - 15} y2={chartBottom} stroke="#78350f" strokeWidth="1.5" />

          {/* Rótulos do eixo Y */}
          {[0, 5, 10, 15, 17.5].map((tick) => {
            const y = getY(tick);
            return (
              <g key={`tick-${tick}`}>
                <text x={chartLeft - 6} y={y + 3} textAnchor="end" fontSize="9" fill="#78350f" fontWeight="600">
                  {tick === 0 ? '0' : `${tick}`}
                </text>
                <line x1={chartLeft - 3} y1={y} x2={chartLeft} y2={y} stroke="#78350f" />
              </g>
            );
          })}
          <text x="12" y="24" fontSize="10" fontWeight="bold" fill="#78350f" transform="rotate(-90 15,30)">
            R$ mil
          </text>

          {/* Barras dos meses */}
          {MONTHS_DATA.map((item, idx) => {
            const barWidth = 22;
            const barX = chartLeft + 12 + idx * 32;
            const barY = getY(item.val);
            const barHeight = chartBottom - barY;
            const isSelected = selectedMonth.m === item.m;
            const fillColor = item.isPeak ? '#b91c1c' : '#8d5b2c';

            return (
              <g 
                key={item.m} 
                className="cursor-pointer transition-opacity"
                onClick={() => setSelectedMonth(item)}
              >
                {/* Barra */}
                <rect 
                  x={barX} 
                  y={barY} 
                  width={barWidth} 
                  height={barHeight} 
                  fill={fillColor}
                  rx="3"
                  stroke={isSelected ? '#fef08a' : 'none'}
                  strokeWidth={isSelected ? '2.5' : '0'}
                  opacity={isSelected ? 1 : 0.9}
                />

                {/* Texto 'guardar' ou 'usar reserva' */}
                {item.action === 'guardar' && (
                  <text x={barX + barWidth / 2} y={barY - 4} textAnchor="middle" fontSize="7.5" fill="#b91c1c" fontWeight="bold">
                    guardar
                  </text>
                )}
                {item.action === 'usar reserva' && (
                  <text x={barX + barWidth / 2} y={barY - 4} textAnchor="middle" fontSize="6.5" fill="#15803d" fontWeight="bold">
                    reserva
                  </text>
                )}

                {/* Rótulo do Mês no eixo X */}
                <text 
                  x={barX + barWidth / 2} 
                  y={chartBottom + 14} 
                  textAnchor="middle" 
                  fontSize="9.5" 
                  fill={isSelected ? '#b91c1c' : '#44403c'} 
                  fontWeight={isSelected ? '800' : '600'}
                >
                  {item.m}
                </text>
              </g>
            );
          })}

          {/* LINHA VERDE DE DESPESAS FIXAS MENSAIS (R$ 9 mil) */}
          <line 
            x1={chartLeft + 5} 
            y1={fixedExpenseY} 
            x2={svgWidth - 20} 
            y2={fixedExpenseY} 
            stroke="#166534" 
            strokeWidth="3.5" 
            strokeLinecap="round"
          />

          {/* Legenda de Despesas */}
          <g transform={`translate(${svgWidth - 160}, 20)`}>
            <line x1="0" y1="5" x2="24" y2="5" stroke="#166534" strokeWidth="3.5" strokeLinecap="round" />
            <text x="30" y="8" fontSize="9" fill="#166534" fontWeight="bold">
              Despesas mensais (R$ 9 mil)
            </text>
          </g>
        </svg>
      </div>

      {/* Info interativa do mês selecionado */}
      <div className="w-full mt-1 bg-amber-50/90 border border-amber-300 rounded-xl px-3 py-1.5 flex items-center justify-between text-xs">
        <div>
          <span className="font-extrabold text-amber-950">{selectedMonth.m}: </span>
          <span className="text-stone-700 font-medium">Receita de R$ {selectedMonth.val.toFixed(1)} mil · </span>
          <span className="text-stone-600 text-[11px]">{selectedMonth.note || 'Despesas cobertas exatamente'}</span>
        </div>
        <div className={`px-2 py-0.5 rounded text-[10px] font-bold ${
          selectedMonth.val > 9 
            ? 'bg-red-100 text-red-800' 
            : selectedMonth.val < 9 
            ? 'bg-emerald-100 text-emerald-800' 
            : 'bg-stone-200 text-stone-800'
        }`}>
          {selectedMonth.val > 9 ? `+R$ ${(selectedMonth.val - 9).toFixed(1)}k de sobra` : selectedMonth.val < 9 ? `-R$ ${(9 - selectedMonth.val).toFixed(1)}k de déficit` : 'Equilíbrio'}
        </div>
      </div>
    </div>
  );
}
