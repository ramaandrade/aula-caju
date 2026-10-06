import React, { useState } from 'react';

export default function Fig11WorkingCapitalCycles() {
  const [pme, setPme] = useState(30); // Prazo Médio de Estoque
  const [pmr, setPmr] = useState(45); // Prazo Médio de Recebimento
  const [pmp, setPmp] = useState(25); // Prazo Médio de Pagamento

  const co = pme + pmr; // Ciclo Operacional
  const cf = co - pmp;  // Ciclo Financeiro

  // Escala SVG
  const maxDays = 100;
  const svgWidth = 460;
  const svgHeight = 220;
  const leftX = 35;
  const rightX = 425;
  const scale = (rightX - leftX) / maxDays;

  const pmeWidth = pme * scale;
  const pmrWidth = pmr * scale;
  const pmpWidth = pmp * scale;
  const cfWidth = Math.max(0, cf * scale);

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center p-2 select-none">
      <div className="text-center mb-1">
        <h4 className="text-sm font-bold text-amber-950 uppercase tracking-wider">
          Figura 11 — Ciclo Operacional e Ciclo Financeiro
        </h4>
        <p className="text-xs text-stone-600">
          CO = {pme} + {pmr} = {co} dias · CF = {co} − {pmp} = {cf} dias
        </p>
      </div>

      <div className="w-full aspect-2/1 max-h-[250px] relative">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full">
          {/* Seta do Ciclo Operacional (Topo) */}
          <g>
            <line 
              x1={leftX} 
              y1="25" 
              x2={leftX + (pme + pmr) * scale} 
              y2="25" 
              stroke="#8d5b2c" 
              strokeWidth="2" 
            />
            {/* Setas nas pontas */}
            <path d={`M ${leftX + 6} 21 L ${leftX} 25 L ${leftX + 6} 29`} fill="none" stroke="#8d5b2c" strokeWidth="2" />
            <path d={`M ${leftX + (pme + pmr) * scale - 6} 21 L ${leftX + (pme + pmr) * scale} 25 L ${leftX + (pme + pmr) * scale - 6} 29`} fill="none" stroke="#8d5b2c" strokeWidth="2" />
            <text 
              x={leftX + ((pme + pmr) * scale) / 2} 
              y="18" 
              textAnchor="middle" 
              fontSize="10" 
              fill="#78350f" 
              fontWeight="bold"
            >
              Ciclo Operacional = {co} dias
            </text>
          </g>

          {/* Linhas guias verticais tracejadas */}
          <line x1={leftX} y1="30" x2={leftX} y2="185" stroke="#a8a29e" strokeDasharray="3 3" />
          <line x1={leftX + pmeWidth} y1="30" x2={leftX + pmeWidth} y2="105" stroke="#a8a29e" strokeDasharray="3 3" />
          <line x1={leftX + pmpWidth} y1="70" x2={leftX + pmpWidth} y2="185" stroke="#a8a29e" strokeDasharray="3 3" />
          <line x1={leftX + (pme + pmr) * scale} y1="30" x2={leftX + (pme + pmr) * scale} y2="185" stroke="#a8a29e" strokeDasharray="3 3" />

          {/* Barra 1: PME (Amarelo / Dourado) */}
          <rect 
            x={leftX} 
            y="40" 
            width={pmeWidth} 
            height="32" 
            fill="#eab308" 
            rx="3" 
          />
          <text 
            x={leftX + pmeWidth / 2} 
            y="59" 
            textAnchor="middle" 
            fontSize="8.5" 
            fill="#713f12" 
            fontWeight="bold"
          >
            PME {pme}d (estoque)
          </text>

          {/* Barra 2: PMR (Vermelho) */}
          <rect 
            x={leftX + pmeWidth} 
            y="40" 
            width={pmrWidth} 
            height="32" 
            fill="#b91c1c" 
            rx="3" 
          />
          <text 
            x={leftX + pmeWidth + pmrWidth / 2} 
            y="59" 
            textAnchor="middle" 
            fontSize="8.5" 
            fill="#ffffff" 
            fontWeight="bold"
          >
            PMR {pmr}d (receber)
          </text>

          {/* Barra 3: PMP (Verde Folha) */}
          <rect 
            x={leftX} 
            y="82" 
            width={pmpWidth} 
            height="32" 
            fill="#15803d" 
            rx="3" 
          />
          <text 
            x={leftX + pmpWidth / 2} 
            y="101" 
            textAnchor="middle" 
            fontSize="8.5" 
            fill="#ffffff" 
            fontWeight="bold"
          >
            PMP {pmp}d (pagar)
          </text>

          {/* Seta Dupla do Ciclo Financeiro (Meio/Fim) */}
          {cf > 0 ? (
            <g>
              <line 
                x1={leftX + pmpWidth} 
                y1="140" 
                x2={leftX + (pme + pmr) * scale} 
                y2="140" 
                stroke="#b91c1c" 
                strokeWidth="3.5" 
              />
              <path d={`M ${leftX + pmpWidth + 6} 135 L ${leftX + pmpWidth} 140 L ${leftX + pmpWidth + 6} 145`} fill="none" stroke="#b91c1c" strokeWidth="3" />
              <path d={`M ${leftX + (pme + pmr) * scale - 6} 135 L ${leftX + (pme + pmr) * scale} 140 L ${leftX + (pme + pmr) * scale - 6} 145`} fill="none" stroke="#b91c1c" strokeWidth="3" />
              <text 
                x={leftX + pmpWidth + cfWidth / 2} 
                y="160" 
                textAnchor="middle" 
                fontSize="10" 
                fill="#991b1b" 
                fontWeight="800"
              >
                Ciclo Financeiro = {cf} dias → precisa de capital de giro!
              </text>
            </g>
          ) : (
            <text 
              x={leftX + 120} 
              y="155" 
              fontSize="10" 
              fill="#15803d" 
              fontWeight="800"
            >
              Ciclo Financeiro Negativo ({cf} dias) → Caixa Livre!
            </text>
          )}

          {/* Legendas de Marco temporal na base */}
          <text x={leftX} y="195" textAnchor="middle" fontSize="8" fill="#44403c">compra</text>
          <text x={leftX + pmpWidth} y="195" textAnchor="middle" fontSize="8" fill="#15803d" fontWeight="bold">paga fornecedor</text>
          <text x={leftX + (pme + pmr) * scale} y="195" textAnchor="middle" fontSize="8" fill="#b91c1c" fontWeight="bold">recebe do cliente</text>
        </svg>
      </div>

      {/* Controles para o aluno brincar com prazos */}
      <div className="w-full mt-1 bg-amber-50 border border-amber-300 rounded-xl p-2 grid grid-cols-3 gap-2 text-xs">
        <div>
          <label className="text-[10px] font-bold text-amber-900 block">PME Estoque: {pme}d</label>
          <input 
            type="range" min="5" max="50" value={pme} 
            onChange={(e) => setPme(Number(e.target.value))} 
            className="w-full accent-amber-600"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold text-red-900 block">PMR Receber: {pmr}d</label>
          <input 
            type="range" min="0" max="60" value={pmr} 
            onChange={(e) => setPmr(Number(e.target.value))} 
            className="w-full accent-red-600"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold text-emerald-900 block">PMP Fornecedor: {pmp}d</label>
          <input 
            type="range" min="5" max="60" value={pmp} 
            onChange={(e) => setPmp(Number(e.target.value))} 
            className="w-full accent-emerald-600"
          />
        </div>
      </div>
    </div>
  );
}
