import React from 'react';
import { X, Printer, Share2, Download, CheckCircle2 } from 'lucide-react';

export default function PrintSummaryModal({ isOpen, onClose, lesson }) {
  if (!isOpen || !lesson) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsAppShare = () => {
    const text = `*Resumo Aula CAJU ${lesson.id}: ${lesson.title}*\n\n` +
      `🎯 *Objetivo:* ${lesson.objective}\n\n` +
      `💡 *Para Lembrar:*\n` +
      lesson.slides.find(s => s.type === 'remember')?.rememberItems?.map(i => `• ${i}`).join('\n') +
      `\n\nMetodologia CAJU · Economia URCA`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const rememberSlide = lesson.slides.find(s => s.type === 'remember');
  const formulaSlide = lesson.slides.find(s => s.type === 'model');
  const cajuSlide = lesson.slides.find(s => s.type === 'caju_lens');
  const localSlide = lesson.slides.find(s => s.type === 'local_reality');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border-2 border-stone-300 overflow-hidden">
        {/* Barra superior de ações */}
        <div className="p-4 bg-amber-900 text-amber-50 flex items-center justify-between print:hidden">
          <div>
            <h3 className="font-extrabold text-base leading-tight font-heading">
              Resumo para Impressão & Estudo · Aula {lesson.id}
            </h3>
            <p className="text-xs text-amber-200">
              Formato síntese estruturado para PDF ou envio
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleWhatsAppShare}
              className="p-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white flex items-center gap-1.5 text-xs font-bold transition-colors cursor-pointer"
              title="Compartilhar no WhatsApp"
            >
              <Share2 size={15} />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-amber-700 hover:bg-amber-600 text-white flex items-center gap-1.5 text-xs font-bold transition-colors cursor-pointer"
              title="Imprimir / Salvar PDF"
            >
              <Printer size={15} />
              <span className="hidden sm:inline">Imprimir / PDF</span>
            </button>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-amber-800 text-amber-200 hover:text-white transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Conteúdo Imprimível do Resumo */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5 text-stone-900 print:p-0">
          {/* Cabeçalho Acadêmico */}
          <div className="border-b-2 border-amber-950 pb-3 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-2">
            <div>
              <div className="text-[10px] font-extrabold tracking-widest uppercase text-amber-800">
                UNIVERSIDADE REGIONAL DO CARIRI (URCA) · CIÊNCIAS ECONÔMICAS
              </div>
              <h2 className="text-xl font-extrabold text-stone-900 font-heading">
                Aula {lesson.id}: {lesson.title}
              </h2>
              <div className="text-xs text-stone-600">
                Disciplina de Educação Financeira · Módulo 3 · {lesson.caseCharacter}
              </div>
            </div>
            {lesson.isExam2 && (
              <span className="px-2.5 py-1 rounded-full bg-red-100 text-red-800 text-xs font-black self-start">
                ⭐ Conteúdo da Avaliação 2
              </span>
            )}
          </div>

          {/* Objetivo */}
          <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs">
            <span className="font-bold text-amber-950 block mb-0.5">🎯 Objetivo de Aprendizagem:</span>
            <p className="text-stone-700">{lesson.objective}</p>
          </div>

          {/* Fórmulas e Modelos */}
          {formulaSlide && (
            <div className="space-y-1.5">
              <h4 className="font-extrabold text-xs uppercase tracking-wider text-amber-950 border-b border-stone-200 pb-1">
                Fórmulas e Equações Essenciais
              </h4>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 font-mono text-xs whitespace-pre-line text-stone-800">
                {formulaSlide.content}
              </div>
            </div>
          )}

          {/* Síntese Metodologia CAJU */}
          {cajuSlide && cajuSlide.cajuDetails && (
            <div className="space-y-2">
              <h4 className="font-extrabold text-xs uppercase tracking-wider text-amber-950 border-b border-stone-200 pb-1">
                Lente CAJU no Cariri
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-red-50 border border-red-200 rounded-xl">
                  <span className="font-bold text-red-900 block mb-0.5">C — Cidades:</span>
                  <p className="text-stone-700 text-[11px] leading-snug">{cajuSlide.cajuDetails.c}</p>
                </div>
                <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl">
                  <span className="font-bold text-amber-900 block mb-0.5">A — Institucional:</span>
                  <p className="text-stone-700 text-[11px] leading-snug">{cajuSlide.cajuDetails.a}</p>
                </div>
                <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <span className="font-bold text-emerald-900 block mb-0.5">J — Jurídico:</span>
                  <p className="text-stone-700 text-[11px] leading-snug">{cajuSlide.cajuDetails.j}</p>
                </div>
                <div className="p-2.5 bg-amber-50 border border-amber-300 rounded-xl">
                  <span className="font-bold text-amber-800 block mb-0.5">U — Ubíquo:</span>
                  <p className="text-stone-700 text-[11px] leading-snug">{cajuSlide.cajuDetails.u}</p>
                </div>
              </div>
            </div>
          )}

          {/* Realidade Local e Fonte */}
          {localSlide && (
            <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-xs">
              <span className="font-bold text-amber-950 block mb-0.5">📍 Realidade Regional do Cariri & Fonte Oficial:</span>
              <p className="text-stone-700 text-[11px] mb-1">{localSlide.content}</p>
              {localSlide.localSource && (
                <div className="text-[10px] text-stone-500 font-semibold italic">
                  Fonte: {localSlide.localSource.source} ({localSlide.localSource.year}) · {localSlide.localSource.location}
                </div>
              )}
            </div>
          )}

          {/* Para Lembrar */}
          {rememberSlide && (
            <div className="space-y-1.5">
              <h4 className="font-extrabold text-xs uppercase tracking-wider text-amber-950 border-b border-stone-200 pb-1">
                Para Lembrar Sempre (Síntese)
              </h4>
              <ul className="space-y-1 text-xs">
                {rememberSlide.rememberItems?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-stone-800">
                    <CheckCircle2 size={15} className="text-emerald-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
