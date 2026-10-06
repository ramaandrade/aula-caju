import React, { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Award, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuickCheckQuiz({ questions = [], lessonId, onQuizCompleted }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = questions[currentQuestionIndex];

  const handleSelectOption = (idx) => {
    if (hasAnswered) return;
    setSelectedOption(idx);
    setHasAnswered(true);

    const isCorrect = idx === currentQ.correctIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
      if (onQuizCompleted) {
        onQuizCompleted(lessonId, score + (selectedOption === currentQ.correctIndex ? 1 : 0));
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="text-center py-6 text-stone-500 text-xs">
        Nenhuma questão cadastrada para esta checagem.
      </div>
    );
  }

  // TELA DE CONCLUSÃO
  if (isCompleted) {
    return (
      <div className="bg-white rounded-3xl p-5 border-2 border-amber-300 shadow-md text-center max-w-md mx-auto animate-in zoom-in-95">
        <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-3 shadow-inner">
          <Award size={32} />
        </div>
        <h3 className="font-extrabold text-base text-amber-950 font-heading mb-1">
          Checagem Rápida Concluída!
        </h3>
        <p className="text-xs text-stone-600 mb-4">
          Você acertou <strong>{score}</strong> de <strong>{questions.length}</strong> questões.
          A checagem é puramente formativa, sem notas punitivas.
        </p>

        <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 mb-4 text-left space-y-1">
          <div className="flex items-center gap-1.5 font-bold">
            <Sparkles size={16} className="text-amber-600" />
            <span>Objetivo Pedagógico Alcançado:</span>
          </div>
          <p className="text-[11px] text-stone-700 leading-snug">
            Os conceitos da Metodologia CAJU foram revisados com sucesso. Agora você está pronto para aplicar na prática!
          </p>
        </div>

        <div className="flex gap-2 justify-center">
          <button 
            onClick={handleRestart}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-stone-300 text-stone-700 font-bold text-xs hover:bg-stone-50 transition-colors cursor-pointer"
          >
            <RotateCcw size={14} />
            <span>Refazer Quiz</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-5 border-2 border-stone-200 shadow-sm max-w-lg w-full mx-auto select-none">
      {/* Progresso do Quiz */}
      <div className="flex justify-between items-center mb-3 text-xs">
        <span className="font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full">
          Questão {currentQuestionIndex + 1} de {questions.length}
        </span>
        <span className="text-[11px] text-stone-500 font-medium">
          Avaliação Formativa · Sem nota
        </span>
      </div>

      {/* Pergunta */}
      <h3 className="font-bold text-xs sm:text-sm text-stone-900 leading-snug mb-3">
        {currentQ.question}
      </h3>

      {/* Opções */}
      <div className="space-y-2 mb-4">
        {currentQ.options.map((opt, idx) => {
          const isSelected = selectedOption === idx;
          const isCorrect = idx === currentQ.correctIndex;

          let btnClass = "bg-stone-50 hover:bg-amber-50/70 border-stone-200 text-stone-800";
          if (hasAnswered) {
            if (isCorrect) {
              btnClass = "bg-emerald-100 border-emerald-500 text-emerald-950 font-semibold ring-2 ring-emerald-300";
            } else if (isSelected) {
              btnClass = "bg-red-100 border-red-500 text-red-950 ring-2 ring-red-300";
            } else {
              btnClass = "opacity-40 bg-stone-50 border-stone-200 text-stone-500";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelectOption(idx)}
              disabled={hasAnswered}
              className={`w-full text-left p-2.5 sm:p-3 rounded-2xl border-2 transition-all flex items-start gap-2.5 cursor-pointer text-xs leading-snug ${btnClass}`}
            >
              <span className="w-5 h-5 rounded-full border shrink-0 flex items-center justify-center font-bold text-[10px] mt-0.5">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="flex-1">{opt}</span>
              {hasAnswered && isCorrect && (
                <CheckCircle2 size={16} className="text-emerald-700 shrink-0 mt-0.5" />
              )}
              {hasAnswered && isSelected && !isCorrect && (
                <XCircle size={16} className="text-red-700 shrink-0 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback Explicativo Imediato */}
      {hasAnswered && (
        <div className="bg-amber-50/90 border border-amber-300 rounded-2xl p-3 text-xs text-stone-800 mb-3 animate-in fade-in duration-200">
          <div className="font-extrabold text-amber-950 flex items-center gap-1.5 mb-1">
            <Sparkles size={14} className="text-amber-700" />
            <span>Por que esta é a resposta correta?</span>
          </div>
          <p className="text-[11px] text-stone-700 leading-relaxed font-medium">
            {currentQ.explanation}
          </p>
        </div>
      )}

      {/* Botão Avançar */}
      {hasAnswered && (
        <button
          onClick={handleNext}
          className="w-full py-2.5 bg-amber-900 hover:bg-amber-950 text-white font-extrabold rounded-2xl text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
        >
          <span>{currentQuestionIndex < questions.length - 1 ? 'Próxima Questão' : 'Ver Resultado da Aula'}</span>
          <ArrowRight size={16} />
        </button>
      )}
    </div>
  );
}
