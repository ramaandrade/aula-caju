import React, { useState, useEffect } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Clock, MessageSquare, 
  Maximize, Minimize, Volume2, Sparkles, HelpCircle 
} from 'lucide-react';

// Figuras
import Fig5HouseVsBusiness from './figures/Fig5HouseVsBusiness';
import Fig6StrategicTheories from './figures/Fig6StrategicTheories';
import Fig7SeasonalPlanning from './figures/Fig7SeasonalPlanning';
import Fig8CashFlowWaterfall from './figures/Fig8CashFlowWaterfall';
import Fig9ScaleEconomies from './figures/Fig9ScaleEconomies';
import Fig10MarkupComposition from './figures/Fig10MarkupComposition';
import Fig11WorkingCapitalCycles from './figures/Fig11WorkingCapitalCycles';
import Fig12PriceVsSac from './figures/Fig12PriceVsSac';
import Fig13RiskReturnLiquidity from './figures/Fig13RiskReturnLiquidity';
import Fig14BreakEvenChart from './figures/Fig14BreakEvenChart';
import Fig15TaxReformTimeline from './figures/Fig15TaxReformTimeline';
import Fig16RiskMatrix from './figures/Fig16RiskMatrix';
import Fig3CajuLensModel from './figures/Fig3CajuLensModel';

export default function PresentationMode({ 
  lesson, 
  currentSlideIndex, 
  onNextSlide, 
  onPrevSlide, 
  onClose,
  onOpenCajuLens
}) {
  const [showNotes, setShowNotes] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const currentSlide = lesson.slides[currentSlideIndex];

  // Cronômetro da aula
  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Formatar tempo mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Atalhos de teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        onNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        onPrevSlide();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        setShowNotes(prev => !prev);
      } else if (e.key === 'l' || e.key === 'L') {
        e.preventDefault();
        if (onOpenCajuLens) onOpenCajuLens();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNextSlide, onPrevSlide, onClose, onOpenCajuLens]);

  const renderVisual = () => {
    if (currentSlide.type === 'caju_lens') {
      return <Fig3CajuLensModel activeConcept={lesson.shortTitle} />;
    }

    switch (currentSlide.figureKey) {
      case 'fig5_house_vs_business':
        return <Fig5HouseVsBusiness />;
      case 'fig6_strategic_theories':
        return <Fig6StrategicTheories />;
      case 'fig7_seasonal_planning':
        return <Fig7SeasonalPlanning />;
      case 'fig8_cash_flow_waterfall':
        return <Fig8CashFlowWaterfall />;
      case 'fig9_scale_economies':
        return <Fig9ScaleEconomies />;
      case 'fig10_markup_composition':
        return <Fig10MarkupComposition />;
      case 'fig11_working_capital_cycles':
        return <Fig11WorkingCapitalCycles />;
      case 'fig12_price_vs_sac':
        return <Fig12PriceVsSac />;
      case 'fig13_risk_return_liquidity':
        return <Fig13RiskReturnLiquidity />;
      case 'fig14_breakeven_chart':
        return <Fig14BreakEvenChart />;
      case 'fig15_tax_reform_timeline':
        return <Fig15TaxReformTimeline />;
      case 'fig16_risk_matrix':
        return <Fig16RiskMatrix />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950 text-white flex flex-col justify-between overflow-hidden select-none">
      {/* Barra Superior do Projetor */}
      <div className="px-6 py-3 bg-stone-900/90 border-b border-stone-800 flex items-center justify-between text-stone-300">
        <div className="flex items-center gap-4">
          <div className="text-xs font-bold text-amber-400 font-mono tracking-widest uppercase">
            AULA CAJU · PROJETOR 16:9
          </div>
          <div className="text-sm font-extrabold text-white truncate max-w-md">
            Aula {lesson.id}: {lesson.title}
          </div>
        </div>

        {/* Cronômetro e Controles */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-mono text-sm bg-stone-800 px-3 py-1 rounded-lg border border-stone-700">
            <Clock size={16} className="text-amber-400" />
            <span>{formatTime(elapsedSeconds)}</span>
          </div>

          <div className="bg-amber-900 text-amber-200 font-mono font-bold text-xs px-2.5 py-1 rounded-lg">
            {currentSlideIndex + 1} / {lesson.slides.length}
          </div>

          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              showNotes ? 'bg-amber-600 border-amber-500 text-white' : 'bg-stone-800 border-stone-700 text-stone-300 hover:text-white'
            }`}
            title="Notas do Apresentador (Tecla N)"
          >
            <MessageSquare size={18} />
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-red-900/80 hover:bg-red-800 text-white border border-red-700 transition-colors cursor-pointer"
            title="Sair do Modo Apresentação (Esc)"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* ÁREA CENTRAL DO SLIDE (PROJETOR - TEXTO GRANDE E FIGURA) */}
      <div className="flex-1 flex flex-row items-center justify-center p-6 sm:p-10 gap-8 overflow-hidden relative">
        <div className="flex-1 flex flex-col justify-center items-center max-w-5xl h-full text-center">
          {/* Subtítulo */}
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-400 mb-2">
            {currentSlide.subtitle}
          </span>

          {/* Título Principal com Fonte de Projetor (min 24pt / 1.5rem) */}
          <h1 className="presentation-text-lg font-black text-amber-100 font-heading tracking-tight mb-4 max-w-4xl">
            {currentSlide.title}
          </h1>

          {/* Se tiver figura, renderiza em destaque */}
          {renderVisual() ? (
            <div className="w-full max-h-[60vh] flex items-center justify-center scale-105 sm:scale-115">
              <div className="bg-white/95 text-stone-900 rounded-3xl p-4 shadow-2xl w-full max-w-2xl">
                {renderVisual()}
              </div>
            </div>
          ) : (
            /* Texto Conciso (até 40 palavras conforme RNF04) */
            <div className="presentation-body max-w-3xl font-medium text-stone-200 leading-relaxed bg-stone-900/60 p-8 rounded-3xl border border-stone-800/80 shadow-xl">
              {currentSlide.content}
            </div>
          )}
        </div>

        {/* NOTAS DO APRESENTADOR (PAINEL LATERAL QUANDO ATIVO) */}
        {showNotes && (
          <div className="w-80 h-full bg-stone-900 border-l border-stone-800 p-5 overflow-y-auto flex flex-col justify-between rounded-2xl shadow-2xl animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase mb-3 border-b border-stone-800 pb-2">
                <MessageSquare size={16} />
                <span>Notas do Apresentador (Professor)</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed font-sans mb-4">
                {currentSlide.speakerNotes || "Nenhuma nota específica para este slide."}
              </p>
            </div>

            <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700 text-[11px] text-stone-400">
              <span className="font-bold text-stone-200 block mb-1">Dica de Sala:</span>
              Use as setas ← → do teclado ou passe os slides pelo celular com o Controle Remoto.
            </div>
          </div>
        )}
      </div>

      {/* Barra Inferior com Navegação e Atalhos */}
      <div className="px-6 py-3 bg-stone-900/90 border-t border-stone-800 flex items-center justify-between text-stone-400 text-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={onPrevSlide}
            disabled={currentSlideIndex === 0}
            className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 disabled:opacity-30 text-white font-bold flex items-center gap-1 cursor-pointer"
          >
            <ChevronLeft size={18} />
            <span>Anterior (←)</span>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4 text-stone-500 font-mono text-[11px]">
          <span>[← / →] Mudar slide</span>
          <span>[N] Notas</span>
          <span>[L] Lente CAJU</span>
          <span>[ESC] Sair</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onNextSlide}
            disabled={currentSlideIndex === lesson.slides.length - 1}
            className="p-2 rounded-xl bg-amber-700 hover:bg-amber-600 disabled:opacity-30 text-white font-bold flex items-center gap-1 cursor-pointer"
          >
            <span>Próximo (→)</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
