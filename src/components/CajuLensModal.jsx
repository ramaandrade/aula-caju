import React, { useState } from 'react';
import { X, Sparkles, MapPin, Building, Scale, Smartphone } from 'lucide-react';

export default function CajuLensModal({ isOpen, onClose, lesson }) {
  if (!isOpen || !lesson) return null;

  const [activeTab, setActiveTab] = useState('c');
  const slide6 = lesson.slides.find(s => s.type === 'caju_lens') || lesson.slides[5];
  const cajuDetails = slide6?.cajuDetails || {
    c: "Dimensão territorial e urbana no Cariri.",
    a: "Regras formais, informais e custos de transação.",
    j: "Instrumentos jurídicos e marcos legais aplicáveis.",
    u: "Ferramentas práticas digitais e acessíveis no smartphone."
  };

  const TABS = [
    { id: 'c', label: 'Cidades', letter: 'C', icon: MapPin, color: 'text-red-700', bg: 'bg-red-700', border: 'border-red-700', lightBg: 'bg-red-50', question: 'Como a configuração da cidade muda este conceito?' },
    { id: 'a', label: 'Institucional', letter: 'A', icon: Building, color: 'text-amber-800', bg: 'bg-amber-800', border: 'border-amber-800', lightBg: 'bg-amber-50', question: 'Quais regras formais, informais e custos de transação pesam?' },
    { id: 'j', label: 'Jurídico', letter: 'J', icon: Scale, color: 'text-emerald-800', bg: 'bg-emerald-800', border: 'border-emerald-800', lightBg: 'bg-emerald-50', question: 'Que instrumentos legais existem e estão subutilizados?' },
    { id: 'u', label: 'Ubíquo', letter: 'U', icon: Smartphone, color: 'text-amber-600', bg: 'bg-amber-600', border: 'border-amber-600', lightBg: 'bg-amber-50', question: 'Que ferramenta no celular aplica o conceito aqui e agora?' },
  ];

  const currentTab = TABS.find(t => t.id === activeTab);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-amber-50/95 border-2 border-amber-900/30 rounded-3xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header Modal */}
        <div className="p-4 bg-amber-900 text-amber-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-800 flex items-center justify-center font-black text-amber-200 text-sm">
              CAJU
            </div>
            <div>
              <h3 className="font-extrabold text-sm leading-tight font-heading">
                Metodologia CAJU · Aula {lesson.id}
              </h3>
              <p className="text-[11px] text-amber-200 opacity-90 truncate max-w-[260px]">
                {lesson.shortTitle} sob as Quatro Lentes
              </p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-1.5 rounded-full hover:bg-amber-800 text-amber-200 hover:text-white transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* 4 Abas C, A, J, U */}
        <div className="grid grid-cols-4 p-2 bg-amber-100/70 border-b border-amber-200 gap-1.5">
          {TABS.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 rounded-xl font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                  isSelected 
                    ? `${tab.bg} text-white shadow-md scale-102` 
                    : 'bg-white/80 hover:bg-white text-stone-700'
                }`}
              >
                <span className="text-base font-black font-heading">{tab.letter}</span>
                <span className="text-[10px] leading-none">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Conteúdo da Lente Selecionada */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          <div className={`${currentTab.lightBg} border-2 ${currentTab.border} rounded-2xl p-4 shadow-sm`}>
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-7 h-7 rounded-lg ${currentTab.bg} text-white font-black text-sm flex items-center justify-center`}>
                {currentTab.letter}
              </span>
              <div>
                <h4 className={`font-black text-sm ${currentTab.color} font-heading`}>
                  Lente {currentTab.letter} — {currentTab.label}
                </h4>
                <p className="text-xs text-stone-600 font-semibold italic">
                  "{currentTab.question}"
                </p>
              </div>
            </div>

            <div className="mt-3 text-xs sm:text-sm text-stone-800 leading-relaxed font-medium pt-3 border-t border-current/20">
              {cajuDetails[activeTab]}
            </div>
          </div>

          {/* Contexto Regional */}
          <div className="bg-white/80 border border-amber-200 rounded-xl p-3 text-xs text-stone-600">
            <span className="font-bold text-amber-950 block mb-0.5">🌱 Fio Condutor Metodológico:</span>
            A Lente CAJU é aplicada em todas as 12 aulas do módulo para que você internalize o método de leitura socioeconômica e espacial da realidade do Cariri cearense.
          </div>
        </div>

        {/* Rodapé com botão de fechar */}
        <div className="p-3 bg-amber-100/50 border-t border-amber-200 text-center">
          <button 
            onClick={onClose}
            className="w-full py-2 bg-amber-900 hover:bg-amber-950 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer shadow"
          >
            Continuar Aula
          </button>
        </div>
      </div>
    </div>
  );
}
