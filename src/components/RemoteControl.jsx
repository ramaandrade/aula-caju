import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Play, Pause, RotateCcw, 
  MessageSquare, Sparkles, Wifi, Radio, ArrowLeft, Volume2
} from 'lucide-react';

export default function RemoteControl({ 
  lesson, 
  currentSlideIndex, 
  onNextSlide, 
  onPrevSlide, 
  onGoToSlide,
  onCloseRemote,
  onSelectLesson,
  allLessons = []
}) {
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [isConnected, setIsConnected] = useState(true);

  const currentSlide = lesson.slides[currentSlideIndex];

  // Cronômetro
  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => setSeconds(s => s + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (totalSecs) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // BroadcastChannel para sincronização em tempo real entre celulares e projetores
  useEffect(() => {
    if ('BroadcastChannel' in window) {
      const channel = new BroadcastChannel('aula-caju-sync');
      
      // Enviar estado atual
      channel.postMessage({
        type: 'REMOTE_SYNC',
        lessonId: lesson.id,
        slideIndex: currentSlideIndex
      });

      return () => channel.close();
    }
  }, [lesson.id, currentSlideIndex]);

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col justify-between p-3 select-none">
      {/* Barra de Status e Conexão */}
      <div className="bg-stone-800 rounded-2xl p-3 border border-stone-700 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button 
            onClick={onCloseRemote}
            className="p-1.5 rounded-lg bg-stone-700 hover:bg-stone-600 text-stone-200 transition-colors cursor-pointer"
            title="Voltar"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-xs font-bold text-emerald-400">Controle Remoto Pareado</span>
            </div>
            <div className="text-[11px] text-stone-400 font-mono">
              Projetor sincronizado em tempo real
            </div>
          </div>
        </div>

        {/* Cronômetro */}
        <div className="flex items-center gap-2 bg-stone-900 px-3 py-1.5 rounded-xl border border-stone-700 font-mono">
          <span className="text-sm font-bold text-amber-400">{formatTime(seconds)}</span>
          <button 
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className="text-stone-400 hover:text-white cursor-pointer ml-1"
          >
            {isTimerRunning ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button 
            onClick={() => setSeconds(0)}
            className="text-stone-400 hover:text-white cursor-pointer"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      {/* Identificação da Aula Atual */}
      <div className="my-2 bg-amber-950/60 border border-amber-800/80 rounded-2xl p-3 text-center">
        <div className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
          Aula {lesson.id} de 12 · {lesson.shortTitle}
        </div>
        <h2 className="text-lg font-black text-white font-heading mt-0.5">
          {currentSlide?.title}
        </h2>
        <div className="text-xs font-mono font-bold text-amber-400 mt-1">
          Slide {currentSlideIndex + 1} de {lesson.slides.length} ({currentSlide?.subtitle})
        </div>
      </div>

      {/* NOTAS DO PROFESSOR (DESTAQUE PARA O APRESENTADOR LER NO CELULAR) */}
      <div className="flex-1 bg-stone-800/90 rounded-2xl p-4 border border-stone-700 overflow-y-auto my-2 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wide mb-2 pb-1 border-b border-stone-700">
            <MessageSquare size={16} />
            <span>Notas do Apresentador (O que falar agora):</span>
          </div>
          <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-sans">
            {currentSlide?.speakerNotes || "Apresente o slide e comente com os alunos os exemplos práticos."}
          </p>
        </div>

        {/* Atalho direto para Lente CAJU (Slide 6) */}
        <div className="mt-3 pt-2 border-t border-stone-700/80 flex justify-between items-center">
          <button
            onClick={() => onGoToSlide(5)} // Slide 6 é index 5
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-800 hover:bg-red-700 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            <Sparkles size={14} />
            <span>Pular p/ Lente CAJU</span>
          </button>

          <span className="text-[11px] text-stone-400 font-mono">
            {lesson.caseCharacter}
          </span>
        </div>
      </div>

      {/* BOTÕES GIGANTES DE NAVEGAÇÃO (TOUCH FRIENDLY PARA O PROFESSOR) */}
      <div className="grid grid-cols-2 gap-3 mt-1">
        <button
          onClick={onPrevSlide}
          disabled={currentSlideIndex === 0}
          className="h-20 rounded-2xl bg-stone-800 hover:bg-stone-700 disabled:opacity-30 border-2 border-stone-600 active:scale-95 transition-all flex flex-col items-center justify-center font-black text-stone-200 cursor-pointer shadow-lg"
        >
          <ChevronLeft size={32} />
          <span className="text-xs uppercase tracking-wider mt-0.5">Anterior</span>
        </button>

        <button
          onClick={onNextSlide}
          disabled={currentSlideIndex === lesson.slides.length - 1}
          className="h-20 rounded-2xl bg-amber-700 hover:bg-amber-600 disabled:opacity-30 border-2 border-amber-500 active:scale-95 transition-all flex flex-col items-center justify-center font-black text-white cursor-pointer shadow-lg"
        >
          <ChevronRight size={32} />
          <span className="text-xs uppercase tracking-wider mt-0.5">Próximo</span>
        </button>
      </div>
    </div>
  );
}
