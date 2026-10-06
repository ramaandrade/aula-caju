import React from 'react';
import { 
  Users, TrendingUp, AlertTriangle, CheckCircle, BarChart3, 
  BookOpen, Sparkles, X, Award, Clock
} from 'lucide-react';
import { LESSONS_DATA } from '../data/lessonsData';

export default function ProfessorDashboard({ isOpen, onClose, completedLessons = [] }) {
  if (!isOpen) return null;

  // Estatísticas simuladas / reais da turma da URCA
  const totalStudents = 38; // Turma de Ciências Econômicas URCA
  const avgCompletion = Math.round((completedLessons.length / 12) * 100);

  const LESSON_STATS = [
    { id: 1, name: 'Gestão Financeira', views: 36, avgQuizScore: 82, hardTopic: 'Separação de contas (pró-labore)' },
    { id: 2, name: 'Teorias Estratégicas', views: 32, avgQuizScore: 71, hardTopic: 'Custos de transação (NEI)' },
    { id: 3, name: 'Planejamento (Av. 2)', views: 38, avgQuizScore: 88, hardTopic: 'Sazonalidade das romarias' },
    { id: 4, name: 'Fluxo de Caixa', views: 35, avgQuizScore: 68, hardTopic: 'Descasamento de prazo no fiado' },
    { id: 5, name: 'Custos e Despesas (Av. 2)', views: 38, avgQuizScore: 62, hardTopic: 'Diluição de custos fixos' },
    { id: 6, name: 'Precificação (Av. 2)', views: 38, avgQuizScore: 59, hardTopic: 'Fórmula do Markup Divisor' },
    { id: 7, name: 'Capital de Giro (Av. 2)', views: 37, avgQuizScore: 74, hardTopic: 'Ciclo financeiro em dias' },
    { id: 8, name: 'Crédito e Financ. (Av. 2)', views: 36, avgQuizScore: 79, hardTopic: 'Price vs SAC' },
    { id: 9, name: 'Investimentos (Av. 2)', views: 35, avgQuizScore: 81, hardTopic: 'Payback simples' },
    { id: 10, name: 'Indicadores (Av. 2)', views: 38, avgQuizScore: 64, hardTopic: 'Ponto de Equilíbrio (Break-Even)' },
    { id: 11, name: 'Compliance e Tributos', views: 29, avgQuizScore: 76, hardTopic: 'Reforma Tributária e CBS/IBS' },
    { id: 12, name: 'Gestão de Riscos', views: 31, avgQuizScore: 85, hardTopic: 'Matriz 3x3 de severidade' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-amber-50 rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border-2 border-amber-900/30 overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-amber-900 text-amber-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-800 text-amber-200">
              <Users size={20} />
            </div>
            <div>
              <h3 className="font-extrabold text-base leading-tight font-heading">
                Painel do Docente · Economia URCA
              </h3>
              <p className="text-xs text-amber-200 opacity-90">
                Acompanhamento Pedagógico & Desempenho da Avaliação 2
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

        {/* Corpo do Dashboard */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          {/* Cards de Métricas Gerais */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="bg-white rounded-2xl p-3 border border-amber-200 shadow-xs text-center">
              <div className="text-[10px] font-bold text-stone-500 uppercase">Estudantes Ativos</div>
              <div className="text-xl font-black text-amber-950 font-mono mt-0.5">{totalStudents}</div>
              <div className="text-[9px] text-emerald-700 font-bold">100% no Cariri</div>
            </div>

            <div className="bg-white rounded-2xl p-3 border border-amber-200 shadow-xs text-center">
              <div className="text-[10px] font-bold text-stone-500 uppercase">Média de Acertos</div>
              <div className="text-xl font-black text-emerald-700 font-mono mt-0.5">74%</div>
              <div className="text-[9px] text-stone-500">Meta: ≥ 75% (PRD)</div>
            </div>

            <div className="bg-white rounded-2xl p-3 border border-amber-200 shadow-xs text-center">
              <div className="text-[10px] font-bold text-stone-500 uppercase">Foco Avaliação 2</div>
              <div className="text-xl font-black text-red-700 font-mono mt-0.5">7 Aulas</div>
              <div className="text-[9px] text-red-700 font-bold">Aulas 3, 5 a 10</div>
            </div>
          </div>

          {/* Destaque: Questões com Mais Dificuldade (Pontos de Atenção) */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-3.5 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-red-900">
              <AlertTriangle size={16} className="text-red-700" />
              <span>Pontos de Atenção na Avaliação 2 (Mais Erros na Checagem):</span>
            </div>
            <ul className="text-xs text-stone-700 space-y-1.5">
              <li className="flex items-center justify-between bg-white/80 p-2 rounded-xl">
                <span><strong>Aula 6 (Precificação):</strong> Margem sobre o custo em vez do Markup Divisor.</span>
                <span className="text-red-700 font-mono font-bold text-xs shrink-0 ml-2">41% erros</span>
              </li>
              <li className="flex items-center justify-between bg-white/80 p-2 rounded-xl">
                <span><strong>Aula 5 (Custos):</strong> Confusão entre rateio de custo fixo e custo variável.</span>
                <span className="text-red-700 font-mono font-bold text-xs shrink-0 ml-2">38% erros</span>
              </li>
              <li className="flex items-center justify-between bg-white/80 p-2 rounded-xl">
                <span><strong>Aula 10 (Indicadores):</strong> Cálculo de Ponto de Equilíbrio em unidades.</span>
                <span className="text-red-700 font-mono font-bold text-xs shrink-0 ml-2">36% erros</span>
              </li>
            </ul>
          </div>

          {/* Tabela de Aulas & Engajamento */}
          <div>
            <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wider mb-2">
              Engajamento e Desempenho por Aula
            </h4>
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
              <div className="divide-y divide-stone-100 text-xs">
                {LESSON_STATS.map((l) => (
                  <div key={l.id} className="p-2.5 flex items-center justify-between hover:bg-stone-50 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] text-white ${
                        l.id === 3 || (l.id >= 5 && l.id <= 10) ? 'bg-red-700' : 'bg-emerald-800'
                      }`}>
                        {l.id}
                      </span>
                      <div>
                        <div className="font-bold text-stone-900">{l.name}</div>
                        <div className="text-[10px] text-stone-500">{l.hardTopic}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-stone-900">{l.views}/{totalStudents} viram</div>
                      <div className={`text-[10px] font-bold ${
                        l.avgQuizScore < 70 ? 'text-red-600' : 'text-emerald-700'
                      }`}>
                        {l.avgQuizScore}% acerto quiz
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="p-3 bg-amber-100/60 border-t border-amber-200 text-center">
          <button 
            onClick={onClose}
            className="w-full py-2 bg-amber-900 hover:bg-amber-950 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer shadow"
          >
            Fechar Painel
          </button>
        </div>
      </div>
    </div>
  );
}
