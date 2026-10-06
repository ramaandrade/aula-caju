import React, { useState } from 'react';
import { ArrowRight, Home, Briefcase, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Fig5HouseVsBusiness() {
  const [activeSide, setActiveSide] = useState(null);

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center p-3 select-none">
      <div className="text-center mb-3">
        <h4 className="text-sm font-bold text-amber-950 uppercase tracking-wider">
          Figura 5 — Separação Radical de Contas
        </h4>
        <p className="text-xs text-stone-600">
          O pró-labore com valor fixo é a única ponte permitida entre o negócio e a casa
        </p>
      </div>

      <div className="w-full relative flex items-center justify-between gap-2 sm:gap-4 my-2">
        {/* LADO DO NEGÓCIO */}
        <div 
          onClick={() => setActiveSide(activeSide === 'business' ? null : 'business')}
          className={`flex-1 rounded-2xl p-4 transition-all duration-300 cursor-pointer border-2 ${
            activeSide === 'business' 
              ? 'bg-amber-900 text-white border-amber-950 shadow-lg scale-102 ring-4 ring-amber-300' 
              : 'bg-amber-900/90 hover:bg-amber-900 text-amber-50 border-amber-950/20 shadow-md'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-amber-800/80 text-amber-200">
              <Briefcase size={18} />
            </div>
            <span className="font-extrabold text-sm tracking-wide">NEGÓCIO</span>
          </div>
          <ul className="text-xs space-y-1 opacity-90 leading-tight">
            <li>• Vendas / Receitas</li>
            <li>• Insumos & Matéria-prima</li>
            <li>• Gás & Energia produtiva</li>
            <li>• Embalagens</li>
            <li>• Tributos (DAS MEI)</li>
          </ul>
          <div className="mt-3 text-[10px] bg-amber-950/60 rounded px-2 py-1 text-amber-200 font-mono">
            Conta Bancária PJ (CNPJ)
          </div>
        </div>

        {/* PONTE CENTRAL (PRÓ-LABORE) */}
        <div className="flex flex-col items-center justify-center shrink-0 w-24 sm:w-32 z-10">
          <div className="animate-pulse-subtle bg-red-700 text-white rounded-full px-2.5 py-1 text-[11px] font-extrabold tracking-tight text-center shadow-md border-2 border-white">
            pró-labore
          </div>
          <div className="text-[9px] font-bold text-red-800 mt-0.5 mb-1 bg-red-100/90 px-2 py-0.5 rounded-full whitespace-nowrap">
            (valor fixo e mensal)
          </div>
          <div className="relative flex items-center w-full justify-center">
            <div className="h-1 bg-red-600 w-full rounded-full"></div>
            <div className="absolute right-0 text-red-600">
              <ArrowRight size={20} strokeWidth={3} />
            </div>
          </div>
          <span className="text-[9px] text-stone-700 text-center mt-1 italic font-medium leading-tight">
            Única ponte permitida
          </span>
        </div>

        {/* LADO DA CASA */}
        <div 
          onClick={() => setActiveSide(activeSide === 'house' ? null : 'house')}
          className={`flex-1 rounded-2xl p-4 transition-all duration-300 cursor-pointer border-2 ${
            activeSide === 'house' 
              ? 'bg-emerald-800 text-white border-emerald-950 shadow-lg scale-102 ring-4 ring-emerald-300' 
              : 'bg-emerald-800/90 hover:bg-emerald-800 text-emerald-50 border-emerald-950/20 shadow-md'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-emerald-700/80 text-emerald-200">
              <Home size={18} />
            </div>
            <span className="font-extrabold text-sm tracking-wide">CASA</span>
          </div>
          <ul className="text-xs space-y-1 opacity-90 leading-tight">
            <li>• Alimentação da família</li>
            <li>• Escola e material infantil</li>
            <li>• Energia doméstica e água</li>
            <li>• Farmácia e saúde</li>
            <li>• Lazer do fim de semana</li>
          </ul>
          <div className="mt-3 text-[10px] bg-emerald-950/60 rounded px-2 py-1 text-emerald-200 font-mono">
            Conta Pessoal (CPF)
          </div>
        </div>
      </div>

      {/* Explicação interativa */}
      <div className="w-full mt-2 bg-amber-100/70 border border-amber-300 rounded-xl p-2.5 text-xs text-stone-800 flex items-start gap-2">
        <AlertCircle size={16} className="text-red-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-red-900">Regra de Ouro:</span> Nunca pague boletos da casa direto no caixa da marmitaria. Transfira o pró-labore fixo estipulado para sua conta física e pague suas contas domésticas por lá!
        </div>
      </div>
    </div>
  );
}
