# Aula CAJU — Aplicativo Web Mobile de Aulas em Slides Ilustrados

**Disciplina de Educação Financeira · Curso de Ciências Econômicas · URCA (Crato-CE)**  
*Outubro de 2026 · Versão 1.0*

---

## 🌟 Visão Geral

O **Aula CAJU** é um aplicativo web mobile e PWA desenvolvido para apresentar, em 12 aulas em formato de slides ilustrados, os conteúdos do **Módulo 3 (Educação Financeira para Pequenos Negócios)** e suas aplicações práticas no Cariri cearense.

Cada aula é estruturada sob a **Metodologia CAJU**:
- **C — Cidades**: A configuração urbana, feiras livres, o semiárido e as romarias.
- **A — Análise Institucional**: Regras formais e informais, custos de transação e redes de confiança.
- **J — Jurídico**: Marcos legais (MEI, Simples Nacional, Microcrédito Orientado, Reforma Tributária).
- **U — Ubíquo**: Ferramentas digitais acessíveis no celular (Pix, calculadoras de markup, controle de caixa).

---

## 📱 Principais Funcionalidades

1. **Trilha das 12 Aulas do Módulo 3** (Figura 1 do PRD):
   - Destaque especial para os **7 conteúdos da Avaliação 2**:
     - Aula 3: Planejamento Financeiro e Sazonalidade
     - Aula 5: Custos e Despesas
     - Aula 6: Precificação e Markup Divisor
     - Aula 7: Capital de Giro e Ciclos
     - Aula 8: Crédito e Financiamento
     - Aula 9: Gestão de Investimentos
     - Aula 10: Indicadores Financeiros e Ponto de Equilíbrio
   - Demais aulas: 1 (Gestão Financeira), 2 (Teorias Estratégicas), 4 (Fluxo de Caixa), 11 (Compliance e Reforma Tributária), 12 (Gestão de Riscos).

2. **Modo Estudo (Mobile-First)**:
   - Formato vertical otimizado para celulares (360px+).
   - Navegação por deslize de tela (touch swipe) e bolinhas de progresso.
   - Narração em áudio por slide com síntese de voz (Web Speech API pt-BR) e controle de velocidade (1x, 1.25x, 1.5x).
   - Atalho direto para a **Lente CAJU** em qualquer slide.
   - Calculadoras e ferramentas ubíquas interativas integradas (Markup, Termômetro do Giro, Ponto de Equilíbrio, Price vs SAC).

3. **Modo Apresentação (Projetor 16:9 / Sala de Aula)**:
   - Tipografia ampliada para projetores (≥ 24pt conforme requisito RNF04).
   - Figuras SVG em alta definição em tela cheia.
   - Painel lateral de **Notas do Apresentador** (tecla `N`).
   - Cronômetro de tempo de aula decorrido.
   - Navegação via teclado (`←`, `→`, `Espaço`, `L` para Lente, `Esc`).

4. **Controle Remoto do Professor no Celular (RF04)**:
   - O professor pode controlar os slides projetados diretamente da tela do celular.
   - Sincronização em tempo real via `BroadcastChannel`.
   - Botões touch gigantes de avanço e retrocesso, cronômetro e visualização das notas pedagógicas.

5. **Figuras-Chave Vetoriais Interativas em SVG**:
   - **Figura 5**: Casa × Negócio (Pró-labore como única ponte permitida).
   - **Figura 6**: Decisão Financeira e o Anel Institucional da NEI (North e Williamson).
   - **Figura 7**: Receita Sazonal de Barraca de Romaria (colunas interativas de guardar vs usar reserva).
   - **Figura 8**: Fluxo de Caixa Semanal em Cascata (gráfico waterfall interativo).
   - **Figura 9**: Ganho de Escala: Custo Unitário caindo com o volume (curva com slider dinâmico).
   - **Figura 10**: Composição do Preço pelo Markup Divisor (barras empilhadas com simulador).
   - **Figura 11**: Ciclo Operacional e Financeiro na Linha do Tempo (interativo).
   - **Figura 12**: Price × SAC (comparativo mensal de amortização).
   - **Figura 13**: Risco, Retorno e Liquidez (gráfico de bolhas interativo).
   - **Figura 14**: Ponto de Equilíbrio da Marmitaria (cruzamento de retas, áreas de lucro e prejuízo).
   - **Figura 15**: Linha do Tempo da Reforma Tributária (marcos de 2026 a 2033).
   - **Figura 16**: Matriz de Risco 3×3 da Marmitaria (interativa com ações de mitigação).

6. **Checagem Rápida Formativa (24 Questões)**:
   - 2 questões por aula com feedback explicativo imediato, sem nota punitiva.
   - Celebração visual com confetes e registro do progresso no LocalStorage.

7. **Glossário Econômico e Institucional com Busca**:
   - Termos conceituais e fórmulas matemáticas pesquisáveis em tempo real.

8. **Painel do Docente**:
   - Métricas de engajamento da turma, taxa de acerto por aula e pontos de atenção para a Avaliação 2.

9. **Exportação / Resumo Imprimível para PDF e WhatsApp**:
   - Ficha síntese para impressão ou compartilhamento rápido em grupos acadêmicos.

10. **PWA Instalável e Offline**:
    - Suporte a Service Worker para consulta offline no transporte ou sem conexão.

---

## 🚀 Como Executar o Projeto

```bash
# Entrar no diretório do projeto
cd C:\Users\ramal\.gemini\antigravity\scratch\aula-caju

# Instalar dependências (já instaladas)
npm install

# Rodar servidor de desenvolvimento
npm run dev
```

O aplicativo estará disponível em `http://localhost:5174/`.
