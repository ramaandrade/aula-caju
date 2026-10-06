import React, { useState } from 'react';
import { Calculator, ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function MarkupCalculator() {
  const [cost, setCost] = useState(12.00);
  const [cardFee, setCardFee] = useState(4.5);
  const [taxRate, setTaxRate] = useState(3.5);
  const [targetMargin, setTargetMargin] = useState(25.0);
  const [discountOffered, setDiscountOffered] = useState(10.0);

  const totalDeductions = cardFee + taxRate + targetMargin;
  const divisor = (100 - totalDeductions) / 100;
  const price = divisor > 0 ? cost / divisor : 0;
  const unitProfit = price * (targetMargin / 100);

  // Efeito do desconto
  const discountedPrice = price * (1 - discountOffered / 100);
  const discountAmount = price - discountedPrice;
  const newProfit = unitProfit - discountAmount;
  const profitDropPercent = unitProfit > 0 ? ((unitProfit - newProfit) / unitProfit) * 100 : 0;

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-amber-200 w-full max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-3 text-amber-950 font-bold border-b border-amber-100 pb-2">
        <Calculator className="text-amber-600" size={20} />
        <span className="text-sm">Calculadora de Markup Divisor (Pilar U)</span>
      </div>

      <div className="space-y-3 text-xs">
        <div>
          <label className="text-stone-700 font-semibold block mb-1">Custo Total Unitário (Insumos + Fixo rateado):</label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-stone-500 font-mono">R$</span>
            <input 
              type="number" 
              step="0.5" 
              value={cost} 
              onChange={(e) => setCost(Math.max(0.1, Number(e.target.value)))}
              className="w-full pl-9 pr-3 py-1.5 border border-stone-300 rounded-lg font-mono text-sm font-bold text-stone-900"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="text-stone-600 font-semibold block mb-1">Taxa Cartão (%):</label>
            <input 
              type="number" step="0.5" value={cardFee}
              onChange={(e) => setCardFee(Number(e.target.value))}
              className="w-full px-2 py-1.5 border border-stone-300 rounded-lg font-mono text-xs"
            />
          </div>
          <div>
            <label className="text-stone-600 font-semibold block mb-1">Imposto/DAS (%):</label>
            <input 
              type="number" step="0.5" value={taxRate}
              onChange={(e) => setTaxRate(Number(e.target.value))}
              className="w-full px-2 py-1.5 border border-stone-300 rounded-lg font-mono text-xs"
            />
          </div>
          <div>
            <label className="text-stone-600 font-semibold block mb-1">Margem Lucro (%):</label>
            <input 
              type="number" step="1" value={targetMargin}
              onChange={(e) => setTargetMargin(Number(e.target.value))}
              className="w-full px-2 py-1.5 border border-stone-300 rounded-lg font-mono text-xs font-bold text-emerald-800"
            />
          </div>
        </div>

        {/* RESULTADO PREÇO RECOMENDADO */}
        <div className="bg-amber-50 rounded-xl p-3 border border-amber-300">
          <div className="flex justify-between items-baseline mb-1">
            <span className="text-stone-700 font-semibold text-xs">Preço de Venda Calculado:</span>
            <span className="text-lg font-black text-red-800 font-mono">R$ {price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-[11px] text-stone-600">
            <span>Fator Divisor: <strong>{divisor.toFixed(4)}</strong></span>
            <span>Lucro Líquido por unidade: <strong className="text-emerald-700">R$ {unitProfit.toFixed(2)}</strong></span>
          </div>
        </div>

        {/* SIMULADOR DE DESCONTO */}
        <div className="border border-red-200 bg-red-50/60 rounded-xl p-3">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1 text-red-900 font-bold text-xs">
              <AlertTriangle size={15} className="text-red-600" />
              <span>Simular Desconto no Balcão:</span>
            </div>
            <span className="font-mono font-bold text-red-800">{discountOffered}% de desconto</span>
          </div>
          <input 
            type="range" min="0" max="30" step="1" value={discountOffered}
            onChange={(e) => setDiscountOffered(Number(e.target.value))}
            className="w-full accent-red-600 mb-2"
          />
          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between">
              <span className="text-stone-600">Preço com desconto:</span>
              <span className="font-mono font-bold text-stone-900">R$ {discountedPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-600">Novo lucro unitário:</span>
              <span className={`font-mono font-bold ${newProfit <= 0 ? 'text-red-600' : 'text-stone-800'}`}>
                R$ {newProfit.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-red-700 font-semibold pt-1 border-t border-red-200">
              <span>Queda no seu lucro:</span>
              <span className="font-bold">−{profitDropPercent.toFixed(1)}%!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
