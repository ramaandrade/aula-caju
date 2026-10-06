import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Sparkles, ExternalLink, 
  HelpCircle, CheckCircle, Calculator, FileText, Share2
} from 'lucide-react';

// Figuras SVG
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

// Ferramentas Ubíquas
import MarkupCalculator from './InteractiveTools/MarkupCalculator';
import WorkingCapitalTimeline from './InteractiveTools/WorkingCapitalTimeline';
import BreakEvenInteractive from './InteractiveTools/BreakEvenInteractive';
import PriceVsSacComparator from './InteractiveTools/PriceVsSacComparator';
import QuickCheckQuiz from './QuickCheckQuiz';

export default function SlideViewer({ 
  lesson, 
  currentSlideIndex, 
  onNextSlide, 
  onPrevSlide, 
  onSelectSlide,
  onOpenCajuLens,
  onOpenSummary,
  onQuizCompleted
}) {
  const currentSlide = lesson.slides[currentSlideIndex];
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const [showTool, setShowTool] = useState(false);

  // Reset tool toggle when slide changes
  useEffect(() => {
    setShowTool(false);
  }, [currentSlideIndex]);

  // Gestos de deslize touch (Swipe)
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Deslizar para a esquerda -> Próximo
      onNextSlide();
    } else if (distance < -minSwipeDistance) {
      // Deslizar para a direita -> Anterior
      onPrevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Renderizador dinâmico de figura
  const renderVisual = () => {
    if (currentSlide.type === 'quiz') {
      return (
        <QuickCheckQuiz 
          questions={currentSlide.quizQuestions} 
          lessonId={lesson.id} 
          onQuizCompleted={onQuizCompleted} 
        />
      );
    }

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

  // Ferramenta Ubíqua contextual da aula
  const renderUbiquitousTool = () => {
    if (lesson.id === 6) return <MarkupCalculator />;
    if (lesson.id === 7) return <WorkingCapitalTimeline />;
    if (lesson.id === 8) return <PriceVsSacComparator />;
    if (lesson.id === 10) return <BreakEvenInteractive />;
    return null;
  };

  const hasTool = [6, 7, 8, 10].includes(lesson.id);

  // Link para Bodega CAJU correspondente
  const handleGoToBodega = () => {
    // Abrir a bodega se hospedada localmente ou em outra porta/aba
    window.open('../bodega-caju/index.html', '_blank') || window.open('http://localhost:5173', '_blank');
  };

  return (
    <div 
      className="flex-1 flex flex-col justify-between max-w-xl w-full mx-auto p-3 sm:p-4 select-none touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Título do Slide & Subtítulo */}
      <div className="text-center mb-3">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 bg-amber-100/90 px-2.5 py-0.5 rounded-full inline-block mb-1">
          {currentSlide.subtitle}
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-amber-950 font-heading leading-tight">
          {currentSlide.title}
        </h2>
      </div>

      {/* ÁREA CENTRAL DO SLIDE (FIGURA OU CONTEÚDO) */}
      <div className="flex-1 flex flex-col items-center justify-center my-1 w-full">
        {renderVisual() ? (
          <div className="w-full animate-in fade-in zoom-in-98 duration-300">
            {renderVisual()}
          </div>
        ) : (
          /* Card de texto/modelo quando não é figura chave complexa */
          <div className="w-full bg-white rounded-3xl p-5 border-2 border-amber-200 shadow-sm text-left space-y-3">
            <p className="text-sm sm:text-base font-semibold text-stone-900 leading-relaxed">
              {currentSlide.content}
            </p>

            {currentSlide.studyContent && (
              <div className="bg-amber-50/80 rounded-2xl p-3.5 border border-amber-200/80 text-xs text-stone-700 leading-relaxed font-medium">
                <span className="font-bold text-amber-950 block mb-0.5">Aprofundamento:</span>
                {currentSlide.studyContent}
              </div>
            )}

            {currentSlide.localSource && (
              <div className="text-[10px] text-stone-500 font-semibold bg-stone-100 p-2 rounded-xl">
                📍 <strong>Fonte:</strong> {currentSlide.localSource.source} ({currentSlide.localSource.year}) · {currentSlide.localSource.location}
              </div>
            )}

            {currentSlide.rememberItems && (
              <ul className="space-y-1.5 pt-1 text-xs">
                {currentSlide.rememberItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-stone-800 font-medium">
                    <CheckCircle size={15} className="text-emerald-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* BOTÃO EXPANSÍVEL DE FERRAMENTA UBÍQUA (SE DISPONÍVEL) */}
      {hasTool && currentSlide.type !== 'quiz' && (
        <div className="my-2">
          <button
            onClick={() => setShowTool(!showTool)}
            className="w-full py-2 px-3 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-amber-300 shadow-xs"
          >
            <Calculator size={15} className="text-amber-800" />
            <span>{showTool ? 'Ocultar Calculadora Interativa' : 'Abrir Calculadora Prática no Balcão (Pilar U)'}</span>
          </button>
          {showTool && (
            <div className="mt-2 animate-in fade-in slide-in-from-top-2 duration-200">
              {renderUbiquitousTool()}
            </div>
          )}
        </div>
      )}

      {/* BODEGA CAJU LINK (NO ÚLTIMO SLIDE / QUIZ) */}
      {currentSlideIndex === lesson.slides.length - 1 && (
        <div className="mt-2 p-3 bg-emerald-900 text-emerald-50 rounded-2xl border-2 border-emerald-700 shadow-md flex items-center justify-between gap-2">
          <div>
            <div className="font-extrabold text-xs">Pronto para o Desafio Prático?</div>
            <div className="text-[10px] text-emerald-200">Pratique na Estação {lesson.id} do jogo Bodega CAJU</div>
          </div>
          <button
            onClick={handleGoToBodega}
            className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-amber-950 font-black rounded-xl text-xs flex items-center gap-1 transition-all cursor-pointer shadow shrink-0"
          >
            <span>Praticar</span>
            <ExternalLink size={13} />
          </button>
        </div>
      )}

      {/* RODAPÉ DO SLIDE: NAVEGAÇÃO LATERAL + BOLINHAS DE PROGRESSO */}
      <div className="mt-3 pt-2 border-t border-amber-200/60">
        {/* Bolinhas de Progresso Clicáveis */}
        <div className="flex justify-center items-center gap-1.5 mb-3">
          {lesson.slides.map((s, idx) => {
            const isActive = currentSlideIndex === idx;
            return (
              <button
                key={s.slideNum}
                onClick={() => onSelectSlide(idx)}
                title={`Slide ${idx + 1}: ${s.title}`}
                className={`transition-all rounded-full cursor-pointer ${
                  isActive 
                    ? 'w-6 h-2.5 bg-amber-900 rounded-full' 
                    : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'
                }`}
              />
            );
          })}
        </div>

        {/* Barra de Navegação: Anterior · Deslize · Próximo */}
        <div className="flex items-center justify-between">
          <button
            onClick={onPrevSlide}
            disabled={currentSlideIndex === 0}
            className={`p-2.5 rounded-2xl flex items-center gap-1 font-bold text-xs transition-all cursor-pointer ${
              currentSlideIndex === 0 
                ? 'opacity-30 cursor-not-allowed text-stone-400' 
                : 'bg-white hover:bg-amber-50 text-stone-800 border border-stone-200 shadow-sm active:scale-95'
            }`}
          >
            <ChevronLeft size={18} />
            <span className="hidden xs:inline">Anterior</span>
          </button>

          <span className="text-[11px] text-stone-500 font-medium tracking-wide">
            deslize na tela
          </span>

          <button
            onClick={onNextSlide}
            disabled={currentSlideIndex === lesson.slides.length - 1}
            className={`p-2.5 rounded-2xl flex items-center gap-1 font-bold text-xs transition-all cursor-pointer ${
              currentSlideIndex === lesson.slides.length - 1 
                ? 'opacity-30 cursor-not-allowed text-stone-400' 
                : 'bg-amber-900 hover:bg-amber-950 text-white shadow-md active:scale-95'
            }`}
          >
            <span className="hidden xs:inline">Próximo</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
