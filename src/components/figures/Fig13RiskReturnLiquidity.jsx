import React, { useState } from 'react';

const ASSETS = [
  { 
    id: 'selic', 
    name: 'Tesouro Selic / CDB Diário', 
    x: 105, 
    y: 155, 
    r: 16, 
    liquidity: 'Alta (resgate D+0/D+1)', 
    risk: 'Baixo', 
    returnLevel: 'Baixo (100% CDI)', 
    color: '#15803d', 
    desc: 'Melhor opção para Reserva de Emergência da empresa. Seguro e com liquidez imediata.' 
  },
  { 
    id: 'capitalizacao', 
    name: 'Título de Capitalização', 
    x: 145, 
    y: 195, 
    r: 15, 
    liquidity: 'Baixa (carência de meses/anos)', 
    risk: 'Baixo', 
    returnLevel: 'Negativo (perde da inflação)', 
    color: '#b91c1c', 
    desc: 'Não é investimento! É um jogo de sorteio bancário com perda garantida de poder de compra.' 
  },
  { 
    id: 'multimercado', 
    name: 'Fundo Multimercado', 
    x: 235, 
    y: 125, 
    r: 16, 
    liquidity: 'Média (resgate D+15 a D+30)', 
    risk: 'Médio', 
    returnLevel: 'Médio', 
    color: '#eab308', 
    desc: 'Combina renda fixa e juros futuros. Indicado para sobras de médio prazo da empresa.' 
  },
  { 
    id: 'equipamento', 
    name: 'Equipamento do Próprio Negócio', 
    x: 275, 
    y: 75, 
    r: 18, 
    liquidity: 'Baixa (não vira dinheiro rápido)', 
    risk: 'Médio (risco operacional)', 
    returnLevel: 'Muito Alto (ganho de produtividade)', 
    color: '#b91c1c', 
    desc: 'Seladora, freezer ou maquinário que diminui custos. Costuma render mais de 5% ao mês em margem!' 
  },
  { 
    id: 'acoes', 
    name: 'Ações de Empresas', 
    x: 360, 
    y: 50, 
    r: 16, 
    liquidity: 'Média (D+2 na bolsa)', 
    risk: 'Alto (oscilações diárias)', 
    returnLevel: 'Alto no longo prazo', 
    color: '#eab308', 
    desc: 'Renda variável para patrimônio excedente. Nunca para capital de giro de curto prazo.' 
  }
];

export default function Fig13RiskReturnLiquidity() {
  const [selectedAsset, setSelectedAsset] = useState(ASSETS[3]); // Equipamento default

  const svgWidth = 460;
  const svgHeight = 230;
  const chartLeft = 55;
  const chartBottom = 205;
  const chartTop = 25;

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center p-2 select-none">
      <div className="text-center mb-1">
        <h4 className="text-sm font-bold text-amber-950 uppercase tracking-wider">
          Figura 13 — Risco, Retorno e Liquidez
        </h4>
        <p className="text-xs text-stone-600">
          Posições qualitativas: o tamanho e a cor da bolha indicam a liquidez
        </p>
      </div>

      <div className="w-full aspect-2/1 max-h-[250px] relative">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full">
          {/* Eixos */}
          <line x1={chartLeft} y1={chartTop} x2={chartLeft} y2={chartBottom} stroke="#78350f" strokeWidth="1.5" />
          <line x1={chartLeft} y1={chartBottom} x2={svgWidth - 10} y2={chartBottom} stroke="#78350f" strokeWidth="1.5" />

          {/* Rótulos Eixo Y (Retorno Esperado) */}
          <text x={chartLeft - 8} y={chartTop + 15} textAnchor="end" fontSize="9.5" fill="#78350f" fontWeight="bold">alto</text>
          <text x={chartLeft - 8} y={115} textAnchor="end" fontSize="9.5" fill="#78350f" fontWeight="bold">médio</text>
          <text x={chartLeft - 8} y={185} textAnchor="end" fontSize="9.5" fill="#78350f" fontWeight="bold">baixo</text>
          <text x="14" y="25" fontSize="10" fontWeight="bold" fill="#78350f" transform="rotate(-90 14,30)">
            Retorno esperado
          </text>

          {/* Rótulos Eixo X (Risco) */}
          <text x={105} y={chartBottom + 16} textAnchor="middle" fontSize="9.5" fill="#78350f" fontWeight="bold">baixo</text>
          <text x={255} y={chartBottom + 16} textAnchor="middle" fontSize="9.5" fill="#78350f" fontWeight="bold">médio</text>
          <text x={380} y={chartBottom + 16} textAnchor="middle" fontSize="9.5" fill="#78350f" fontWeight="bold">alto</text>
          <text x={svgWidth / 2} y={chartBottom + 22} textAnchor="middle" fontSize="10" fontWeight="bold" fill="#78350f">
            Risco
          </text>

          {/* Legenda de Liquidez no topo esquerdo */}
          <g transform={`translate(${chartLeft + 15}, 25)`}>
            <circle cx="6" cy="6" r="5" fill="#15803d" />
            <text x="16" y="9" fontSize="8" fill="#166534" fontWeight="bold">liquidez alta</text>

            <circle cx="6" cy="18" r="5" fill="#eab308" />
            <text x="16" y="21" fontSize="8" fill="#854d0e" fontWeight="bold">liquidez média</text>

            <circle cx="6" cy="30" r="5" fill="#b91c1c" />
            <text x="16" y="33" fontSize="8" fill="#991b1b" fontWeight="bold">liquidez baixa</text>
          </g>

          {/* Bolhas dos Ativos */}
          {ASSETS.map((asset) => {
            const isSelected = selectedAsset.id === asset.id;
            return (
              <g 
                key={asset.id} 
                className="cursor-pointer transition-transform"
                onClick={() => setSelectedAsset(asset)}
              >
                <circle 
                  cx={asset.x} 
                  cy={asset.y} 
                  r={asset.r} 
                  fill={asset.color} 
                  stroke={isSelected ? '#1c1917' : '#ffffff'} 
                  strokeWidth={isSelected ? '3' : '1.5'}
                  filter="drop-shadow(0 2px 3px rgba(0,0,0,0.2))"
                />
                {/* Rótulo ao lado da bolha */}
                <text 
                  x={asset.x + asset.r + 6} 
                  y={asset.y + 4} 
                  fontSize="8.5" 
                  fill={isSelected ? '#b91c1c' : '#1c1917'} 
                  fontWeight={isSelected ? '800' : '600'}
                >
                  {asset.name.length > 20 ? asset.name.split('/')[0] : asset.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Detalhe do Ativo Selecionado */}
      <div className="w-full mt-1 bg-amber-50 border border-amber-300 rounded-xl p-2.5 text-xs text-stone-800">
        <div className="flex justify-between items-center mb-1">
          <span className="font-extrabold text-amber-950 text-sm">{selectedAsset.name}</span>
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
            selectedAsset.color === '#15803d' ? 'bg-emerald-100 text-emerald-800' :
            selectedAsset.color === '#eab308' ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'
          }`}>
            {selectedAsset.liquidity}
          </span>
        </div>
        <div className="text-[11px] text-stone-600 mb-1">
          <span className="font-semibold">Risco:</span> {selectedAsset.risk} · <span className="font-semibold">Retorno:</span> {selectedAsset.returnLevel}
        </div>
        <p className="text-[11px] text-stone-700 leading-snug">
          {selectedAsset.desc}
        </p>
      </div>
    </div>
  );
}
