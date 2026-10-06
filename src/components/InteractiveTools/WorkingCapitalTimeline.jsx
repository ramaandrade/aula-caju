import React, { useState } from 'react';
import { Clock, ShieldAlert, TrendingDown } from 'lucide-react';

export default function WorkingCapitalTimeline() {
  const [pme, setPme] = useState(25);
  const [pmr, setPmr] = useState(30);
  const [pmp, setPmp] = useState(15);
  const [dailyExpenses, setDailyExpenses] = useState(120);

  const co = pme + pmr;
  const cf = co - pmp;
  const ncg = cf > 0 ? cf * dailyExpenses : 0;

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-amber-200 w-full max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-3 text-amber-950 font-bold border-b border-amber-100 pb-2">
        <Clock className="text-amber-600" size={20} />
        <span className="text-sm">Termômetro do Capital de Giro (Pilar U)</span>
      </div>

      <div className="space-y-3 text-xs">
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="text-stone-700 font-semibold block mb-1">Estoque (PME):</label>
            <input 
              type="number" value={pme} onChange={(e) => setPme(Number(e.target.value))}
              className="w-full px-2 py-1.5 border border-stone-300 rounded-lg font-mono text-xs text-center"
            />
            <span className="text-[10px] text-stone-500 block text-center mt-0.5">dias parado</span>
          </div>
          <div>
            <label className="text-stone-700 font-semibold block mb-1">Receber (PMR):</label>
            <input 
              type="number" value={pmr} onChange={(e) => setPmr(Number(e.target.value))}
              className="w-full px-2 py-1.5 border border-stone-300 rounded-lg font-mono text-xs text-center"
            />
            <span className="text-[10px] text-stone-500 block text-center mt-0.5">prazo cliente</span>
          </div>
          <div>
            <label className="text-stone-700 font-semibold block mb-1">Pagar (PMP):</label>
            <input 
              type="number" value={pmp} onChange={(e) => setPmp(Number(e.target.value))}
              className="w-full px-2 py-1.5 border border-stone-300 rounded-lg font-mono text-xs text-center"
            />
            <span className="text-[10px] text-stone-500 block text-center mt-0.5">prazo fornec.</span>
          </div>
        </div>

        <div>
          <label className="text-stone-700 font-semibold block mb-1">Desembolso Operacional Diário (R$/dia):</label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-stone-500 font-mono">R$</span>
            <input 
              type="number" value={dailyExpenses} onChange={(e) => setDailyExpenses(Number(e.target.value))}
              className="w-full pl-9 pr-3 py-1.5 border border-stone-300 rounded-lg font-mono text-xs font-bold"
            />
          </div>
        </div>

        {/* INDICADOR TERMÔMETRO */}
        <div className={`rounded-xl p-3 border ${
          cf > 30 ? 'bg-red-50 border-red-300 text-red-950' :
          cf > 0 ? 'bg-amber-50 border-amber-300 text-amber-950' :
          'bg-emerald-50 border-emerald-300 text-emerald-950'
        }`}>
          <div className="flex justify-between items-center mb-1">
            <span className="font-bold text-xs">Ciclo Financeiro:</span>
            <span className="text-base font-black font-mono">
              {cf} {cf === 1 ? 'dia' : 'dias'}
            </span>
          </div>
          <div className="flex justify-between items-center text-xs pt-1 border-t border-current/20">
            <span>Necessidade de Caixa (NCG):</span>
            <span className="text-base font-black font-mono">
              {cf > 0 ? `R$ ${ncg.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` : 'R$ 0,00 (Caixa Livre)'}
            </span>
          </div>
        </div>

        <p className="text-[11px] text-stone-600 leading-snug italic">
          💡 Para derrubar a necessidade de capital de giro: exija pagamento no Pix (reduz PMR) e negocie mais dias para pagar o fornecedor (aumenta PMP).
        </p>
      </div>
    </div>
  );
}
