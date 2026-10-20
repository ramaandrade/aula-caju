import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';
import { LESSONS_DATA } from '../src/data/lessonsData.js';
import { GLOSSARY_TERMS } from '../src/data/glossaryData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

// Helper to generate SVG figures for print
function getFigureSvg(figureKey, lessonTitle) {
  switch (figureKey) {
    case 'fig5_house_vs_business':
      return `
        <svg viewBox="0 0 500 200" width="100%" height="160" style="font-family: sans-serif;">
          <rect x="20" y="20" width="180" height="150" rx="12" fill="#8d5b2c" stroke="#5c3a1b" stroke-width="2"/>
          <text x="110" y="50" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">NEGÓCIO (PJ)</text>
          <text x="110" y="75" fill="#fef3c7" font-size="11" text-anchor="middle">• Vendas & Receitas</text>
          <text x="110" y="95" fill="#fef3c7" font-size="11" text-anchor="middle">• Insumos & Matérias-Primas</text>
          <text x="110" y="115" fill="#fef3c7" font-size="11" text-anchor="middle">• Gás & Luz Comercial</text>
          <text x="110" y="135" fill="#fef3c7" font-size="11" text-anchor="middle">• Tributos (DAS MEI)</text>
          <text x="110" y="155" fill="#fcd34d" font-size="10" font-weight="bold" text-anchor="middle">Conta Bancária PJ</text>

          <g transform="translate(200, 70)">
            <rect x="10" y="10" width="80" height="24" rx="12" fill="#b91c1c" />
            <text x="50" y="26" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">pró-labore</text>
            <text x="50" y="44" fill="#991b1b" font-size="9" font-weight="bold" text-anchor="middle">(valor fixo)</text>
            <line x1="10" y1="52" x2="85" y2="52" stroke="#b91c1c" stroke-width="3" />
            <polygon points="85,47 95,52 85,57" fill="#b91c1c" />
            <text x="50" y="68" fill="#57534e" font-size="8" font-style="italic" text-anchor="middle">Única ponte permitida</text>
          </g>

          <rect x="300" y="20" width="180" height="150" rx="12" fill="#15803d" stroke="#14532d" stroke-width="2"/>
          <text x="390" y="50" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">CASA (CPF)</text>
          <text x="390" y="75" fill="#dcfce7" font-size="11" text-anchor="middle">• Alimentação Doméstica</text>
          <text x="390" y="95" fill="#dcfce7" font-size="11" text-anchor="middle">• Escola & Material</text>
          <text x="390" y="115" fill="#dcfce7" font-size="11" text-anchor="middle">• Energia & Água da Casa</text>
          <text x="390" y="135" fill="#dcfce7" font-size="11" text-anchor="middle">• Lazer Familiar</text>
          <text x="390" y="155" fill="#86efac" font-size="10" font-weight="bold" text-anchor="middle">Conta Pessoal Física</text>
        </svg>
      `;
    case 'fig6_strategic_theories':
      return `
        <svg viewBox="0 0 500 240" width="100%" height="180" style="font-family: sans-serif;">
          <circle cx="250" cy="120" r="105" fill="none" stroke="#15803d" stroke-width="2.5" stroke-dasharray="6 4" />
          <text x="250" y="235" fill="#166534" font-size="10" font-weight="bold" text-anchor="middle">Ambiente Institucional (NEI): regras formais, informais e custos de transação</text>

          <circle cx="250" cy="120" r="38" fill="#b91c1c" stroke="#7f1d1d" stroke-width="2" />
          <text x="250" y="116" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Decisão</text>
          <text x="250" y="128" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Financeira</text>

          <circle cx="250" cy="40" r="26" fill="#8d5b2c" />
          <text x="250" y="44" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Ciclo de Vida</text>

          <circle cx="340" cy="85" r="26" fill="#8d5b2c" />
          <text x="340" y="85" fill="#ffffff" font-size="7.5" font-weight="bold" text-anchor="middle">Recursos &amp;</text>
          <text x="340" y="94" fill="#ffffff" font-size="7.5" font-weight="bold" text-anchor="middle">Capacidades</text>

          <circle cx="310" cy="180" r="26" fill="#8d5b2c" />
          <text x="310" y="180" fill="#ffffff" font-size="7.5" font-weight="bold" text-anchor="middle">Utilidade</text>
          <text x="310" y="189" fill="#ffffff" font-size="7.5" font-weight="bold" text-anchor="middle">Esperada</text>

          <circle cx="190" cy="180" r="26" fill="#8d5b2c" />
          <text x="190" y="180" fill="#ffffff" font-size="7.5" font-weight="bold" text-anchor="middle">Capital</text>
          <text x="190" y="189" fill="#ffffff" font-size="7.5" font-weight="bold" text-anchor="middle">de Giro</text>

          <circle cx="160" cy="85" r="26" fill="#8d5b2c" />
          <text x="160" y="85" fill="#ffffff" font-size="7.5" font-weight="bold" text-anchor="middle">Restrições</text>
          <text x="160" y="94" fill="#ffffff" font-size="7.5" font-weight="bold" text-anchor="middle">Financeiras</text>
        </svg>
      `;
    case 'fig7_seasonal_planning':
      return `
        <svg viewBox="0 0 500 200" width="100%" height="160" style="font-family: sans-serif;">
          <line x1="45" y1="20" x2="45" y2="160" stroke="#78350f" stroke-width="1.5"/>
          <line x1="45" y1="160" x2="480" y2="160" stroke="#78350f" stroke-width="1.5"/>
          <text x="35" y="25" fill="#78350f" font-size="9" font-weight="bold" text-anchor="end">R$ mil</text>
          <line x1="45" y1="85" x2="480" y2="85" stroke="#15803d" stroke-width="3" />
          <text x="475" y="78" fill="#15803d" font-size="9" font-weight="bold" text-anchor="end">Despesa fixa mensal: R$ 9 mil</text>

          <!-- 12 Meses -->
          <!-- Jan: 9 -->
          <rect x="55" y="85" width="26" height="75" fill="#8d5b2c" rx="2"/>
          <text x="68" y="172" font-size="8.5" fill="#44403c" text-anchor="middle">Jan</text>
          <!-- Fev: 14 (pico) -->
          <rect x="90" y="45" width="26" height="115" fill="#b91c1c" rx="2"/>
          <text x="103" y="40" font-size="7.5" fill="#b91c1c" font-weight="bold" text-anchor="middle">guardar</text>
          <text x="103" y="172" font-size="8.5" fill="#44403c" text-anchor="middle">Fev</text>
          <!-- Mar: 9 -->
          <rect x="125" y="85" width="26" height="75" fill="#8d5b2c" rx="2"/>
          <text x="138" y="172" font-size="8.5" fill="#44403c" text-anchor="middle">Mar</text>
          <!-- Abr: 8 -->
          <rect x="160" y="93" width="26" height="67" fill="#8d5b2c" rx="2"/>
          <text x="173" y="172" font-size="8.5" fill="#44403c" text-anchor="middle">Abr</text>
          <!-- Mai: 8 -->
          <rect x="195" y="93" width="26" height="67" fill="#8d5b2c" rx="2"/>
          <text x="208" y="172" font-size="8.5" fill="#44403c" text-anchor="middle">Mai</text>
          <!-- Jun: 8 -->
          <rect x="230" y="93" width="26" height="67" fill="#8d5b2c" rx="2"/>
          <text x="243" y="172" font-size="8.5" fill="#44403c" text-anchor="middle">Jun</text>
          <!-- Jul: 12 (pico) -->
          <rect x="265" y="60" width="26" height="100" fill="#b91c1c" rx="2"/>
          <text x="278" y="55" font-size="7.5" fill="#b91c1c" font-weight="bold" text-anchor="middle">guardar</text>
          <text x="278" y="172" font-size="8.5" fill="#44403c" text-anchor="middle">Jul</text>
          <!-- Ago: 8 -->
          <rect x="300" y="93" width="26" height="67" fill="#8d5b2c" rx="2"/>
          <text x="313" y="172" font-size="8.5" fill="#44403c" text-anchor="middle">Ago</text>
          <!-- Set: 15 (pico Dores) -->
          <rect x="335" y="35" width="26" height="125" fill="#b91c1c" rx="2"/>
          <text x="348" y="30" font-size="7.5" fill="#b91c1c" font-weight="bold" text-anchor="middle">guardar</text>
          <text x="348" y="172" font-size="8.5" fill="#44403c" text-anchor="middle">Set</text>
          <!-- Out: 9 -->
          <rect x="370" y="85" width="26" height="75" fill="#8d5b2c" rx="2"/>
          <text x="383" y="172" font-size="8.5" fill="#44403c" text-anchor="middle">Out</text>
          <!-- Nov: 15 (pico Finados) -->
          <rect x="405" y="35" width="26" height="125" fill="#b91c1c" rx="2"/>
          <text x="418" y="30" font-size="7.5" fill="#b91c1c" font-weight="bold" text-anchor="middle">guardar</text>
          <text x="418" y="172" font-size="8.5" fill="#44403c" text-anchor="middle">Nov</text>
          <!-- Dez: 10 -->
          <rect x="440" y="75" width="26" height="85" fill="#8d5b2c" rx="2"/>
          <text x="453" y="172" font-size="8.5" fill="#44403c" text-anchor="middle">Dez</text>
        </svg>
      `;
    case 'fig8_cash_flow_waterfall':
      return `
        <svg viewBox="0 0 500 180" width="100%" height="150" style="font-family: sans-serif;">
          <line x1="40" y1="20" x2="40" y2="150" stroke="#78350f" stroke-width="1.5"/>
          <line x1="40" y1="150" x2="480" y2="150" stroke="#78350f" stroke-width="1.5"/>
          <!-- Waterfall bars: SI 500, +1680, +300, -900, -240, -600, = 740 -->
          <rect x="50" y="125" width="45" height="25" fill="#8d5b2c" rx="2"/>
          <text x="72" y="120" font-size="8.5" font-weight="bold" text-anchor="middle">500</text>
          <text x="72" y="162" font-size="8" text-anchor="middle">S. Inicial</text>

          <rect x="110" y="41" width="45" height="84" fill="#15803d" rx="2"/>
          <text x="132" y="36" font-size="8.5" font-weight="bold" fill="#15803d" text-anchor="middle">+1.680</text>
          <text x="132" y="162" font-size="8" text-anchor="middle">Vendas</text>

          <rect x="170" y="26" width="45" height="15" fill="#15803d" rx="2"/>
          <text x="192" y="21" font-size="8.5" font-weight="bold" fill="#15803d" text-anchor="middle">+300</text>
          <text x="192" y="162" font-size="8" text-anchor="middle">Fiado</text>

          <rect x="230" y="26" width="45" height="45" fill="#b91c1c" rx="2"/>
          <text x="252" y="21" font-size="8.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">-900</text>
          <text x="252" y="162" font-size="8" text-anchor="middle">Insumos</text>

          <rect x="290" y="71" width="45" height="12" fill="#b91c1c" rx="2"/>
          <text x="312" y="66" font-size="8.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">-240</text>
          <text x="312" y="162" font-size="8" text-anchor="middle">Gás/Luz</text>

          <rect x="350" y="83" width="45" height="30" fill="#b91c1c" rx="2"/>
          <text x="372" y="78" font-size="8.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">-600</text>
          <text x="372" y="162" font-size="8" text-anchor="middle">Pró-labore</text>

          <rect x="410" y="113" width="45" height="37" fill="#eab308" rx="2"/>
          <text x="432" y="108" font-size="9" font-weight="bold" fill="#854d0e" text-anchor="middle">740</text>
          <text x="432" y="162" font-size="8" font-weight="bold" text-anchor="middle">S. Final</text>
        </svg>
      `;
    case 'fig9_scale_economies':
      return `
        <svg viewBox="0 0 500 180" width="100%" height="150" style="font-family: sans-serif;">
          <line x1="45" y1="20" x2="45" y2="150" stroke="#78350f" stroke-width="1.5"/>
          <line x1="45" y1="150" x2="480" y2="150" stroke="#78350f" stroke-width="1.5"/>
          <text x="35" y="25" fill="#78350f" font-size="9" font-weight="bold" text-anchor="end">R$/marmita</text>
          <!-- CVu line -->
          <line x1="45" y1="110" x2="480" y2="110" stroke="#15803d" stroke-width="2" stroke-dasharray="4 3"/>
          <text x="475" y="105" fill="#15803d" font-size="8.5" font-weight="bold" text-anchor="end">CVu = R$ 9,50</text>
          <!-- Curva decrescente -->
          <path d="M 60,30 Q 140,85 240,98 T 470,105" fill="none" stroke="#b91c1c" stroke-width="3" />
          <circle cx="210" cy="94" r="5" fill="#8d5b2c" />
          <text x="210" y="80" fill="#8d5b2c" font-size="9" font-weight="bold" text-anchor="middle">300 marmitas: R$ 15,17</text>
          <text x="250" y="165" fill="#78350f" font-size="9" font-weight="bold" text-anchor="middle">Marmitas por mês</text>
        </svg>
      `;
    case 'fig10_markup_composition':
      return `
        <svg viewBox="0 0 450 160" width="100%" height="140" style="font-family: sans-serif;">
          <rect x="40" y="20" width="80" height="120" rx="4" fill="#8d5b2c" />
          <rect x="40" y="20" width="80" height="32" rx="4" fill="#15803d" />
          <rect x="40" y="52" width="80" height="8" fill="#eab308" />
          <rect x="40" y="60" width="80" height="80" rx="4" fill="#8d5b2c" />

          <text x="135" y="40" fill="#15803d" font-size="11" font-weight="bold">Margem desejada (20%): R$ 3,07</text>
          <text x="135" y="58" fill="#854d0e" font-size="10" font-weight="bold">Taxa do cartão / DAS (5%): R$ 0,77</text>
          <text x="135" y="100" fill="#78350f" font-size="11" font-weight="bold">Custo total unitário: R$ 11,50 (75%)</text>
          <text x="80" y="15" fill="#991b1b" font-size="13" font-weight="bold" text-anchor="middle">Preço R$ 15,33</text>
        </svg>
      `;
    case 'fig11_working_capital_cycles':
      return `
        <svg viewBox="0 0 500 170" width="100%" height="140" style="font-family: sans-serif;">
          <!-- CO top -->
          <line x1="50" y1="25" x2="420" y2="25" stroke="#8d5b2c" stroke-width="2"/>
          <text x="235" y="18" fill="#78350f" font-size="10" font-weight="bold" text-anchor="middle">Ciclo Operacional = 75 dias</text>

          <rect x="50" y="40" width="150" height="30" fill="#eab308" rx="2"/>
          <text x="125" y="59" fill="#713f12" font-size="9" font-weight="bold" text-anchor="middle">PME 30 dias (estoque)</text>

          <rect x="200" y="40" width="220" height="30" fill="#b91c1c" rx="2"/>
          <text x="310" y="59" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">PMR 45 dias (receber)</text>

          <rect x="50" y="80" width="125" height="30" fill="#15803d" rx="2"/>
          <text x="112" y="99" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">PMP 25 dias (fornecedor)</text>

          <line x1="175" y1="130" x2="420" y2="130" stroke="#b91c1c" stroke-width="3"/>
          <polygon points="175,126 167,130 175,134" fill="#b91c1c" />
          <polygon points="420,126 428,130 420,134" fill="#b91c1c" />
          <text x="297" y="148" fill="#991b1b" font-size="10" font-weight="bold" text-anchor="middle">Ciclo Financeiro = 50 dias → precisa de capital de giro!</text>
        </svg>
      `;
    case 'fig12_price_vs_sac':
      return `
        <svg viewBox="0 0 500 170" width="100%" height="140" style="font-family: sans-serif;">
          <line x1="45" y1="20" x2="45" y2="140" stroke="#78350f" stroke-width="1.5"/>
          <line x1="45" y1="140" x2="480" y2="140" stroke="#78350f" stroke-width="1.5"/>
          <!-- Price: constante 141.84 -->
          <line x1="60" y1="75" x2="470" y2="75" stroke="#b91c1c" stroke-width="3"/>
          <text x="475" y="70" fill="#b91c1c" font-size="9" font-weight="bold" text-anchor="end">Price: parcelas iguais (R$ 141,84)</text>
          <!-- SAC: decrescente de 155 para 127 -->
          <line x1="60" y1="40" x2="470" y2="110" stroke="#15803d" stroke-width="3"/>
          <text x="475" y="118" fill="#15803d" font-size="9" font-weight="bold" text-anchor="end">SAC: parcelas decrescentes (R$ 155 → R$ 127)</text>
          <text x="260" y="155" fill="#78350f" font-size="9" font-weight="bold" text-anchor="middle">12 Meses de Financiamento</text>
        </svg>
      `;
    case 'fig13_risk_return_liquidity':
      return `
        <svg viewBox="0 0 500 180" width="100%" height="150" style="font-family: sans-serif;">
          <line x1="50" y1="20" x2="50" y2="150" stroke="#78350f" stroke-width="1.5"/>
          <line x1="50" y1="150" x2="480" y2="150" stroke="#78350f" stroke-width="1.5"/>
          <text x="40" y="25" fill="#78350f" font-size="9" font-weight="bold" text-anchor="end">Retorno</text>
          <text x="260" y="165" fill="#78350f" font-size="9" font-weight="bold" text-anchor="middle">Risco</text>

          <circle cx="110" cy="115" r="16" fill="#15803d" />
          <text x="135" y="118" fill="#15803d" font-size="9" font-weight="bold">Tesouro Selic / CDB (Alta liquidez)</text>

          <circle cx="150" cy="140" r="14" fill="#b91c1c" />
          <text x="175" y="143" fill="#b91c1c" font-size="9">Título Capitalização (Baixa liquidez)</text>

          <circle cx="250" cy="90" r="16" fill="#eab308" />
          <text x="275" y="93" fill="#854d0e" font-size="9">Fundo Multimercado (Média)</text>

          <circle cx="300" cy="50" r="18" fill="#b91c1c" />
          <text x="325" y="53" fill="#991b1b" font-size="9" font-weight="bold">Equipamento Negócio (Alta rentab.)</text>

          <circle cx="410" cy="35" r="16" fill="#eab308" />
          <text x="435" y="38" fill="#854d0e" font-size="9">Ações (Média)</text>
        </svg>
      `;
    case 'fig14_breakeven_chart':
      return `
        <svg viewBox="0 0 500 180" width="100%" height="150" style="font-family: sans-serif;">
          <line x1="50" y1="20" x2="50" y2="150" stroke="#78350f" stroke-width="1.5"/>
          <line x1="50" y1="150" x2="480" y2="150" stroke="#78350f" stroke-width="1.5"/>
          <!-- Prejuizo polygon -->
          <polygon points="50,150 50,110 260,65" fill="#fee2e2" opacity="0.8"/>
          <text x="120" y="125" fill="#b91c1c" font-size="9" font-weight="bold">prejuízo</text>
          <!-- Lucro polygon -->
          <polygon points="260,65 470,30 470,20" fill="#dcfce7" opacity="0.8"/>
          <text x="380" y="45" fill="#15803d" font-size="9" font-weight="bold">lucro</text>
          <!-- Retas -->
          <line x1="50" y1="110" x2="470" y2="30" stroke="#b91c1c" stroke-width="2.5"/>
          <line x1="50" y1="150" x2="470" y2="20" stroke="#15803d" stroke-width="3"/>
          <circle cx="260" cy="65" r="5" fill="#8d5b2c" />
          <text x="260" y="85" fill="#8d5b2c" font-size="9.5" font-weight="bold" text-anchor="middle">PE: 400 marmitas (R$ 6.400)</text>
          <text x="260" y="165" fill="#78350f" font-size="9" font-weight="bold" text-anchor="middle">Marmitas por mês</text>
        </svg>
      `;
    case 'fig15_tax_reform_timeline':
      return `
        <svg viewBox="0 0 500 130" width="100%" height="110" style="font-family: sans-serif;">
          <line x1="40" y1="65" x2="460" y2="65" stroke="#8d5b2c" stroke-width="4" stroke-linecap="round"/>
          <circle cx="80" cy="65" r="8" fill="#eab308"/>
          <text x="80" y="45" fill="#713f12" font-size="9" font-weight="bold" text-anchor="middle">2026: Teste CBS/IBS</text>

          <circle cx="180" cy="65" r="8" fill="#b91c1c"/>
          <text x="180" y="90" fill="#991b1b" font-size="9" font-weight="bold" text-anchor="middle">2027: CBS Plena</text>

          <rect x="250" y="60" width="120" height="10" fill="#86efac" rx="3" opacity="0.6"/>
          <circle cx="310" cy="65" r="8" fill="#15803d"/>
          <text x="310" y="45" fill="#166534" font-size="9" font-weight="bold" text-anchor="middle">2029–32: Queda ICMS/ISS</text>

          <circle cx="430" cy="65" r="8" fill="#8d5b2c"/>
          <text x="430" y="90" fill="#78350f" font-size="9" font-weight="bold" text-anchor="middle">2033: IVA Dual Pleno</text>
        </svg>
      `;
    case 'fig16_risk_matrix':
      return `
        <svg viewBox="0 0 450 160" width="100%" height="140" style="font-family: sans-serif;">
          <rect x="60" y="10" width="100" height="40" fill="#fcd34d" rx="4"/>
          <rect x="170" y="10" width="100" height="40" fill="#f87171" rx="4"/>
          <text x="220" y="34" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Estiagem</text>

          <rect x="280" y="10" width="100" height="40" fill="#dc2626" rx="4"/>
          <text x="330" y="34" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Alta do Gás</text>

          <rect x="60" y="55" width="100" height="40" fill="#fde047" rx="4"/>
          <text x="110" y="79" fill="#713f12" font-size="9" font-weight="bold" text-anchor="middle">Fornecedor fecha</text>

          <rect x="170" y="55" width="100" height="40" fill="#fb923c" rx="4"/>
          <text x="220" y="79" fill="#ffffff" font-size="9.5" font-weight="bold" text-anchor="middle">Inadimplência fiado</text>

          <rect x="280" y="55" width="100" height="40" fill="#f87171" rx="4"/>

          <rect x="60" y="100" width="100" height="40" fill="#86efac" rx="4"/>
          <text x="110" y="124" fill="#14532d" font-size="9" font-weight="bold" text-anchor="middle">Concorrente novo</text>

          <rect x="170" y="100" width="100" height="40" fill="#fde047" rx="4"/>
          <text x="220" y="124" fill="#713f12" font-size="9" font-weight="bold" text-anchor="middle">Multa sanitária</text>

          <rect x="280" y="100" width="100" height="40" fill="#fb923c" rx="4"/>
          <text x="330" y="124" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Falso Pix</text>

          <text x="30" y="80" fill="#78350f" font-size="10" font-weight="bold" transform="rotate(-90 30,80)" text-anchor="middle">Probabilidade</text>
          <text x="220" y="155" fill="#78350f" font-size="10" font-weight="bold" text-anchor="middle">Impacto no Negócio</text>
        </svg>
      `;
    default:
      return '';
  }
}

// Generate HTML for a group of lessons
function generateDocumentHtml(title, subtitle, trackBadge, lessons, glossarySubset) {
  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fira+Code:wght@400;600&display=swap');
    
    @page {
      size: A4;
      margin: 15mm 12mm 18mm 12mm;
      @bottom-right {
        content: counter(page);
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 8pt;
        color: #78350f;
      }
      @bottom-left {
        content: "Aula CAJU · Educação Financeira · URCA (Crato-CE)";
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 8pt;
        color: #78716c;
      }
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: #1c1917;
      background: #ffffff;
      margin: 0;
      padding: 0;
      font-size: 10pt;
      line-height: 1.45;
    }

    h1, h2, h3, h4 {
      font-family: 'Outfit', sans-serif;
      margin: 0;
    }

    .cover-page {
      page-break-after: always;
      min-height: 250mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 3px solid #8d5b2c;
      border-radius: 12px;
      padding: 25mm 20mm;
      background: linear-gradient(135deg, #fffbeb 0%, #ffffff 60%, #fef3c7 100%);
    }

    .badge-track {
      display: inline-block;
      background: #b91c1c;
      color: #ffffff;
      font-weight: 800;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 11pt;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .lesson-container {
      page-break-after: always;
      padding-top: 5mm;
    }

    .no-break {
      page-break-inside: avoid;
    }

    .lesson-header {
      border-bottom: 2px solid #8d5b2c;
      padding-bottom: 8px;
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .caju-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin: 10px 0;
    }

    .caju-card {
      padding: 10px;
      border-radius: 8px;
      font-size: 9pt;
      line-height: 1.35;
    }

    .card-c { background: #fee2e2; border: 1px solid #f87171; color: #7f1d1d; }
    .card-a { background: #fef3c7; border: 1px solid #fbbf24; color: #78350f; }
    .card-j { background: #dcfce7; border: 1px solid #86efac; color: #14532d; }
    .card-u { background: #ffedd5; border: 1px solid #fdba74; color: #7c2d12; }

    .formula-box {
      background: #f5f5f4;
      border-left: 4px solid #8d5b2c;
      padding: 8px 12px;
      font-family: 'Fira Code', monospace;
      font-size: 9pt;
      margin: 8px 0;
      border-radius: 0 6px 6px 0;
    }

    .quiz-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 10px;
      margin-top: 8px;
      font-size: 8.5pt;
    }

    .quiz-option {
      padding: 4px 8px;
      margin: 3px 0;
      border-radius: 4px;
      background: #ffffff;
      border: 1px solid #cbd5e1;
    }

    .quiz-correct {
      background: #dcfce7;
      border-color: #4ade80;
      font-weight: 600;
      color: #166534;
    }

    .callout {
      background: #fefce8;
      border: 1px solid #fef08a;
      border-radius: 8px;
      padding: 8px 12px;
      font-size: 9pt;
      margin: 8px 0;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 10px 0;
      font-size: 8.5pt;
    }

    th, td {
      border: 1px solid #e7e5e4;
      padding: 6px 8px;
      text-align: left;
    }

    th {
      background: #78350f;
      color: #ffffff;
    }
  `;

  let html = `<!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <style>${css}</style>
  </head>
  <body>
    <!-- CAPA DA APOSTILA -->
    <div class="cover-page">
      <div>
        <div style="font-size: 11pt; font-weight: 800; color: #8d5b2c; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px;">
          UNIVERSIDADE REGIONAL DO CARIRI (URCA)
        </div>
        <div style="font-size: 10pt; color: #57534e; margin-bottom: 25px;">
          Centro de Estudos Sociais Aplicados · Departamento de Economia · Campus Pimenta (Crato-CE)
        </div>

        <div style="margin: 30px 0;">
          <span class="badge-track">${trackBadge}</span>
          <h1 style="font-size: 28pt; font-weight: 900; color: #78350f; line-height: 1.15; margin: 15px 0 10px 0;">
            ${title}
          </h1>
          <p style="font-size: 14pt; color: #44403c; line-height: 1.4; margin: 0;">
            ${subtitle}
          </p>
        </div>
      </div>

      <div style="background: #ffffff; border: 2px solid #e7e5e4; border-radius: 12px; padding: 15px; margin: 20px 0;">
        <h3 style="font-size: 11pt; color: #78350f; margin-bottom: 8px;">A Metodologia CAJU nas 4 Lentes:</h3>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; font-size: 8.5pt;">
          <div style="background: #fee2e2; padding: 6px; border-radius: 6px; border: 1px solid #f87171;">
            <strong style="color: #991b1b;">C — Cidades:</strong><br>Território, feiras e semiárido caririense.
          </div>
          <div style="background: #fef3c7; padding: 6px; border-radius: 6px; border: 1px solid #fbbf24;">
            <strong style="color: #92400e;">A — Institucional:</strong><br>Regras formais, fiado e custos de transação.
          </div>
          <div style="background: #dcfce7; padding: 6px; border-radius: 6px; border: 1px solid #86efac;">
            <strong style="color: #166534;">J — Jurídico:</strong><br>MEI, tributos, microcrédito e leis.
          </div>
          <div style="background: #ffedd5; padding: 6px; border-radius: 6px; border: 1px solid #fdba74;">
            <strong style="color: #9a3412;">U — Ubíquo:</strong><br>Calculadoras, Pix e controle no smartphone.
          </div>
        </div>
      </div>

      <div>
        <div style="font-size: 10pt; font-weight: bold; color: #1c1917; margin-bottom: 4px;">
          Aulas cobertas neste volume:
        </div>
        <div style="font-size: 9.5pt; color: #57534e; margin-bottom: 25px;">
          ${lessons.map(l => `<strong>Aula ${l.id}:</strong> ${l.shortTitle}`).join(' &nbsp;·&nbsp; ')}
        </div>

        <div style="border-top: 1px solid #d6d3d1; padding-top: 10px; font-size: 8.5pt; color: #78716c; display: flex; justify-content: space-between;">
          <span>Disciplina de Educação Financeira · Ciências Econômicas</span>
          <span>Edição Acadêmica · Outubro de 2026</span>
        </div>
      </div>
    </div>

    <!-- SUMÁRIO DA TRILHA -->
    <div style="page-break-after: always; padding: 10mm 5mm;">
      <h2 style="font-size: 18pt; color: #78350f; border-bottom: 2px solid #8d5b2c; padding-bottom: 6px; margin-bottom: 15px;">
        Sumário da Trilha
      </h2>
      <table>
        <thead>
          <tr>
            <th style="width: 10%;">Aula</th>
            <th style="width: 35%;">Título &amp; Conceito</th>
            <th style="width: 25%;">Caso Prático no Cariri</th>
            <th style="width: 30%;">Principal Modelo / Fórmula</th>
          </tr>
        </thead>
        <tbody>
          ${lessons.map(l => {
            const formulaSlide = l.slides.find(s => s.type === 'model');
            const formulaSummary = formulaSlide ? formulaSlide.content.split('\n')[0] : 'Conceitual';
            return `
              <tr>
                <td style="font-weight: bold; text-align: center; color: ${l.isExam2 ? '#b91c1c' : '#15803d'};">
                  Aula ${l.id} ${l.isExam2 ? '★' : ''}
                </td>
                <td>
                  <strong>${l.title}</strong><br>
                  <span style="font-size: 7.5pt; color: #57534e;">${l.objective}</span>
                </td>
                <td>${l.caseCharacter}</td>
                <td style="font-family: 'Fira Code', monospace; font-size: 7.5pt;">${formulaSummary}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
      <div style="font-size: 8pt; color: #78716c; margin-top: 10px;">
        ★ Conteúdo de alta prioridade da Avaliação 2 formal da disciplina.
      </div>
    </div>
  `;

  // CORPO DE CADA AULA
  lessons.forEach((lesson) => {
    const openingSlide = lesson.slides.find(s => s.type === 'opening');
    const conceptSlide = lesson.slides.find(s => s.type === 'concept');
    const modelSlide = lesson.slides.find(s => s.type === 'model');
    const figureSlide = lesson.slides.find(s => s.type === 'figure');
    const exampleSlide = lesson.slides.find(s => s.type === 'example');
    const cajuSlide = lesson.slides.find(s => s.type === 'caju_lens');
    const localSlide = lesson.slides.find(s => s.type === 'local_reality');
    const rememberSlide = lesson.slides.find(s => s.type === 'remember');
    const quizSlide = lesson.slides.find(s => s.type === 'quiz');

    html += `
      <div class="lesson-container">
        <!-- CABEÇALHO DA AULA -->
        <div class="lesson-header">
          <div>
            <span style="font-size: 9pt; font-weight: 800; text-transform: uppercase; color: ${lesson.isExam2 ? '#b91c1c' : '#15803d'};">
              ${lesson.isExam2 ? '★ Conteúdo da Avaliação 2 · ' : ''}Aula ${lesson.id}
            </span>
            <h2 style="font-size: 18pt; color: #78350f; font-weight: 800; margin-top: 2px;">
              ${lesson.title}
            </h2>
          </div>
          <div style="text-align: right; font-size: 8.5pt; color: #57534e;">
            <strong>Caso:</strong> ${lesson.caseCharacter}
          </div>
        </div>

        <!-- OBJETIVO PEDAGÓGICO -->
        <div class="callout" style="background: #fffbeb; border-color: #fde68a;">
          <strong style="color: #92400e;">🎯 Objetivo de Aprendizagem:</strong>
          <span style="color: #44403c;">${lesson.objective}</span>
        </div>

        <!-- 1. ABERTURA & CASO COTIDIANO -->
        <div class="no-break" style="margin-bottom: 10px;">
          <h3 style="font-size: 11pt; color: #8d5b2c; margin-bottom: 3px;">1. Abertura: ${openingSlide?.title || ''}</h3>
          <p style="margin: 0; font-size: 9.5pt; color: #292524;">
            ${openingSlide?.content || ''}
          </p>
          <div style="font-size: 8.5pt; color: #57534e; margin-top: 3px; font-style: italic;">
            ${openingSlide?.studyContent || ''}
          </div>
        </div>

        <!-- 2. CONCEITO FUNDAMENTAL -->
        <div class="no-break" style="margin-bottom: 10px;">
          <h3 style="font-size: 11pt; color: #8d5b2c; margin-bottom: 3px;">2. Conceito Central</h3>
          <p style="margin: 0; font-size: 9.5pt; color: #292524;">
            ${conceptSlide?.content || ''}
          </p>
          ${conceptSlide?.studyContent ? `
            <div style="font-size: 8.5pt; color: #57534e; margin-top: 3px;">
              ${conceptSlide.studyContent}
            </div>
          ` : ''}
        </div>

        <!-- 3. MODELO & FÓRMULAS -->
        ${modelSlide ? `
          <div class="no-break" style="margin-bottom: 10px;">
            <h3 style="font-size: 11pt; color: #8d5b2c; margin-bottom: 3px;">3. Fórmulas e Modelos Quantitativos</h3>
            <div class="formula-box">
              ${modelSlide.content.replace(/\n/g, '<br>')}
            </div>
          </div>
        ` : ''}

        <!-- 4. FIGURA-CHAVE ILUSTRADA -->
        ${figureSlide ? `
          <div class="no-break" style="margin: 10px 0; background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 8px; padding: 10px; text-align: center;">
            <div style="font-size: 9pt; font-weight: bold; color: #78350f; margin-bottom: 4px;">
              ${figureSlide.title}
            </div>
            ${getFigureSvg(figureSlide.figureKey, lesson.title)}
            <div style="font-size: 8.5pt; color: #57534e; margin-top: 4px;">
              ${figureSlide.content}
            </div>
          </div>
        ` : ''}

        <!-- 5. EXEMPLO RESOLVIDO PASSO A PASSO -->
        ${exampleSlide ? `
          <div class="no-break" style="margin-bottom: 10px;">
            <h3 style="font-size: 11pt; color: #8d5b2c; margin-bottom: 3px;">5. Exemplo Resolvido no Cariri</h3>
            <div style="background: #f5f5f4; border: 1px solid #e7e5e4; border-radius: 8px; padding: 10px; font-size: 9pt;">
              <strong style="color: #44403c;">${exampleSlide.title}</strong>
              <p style="margin: 4px 0 0 0; color: #1c1917; font-family: 'Fira Code', monospace; font-size: 8.5pt;">
                ${exampleSlide.content.replace(/\n/g, '<br>')}
              </p>
              <div style="margin-top: 6px; font-size: 8.5pt; color: #57534e; font-family: 'Plus Jakarta Sans', sans-serif;">
                ${exampleSlide.studyContent || ''}
              </div>
            </div>
          </div>
        ` : ''}

        <!-- 6. METODOLOGIA CAJU NAS QUATRO LENTES -->
        ${cajuSlide?.cajuDetails ? `
          <div class="no-break" style="margin: 12px 0;">
            <h3 style="font-size: 11pt; color: #8d5b2c; margin-bottom: 4px;">6. Leitura pelas Quatro Lentes da Metodologia CAJU</h3>
            <div class="caju-grid">
              <div class="caju-card card-c">
                <strong>C — Cidades &amp; Território:</strong><br>
                ${cajuSlide.cajuDetails.c}
              </div>
              <div class="caju-card card-a">
                <strong>A — Análise Institucional:</strong><br>
                ${cajuSlide.cajuDetails.a}
              </div>
              <div class="caju-card card-j">
                <strong>J — Instrumentos Jurídicos:</strong><br>
                ${cajuSlide.cajuDetails.j}
              </div>
              <div class="caju-card card-u">
                <strong>U — Ferramentas Ubíquas no Celular:</strong><br>
                ${cajuSlide.cajuDetails.u}
              </div>
            </div>
          </div>
        ` : ''}

        <!-- 7. REALIDADE LOCAL & DADOS REGIONAIS -->
        ${localSlide ? `
          <div class="no-break" style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 8px 12px; margin-bottom: 10px; border-radius: 0 6px 6px 0;">
            <strong style="color: #166534; font-size: 9.5pt;">7. Realidade Regional do Cariri &amp; Ceará:</strong>
            <p style="margin: 2px 0 0 0; font-size: 9pt; color: #14532d;">
              ${localSlide.content}
            </p>
            ${localSlide.localSource ? `
              <div style="font-size: 8pt; color: #15803d; margin-top: 4px; font-weight: bold;">
                Fonte: ${localSlide.localSource.source} (${localSlide.localSource.year}) · ${localSlide.localSource.location}
              </div>
            ` : ''}
          </div>
        ` : ''}

        <!-- 8. PARA LEMBRAR SEMPRE -->
        ${rememberSlide?.rememberItems ? `
          <div class="no-break" style="background: #fefce8; border: 1px solid #fde047; border-radius: 8px; padding: 8px 12px; margin-bottom: 10px;">
            <strong style="color: #854d0e; font-size: 9pt;">📌 Para Lembrar Sempre (Síntese Inegociável):</strong>
            <ul style="margin: 4px 0 0 0; padding-left: 18px; font-size: 8.5pt; color: #713f12;">
              ${rememberSlide.rememberItems.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <!-- 9. CHECAGEM RÁPIDA FORMATIVA (QUESTÕES COMENTADAS) -->
        ${quizSlide?.quizQuestions ? `
          <div class="no-break" style="margin-top: 10px;">
            <h3 style="font-size: 11pt; color: #8d5b2c; margin-bottom: 4px;">9. Checagem Rápida Formativa (Avaliação 2)</h3>
            ${quizSlide.quizQuestions.map((q, qIdx) => `
              <div class="quiz-box">
                <div style="font-weight: bold; color: #1e293b; margin-bottom: 4px;">
                  Questão ${qIdx + 1}: ${q.question}
                </div>
                <div>
                  ${q.options.map((opt, oIdx) => `
                    <div class="quiz-option ${oIdx === q.correctIndex ? 'quiz-correct' : ''}">
                      ${String.fromCharCode(65 + oIdx)}) ${opt} ${oIdx === q.correctIndex ? ' ✔ (Correta)' : ''}
                    </div>
                  `).join('')}
                </div>
                <div style="margin-top: 4px; font-size: 8pt; color: #475569; border-top: 1px dashed #cbd5e1; padding-top: 3px;">
                  <strong>Gabarito Comentado:</strong> ${q.explanation}
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;
  });

  // GLOSSÁRIO FINAL
  if (glossarySubset && glossarySubset.length > 0) {
    html += `
      <div style="page-break-before: always; padding: 10mm 5mm;">
        <h2 style="font-size: 16pt; color: #78350f; border-bottom: 2px solid #8d5b2c; padding-bottom: 6px; margin-bottom: 12px;">
          Glossário de Termos e Fórmulas da Trilha
        </h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
          ${glossarySubset.map(g => `
            <div style="background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 6px; padding: 8px; font-size: 8.5pt;">
              <strong style="color: #78350f; font-size: 9pt;">${g.term}</strong>
              <span style="font-size: 7.5pt; color: #a8a29e; display: block;">Aula ${g.lesson} · ${g.category}</span>
              <p style="margin: 4px 0 2px 0; color: #292524; font-size: 8pt;">${g.definition}</p>
              ${g.formula ? `<div style="font-family: 'Fira Code', monospace; font-size: 7.5pt; color: #8d5b2c; background: #ffffff; padding: 2px 4px; border-radius: 4px; border: 1px solid #e7e5e4;">${g.formula}</div>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  html += `
  </body>
  </html>`;

  return html;
}

// Main execution function
async function buildPdfs() {
  console.log('--- Iniciando Geração dos PDFs da Aula CAJU ---');

  const exam2Lessons = LESSONS_DATA.filter(l => l.isExam2);
  const otherLessons = LESSONS_DATA.filter(l => !l.isExam2);

  const exam2Glossary = GLOSSARY_TERMS.filter(g => [3, 5, 6, 7, 8, 9, 10].includes(g.lesson));
  const otherGlossary = GLOSSARY_TERMS.filter(g => [1, 2, 4, 11, 12].includes(g.lesson));

  const targets = [
    {
      filename: 'Aula_CAJU_Trilha_Avaliacao_2.pdf',
      title: 'Apostila da Trilha da Avaliação 2',
      subtitle: 'As 7 Aulas Essenciais da Prova Formal de Educação Financeira (Aulas 3, 5, 6, 7, 8, 9 e 10)',
      trackBadge: 'Trilha 1 · Avaliação 2 (Foco da Prova)',
      lessons: exam2Lessons,
      glossary: exam2Glossary
    },
    {
      filename: 'Aula_CAJU_Trilha_Geral_Modulo_3.pdf',
      title: 'Apostila da Trilha Geral do Módulo 3',
      subtitle: 'Fundamentos, Fluxo de Caixa, Compliance, Reforma Tributária e Gestão de Riscos (Aulas 1, 2, 4, 11 e 12)',
      trackBadge: 'Trilha 2 · Fundamentos & Gestão Global',
      lessons: otherLessons,
      glossary: otherGlossary
    },
    {
      filename: 'Aula_CAJU_Modulo_3_Completo_12_Aulas.pdf',
      title: 'Manual Completo: Módulo 3 — Educação Financeira para Pequenos Negócios',
      subtitle: 'Compêndio Integral das 12 Aulas Ilustradas sob a Metodologia CAJU (URCA / Cariri)',
      trackBadge: 'Livro Completo · 12 Aulas',
      lessons: LESSONS_DATA,
      glossary: GLOSSARY_TERMS
    }
  ];

  // Also individual lesson PDFs
  LESSONS_DATA.forEach(l => {
    const slug = l.title.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '');
    targets.push({
      filename: `Aula_${l.id.toString().padStart(2, '0')}_${slug}.pdf`,
      title: `Aula ${l.id}: ${l.title}`,
      subtitle: `Educação Financeira para Pequenos Negócios · Metodologia CAJU`,
      trackBadge: l.isExam2 ? 'Conteúdo da Avaliação 2' : 'Conteúdo do Módulo 3',
      lessons: [l],
      glossary: GLOSSARY_TERMS.filter(g => g.lesson === l.id)
    });
  });

  const tempDir = path.resolve(projectRoot, 'temp_html');
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

  const publicPdfDir = path.resolve(projectRoot, 'public', 'pdf');
  const localPdfDir = path.resolve(projectRoot, 'pdf');
  if (!fs.existsSync(publicPdfDir)) fs.mkdirSync(publicPdfDir, { recursive: true });
  if (!fs.existsSync(localPdfDir)) fs.mkdirSync(localPdfDir, { recursive: true });

  for (const item of targets) {
    console.log(`Gerando: ${item.filename}...`);
    const htmlContent = generateDocumentHtml(item.title, item.subtitle, item.trackBadge, item.lessons, item.glossary);
    const htmlPath = path.resolve(tempDir, item.filename.replace('.pdf', '.html'));
    fs.writeFileSync(htmlPath, htmlContent, 'utf-8');

    const pdfOutPath = path.resolve(localPdfDir, item.filename);

    const proc = spawnSync(EDGE_PATH, [
      '--headless',
      '--disable-gpu',
      '--no-pdf-header-footer',
      '--print-to-pdf=' + pdfOutPath,
      'file:///' + htmlPath.replace(/\\/g, '/')
    ]);

    if (fs.existsSync(pdfOutPath)) {
      const sizeKb = Math.round(fs.statSync(pdfOutPath).size / 1024);
      console.log(`  ✓ Sucesso: ${item.filename} (${sizeKb} KB)`);
      // Copy to public/pdf
      fs.copyFileSync(pdfOutPath, path.resolve(publicPdfDir, item.filename));
    } else {
      console.error(`  ✗ Erro gerando: ${item.filename}`, proc.stderr?.toString());
    }
  }

  // Generate an index manifest of available PDFs
  const manifest = targets.map(t => ({
    filename: t.filename,
    title: t.title,
    trackBadge: t.trackBadge,
    isExam2: t.lessons.some(l => l.isExam2),
    lessonIds: t.lessons.map(l => l.id),
    url: `./pdf/${t.filename}`
  }));

  fs.writeFileSync(
    path.resolve(publicPdfDir, 'pdf_manifest.json'),
    JSON.stringify(manifest, null, 2),
    'utf-8'
  );
  fs.writeFileSync(
    path.resolve(projectRoot, 'src', 'data', 'pdfManifest.js'),
    `export const PDF_MANIFEST = ${JSON.stringify(manifest, null, 2)};`,
    'utf-8'
  );

  console.log('--- Geração concluída com sucesso! ---');
}

buildPdfs().catch(console.error);
