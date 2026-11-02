import React, { useState } from 'react';
import { Clock, AlertTriangle, CheckCircle2, ChevronDown, ChevronUp, Info, ArrowRight, Sparkles, TrendingDown, HelpCircle } from 'lucide-react';

export default function WorkingCapitalTimeline() {
  const [pme, setPme] = useState(25); // Prazo Médio de Estoque
  const [pmr, setPmr] = useState(30); // Prazo Médio de Recebimento
  const [pmp, setPmp] = useState(15); // Prazo Médio de Pagamento
  const [dailyExpenses, setDailyExpenses] = useState(120);
  const [showHowToFix, setShowHowToFix] = useState(false);

  // Cálculos fundamentais
  const co = Math.max(0, pme + pmr); // Ciclo Operacional = Estoque + Recebimento
  const cf = co - pmp;               // Ciclo Financeiro = CO - Fornecedor
  const ncg = cf > 0 ? cf * dailyExpenses : 0; // Necessidade de Capital de Giro

  // Marcos temporais na régua didática
  const diaPagamento = pmp;
  const diaVenda = pme;
  const diaRecebimento = pme + pmr;

  // Botões de cenários rápidos para leigos
  const aplicarCenarioSufoco = () => {
    setPme(25);
    setPmr(30);
    setPmp(15);
    setDailyExpenses(120);
  };

  const aplicarCenarioSaudavel = () => {
    setPme(10);
    setPmr(1);
    setPmp(30);
    setDailyExpenses(120);
  };

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-sm border-2 border-amber-200 w-full max-w-lg mx-auto select-none">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between border-b border-amber-100 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-amber-100 text-amber-800">
            <Clock size={20} />
          </div>
          <div>
            <h4 className="font-extrabold text-stone-900 text-sm sm:text-base leading-tight font-heading">
              Calculadora de Capital de Giro
            </h4>
            <p className="text-[11px] text-stone-500">
              O "termômetro de sobrevivência" do seu caixa (Pilar U)
            </p>
          </div>
        </div>

        <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-full uppercase">
          Fácil
        </span>
      </div>

      {/* Botões de Cenários Rápidos para comparação imediata */}
      <div className="mb-3">
        <span className="text-[11px] font-bold text-stone-600 block mb-1.5">
          Simulações prontas para testar:
        </span>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={aplicarCenarioSufoco}
            className={`p-2 rounded-xl text-left border text-xs transition-all cursor-pointer ${
              pme === 25 && pmr === 30 && pmp === 15
                ? 'bg-red-50 border-red-300 ring-2 ring-red-400'
                : 'bg-stone-50 border-stone-200 hover:bg-stone-100'
            }`}
          >
            <div className="font-bold text-red-900 text-[11px] flex items-center gap-1">
              <span>⚠️ Caso Comum (Fiado)</span>
            </div>
            <div className="text-[10px] text-stone-500 mt-0.5">
              Estoque parado + cliente demorando a pagar
            </div>
          </button>

          <button
            type="button"
            onClick={aplicarCenarioSaudavel}
            className={`p-2 rounded-xl text-left border text-xs transition-all cursor-pointer ${
              pme === 10 && pmr === 1 && pmp === 30
                ? 'bg-emerald-50 border-emerald-300 ring-2 ring-emerald-400'
                : 'bg-stone-50 border-stone-200 hover:bg-stone-100'
            }`}
          >
            <div className="font-bold text-emerald-900 text-[11px] flex items-center gap-1">
              <span>✨ Caso Saudável (Pix)</span>
            </div>
            <div className="text-[10px] text-stone-500 mt-0.5">
              Recebimento rápido + prazo no fornecedor
            </div>
          </button>
        </div>
      </div>

      <div className="space-y-3.5 text-xs">
        {/* ENTRADAS: 3 PRAZOS EXPLICADOS EM PORTUGUÊS CLARO */}
        <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200 space-y-3">
          <span className="font-bold text-stone-800 text-xs block">
            1. Os 3 Prazos do seu Negócio (em dias):
          </span>

          {/* Prazo 1: Estoque */}
          <div className="bg-white p-2.5 rounded-xl border border-stone-200">
            <div className="flex justify-between items-center mb-1">
              <label className="font-bold text-stone-800 text-xs flex items-center gap-1.5">
                <span>📦 Tempo na Prateleira</span>
                <span className="text-[10px] text-amber-800 bg-amber-100 px-1.5 py-0.2 rounded font-mono font-normal">
                  PME
                </span>
              </label>
              <div className="flex items-center gap-1">
                <input 
                  type="number" 
                  min="0"
                  max="120"
                  value={pme} 
                  onChange={(e) => setPme(Math.max(0, Number(e.target.value)))}
                  className="w-16 p-1 text-center font-bold font-mono text-sm border border-stone-300 rounded-lg text-stone-900"
                />
                <span className="text-[11px] text-stone-600 font-semibold">dias</span>
              </div>
            </div>
            <p className="text-[10.5px] text-stone-500 leading-tight">
              Quantos dias a mercadoria fica guardada até alguém comprar?
            </p>
          </div>

          {/* Prazo 2: Recebimento */}
          <div className="bg-white p-2.5 rounded-xl border border-stone-200">
            <div className="flex justify-between items-center mb-1">
              <label className="font-bold text-stone-800 text-xs flex items-center gap-1.5">
                <span>⏳ Prazo para Receber do Cliente</span>
                <span className="text-[10px] text-red-800 bg-red-100 px-1.5 py-0.2 rounded font-mono font-normal">
                  PMR
                </span>
              </label>
              <div className="flex items-center gap-1">
                <input 
                  type="number" 
                  min="0"
                  max="120"
                  value={pmr} 
                  onChange={(e) => setPmr(Math.max(0, Number(e.target.value)))}
                  className="w-16 p-1 text-center font-bold font-mono text-sm border border-stone-300 rounded-lg text-stone-900"
                />
                <span className="text-[11px] text-stone-600 font-semibold">dias</span>
              </div>
            </div>
            <p className="text-[10.5px] text-stone-500 leading-tight">
              Quantos dias o cliente demora para pagar (fiado, caderneta ou fatura do cartão)?
            </p>
          </div>

          {/* Prazo 3: Fornecedor */}
          <div className="bg-white p-2.5 rounded-xl border border-stone-200">
            <div className="flex justify-between items-center mb-1">
              <label className="font-bold text-stone-800 text-xs flex items-center gap-1.5">
                <span>🤝 Prazo para Pagar o Fornecedor</span>
                <span className="text-[10px] text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded font-mono font-normal">
                  PMP
                </span>
              </label>
              <div className="flex items-center gap-1">
                <input 
                  type="number" 
                  min="0"
                  max="120"
                  value={pmp} 
                  onChange={(e) => setPmp(Math.max(0, Number(e.target.value)))}
                  className="w-16 p-1 text-center font-bold font-mono text-sm border border-stone-300 rounded-lg text-stone-900"
                />
                <span className="text-[11px] text-stone-600 font-semibold">dias</span>
              </div>
            </div>
            <p className="text-[10.5px] text-stone-500 leading-tight">
              Quantos dias o distribuidor/fornecedor te dá de prazo para quitar o boleto?
            </p>
          </div>
        </div>

        {/* GASTO DIÁRIO */}
        <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200">
          <div className="flex justify-between items-center mb-1">
            <label className="font-bold text-stone-800 text-xs">
              2. Quanto Custa Manter o Negócio Aberto por Dia?
            </label>
            <div className="relative">
              <span className="absolute left-2.5 top-1.5 text-stone-400 font-mono text-xs">R$</span>
              <input 
                type="number" 
                min="1"
                value={dailyExpenses} 
                onChange={(e) => setDailyExpenses(Math.max(1, Number(e.target.value)))}
                className="w-24 pl-8 pr-2 py-1 text-right font-bold font-mono text-sm border border-stone-300 rounded-lg text-stone-900"
              />
            </div>
          </div>
          <p className="text-[10.5px] text-stone-500 leading-tight">
            Gasto diário com luz, água, ajudante, gasolina, reposição e retirada mínima do dono.
          </p>
        </div>

        {/* A LINHA DO TEMPO DIDÁTICA (O CAMINHO DO DINHEIRO) */}
        <div className="p-3 bg-amber-50 rounded-2xl border border-amber-300">
          <span className="font-bold text-amber-950 text-xs block mb-2">
            🧭 O Caminho do Dinheiro na Linha do Tempo:
          </span>

          <div className="space-y-1.5 text-[11px] font-mono">
            <div className="flex items-center justify-between bg-white/90 p-1.5 rounded-lg border border-amber-200">
              <span className="text-stone-700">🛒 Dia 0:</span>
              <span className="font-bold text-stone-900 font-sans">Você compra a mercadoria</span>
            </div>

            <div className="flex items-center justify-between bg-emerald-50/80 p-1.5 rounded-lg border border-emerald-300 text-emerald-950">
              <span>💸 Dia {diaPagamento}:</span>
              <span className="font-bold font-sans">Você PAGA o fornecedor (dinheiro sai do caixa!)</span>
            </div>

            <div className="flex items-center justify-between bg-amber-100/70 p-1.5 rounded-lg border border-amber-200 text-amber-950">
              <span>🏷️ Dia {diaVenda}:</span>
              <span className="font-bold font-sans">A mercadoria é finalmente vendida</span>
            </div>

            <div className="flex items-center justify-between bg-blue-50/80 p-1.5 rounded-lg border border-blue-300 text-blue-950">
              <span>💰 Dia {diaRecebimento}:</span>
              <span className="font-bold font-sans">O cliente finalmente PAGA (dinheiro entra!)</span>
            </div>
          </div>

          {/* Destaque do intervalo de espera */}
          {cf > 0 ? (
            <div className="mt-2.5 p-2 bg-red-100 border border-red-300 rounded-xl text-red-950 text-center font-bold text-xs">
              ⏳ Intervalo de Espera ("Deserto de Caixa"): do Dia {diaPagamento} ao Dia {diaRecebimento} = {cf} dias!
            </div>
          ) : (
            <div className="mt-2.5 p-2 bg-emerald-100 border border-emerald-300 rounded-xl text-emerald-950 text-center font-bold text-xs">
              🎉 Sem espera: o cliente paga {Math.abs(cf)} dias ANTES de você ter que pagar o fornecedor!
            </div>
          )}
        </div>

        {/* RESULTADO DIDÁTICO / TERMÔMETRO */}
        <div className={`rounded-2xl p-3.5 border-2 shadow-sm space-y-2 ${
          cf > 30 
            ? 'bg-red-50 border-red-400 text-red-950' 
            : cf > 0 
              ? 'bg-amber-50 border-amber-400 text-amber-950' 
              : 'bg-emerald-50 border-emerald-400 text-emerald-950'
        }`}>
          {/* Ciclo Financeiro */}
          <div className="flex items-center justify-between">
            <div>
              <span className="font-extrabold text-xs sm:text-sm block">
                {cf > 0 ? 'Deserto de Caixa (Ciclo Financeiro):' : 'Ciclo Financeiro Negativo:'}
              </span>
              <span className="text-[10.5px] opacity-80 block">
                {cf > 0 
                  ? 'Dias em que o dinheiro já saiu, mas ainda não entrou' 
                  : 'Você recebe do cliente antes de pagar o fornecedor'}
              </span>
            </div>
            <span className="text-xl sm:text-2xl font-black font-mono">
              {cf} {Math.abs(cf) === 1 ? 'dia' : 'dias'}
            </span>
          </div>

          <div className="border-t border-current/20 pt-2 flex items-center justify-between">
            <div>
              <span className="font-extrabold text-xs sm:text-sm block">
                Reserva de Caixa Obrigatória (NCG):
              </span>
              <span className="text-[10.5px] opacity-80 block">
                Valor para pagar as contas diárias sem fechar as portas
              </span>
            </div>
            <span className="text-xl sm:text-2xl font-black font-mono text-red-900">
              {cf > 0 ? `R$ ${ncg.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` : 'R$ 0,00'}
            </span>
          </div>

          {/* Tradução Humana da Conta */}
          <div className="pt-2 border-t border-current/15 text-[11px] leading-relaxed">
            {cf > 0 ? (
              <p>
                👉 <strong>Entenda a conta:</strong> Durante os <strong>{cf} dias</strong> de espera, seu negócio gasta <strong>R$ {dailyExpenses},00 por dia</strong> para continuar funcionando. Por isso, você é obrigado a ter guardado no caixa <strong>R$ {ncg.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> ({cf} dias × R$ {dailyExpenses}) para não quebrar ou ter que pedir empréstimo no banco!
              </p>
            ) : (
              <p className="text-emerald-900">
                👉 <strong>Cenário dos Sonhos:</strong> Você não precisa de capital de giro próprio! O dinheiro do cliente já está no seu caixa quando o boleto do fornecedor vence. Você trabalha usando o crédito do distribuidor!
              </p>
            )}
          </div>
        </div>

        {/* BOTÃO EXPANSÍVEL: COMO ELIMINAR O BURACO DE CAIXA SEM EMPRÉSTIMO */}
        <div className="bg-amber-50/70 border border-amber-300 rounded-2xl p-2.5">
          <button
            type="button"
            onClick={() => setShowHowToFix(!showHowToFix)}
            className="w-full flex items-center justify-between text-left text-xs font-bold text-amber-950 cursor-pointer"
          >
            <div className="flex items-center gap-1.5">
              <Sparkles size={16} className="text-amber-600" />
              <span>Como derrubar esse buraco de caixa sem ir ao banco?</span>
            </div>
            {showHowToFix ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {showHowToFix && (
            <div className="mt-2.5 pt-2 border-t border-amber-200 text-[11px] text-stone-700 space-y-2 animate-in fade-in duration-150">
              <div className="flex gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">
                  1
                </span>
                <div>
                  <strong className="text-stone-900">Incentive o Pix na hora (derrube o prazo de receber):</strong>
                  <p className="text-stone-600">
                    Dar 2% de desconto no Pix custa infinitamente menos do que esperar 30 dias na caderneta ou pagar juros de cheque especial no banco!
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">
                  2
                </span>
                <div>
                  <strong className="text-stone-900">Negocie mais prazo com seu fornecedor:</strong>
                  <p className="text-stone-600">
                    Se você conseguir passar o boleto de 15 para 30 ou 45 dias, você só paga o fornecedor DEPOIS que já tiver vendido a mercadoria!
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">
                  3
                </span>
                <div>
                  <strong className="text-stone-900">Não compre mercadoria para encalhar (gire o estoque):</strong>
                  <p className="text-stone-600">
                    Estoque parado é dinheiro dormindo. Compre lotes menores com mais frequência para o produto ficar poucos dias na prateleira.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
