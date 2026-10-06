import React from 'react';
import { 
  Play, CheckCircle2, Award, Sparkles, BookOpen, 
  ArrowRight, Star, Clock, Layers, ExternalLink 
} from 'lucide-react';
import Fig1TrailMap from './figures/Fig1TrailMap';
import Fig2SlideSequence from './figures/Fig2SlideSequence';
import { LESSONS_DATA } from '../data/lessonsData';

export default function TrailView({ 
  onSelectLesson, 
  completedLessons = [],
  onOpenGlossary,
  onOpenDashboard
}) {
  const exam2Lessons = LESSONS_DATA.filter(l => l.isExam2);
  const otherLessons = LESSONS_DATA.filter(l => !l.isExam2);

  return (
    <div className="max-w-4xl w-full mx-auto p-3 sm:p-5 space-y-6 select-none">
      {/* Banner de Boas-Vindas & Identidade da Disciplina */}
      <div className="bg-gradient-to-br from-amber-900 via-amber-950 to-stone-900 rounded-3xl p-5 sm:p-6 text-white shadow-xl border-2 border-amber-800/40 relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest bg-red-600 text-white px-2.5 py-0.5 rounded-full shadow-sm">
              Módulo 3 · Economia URCA
            </span>
            <span className="text-xs text-amber-300 font-semibold">
              Outubro de 2026 · v1.0
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black font-heading leading-tight text-amber-50">
            Aula CAJU — Educação Financeira para Pequenos Negócios
          </h2>

          <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
            12 aulas ilustradas conduzidas pela Metodologia CAJU (Cidades, Análise Institucional, Jurídico e Ubíquo). 
            Conceitos econômicos rigorosos demonstrados com a realidade e os dados do Cariri cearense.
          </p>

          {/* Progresso Geral */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur-xs">
              <Award size={16} className="text-amber-400" />
              <span>Progresso: <strong>{completedLessons.length} de 12 aulas</strong></span>
            </div>
            <div className="flex items-center gap-1.5 bg-red-950/80 border border-red-700/80 px-3 py-1.5 rounded-xl text-red-200">
              <Star size={14} className="text-amber-400 fill-amber-400" />
              <span>Conteúdo da <strong>Avaliação 2</strong>: Aulas 3, 5, 6, 7, 8, 9 e 10</span>
            </div>
          </div>
        </div>

        {/* Caju Decorativo de Fundo */}
        <div className="absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none text-9xl">
          🥜
        </div>
      </div>

      {/* MAPA VISUAL DA TRILHA DAS 12 AULAS (FIGURA 1 DO PRD) */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border-2 border-amber-200 shadow-sm">
        <Fig1TrailMap 
          onSelectLesson={onSelectLesson} 
          completedLessons={completedLessons}
        />
      </div>

      {/* SEQUÊNCIA PADRÃO DOS 9 SLIDES (FIGURA 2 DO PRD) */}
      <div className="bg-amber-50/80 rounded-3xl p-4 sm:p-5 border border-amber-200">
        <Fig2SlideSequence />
      </div>

      {/* SEÇÃO 1: AULAS DA AVALIAÇÃO 2 (DESTAQUE PRIORITÁRIO) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-700 inline-block shadow-sm"></span>
            <h3 className="text-base sm:text-lg font-black text-amber-950 font-heading">
              Aulas da Avaliação 2 (Foco do Semestre)
            </h3>
          </div>
          <span className="text-xs font-bold text-red-700 bg-red-100 px-2.5 py-0.5 rounded-full">
            7 Aulas
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {exam2Lessons.map((lesson) => {
            const isCompleted = completedLessons.includes(lesson.id);
            return (
              <div
                key={lesson.id}
                onClick={() => onSelectLesson(lesson.id)}
                className="bg-white rounded-2xl p-4 border-2 border-red-200 hover:border-red-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-black text-white bg-red-700 px-2.5 py-0.5 rounded-lg shadow-xs">
                      Aula {lesson.id}
                    </span>
                    {isCompleted ? (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        <CheckCircle2 size={13} />
                        <span>Concluída</span>
                      </span>
                    ) : (
                      <span className="text-[11px] text-stone-500 font-medium">
                        9 slides · Formativa
                      </span>
                    )}
                  </div>

                  <h4 className="font-extrabold text-sm sm:text-base text-stone-900 group-hover:text-red-800 transition-colors leading-snug">
                    {lesson.title}
                  </h4>
                  <p className="text-xs text-stone-600 line-clamp-2 mt-1 leading-relaxed">
                    {lesson.objective}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-stone-500 font-medium">
                    👤 {lesson.caseCharacter}
                  </span>
                  <div className="flex items-center gap-1 font-bold text-red-700 group-hover:translate-x-1 transition-transform">
                    <span>Acessar Aula</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SEÇÃO 2: DEMAIS CONTEÚDOS DO MÓDULO 3 */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-800 inline-block shadow-sm"></span>
            <h3 className="text-base sm:text-lg font-black text-amber-950 font-heading">
              Demais Conteúdos do Módulo 3
            </h3>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
            5 Aulas
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {otherLessons.map((lesson) => {
            const isCompleted = completedLessons.includes(lesson.id);
            return (
              <div
                key={lesson.id}
                onClick={() => onSelectLesson(lesson.id)}
                className="bg-white rounded-2xl p-4 border border-stone-200 hover:border-emerald-700/60 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-black text-white bg-emerald-800 px-2.5 py-0.5 rounded-lg shadow-xs">
                      Aula {lesson.id}
                    </span>
                    {isCompleted ? (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        <CheckCircle2 size={13} />
                        <span>Concluída</span>
                      </span>
                    ) : (
                      <span className="text-[11px] text-stone-500 font-medium">
                        9 slides · Formativa
                      </span>
                    )}
                  </div>

                  <h4 className="font-extrabold text-sm sm:text-base text-stone-900 group-hover:text-emerald-900 transition-colors leading-snug">
                    {lesson.title}
                  </h4>
                  <p className="text-xs text-stone-600 line-clamp-2 mt-1 leading-relaxed">
                    {lesson.objective}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-stone-500 font-medium">
                    👤 {lesson.caseCharacter}
                  </span>
                  <div className="flex items-center gap-1 font-bold text-emerald-800 group-hover:translate-x-1 transition-transform">
                    <span>Acessar Aula</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rodapé Informativo Institucional */}
      <footer className="pt-6 pb-4 border-t border-amber-200 text-center text-xs text-stone-600 space-y-1">
        <p className="font-semibold text-amber-950">
          Curso de Ciências Econômicas · Universidade Regional do Cariri (URCA)
        </p>
        <p className="text-[11px] text-stone-500">
          Campus Pimenta, Crato-CE · Disciplina de Educação Financeira · Outubro de 2026
        </p>
      </footer>
    </div>
  );
}
