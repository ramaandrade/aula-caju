import React, { useState } from 'react';
import { Target, TrendingUp, AlertCircle } from 'lucide-react';

export default function BreakEvenInteractive() {
  const [sellingPrice, setSellingPrice] = useState(16.0);
  const [varCostUnit, setVarCostUnit] = useState(9.5);
  const [fixedExpenses, setFixedExpenses] = useState(2600.0);
  const [avgDailySales, setAvgDailySales] = useState(25);

  const mcUnit = sellingPrice - varCostUnit;
  const mcPercent = sellingPrice > 0 ? (mcUnit / sellingPrice) * 100 : 0;
  const breakEvenUnits = mcUnit > 0 ? Math.ceil(fixedExpenses / mcUnit) : 0;
  const breakEvenRevenue = breakEvenUnits * sellingPrice;
  const daysToBreakEven = avgDailySales > 0 ? Math.ceil(breakEvenUnits / avgDailySales) : 0;

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-amber-200 w-full max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-3 text-amber-950 font-bold border-b border-amber-100 pb-2">
        <Target className="text-amber-600" size={20} />
        <span className="text-sm">Calculadora de Ponto de Equilíbrio (Pilar U)</span>
      </div>

      <div className="space-y-3 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-stone-700 font-semibold block mb-1">Preço de Venda (R$):</label>
            <input 
              type="number" step="0.5" value={sellingPrice} onChange={(e) => setSellingPrice(Number(e.target.value))}
              className="w-full px-2 py-1.5 border border-stone-300 rounded-lg font-mono text-xs font-bold"
            />
          </div>
          <div>
            <label className="text-stone-700 font-semibold block mb-1">Custo Variável Unit. (R$):</label>
            <input 
              type="number" step="0.5" value={varCostUnit} onChange={(e) => setVarCostUnit(Number(e.target.value))}
              className="w-full px-2 py-1.5 border border-stone-300 rounded-lg font-mono text-xs font-bold"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-stone-700 font-semibold block mb-1">Despesas Fixas Totais (R$):</label>
            <input 
              type="number" step="100" value={fixedExpenses} onChange={(e) => setFixedExpenses(Number(e.target.value))}
              className="w-full px-2 py-1.5 border border-stone-300 rounded-lg font-mono text-xs font-bold"
            />
          </div>
          <div>
            <label className="text-stone-700 font-semibold block mb-1">Vendas Médias por Dia:</label>
            <input 
              type="number" step="1" value={avgDailySales} onChange={(e) => setAvgDailySales(Number(e.target.value))}
              className="w-full px-2 py-1.5 border border-stone-300 rounded-lg font-mono text-xs text-center font-bold"
            />
          </div>
        </div>

        {/* RESULTADO BREAK-EVEN */}
        <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-300 text-emerald-950">
          <div className="flex justify-between items-baseline mb-1">
            <span className="font-bold text-xs">Ponto de Equilíbrio (PE):</span>
            <span className="text-base font-black font-mono text-emerald-900">
              {breakEvenUnits} unidades
            </span>
          </div>
          <div className="flex justify-between text-[11px] text-emerald-800">
            <span>Faturamento Mínimo:</span>
            <span className="font-mono font-bold">R$ {breakEvenRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
          </div>
          <div className="flex justify-between text-[11px] text-emerald-800 mt-1 pt-1 border-t border-emerald-200">
            <span>Margem de Contribuição:</span>
            <span className="font-mono font-bold">R$ {mcUnit.toFixed(2)} ({mcPercent.toFixed(1)}%)</span>
          </div>
        </div>

        {/* DIA DA VIRADA */}
        <div className="bg-amber-50 rounded-xl p-3 border border-amber-300 text-amber-950 flex items-center justify-between">
          <div>
            <div className="font-bold text-xs">O "Dia da Virada":</div>
            <div className="text-[11px] text-stone-600">Dias de trabalho para pagar as contas</div>
          </div>
          <div className="text-right">
            <span className="text-lg font-black text-amber-900 font-mono">
              Dia {daysToBreakEven}
            </span>
            <span className="text-[10px] text-stone-500 block">do mês</span>
          </div>
        </div>
      </div>
    </div>
  );
}
