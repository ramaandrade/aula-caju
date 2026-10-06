import React, { useState } from 'react';

const STEPS = [
  { id: 'si', label: 'Saldo inicial', value: 500, type: 'start', start: 0, end: 500, color: '#8d5b2c', desc: 'Reserva que abriu a semana na gaveta/conta' },
  { id: 'vendas', label: 'Vendas à vista', value: 1680, type: 'up', start: 500, end: 2180, color: '#166534', desc: 'Recebimentos no balcão em dinheiro e Pix' },
  { id: 'fiado', label: 'Recebido de fiado', value: 300, type: 'up', start: 2180, end: 2480, color: '#166534', desc: 'Clientes que quitaram parte da caderneta' },
  { id: 'insumos', label: 'Insumos', value: -900, type: 'down', start: 2480, end: 1580, color: '#b91c1c', desc: 'Compra de carnes, legumes e temperos no Ceasa' },
  { id: 'gas', label: 'Gás e energia', value: -240, type: 'down', start: 1580, end: 1340, color: '#b91c1c', desc: 'Troca do botijão de gás e cota de luz' },
  { id: 'prolabore', label: 'Pró-labore', value: -600, type: 'down', start: 1340, end: 740, color: '#b91c1c', desc: 'Retirada semanal fixa de Dona Socorro para sua casa' },
  { id: 'sf', label: 'Saldo final', value: 740, type: 'total', start: 0, end: 740, color: '#eab308', desc: 'Dinheiro preservado para abrir a próxima semana' }
];

export default function Fig8CashFlowWaterfall() {
  const [selectedStep, setSelectedStep] = useState(STEPS[6]); // Saldo final default

  const svgWidth = 460;
  const svgHeight = 220;
  const chartLeft = 45;
  const chartBottom = 175;
  const chartHeight = 145;
  const maxVal = 2600;

  const getY = (val) => chartBottom - (val / maxVal) * chartHeight;

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center p-2 select-none">
      <div className="text-center mb-1">
        <h4 className="text-sm font-bold text-amber-950 uppercase tracking-wider">
          Figura 8 — Fluxo de Caixa Semanal em Cascata
        </h4>
        <p className="text-xs text-stone-600">
          Saldo final = Saldo inicial + Entradas − Saídas
        </p>
      </div>

      <div className="w-full aspect-2/1 max-h-[260px] relative">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full">
          {/* Eixos */}
          <line x1={chartLeft} y1="25" x2={chartLeft} y2={chartBottom} stroke="#78350f" strokeWidth="1.5" />
          <line x1={chartLeft} y1={chartBottom} x2={svgWidth - 10} y2={chartBottom} stroke="#78350f" strokeWidth="1.5" />

          {/* Eixo Y Ticks */}
          {[0, 500, 1000, 1500, 2000, 2500].map((val) => {
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
          <text x="12" y="24" fontSize="10" fontWeight="bold" fill="#78350f" transform="rotate(-90 15,30)">
            R$
          </text>

          {/* Barras Waterfall */}
          {STEPS.map((s, idx) => {
            const barWidth = 36;
            const barX = chartLeft + 14 + idx * 56;
            const topVal = Math.max(s.start, s.end);
            const botVal = Math.min(s.start, s.end);
            const barY = getY(topVal);
            const barHeight = Math.max(getY(botVal) - barY, 4);
            const isSelected = selectedStep.id === s.id;

            return (
              <g 
                key={s.id} 
                className="cursor-pointer transition-transform"
                onClick={() => setSelectedStep(s)}
              >
                {/* Linha guia de conexão pontilhada para o próximo */}
                {idx < STEPS.length - 1 && s.type !== 'total' && (
                  <line 
                    x1={barX + barWidth} 
                    y1={getY(s.end)} 
                    x2={barX + barWidth + 20} 
                    y2={getY(s.end)} 
                    stroke="#a8a29e" 
                    strokeWidth="1" 
                    strokeDasharray="2 2"
                  />
                )}

                {/* Retângulo da barra */}
                <rect 
                  x={barX} 
                  y={barY} 
                  width={barWidth} 
                  height={barHeight} 
                  fill={s.color} 
                  rx="3"
                  stroke={isSelected ? '#1c1917' : 'none'}
                  strokeWidth={isSelected ? '2.5' : '0'}
                  opacity={isSelected ? 1 : 0.9}
                />

                {/* Rótulo de Valor acima da barra */}
                <text 
                  x={barX + barWidth / 2} 
                  y={barY - 4} 
                  textAnchor="middle" 
                  fontSize="8.5" 
                  fill={s.type === 'total' ? '#000000' : s.color} 
                  fontWeight="800"
                >
                  {s.value > 0 ? (s.type === 'start' ? '500' : (s.type === 'total' ? '740' : `+${s.value}`)) : `${s.value}`}
                </text>

                {/* Rótulo de texto abaixo da barra */}
                <text 
                  x={barX + barWidth / 2} 
                  y={chartBottom + 12} 
                  textAnchor="middle" 
                  fontSize="8" 
                  fill={isSelected ? '#000000' : '#57534e'} 
                  fontWeight={isSelected ? '800' : '600'}
                >
                  {s.label.split(' ')[0]}
                </text>
                {s.label.split(' ')[1] && (
                  <text 
                    x={barX + barWidth / 2} 
                    y={chartBottom + 21} 
                    textAnchor="middle" 
                    fontSize="7.5" 
                    fill={isSelected ? '#000000' : '#78716c'}
                    fontWeight={isSelected ? '800' : '500'}
                  >
                    {s.label.split(' ').slice(1).join(' ')}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Caixa interativa */}
      <div className="w-full mt-1 bg-amber-50 border border-amber-300 rounded-xl px-3 py-1.5 flex items-center justify-between text-xs">
        <div>
          <span className="font-extrabold text-amber-950">{selectedStep.label}: </span>
          <span className="font-mono font-bold text-stone-900">
            {selectedStep.value > 0 ? `+R$ ${selectedStep.value}` : `R$ ${selectedStep.value}`}
          </span>
          <span className="text-stone-600 ml-2 text-[11px] hidden sm:inline">({selectedStep.desc})</span>
        </div>
        <div className="text-[10px] bg-amber-200/80 text-amber-950 font-bold px-2 py-0.5 rounded">
          {selectedStep.type === 'up' ? 'Entrada (+)' : selectedStep.type === 'down' ? 'Saída (−)' : 'Posição'}
        </div>
      </div>
    </div>
  );
}
