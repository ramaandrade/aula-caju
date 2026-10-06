import React, { useState } from 'react';
import { DollarSign, AlertTriangle, CheckCircle, Scale } from 'lucide-react';

export default function PriceVsSacComparator() {
  const [loanAmount, setLoanAmount] = useState(2000);
  const [monthlyRate, setMonthlyRate] = useState(2.2);
  const [termMonths, setTermMonths] = useState(12);
  const [monthlyProfit, setMonthlyProfit] = useState(1200);

  // Price
  const i = monthlyRate / 100;
  const pricePmt = i > 0 ? loanAmount * (i / (1 - Math.pow(1 + i, -termMonths))) : loanAmount / termMonths;
  const priceTotal = pricePmt * termMonths;
  const priceTotalInterest = priceTotal - loanAmount;

  // SAC
  const sacAmort = loanAmount / termMonths;
  const sacFirstPmt = sacAmort + (loanAmount * i);
  const sacLastPmt = sacAmort + (sacAmort * i);
  const sacTotalInterest = (loanAmount * i * (termMonths + 1)) / 2;
  const sacTotal = loanAmount + sacTotalInterest;

  // Alerta de comprometimento do lucro
  const maxSafePmt = monthlyProfit * 0.30;
  const priceCommitmentPercent = monthlyProfit > 0 ? (pricePmt / monthlyProfit) * 100 : 0;
  const isPriceRisky = pricePmt > maxSafePmt;

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-amber-200 w-full max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-3 text-amber-950 font-bold border-b border-amber-100 pb-2">
        <Scale className="text-amber-600" size={20} />
        <span className="text-sm">Comparador de Empréstimos & Alerta 30% (Pilar U)</span>
      </div>

      <div className="space-y-3 text-xs">
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="text-stone-700 font-semibold block mb-1">Valor (R$):</label>
            <input 
              type="number" step="500" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full px-2 py-1.5 border border-stone-300 rounded-lg font-mono text-xs font-bold"
            />
          </div>
          <div>
            <label className="text-stone-700 font-semibold block mb-1">Taxa (% a.m.):</label>
            <input 
              type="number" step="0.1" value={monthlyRate} onChange={(e) => setMonthlyRate(Number(e.target.value))}
              className="w-full px-2 py-1.5 border border-stone-300 rounded-lg font-mono text-xs font-bold"
            />
          </div>
          <div>
            <label className="text-stone-700 font-semibold block mb-1">Prazo (Meses):</label>
            <input 
              type="number" step="1" value={termMonths} onChange={(e) => setTermMonths(Number(e.target.value))}
              className="w-full px-2 py-1.5 border border-stone-300 rounded-lg font-mono text-xs font-bold"
            />
          </div>
        </div>

        <div>
          <label className="text-stone-700 font-semibold block mb-1">Seu Lucro Líquido Médio Mensal (R$):</label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-stone-500 font-mono">R$</span>
            <input 
              type="number" step="100" value={monthlyProfit} onChange={(e) => setMonthlyProfit(Number(e.target.value))}
              className="w-full pl-9 pr-3 py-1.5 border border-stone-300 rounded-lg font-mono text-xs font-bold text-emerald-900"
            />
          </div>
          <span className="text-[10px] text-stone-500 block mt-0.5">
            Limite prudente recomendado (30% do lucro): <strong>R$ {maxSafePmt.toFixed(2)}/mês</strong>
          </span>
        </div>

        {/* ALERTA DE COMPROMETIMENTO */}
        <div className={`rounded-xl p-3 border flex items-start gap-2 ${
          isPriceRisky ? 'bg-red-50 border-red-300 text-red-950' : 'bg-emerald-50 border-emerald-300 text-emerald-950'
        }`}>
          {isPriceRisky ? <AlertTriangle size={18} className="text-red-600 shrink-0 mt-0.5" /> : <CheckCircle size={18} className="text-emerald-600 shrink-0 mt-0.5" />}
          <div>
            <div className="font-bold text-xs">
              {isPriceRisky ? 'Alerta de Endividamento Crítico!' : 'Operação Dentro do Limite Prudente'}
            </div>
            <div className="text-[11px] leading-snug">
              A parcela consome <strong>{priceCommitmentPercent.toFixed(1)}%</strong> do seu lucro líquido mensal. 
              {isPriceRisky ? ' Ultrapassa o teto seguro de 30% e coloca o negócio em risco.' : ' Deixa folga para meses fracos.'}
            </div>
          </div>
        </div>

        {/* COMPARAÇÃO PRICE X SAC */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-2.5">
            <div className="font-extrabold text-red-800 text-xs mb-1">Sistema Price</div>
            <div className="text-[11px] text-stone-600">Parcelas fixas:</div>
            <div className="text-sm font-black font-mono text-stone-900">R$ {pricePmt.toFixed(2)}</div>
            <div className="text-[10px] text-stone-500 mt-1">Total pago: R$ {priceTotal.toFixed(2)}</div>
            <div className="text-[10px] text-stone-500">Juros totais: R$ {priceTotalInterest.toFixed(2)}</div>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-xl p-2.5">
            <div className="font-extrabold text-emerald-800 text-xs mb-1">Sistema SAC</div>
            <div className="text-[11px] text-stone-600">1ª parcela / última:</div>
            <div className="text-xs font-black font-mono text-stone-900">R$ {sacFirstPmt.toFixed(2)} → {sacLastPmt.toFixed(2)}</div>
            <div className="text-[10px] text-stone-500 mt-1">Total pago: R$ {sacTotal.toFixed(2)}</div>
            <div className="text-[10px] text-emerald-700 font-bold">Economia: R$ {(priceTotal - sacTotal).toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
