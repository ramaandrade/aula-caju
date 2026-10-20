import React, { useState } from 'react';
import { 
  X, Download, FileText, CheckCircle2, Star, BookOpen, 
  ExternalLink, Printer, Search, Layers, Sparkles 
} from 'lucide-react';
import { PDF_MANIFEST } from '../data/pdfManifest';

export default function PdfCenterModal({ isOpen, onClose, initialTab = 'tracks' }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState(initialTab); // 'tracks' | 'all'
  const [search, setSearch] = useState('');

  const trackPdfs = PDF_MANIFEST.slice(0, 3);
  const individualPdfs = PDF_MANIFEST.slice(3);

  const filteredPdfs = (activeTab === 'tracks' ? trackPdfs : individualPdfs).filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.trackBadge.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-amber-50 rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border-2 border-amber-900/30 overflow-hidden">
        {/* Header Modal */}
        <div className="p-4 bg-amber-900 text-amber-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-800 text-amber-200">
              <FileText size={22} />
            </div>
            <div>
              <h3 className="font-extrabold text-base leading-tight font-heading">
                Central de Apostilas &amp; Aulas em PDF
              </h3>
              <p className="text-xs text-amber-200 opacity-90">
                Aulas organizadas por trilha pedagógica para estudo e impressão (URCA)
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

        {/* Abas e Busca */}
        <div className="p-3 bg-amber-100/80 border-b border-amber-200 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setActiveTab('tracks')}
                className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                  activeTab === 'tracks' 
                    ? 'bg-amber-900 text-white shadow-sm' 
                    : 'bg-white/80 hover:bg-white text-stone-700 border border-stone-200'
                }`}
              >
                Apostilas por Trilha (3 Volumes)
              </button>
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                  activeTab === 'all' 
                    ? 'bg-amber-900 text-white shadow-sm' 
                    : 'bg-white/80 hover:bg-white text-stone-700 border border-stone-200'
                }`}
              >
                Aulas Individuais (1 a 12)
              </button>
            </div>

            <span className="text-[11px] font-bold text-amber-950 font-mono hidden sm:inline">
              Formato A4 Vetorial
            </span>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-stone-500" size={15} />
            <input 
              type="text"
              placeholder="Buscar apostila ou aula..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-stone-300 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Lista de PDFs */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3">
          {activeTab === 'tracks' && (
            <div className="p-3 bg-amber-100/60 rounded-2xl border border-amber-200 text-xs text-stone-700 mb-2">
              <span className="font-bold text-amber-950 block mb-0.5">📚 Coleções Consolidadas:</span>
              Baixe as apostilas completas encadernadas com capa institucional, sumário, figuras em alta resolução, casos do Cariri, leitura CAJU nas 4 lentes e checagens formativas.
            </div>
          )}

          {filteredPdfs.map((pdf, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl p-4 border transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-white shadow-xs hover:shadow-md ${
                pdf.isExam2 ? 'border-red-300 hover:border-red-500' : 'border-stone-200 hover:border-amber-400'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                    pdf.isExam2 
                      ? 'bg-red-700 text-white' 
                      : 'bg-emerald-800 text-white'
                  }`}>
                    {pdf.trackBadge}
                  </span>
                  {pdf.lessonIds.length > 1 && (
                    <span className="text-[10px] font-bold text-stone-500">
                      {pdf.lessonIds.length} Aulas inclusas
                    </span>
                  )}
                </div>

                <h4 className="font-extrabold text-sm sm:text-base text-stone-900 leading-snug">
                  {pdf.title}
                </h4>

                <div className="text-[11px] text-stone-600 font-medium">
                  {pdf.lessonIds.length > 1 ? (
                    <span>Aulas: {pdf.lessonIds.join(', ')}</span>
                  ) : (
                    <span>Aula individual completa com teoria, exemplo e quiz</span>
                  )}
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-0 border-stone-100">
                <a
                  href={pdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-3 py-1.5 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-700 font-bold text-xs flex items-center justify-center gap-1 transition-colors"
                >
                  <ExternalLink size={14} />
                  <span>Visualizar</span>
                </a>

                <a
                  href={pdf.url}
                  download={pdf.filename}
                  className="flex-1 sm:flex-none px-3 py-1.5 rounded-xl bg-amber-900 hover:bg-amber-950 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <Download size={14} />
                  <span>Baixar PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé com Dica de Sala */}
        <div className="p-3 bg-amber-100/60 border-t border-amber-200 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-600 gap-2">
          <span>💡 Próprio para imprimir ou compartilhar no grupo da turma no WhatsApp.</span>
          <button 
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-800 hover:bg-stone-900 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer shrink-0"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
