import React, { useState } from 'react';
import { X, Search, BookOpen, Filter, ArrowRight, RotateCcw } from 'lucide-react';
import { GLOSSARY_TERMS } from '../data/glossaryData';

export default function GlossaryModal({ isOpen, onClose, onGoToLesson }) {
  if (!isOpen) return null;

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [isExpanded, setIsExpanded] = useState(true);

  // Categorias únicas
  const categories = ['Todas', ...new Set(GLOSSARY_TERMS.map(t => t.category))];

  const filteredTerms = GLOSSARY_TERMS.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(search.toLowerCase()) ||
                          item.definition.toLowerCase().includes(search.toLowerCase()) ||
                          item.formula.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-amber-50 rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border-2 border-amber-900/30 overflow-hidden">
        {/* Header */}
        <div className="p-3.5 sm:p-4 bg-amber-900 text-amber-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-800 text-amber-200">
              <BookOpen size={20} />
            </div>
            <div>
              <h3 className="font-extrabold text-base leading-tight font-heading">
                Glossário Financeiro &amp; Institucional
              </h3>
              <p className="text-xs text-amber-200 opacity-90">
                Conceitos, termos e fórmulas do Módulo 3 (URCA)
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-amber-800 text-amber-200 hover:text-white transition-colors cursor-pointer"
            title="Fechar Glossário"
          >
            <X size={20} />
          </button>
        </div>

        {/* Barra de Pesquisa e Filtros */}
        <div className="p-3 sm:p-4 bg-amber-100/90 border-b border-amber-200 space-y-2.5">
          {/* Campo de Busca */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-stone-500" size={16} />
            <input 
              type="text"
              placeholder="Buscar termo, fórmula ou conceito..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-8 py-2 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
            />
            {search && (
              <button 
                onClick={() => setSearch('')}
                className="absolute right-2.5 top-2.5 text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Cabeçalho das Categorias */}
          <div className="flex items-center justify-between text-xs text-stone-700 pt-0.5">
            <div className="flex items-center gap-1.5 font-bold text-amber-950">
              <Filter size={13} className="text-amber-800" />
              <span>Categorias &amp; Temas ({categories.length - 1} temas):</span>
            </div>

            <div className="flex items-center gap-2">
              {selectedCategory !== 'Todas' && (
                <button
                  onClick={() => setSelectedCategory('Todas')}
                  className="text-[11px] font-bold text-red-700 hover:text-red-900 flex items-center gap-1 cursor-pointer bg-red-100/80 px-2 py-0.5 rounded-lg"
                >
                  <RotateCcw size={11} />
                  <span>Limpar filtro</span>
                </button>
              )}

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[11px] font-bold text-amber-800 hover:text-amber-950 underline cursor-pointer"
              >
                {isExpanded ? 'Recolher' : 'Ver todas'}
              </button>
            </div>
          </div>

          {/* Categorias Pills — Quebra de linha (FLEX-WRAP) para NUNCA cortar botões! */}
          {isExpanded && (
            <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1 scrollbar-thin text-xs animate-in fade-in duration-150">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                const count = cat === 'Todas' 
                  ? GLOSSARY_TERMS.length 
                  : GLOSSARY_TERMS.filter(t => t.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-1 text-[11px] sm:text-xs shadow-2xs ${
                      isSelected 
                        ? 'bg-amber-900 text-white shadow-sm ring-2 ring-amber-500 scale-102' 
                        : 'bg-white hover:bg-amber-50 text-stone-700 border border-stone-200 hover:border-amber-400'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-normal ${
                      isSelected ? 'bg-amber-800 text-amber-200' : 'bg-stone-100 text-stone-500'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Contador de resultados */}
          <div className="text-[11px] text-stone-500 flex justify-between items-center pt-0.5 border-t border-amber-200/60">
            <span>
              Mostrando <strong>{filteredTerms.length}</strong> de {GLOSSARY_TERMS.length} termos
            </span>
            {selectedCategory !== 'Todas' && (
              <span className="font-semibold text-amber-900 truncate max-w-[200px]">
                Filtro: {selectedCategory}
              </span>
            )}
          </div>
        </div>

        {/* Lista de Termos */}
        <div className="p-3 sm:p-4 overflow-y-auto flex-1 space-y-3">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-10 text-stone-500 text-xs sm:text-sm space-y-2">
              <p>Nenhum termo encontrado para os filtros selecionados.</p>
              <button
                onClick={() => { setSearch(''); setSelectedCategory('Todas'); }}
                className="px-3 py-1.5 bg-amber-900 text-white rounded-xl font-bold text-xs cursor-pointer hover:bg-amber-950 transition-colors"
              >
                Limpar Busca e Filtros
              </button>
            </div>
          ) : (
            filteredTerms.map((t, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-3.5 sm:p-4 border border-amber-200 shadow-xs hover:border-amber-400 transition-all space-y-2"
              >
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h4 className="font-extrabold text-sm sm:text-base text-amber-950 font-heading">
                      {t.term}
                    </h4>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full inline-block mt-0.5">
                      {t.category} · Aula {t.lesson}
                    </span>
                  </div>
                  {onGoToLesson && (
                    <button
                      onClick={() => {
                        onGoToLesson(t.lesson);
                        onClose();
                      }}
                      className="text-[10px] sm:text-[11px] text-amber-800 hover:text-amber-950 font-bold flex items-center gap-1 bg-amber-50 hover:bg-amber-100 px-2.5 py-1 rounded-xl transition-colors cursor-pointer shrink-0 border border-amber-200"
                    >
                      <span>Ir para Aula {t.lesson}</span>
                      <ArrowRight size={12} />
                    </button>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                  {t.definition}
                </p>

                {t.formula && (
                  <div className="bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs font-mono text-stone-900">
                    <span className="font-bold text-amber-900 font-sans mr-1.5">Fórmula:</span>
                    {t.formula}
                  </div>
                )}

                {t.cajuLens && (
                  <div className="text-[11px] text-emerald-900 bg-emerald-50 rounded-xl p-2.5 border border-emerald-200">
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
