import React, { useState } from 'react';

const RISKS = [
  { id: 'gas', title: 'Alta do preço do gás', prob: 'alta', impact: 'alto', color: '#e06666', desc: 'Botijão subiu 20%, impactando diretamente o CVu da marmita. Exige compra coletiva ou revisão de cardápio.' },
  { id: 'estiagem', title: 'Estiagem prolongada', prob: 'alta', impact: 'médio', color: '#ea9999', desc: 'Afeta a safra agrícola regional e diminui o poder de compra da população no interior.' },
  { id: 'fornecedor', title: 'Fornecedor único fecha', prob: 'média', impact: 'baixo', color: '#ffe599', desc: 'Exige cadastro imediato de pelo menos dois frigoríficos e avícolas locais alternativos.' },
  { id: 'fiado', title: 'Inadimplência do fiado', prob: 'média', impact: 'médio', color: '#f9cb9c', desc: 'Atrasos no pagamento da caderneta asfixiam o capital de giro. Mitigação: incentivar Pix com desconto.' },
  { id: 'pix', title: 'Golpe do falso Pix', prob: 'baixa', impact: 'alto', color: '#f9cb9c', desc: 'Comprovante falso de agendamento enviado por mensagem. Mitigação: conferir extrato no app antes de liberar entregas.' },
  { id: 'multa', title: 'Multa sanitária', prob: 'baixa', impact: 'médio', color: '#ffe599', desc: 'Fiscalização de higiene Anvisa RDC 216. Mitigação: toucas, etiquetas de validade e dedetização periódica.' },
  { id: 'concorrente', title: 'Concorrente novo', prob: 'baixa', impact: 'baixo', color: '#b6d7a8', desc: 'Abertura de nova marmitaria na rua. Mitigação: focar na qualidade do tempero, pontualidade e relacionamento.' }
];

export default function Fig16RiskMatrix() {
  const [selectedRisk, setSelectedRisk] = useState(RISKS[0]); // Alta do gás default

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center p-2 select-none">
      <div className="text-center mb-1">
        <h4 className="text-sm font-bold text-amber-950 uppercase tracking-wider">
          Figura 16 — Matriz de Risco de uma Marmitaria
        </h4>
        <p className="text-xs text-stone-600">
          Severidade = Probabilidade × Impacto · Toque em uma célula para ver a mitigação
        </p>
      </div>

      <div className="w-full max-w-sm flex flex-col items-center my-1">
        {/* Título Eixo Y */}
        <div className="text-[11px] font-bold text-amber-950 mb-0.5 text-center">
          Probabilidade (Frequência)
        </div>

        {/* Grade 3x3 */}
        <div className="w-full grid grid-cols-3 gap-1.5 p-1.5 bg-stone-100 border-2 border-stone-800 rounded-xl shadow-md">
          {/* LINHA 1: ALTA PROBABILIDADE */}
          {/* Coluna Baixo */}
          <div className="h-18 bg-[#fcd34d] p-1.5 rounded-lg border border-stone-300 flex flex-col justify-center items-center text-center">
            <span className="text-[9px] text-stone-600 font-mono mb-1">Alta / Baixo</span>
            <span className="text-[10px] text-stone-500 italic">Variação de hortifrúti</span>
          </div>
          {/* Coluna Médio (Estiagem) */}
          <div 
            onClick={() => setSelectedRisk(RISKS.find(r => r.id === 'estiagem'))}
            className={`h-18 bg-[#f87171]/80 hover:bg-[#f87171] p-1.5 rounded-lg border-2 cursor-pointer transition-all flex flex-col justify-center items-center text-center ${
              selectedRisk.id === 'estiagem' ? 'ring-3 ring-amber-400 border-red-900 scale-102' : 'border-red-400'
            }`}
          >
            <span className="text-[9px] text-red-950 font-bold mb-0.5">Alta / Médio</span>
            <span className="text-[11px] font-extrabold text-white leading-tight">Estiagem</span>
          </div>
          {/* Coluna Alto (Alta do Gás) */}
          <div 
            onClick={() => setSelectedRisk(RISKS.find(r => r.id === 'gas'))}
            className={`h-18 bg-[#dc2626] hover:bg-[#b91c1c] p-1.5 rounded-lg border-2 cursor-pointer transition-all flex flex-col justify-center items-center text-center ${
              selectedRisk.id === 'gas' ? 'ring-3 ring-amber-400 border-red-950 scale-102' : 'border-red-700'
            }`}
          >
            <span className="text-[9px] text-red-100 font-bold mb-0.5">Alta / Alto</span>
            <span className="text-[11px] font-extrabold text-white leading-tight">Alta do gás</span>
          </div>

          {/* LINHA 2: MÉDIA PROBABILIDADE */}
          {/* Coluna Baixo (Fornecedor) */}
          <div 
            onClick={() => setSelectedRisk(RISKS.find(r => r.id === 'fornecedor'))}
            className={`h-18 bg-[#fde047] hover:bg-[#facc15] p-1.5 rounded-lg border-2 cursor-pointer transition-all flex flex-col justify-center items-center text-center ${
              selectedRisk.id === 'fornecedor' ? 'ring-3 ring-amber-400 border-amber-800 scale-102' : 'border-amber-300'
            }`}
          >
            <span className="text-[9px] text-amber-900 font-bold mb-0.5">Média / Baixo</span>
            <span className="text-[10px] font-bold text-amber-950 leading-tight">Fornecedor único fecha</span>
          </div>
          {/* Coluna Médio (Fiado) */}
          <div 
            onClick={() => setSelectedRisk(RISKS.find(r => r.id === 'fiado'))}
            className={`h-18 bg-[#fb923c] hover:bg-[#f97316] p-1.5 rounded-lg border-2 cursor-pointer transition-all flex flex-col justify-center items-center text-center ${
              selectedRisk.id === 'fiado' ? 'ring-3 ring-amber-400 border-orange-900 scale-102' : 'border-orange-400'
            }`}
          >
            <span className="text-[9px] text-orange-950 font-bold mb-0.5">Média / Médio</span>
            <span className="text-[10.5px] font-extrabold text-white leading-tight">Inadimplência do fiado</span>
          </div>
          {/* Coluna Alto */}
          <div className="h-18 bg-[#f87171]/70 p-1.5 rounded-lg border border-stone-300 flex flex-col justify-center items-center text-center">
            <span className="text-[9px] text-red-950 font-bold mb-0.5">Média / Alto</span>
            <span className="text-[10px] text-red-900 italic">Pane geral no freezer</span>
          </div>

          {/* LINHA 3: BAIXA PROBABILIDADE */}
          {/* Coluna Baixo (Concorrente Novo) */}
          <div 
            onClick={() => setSelectedRisk(RISKS.find(r => r.id === 'concorrente'))}
            className={`h-18 bg-[#86efac] hover:bg-[#4ade80] p-1.5 rounded-lg border-2 cursor-pointer transition-all flex flex-col justify-center items-center text-center ${
              selectedRisk.id === 'concorrente' ? 'ring-3 ring-amber-400 border-emerald-900 scale-102' : 'border-emerald-300'
            }`}
          >
            <span className="text-[9px] text-emerald-900 font-bold mb-0.5">Baixa / Baixo</span>
            <span className="text-[10.5px] font-bold text-emerald-950 leading-tight">Concorrente novo</span>
          </div>
          {/* Coluna Médio (Multa Sanitária) */}
          <div 
            onClick={() => setSelectedRisk(RISKS.find(r => r.id === 'multa'))}
            className={`h-18 bg-[#fde047] hover:bg-[#facc15] p-1.5 rounded-lg border-2 cursor-pointer transition-all flex flex-col justify-center items-center text-center ${
              selectedRisk.id === 'multa' ? 'ring-3 ring-amber-400 border-amber-800 scale-102' : 'border-amber-300'
            }`}
          >
            <span className="text-[9px] text-amber-900 font-bold mb-0.5">Baixa / Médio</span>
            <span className="text-[10.5px] font-bold text-amber-950 leading-tight">Multa sanitária</span>
          </div>
          {/* Coluna Alto (Falso Pix) */}
          <div 
            onClick={() => setSelectedRisk(RISKS.find(r => r.id === 'pix'))}
            className={`h-18 bg-[#fb923c] hover:bg-[#f97316] p-1.5 rounded-lg border-2 cursor-pointer transition-all flex flex-col justify-center items-center text-center ${
              selectedRisk.id === 'pix' ? 'ring-3 ring-amber-400 border-orange-900 scale-102' : 'border-orange-400'
            }`}
          >
            <span className="text-[9px] text-orange-950 font-bold mb-0.5">Baixa / Alto</span>
            <span className="text-[10.5px] font-extrabold text-white leading-tight">Golpe do falso Pix</span>
          </div>
        </div>

        {/* Rótulo Eixo X */}
        <div className="w-full flex justify-between px-3 text-[10px] font-bold text-amber-950 mt-1">
          <span>Impacto Baixo</span>
          <span>Impacto Médio</span>
          <span>Impacto Alto</span>
        </div>
      </div>

      {/* Cartão de Detalhe da Mitigação */}
      <div className="w-full mt-1 bg-amber-50 border border-amber-300 rounded-xl p-2.5 text-xs text-stone-800">
        <div className="flex justify-between items-center mb-1">
          <span className="font-extrabold text-amber-950 text-sm">{selectedRisk.title}</span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-950 uppercase">
            {selectedRisk.prob} prob. / {selectedRisk.impact} impacto
          </span>
        </div>
        <p className="text-[11px] text-stone-700 leading-snug">
          <span className="font-bold text-amber-900">Ação de Mitigação: </span>
          {selectedRisk.desc}
        </p>
      </div>
    </div>
  );
}
