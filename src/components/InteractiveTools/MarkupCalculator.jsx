import React, { useState } from 'react';
import { Calculator, ArrowRight, AlertTriangle, CheckCircle2, ChevronDown, ChevronUp, Info, TrendingDown } from 'lucide-react';

export default function MarkupCalculator() {
  const [cost, setCost] = useState(12.00);
  const [cardFee, setCardFee] = useState(4.5);
  const [taxRate, setTaxRate] = useState(3.5);
  const [targetMargin, setTargetMargin] = useState(25.0);
  const [discountOffered, setDiscountOffered] = useState(10.0);
  const [showDre, setShowDre] = useState(false);

  const totalDeductions = cardFee + taxRate + targetMargin;
  const divisor = (100 - totalDeductions) / 100;
  const isValidDivisor = divisor > 0;
  const price = isValidDivisor ? cost / divisor : 0;
  const unitProfit = price * (targetMargin / 100);

  // Efeito do desconto na DRE contábil/financeira real
  // A taxa do cartão e o imposto incidem sobre a receita efetivamente faturada (preço com desconto)
  const discountedPrice = price * (1 - discountOffered / 100);
  const discountAmount = price - discountedPrice;
  const cardFeeAmount = discountedPrice * (cardFee / 100);
  const taxAmount = discountedPrice * (taxRate / 100);
  const totalVariableDeductions = cardFeeAmount + taxAmount;
  const netDiscountedRevenue = discountedPrice - totalVariableDeductions;
  
  // Lucro líquido real por unidade vendida
  const newProfit = netDiscountedRevenue - cost;
  const newMarginPercent = discountedPrice > 0 ? (newProfit / discountedPrice) * 100 : 0;
  
  // Queda percentual do lucro unitário em R$ em relação ao lucro original
  const profitDropPercent = unitProfit > 0 ? ((unitProfit - newProfit) / unitProfit) * 100 : 0;
  
  // Volume adicional necessário para compensar e empatar o lucro total
  const additionalVolumePercent = newProfit > 0 ? ((unitProfit / newProfit) - 1) * 100 : null;

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

        {!isValidDivisor && (
          <div className="p-2.5 rounded-xl bg-red-100 border border-red-300 text-red-900 text-xs flex items-center gap-1.5">
            <AlertTriangle size={16} className="text-red-600 shrink-0" />
            <span>As deduções somam {totalDeductions.toFixed(1)}% (≥ 100%). Reduza as taxas ou a margem desejada.</span>
          </div>
        )}

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
        <div className="border border-red-200 bg-red-50/60 rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-red-900 font-bold text-xs">
              <AlertTriangle size={15} className="text-red-600" />
              <span>Simular Desconto no Balcão:</span>
            </div>
            <span className="font-mono font-bold text-red-800">{discountOffered}% de desconto</span>
          </div>
          
          <input 
            type="range" min="0" max="30" step="1" value={discountOffered}
            onChange={(e) => setDiscountOffered(Number(e.target.value))}
            className="w-full accent-red-600"
          />

          <div className="space-y-1.5 text-[11px] pt-1">
            <div className="flex justify-between">
              <span className="text-stone-600">Preço com desconto:</span>
              <span className="font-mono font-bold text-stone-900">
                R$ {discountedPrice.toFixed(2)}
                <span className="text-stone-500 font-normal ml-1">(-R$ {discountAmount.toFixed(2)})</span>
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-stone-600">Novo lucro unitário:</span>
              <div className="text-right">
                <span className={`font-mono font-bold ${newProfit <= 0 ? 'text-red-600' : 'text-stone-900'}`}>
                  R$ {newProfit.toFixed(2)}
                </span>
                <span className="text-[10px] text-stone-500 ml-1">
                  ({newMarginPercent.toFixed(1)}% da venda)
                </span>
              </div>
            </div>

            <div className="flex justify-between text-red-700 font-semibold pt-1 border-t border-red-200">
              <span className="flex items-center gap-1">
                <TrendingDown size={13} />
                <span>Queda no seu lucro:</span>
              </span>
              <span className="font-bold">
                {profitDropPercent >= 0 ? `−${profitDropPercent.toFixed(1)}%` : `+${Math.abs(profitDropPercent).toFixed(1)}%`}
              </span>
            </div>

            {newProfit <= 0 && (
              <div className="p-2 rounded-lg bg-red-600 text-white font-bold text-center text-[10px] animate-pulse">
                ⚠️ PREJUÍZO: você perde R$ {Math.abs(newProfit).toFixed(2)} por unidade vendida!
              </div>
            )}

            {additionalVolumePercent !== null && newProfit > 0 && discountOffered > 0 && (
              <div className="text-[10px] text-amber-900 bg-amber-100/80 p-1.5 rounded-lg border border-amber-200 flex items-center justify-between">
                <span>Vendas extras para manter lucro total:</span>
                <strong className="font-mono font-bold text-amber-950">+{additionalVolumePercent.toFixed(1)}% un.</strong>
              </div>
            )}
          </div>

          {/* Botão de DRE Detalhada */}
          <div className="pt-1 border-t border-red-200/80">
            <button
              type="button"
              onClick={() => setShowDre(!showDre)}
              className="text-[10px] text-red-800 hover:text-red-950 font-bold flex items-center justify-between w-full cursor-pointer py-0.5"
            >
              <span>{showDre ? 'Ocultar DRE da Venda com Desconto' : 'Ver DRE da Venda com Desconto (Passo a Passo)'}</span>
              {showDre ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </button>

            {showDre && (
              <div className="mt-1.5 p-2 bg-white rounded-lg border border-red-200 font-mono text-[10px] space-y-1 text-stone-700 animate-in fade-in duration-150">
                <div className="flex justify-between font-bold text-stone-900">
                  <span>(+) Receita com Desconto:</span>
                  <span>R$ {discountedPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-stone-500 pl-2">
                  <span>(-) Taxa Cartão ({cardFee}%):</span>
                  <span>-R$ {cardFeeAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-stone-500 pl-2">
                  <span>(-) Imposto DAS ({taxRate}%):</span>
                  <span>-R$ {taxAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-stone-600 font-semibold border-t border-stone-200 pt-0.5">
                  <span>(=) Receita Líquida:</span>
                  <span>R$ {netDiscountedRevenue.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-stone-500 pl-2">
                  <span>(-) Custo Total Unitário:</span>
                  <span>-R$ {cost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold border-t border-stone-300 pt-0.5 text-emerald-800">
                  <span>(=) Lucro Líquido Real:</span>
                  <span className={newProfit <= 0 ? 'text-red-600' : 'text-emerald-700'}>
                    R$ {newProfit.toFixed(2)}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
