import React, { useState } from 'react';

export default function Fig10MarkupComposition() {
  const [cost, setCost] = useState(11.50);
  const [taxRate, setTaxRate] = useState(5); // 5% taxa
  const [marginRate, setMarginRate] = useState(20); // 20% margem desejada

  const divisor = (100 - taxRate - marginRate) / 100;
  const price = divisor > 0 ? cost / divisor : 0;

  const taxAmount = price * (taxRate / 100);
  const marginAmount = price * (marginRate / 100);

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center p-2 select-none">
      <div className="text-center mb-1">
        <h4 className="text-sm font-bold text-amber-950 uppercase tracking-wider">
          Figura 10 — Composição do Preço pelo Markup Divisor
        </h4>
        <p className="text-xs text-stone-600">
          Preço = Custo ÷ (1 − taxas − margem) = {cost.toFixed(2)} ÷ {divisor.toFixed(2)} = R$ {price.toFixed(2)}
        </p>
      </div>

      <div className="w-full max-w-sm flex items-center justify-center my-2 gap-4">
        {/* Barra Empilhada Vertical */}
        <div className="w-32 h-56 flex flex-col-reverse rounded-xl overflow-hidden border-2 border-stone-800 shadow-md">
          {/* Camada 1: Custo (Marrom) */}
          <div 
            style={{ height: `${(cost / price) * 100}%` }}
            className="bg-amber-900 flex items-center justify-center text-amber-100 font-bold text-xs p-1 text-center transition-all duration-300"
          >
            <div className="leading-tight">
              <div>Custo</div>
              <div className="text-[10px] font-mono font-normal">R$ {cost.toFixed(2)}</div>
            </div>
          </div>

          {/* Camada 2: Taxa de Cartão / Impostos (Amarelo) */}
          <div 
            style={{ height: `${(taxAmount / price) * 100}%` }}
            className="bg-amber-500 flex items-center justify-center text-amber-950 font-bold text-[10px] p-1 text-center transition-all duration-300"
          >
            <div className="leading-tight">
              <div>Taxas ({taxRate}%)</div>
            </div>
          </div>

          {/* Camada 3: Margem Desejada (Verde) */}
          <div 
            style={{ height: `${(marginAmount / price) * 100}%` }}
            className="bg-emerald-700 flex items-center justify-center text-emerald-100 font-bold text-xs p-1 text-center transition-all duration-300"
          >
            <div className="leading-tight">
              <div>Margem ({marginRate}%)</div>
              <div className="text-[10px] font-mono font-normal">R$ {marginAmount.toFixed(2)}</div>
            </div>
          </div>
        </div>

        {/* Rótulos explicativos laterais com colchetes visuais */}
        <div className="flex-1 space-y-2 text-xs">
          <div className="border-l-4 border-emerald-700 pl-2">
            <div className="font-extrabold text-emerald-900">Margem Desejada ({marginRate}%)</div>
            <div className="text-stone-700 font-mono text-[11px]">R$ {marginAmount.toFixed(2)}</div>
            <div className="text-[10px] text-stone-500">Lucro puro retido pelo negócio</div>
          </div>

          <div className="border-l-4 border-amber-500 pl-2">
            <div className="font-extrabold text-amber-900">Taxas e Tributos ({taxRate}%)</div>
            <div className="text-stone-700 font-mono text-[11px]">R$ {taxAmount.toFixed(2)}</div>
            <div className="text-[10px] text-stone-500">Maquininha de cartão e impostos</div>
          </div>

          <div className="border-l-4 border-amber-900 pl-2">
            <div className="font-extrabold text-amber-950">Custo Total Unitário</div>
            <div className="text-stone-700 font-mono text-[11px]">R$ {cost.toFixed(2)}</div>
            <div className="text-[10px] text-stone-500">Insumos diretos + rateio de fixos</div>
          </div>

          <div className="pt-2 border-t-2 border-stone-300">
            <div className="text-sm font-extrabold text-red-800">
              Preço Final: R$ {price.toFixed(2)}
            </div>
            <div className="text-[10px] text-stone-600 font-mono">
              Divisor: {divisor.toFixed(2)} (100% − {taxRate + marginRate}%)
            </div>
          </div>
        </div>
      </div>

      {/* Controles para testar outros valores */}
      <div className="w-full mt-1 bg-amber-50 border border-amber-300 rounded-xl p-2 grid grid-cols-3 gap-2 text-xs">
        <div>
          <label className="text-[10px] font-bold text-stone-700 block">Custo (R$)</label>
          <input 
            type="number" 
            step="0.5" 
            value={cost} 
            onChange={(e) => setCost(Math.max(1, Number(e.target.value)))}
            className="w-full bg-white border border-stone-300 rounded px-1.5 py-0.5 text-xs font-mono"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold text-stone-700 block">Taxas (%)</label>
          <input 
            type="number" 
            step="1" 
            value={taxRate} 
            onChange={(e) => setTaxRate(Math.min(50, Math.max(0, Number(e.target.value))))}
            className="w-full bg-white border border-stone-300 rounded px-1.5 py-0.5 text-xs font-mono"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold text-stone-700 block">Margem (%)</label>
          <input 
            type="number" 
            step="1" 
            value={marginRate} 
            onChange={(e) => setMarginRate(Math.min(50, Math.max(1, Number(e.target.value))))}
            className="w-full bg-white border border-stone-300 rounded px-1.5 py-0.5 text-xs font-mono"
          />
        </div>
      </div>
    </div>
  );
}
