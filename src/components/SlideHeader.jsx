import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Eye, Sparkles, BookOpen, ChevronLeft, Maximize2 } from 'lucide-react';

export default function SlideHeader({ 
  lesson, 
  currentSlideIndex, 
  totalSlides, 
  onOpenCajuLens, 
  onTogglePresentation,
  onBackToTrail,
  onOpenGlossary
}) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speechRate, setSpeechRate] = useState(1.1);

  const currentSlide = lesson.slides[currentSlideIndex];

  // Web Speech API Narrador
  useEffect(() => {
    // Parar áudio ao trocar de slide
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
  }, [currentSlideIndex, lesson.id]);

  const toggleAudio = () => {
    if (!('speechSynthesis' in window)) {
      alert('Seu navegador não suporta síntese de voz.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis.cancel();
      const textToSpeak = currentSlide.audioNarration || currentSlide.content;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'pt-BR';
      utterance.rate = speechRate;

      utterance.onend = () => {
        setIsPlayingAudio(false);
      };
      utterance.onerror = () => {
        setIsPlayingAudio(false);
      };

      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  const changeRate = () => {
    const nextRate = speechRate === 1 ? 1.25 : speechRate === 1.25 ? 1.5 : 1;
    setSpeechRate(nextRate);
    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }
  };

  return (
    <div className="w-full bg-amber-900 text-amber-50 shadow-md select-none sticky top-0 z-30">
      {/* Linha Principal do Cabeçalho */}
      <div className="max-w-4xl mx-auto px-3 py-2 flex items-center justify-between">
        {/* Lado Esquerdo: Botão Voltar + Título da Aula */}
        <div className="flex items-center gap-1.5 overflow-hidden">
          <button
            onClick={onBackToTrail}
            className="p-1 rounded-lg hover:bg-amber-800 text-amber-200 hover:text-white transition-colors cursor-pointer"
            title="Voltar para a Trilha de Aulas"
          >
            <ChevronLeft size={22} />
          </button>
          <div className="truncate">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xs sm:text-sm text-white tracking-tight">
                Aula {lesson.id} · {lesson.shortTitle}
              </span>
              {lesson.isExam2 && (
                <span className="text-[8px] bg-red-600 text-white font-black px-1.5 py-0.2 rounded-full uppercase hidden xs:inline">
                  Av. 2
                </span>
              )}
            </div>
            <div className="text-[10px] text-amber-200/80 truncate">
              {currentSlide?.title}
            </div>
          </div>
        </div>

        {/* Lado Direito: Posição (ex: 4/9) + Ações */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Posição 4/9 */}
          <div className="bg-amber-950/60 font-mono font-bold text-xs text-amber-300 px-2 py-1 rounded-lg border border-amber-800">
            {currentSlideIndex + 1}/{totalSlides}
          </div>

          {/* Botão Apresentação Fullscreen */}
          <button
            onClick={onTogglePresentation}
            className="p-1.5 rounded-lg bg-amber-800/80 hover:bg-amber-800 text-amber-200 hover:text-white transition-colors cursor-pointer"
            title="Modo Apresentação (Projetor 16:9)"
          >
            <Maximize2 size={16} />
          </button>
        </div>
      </div>

      {/* Barra de Ações Rápidas: Ouvir Áudio + Atalho Lente CAJU */}
      <div className="bg-amber-950/90 px-3 py-1.5 border-t border-amber-900/50 flex items-center justify-between text-xs">
        {/* Controle de Áudio Narrador */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={toggleAudio}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold transition-all cursor-pointer text-[11px] ${
              isPlayingAudio 
                ? 'bg-red-700 text-white animate-pulse' 
                : 'bg-emerald-800 hover:bg-emerald-700 text-white'
            }`}
          >
            {isPlayingAudio ? <VolumeX size={14} /> : <Volume2 size={14} />}
            <span>{isPlayingAudio ? 'Pausar' : 'Ouvir Narração'}</span>
          </button>

          {/* Seletor de velocidade */}
          <button
            onClick={changeRate}
            className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-amber-900/80 text-amber-300 hover:bg-amber-900 cursor-pointer"
            title="Ajustar velocidade da voz"
          >
            {speechRate}x
          </button>
        </div>

        {/* Atalhos: Lente CAJU e Glossário */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={onOpenGlossary}
            className="text-[11px] font-bold text-amber-300 hover:text-white flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-amber-900/50 transition-colors cursor-pointer"
          >
            <BookOpen size={13} />
            <span className="hidden sm:inline">Glossário</span>
          </button>

          <button
            onClick={onOpenCajuLens}
            className="flex items-center gap-1 px-3 py-1 bg-red-700 hover:bg-red-600 text-white rounded-full font-extrabold text-[11px] shadow-sm transition-all cursor-pointer"
          >
            <Sparkles size={13} />
            <span>Lente CAJU</span>
          </button>
        </div>
      </div>
    </div>
  );
}
