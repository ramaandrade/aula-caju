import React from 'react';
import { 
  Sparkles, BookOpen, Users, Radio, Maximize2, 
  Layers, CheckCircle, Shield, Award, FileText 
} from 'lucide-react';

export default function Navbar({ 
  onOpenGlossary, 
  onOpenDashboard, 
  onOpenRemote,
  onOpenSummary,
  onOpenPdfCenter,
  onTogglePresentation,
  currentView,
  completedLessons = []
}) {
  return (
    <header className="bg-amber-900 text-amber-50 shadow-md sticky top-0 z-40 select-none border-b border-amber-950">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-2 flex items-center justify-between">
        {/* Marca & Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-2xl bg-amber-800 border-2 border-amber-600/40 flex items-center justify-center font-black text-amber-200 text-base shadow-sm">
            <span className="text-red-500 font-heading">C</span>
            <span className="text-amber-400 font-heading">A</span>
            <span className="text-emerald-400 font-heading">J</span>
            <span className="text-amber-200 font-heading">U</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="font-extrabold text-sm sm:text-base tracking-tight font-heading text-white">
                Aula CAJU
              </h1>
              <span className="text-[9px] bg-red-700 text-white font-bold px-1.5 py-0.2 rounded-full uppercase">
                URCA
              </span>
            </div>
            <p className="text-[10px] text-amber-200/90 leading-none">
              Educação Financeira · Módulo 3
            </p>
          </div>
        </div>

        {/* Ações da Barra Superior */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Botão Apostilas PDF */}
          <button
            onClick={onOpenPdfCenter}
            className="px-2.5 py-1 rounded-xl bg-amber-700/90 hover:bg-amber-600 text-white transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer shadow-xs border border-amber-500/30"
            title="Apostilas das Trilhas em PDF"
          >
            <FileText size={15} className="text-amber-200" />
            <span className="hidden sm:inline">Apostilas PDF</span>
          </button>

          {/* Glossário */}
          <button
            onClick={onOpenGlossary}
            className="p-1.5 sm:px-2.5 sm:py-1 rounded-xl bg-amber-800/80 hover:bg-amber-800 text-amber-200 hover:text-white transition-all flex items-center gap-1 text-xs font-bold cursor-pointer"
            title="Glossário Financeiro & Institucional"
          >
            <BookOpen size={16} />
            <span className="hidden md:inline">Glossário</span>
          </button>

          {/* Painel do Professor */}
          <button
            onClick={onOpenDashboard}
            className="p-1.5 sm:px-2.5 sm:py-1 rounded-xl bg-amber-800/80 hover:bg-amber-800 text-amber-200 hover:text-white transition-all flex items-center gap-1 text-xs font-bold cursor-pointer"
            title="Painel do Docente"
          >
            <Users size={16} />
            <span className="hidden md:inline">Docente</span>
          </button>

          {/* Controle Remoto */}
          <button
            onClick={onOpenRemote}
            className="p-1.5 sm:px-2.5 sm:py-1 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white transition-all flex items-center gap-1 text-xs font-bold cursor-pointer shadow-sm"
            title="Controle Remoto do Celular"
          >
            <Radio size={16} />
            <span className="hidden sm:inline">Controle</span>
          </button>

          {/* Modo Apresentação */}
          {currentView === 'lesson' && (
            <button
              onClick={onTogglePresentation}
              className="p-1.5 sm:px-2.5 sm:py-1 rounded-xl bg-red-700 hover:bg-red-600 text-white transition-all flex items-center gap-1 text-xs font-bold cursor-pointer shadow-sm"
              title="Modo Apresentação (Projetor 16:9)"
            >
              <Maximize2 size={16} />
              <span className="hidden sm:inline">Apresentar</span>
            </button>
          )}

          {/* Contador de Conclusão */}
          <div className="hidden xs:flex items-center gap-1 bg-amber-950/70 border border-amber-800/60 px-2.5 py-1 rounded-xl text-xs font-mono text-amber-300">
            <Award size={13} className="text-amber-400" />
            <span>{completedLessons.length}/12</span>
          </div>
        </div>
      </div>
    </header>
  );
}
