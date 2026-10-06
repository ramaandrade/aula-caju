import React, { useState } from 'react';
import { X, Search, BookOpen, Filter, ArrowRight } from 'lucide-react';
import { GLOSSARY_TERMS } from '../data/glossaryData';

export default function GlossaryModal({ isOpen, onClose, onGoToLesson }) {
  if (!isOpen) return null;

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = ['Todas', ...new Set(GLOSSARY_TERMS.map(t => t.category))];

  const filteredTerms = GLOSSARY_TERMS.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(search.toLowerCase()) ||
                          item.definition.toLowerCase().includes(search.toLowerCase()) ||
                          item.formula.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-amber-50 rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border-2 border-amber-900/30 overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-amber-900 text-amber-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-800 text-amber-200">
              <BookOpen size={20} />
            </div>
            <div>
              <h3 className="font-extrabold text-base leading-tight font-heading">
                Glossário Financeiro & Institucional
              </h3>
              <p className="text-xs text-amber-200 opacity-90">
                Termos, conceitos e fórmulas do Módulo 3 (URCA)
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

        {/* Barra de Pesquisa e Filtros */}
        <div className="p-3 bg-amber-100/80 border-b border-amber-200 space-y-2">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-stone-500" size={16} />
            <input 
              type="text"
              placeholder="Buscar termo, fórmula ou conceito..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-stone-300 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Categorias Pills */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg font-bold shrink-0 transition-colors cursor-pointer ${
                  selectedCategory === cat 
                    ? 'bg-amber-900 text-white' 
                    : 'bg-white/80 hover:bg-white text-stone-700 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de Termos */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-8 text-stone-500 text-xs">
              Nenhum termo encontrado para sua busca.
            </div>
          ) : (
            filteredTerms.map((t, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-3.5 border border-amber-200 shadow-xs hover:border-amber-400 transition-all space-y-2"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-extrabold text-sm text-amber-950 font-heading">
                      {t.term}
                    </h4>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full inline-block mt-0.5">
                      {t.category} · Aula {t.lesson}
                    </span>
                  </div>
                  {onGoToLesson && (
                    <button
                      onClick={() => {
                        onGoToLesson(t.lesson);
                        onClose();
                      }}
                      className="text-[10px] text-amber-800 hover:text-amber-950 font-bold flex items-center gap-1 bg-amber-50 hover:bg-amber-100 px-2 py-1 rounded-lg transition-colors cursor-pointer"
                    >
                      <span>Ir para Aula</span>
                      <ArrowRight size={12} />
                    </button>
                  )}
                </div>

                <p className="text-xs text-stone-700 leading-relaxed">
                  {t.definition}
                </p>

                {t.formula && (
                  <div className="bg-stone-50 border border-stone-200 rounded-xl px-2.5 py-1.5 text-[11px] font-mono text-stone-900">
                    <span className="font-bold text-amber-900 font-sans mr-1">Fórmula:</span>
                    {t.formula}
                  </div>
                )}

                {t.cajuLens && (
                  <div className="text-[10px] text-emerald-800 bg-emerald-50 rounded-lg p-2 border border-emerald-200">
                    <span className="font-bold">Lente CAJU: </span>{t.cajuLens}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
