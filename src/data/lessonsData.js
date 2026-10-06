export const LESSONS_DATA = [
  // AULA 1
  {
    id: 1,
    title: "Gestão Financeira para Pequenos Negócios",
    shortTitle: "Gestão Financeira",
    objective: "Compreender a gestão financeira como pilar de sobrevivência do pequeno negócio e a necessidade de separar finanças pessoais e empresariais.",
    isExam2: false,
    color: "#8d5b2c",
    caseCharacter: "Dona Socorro (Marmitaria)",
    slides: [
      {
        slideNum: 1,
        type: "opening",
        title: "Pra onde foi o dinheiro?",
        subtitle: "Abertura · Situação do Cotidiano",
        content: "Dona Socorro vende dezenas de quentinhas por dia no centro de Crato. O movimento é ótimo, mas no fim do mês a gaveta do caixa está vazia. Onde está o erro?",
        studyContent: "Muitos empreendedores confundem faturamento com lucro e misturam o dinheiro da casa com o do comércio. Sem controle diário, pequenos saques para compras domésticas drenam o caixa da empresa.",
        speakerNotes: "Inicie perguntando aos alunos se conhecem alguém que vende muito mas nunca tem dinheiro em caixa. Apresente o caso de Dona Socorro no Crato.",
        audioNarration: "Aula 1. Gestão Financeira. Dona Socorro vende bem na marmitaria, mas no final do mês a gaveta do caixa está vazia. Pra onde foi o dinheiro?",
        figureKey: "fig1_opening"
      },
      {
        slideNum: 2,
        type: "concept",
        title: "O que é Gestão Financeira?",
        subtitle: "Conceito Fundamental",
        content: "É o conjunto de decisões e controles sobre o dinheiro do negócio em três áreas vitais: Operação (o dia a dia), Investimento (o futuro) e Financiamento (a origem dos recursos).",
        studyContent: "Gerir finanças não é apenas registrar notas fiscais. É garantir que o negócio gere caixa suficiente para pagar suas despesas, remunerar o proprietário de forma digna e crescer sustentavelmente.",
        speakerNotes: "Destaque a tríade: Operação, Investimento e Financiamento. Explique que o foco inicial do microempreendedor está na operação diária.",
        audioNarration: "Gestão financeira é planejar, controlar e decidir sobre o dinheiro do negócio em três frentes: operação diária, investimentos futuros e financiamentos.",
        figureKey: "concept_three_pillars"
      },
      {
        slideNum: 3,
        type: "model",
        title: "As Três Perguntas Essenciais",
        subtitle: "Modelo de Decisão",
        content: "1. Quanto entra e quando entra? (Fluxo de Caixa)\n2. Quanto custa produzir e manter aberto? (Custos)\n3. De onde vem o capital de longo prazo? (Estrutura)",
        studyContent: "Responder a essas perguntas com precisão exige três ferramentas básicas: controle diário de caixa, ficha técnica de custos e um orçamento anual preventivo.",
        speakerNotes: "Mostre que sem responder 'quando entra', o negócio pode ser lucrativo no papel e quebrar na prática por descasamento de prazos.",
        audioNarration: "Três perguntas guiam a gestão: Quanto entra e quando entra? Quanto custa operar? E de onde vem o capital de longo prazo?",
        figureKey: "model_three_questions"
      },
      {
        slideNum: 4,
        type: "figure",
        title: "Casa × Negócio: O Pró-labore como Única Ponte",
        subtitle: "Figura-Chave 5 · Separação Radical de Contas",
        content: "A empresa possui seu caixa para compras e despesas. A casa possui seus gastos familiares. A única ponte legítima entre eles é o Pró-labore — salário fixo estipulado do dono.",
        studyContent: "Pagar o boleto da luz de casa com o dinheiro do caixa da marmitaria destrói a visibilidade financeira. Se o negócio precisar de aportes, deve ser formalizado como empréstimo ou capital de giro.",
        speakerNotes: "Explore a Figura 5 no projetor. Enfatize que o pró-labore precisa de valor fixo e data certa para pagamento.",
        audioNarration: "Casa e negócio precisam de contas separadas. O pró-labore com valor fixo é a única ponte permitida entre as duas contas.",
        figureKey: "fig5_house_vs_business"
      },
      {
        slideNum: 5,
        type: "example",
        title: "Exemplo Resolvido: A Semana de Socorro",
        subtitle: "Aplicação Prática · Marmitaria da Dona Socorro",
        content: "Vendas da semana: R$ 3.300. Insumos do negócio: R$ 1.600. Gás/Luz: R$ 300. Retiradas pessoais aleatórias: R$ 1.100. Saldo final: Apenas R$ 300!",
        studyContent: "Ao separar as contas e definir um Pró-labore fixo de R$ 600 semanais, sobram R$ 800 líquidos na empresa para reserva de giro e investimentos. O vazamento para despesas pessoais foi contido.",
        speakerNotes: "Demonstre passo a passo no quadro ou projetor como o pró-labore fixo transforma o saldo do negócio de R$ 300 para R$ 800.",
        audioNarration: "Na semana de Socorro, as retiradas aleatórias de mil e cem reais quase zeraram o caixa. Fixando um pró-labore de seiscentos reais, a empresa retém oitocentos reais de lucro.",
        figureKey: "example_socorro_separation"
      },
      {
        slideNum: 6,
        type: "caju_lens",
        title: "Metodologia CAJU: Leitura Pelas Quatro Lentes",
        subtitle: "Lente CAJU · Análise Multidimensional",
        content: "Leitura do conceito sob a ótica de Cidades, Análise Institucional, Jurídico e Ubíquo no contexto caririense.",
        studyContent: "A metodologia CAJU ensina a enxergar a decisão financeira além da planilha, compreendendo o espaço urbano, a cultura local, os marcos legais e o apoio tecnológico digital.",
        speakerNotes: "Peça para os alunos lerem os 4 quadrantes. Destaque como o imóvel misto (casa e ponto comercial juntos) é o padrão dominante nas cidades do Cariri.",
        audioNarration: "Lente CAJU: Cidades, onde casa e comércio compartilham o mesmo espaço. Análise institucional da regra familiar. Jurídico com MEI e Ubíquo com caderno digital.",
        figureKey: "caju_lens_quadrant",
        cajuDetails: {
          c: "Em cidades pequenas como Crato e Barbalha, casa e comércio dividem frequentemente o mesmo imóvel físico. A separação contábil precisa compensar a falta de paredes físicas.",
          a: "A norma informal 'o dinheiro é da família' eleva custos de transação e gera assimetria de informação. Sem contas separadas, nem o dono sabe se tem lucro.",
          j: "A Lei Complementar 128/2008 (MEI) assegura CNPJ próprio, separando personalidade jurídica do CPF e facilitando a abertura de conta bancária empresarial gratuita.",
          u: "Aplicativos móveis simples de livro-caixa no WhatsApp ou celular substituem o papel de pão e criam o hábito do registro diário na palma da mão."
        }
      },
      {
        slideNum: 7,
        type: "local_reality",
        title: "Realidade Local: Mulheres Empreendedoras no Ceará",
        subtitle: "Evidência Regional com Fonte Oficial",
        content: "No Ceará, 36% dos negócios são liderados por mulheres. Grande parte atua no setor alimentício e de serviços operando em suas próprias residências.",
        studyContent: "Dados do Atlas dos Pequenos Negócios (Sebrae, 2025 / O Povo) revelam que a dupla jornada e a sobreposição da economia doméstica com a empresa representam o maior desafio para a gestão financeira feminina no interior nordestino.",
        speakerNotes: "Comente o papel das empreendedoras no Cariri e a importância do empoderamento via separação financeira.",
        audioNarration: "Segundo o Sebrae 2025, trinta e seis por cento dos pequenos negócios no Ceará são geridos por mulheres, muitas conciliando empresa e lar.",
        figureKey: "local_ceara_women",
        localSource: {
          source: "Sebrae · Atlas dos Pequenos Negócios / O Povo",
          year: "Setembro de 2025",
          location: "Ceará e Região Metropolitana do Cariri"
        }
      },
      {
        slideNum: 8,
        type: "remember",
        title: "Para Lembrar Sempre",
        subtitle: "Síntese dos 3 Pontos Inegociáveis",
        content: "1. Conta bancária separada para o CNPJ.\n2. Pró-labore fixo estipulado como salário do dono.\n3. Registro diário de cada centavo que entra e sai.",
        studyContent: "Sem esses três pilares, nenhuma técnica avançada de precificação ou investimento salvará o empreendimento de sangrias invisíveis de caixa.",
        speakerNotes: "Peça que a turma repita os três pontos em coro.",
        audioNarration: "Para lembrar: Primeira regra, conta separada. Segunda, salário fixo com pró-labore. Terceira, registro diário.",
        figureKey: "remember_three_rules",
        rememberItems: [
          "Conta separada: dinheiro da empresa não paga feira da casa.",
          "Salário fixo do dono: estipule pró-labore mensal com data certa.",
          "Registro diário: anote tudo no momento em que a venda acontece."
        ]
      },
      {
        slideNum: 9,
        type: "quiz",
        title: "Checagem Rápida: Aula 1",
        subtitle: "Verificação de Aprendizagem Formativa (Sem Nota)",
        content: "Responda a duas questões práticas para testar sua compreensão dos conceitos de separação de contas e pró-labore.",
        studyContent: "A checagem rápida ajuda a fixar o conteúdo antes de prosseguir para a próxima estação do conhecimento financeiro.",
        speakerNotes: "Deixe os alunos responderem individualmente no celular e projete a resolução comentada.",
        audioNarration: "Checagem rápida. Responda a duas questões práticas para fixar os conceitos de pró-labore e separação de contas.",
        figureKey: "quiz_interactive",
        quizQuestions: [
          {
            question: "Quando o proprietário precisa pagar a conta de luz da sua residência, qual é a conduta correta?",
            options: [
              "Pagar direto no caixa da marmitaria se houver saldo sobrando",
              "Pagar com seu pró-labore na sua conta física pessoal",
              "Lançar como despesa operacional da empresa para abater imposto",
              "Esperar o fim do ano para compensar com dividendos"
            ],
            correctIndex: 1,
            explanation: "O pró-labore é a única ponte legítima. Despesas de casa devem ser pagas com o dinheiro transferido como pró-labore para a conta pessoal do proprietário."
          },
          {
            question: "Por que a informalidade de misturar as contas eleva o custo de transação do pequeno negócio?",
            options: [
              "Porque a Receita Federal bloqueia automaticamente o CPF no mesmo dia",
              "Porque gera falta de histórico contábil e assimetria de informação perante bancos e parceiros",
              "Porque dobra obrigatoriamente a taxa de energia comercial",
              "Porque anula o direito de venda em feiras livres"
            ],
            correctIndex: 1,
            explanation: "Sem separação contábil, nem o dono nem os bancos conhecem a real capacidade de pagamento da empresa, o que encarece ou inviabiliza o crédito bancário."
          }
        ]
      }
    ]
  },

  // AULA 2
  {
    id: 2,
    title: "Teorias Financeiras Estratégicas",
    shortTitle: "Teorias Estratégicas",
    objective: "Conhecer as cinco teorias financeiras do módulo e relacioná-las com a Nova Economia Institucional (NEI).",
    isExam2: false,
    color: "#8d5b2c",
    caseCharacter: "Seu Expedito (Barraca de Romaria)",
    slides: [
      {
        slideNum: 1,
        type: "opening",
        title: "Mesma rua, destinos diferentes",
        subtitle: "Abertura · A Parábola dos Negócios Vizinhos",
        content: "Dois artesãos abriram barracas idênticas na Rua Padre Cícero no mesmo ano. Três anos depois, um expandiu com três bancas e o outro fechou as portas. Por que isso acontece?",
        studyContent: "A diferença de trajetória muitas vezes decorre de decisões estratégicas sob restrições financeiras e aversão ao risco, e não apenas de habilidade manual.",
        speakerNotes: "Provoque a turma sobre sorte versus método nas decisões de negócio.",
        audioNarration: "Aula 2. Teorias Financeiras. Dois negócios iguais na mesma rua tiveram destinos opostos. O que a teoria econômica ensina sobre isso?",
        figureKey: "fig2_opening_two_shops"
      },
      {
        slideNum: 2,
        type: "concept",
        title: "Para que servem as Teorias?",
        subtitle: "Conceito Científico",
        content: "Teorias não são abstrações distantes: são mapas conceituais que explicam por que decisões são tomadas e antecipam as consequências econômicas no ambiente real.",
        studyContent: "Entender teorias financeiras ajuda o gestor a reconhecer em que fase o negócio se encontra e a não cair nas armadilhas comportamentais de aversão excessiva ou risco inconsequente.",
        speakerNotes: "Explique a metáfora de uma lente ou mapa: a teoria ajuda a navegar na névoa da incerteza.",
        audioNarration: "Teorias servem como mapas: explicam comportamentos observados e ajudam a antecipar o impacto de cada decisão financeira.",
        figureKey: "concept_theory_map"
      },
      {
        slideNum: 3,
        type: "model",
        title: "As Cinco Teorias Estratégicas",
        subtitle: "Modelo Conceitual do Módulo",
        content: "1. Ciclo de Vida do Negócio\n2. Restrições Financeiras\n3. Teoria do Capital de Giro\n4. Teoria da Utilidade Esperada (Risco)\n5. Visão Baseada em Recursos (RBV)",
        studyContent: "Cada teoria ilumina uma dimensão: o tempo (ciclo), o acesso a recursos (restrições), o fôlego diário (giro), a mente do tomador de decisão (utilidade) e as forças internas do negócio (recursos).",
        speakerNotes: "Apresente as 5 teorias e explique que elas giram em torno da decisão financeira no centro.",
        audioNarration: "O módulo trabalha cinco teorias: ciclo de vida, restrições financeiras, capital de giro, utilidade esperada e visão baseada em recursos.",
        figureKey: "model_five_theories"
      },
      {
        slideNum: 4,
        type: "figure",
        title: "A Decisão Financeira e o Anel Institucional",
        subtitle: "Figura-Chave 6 · Nova Economia Institucional",
        content: "A decisão financeira está no centro de cinco teorias, envolta pelo anel institucional da NEI: regras formais (leis, tributos), regras informais (tradição, honra) e custos de transação.",
        studyContent: "Douglass North definiu instituições como 'as regras do jogo'. Oliver Williamson mostrou que quando custos de transação são altos, as empresas buscam arranjos contratuais alternativos.",
        speakerNotes: "Destaque a Figura 6 no slide. Mostre como o anel pontilhado verde simboliza a influência contínua do ambiente institucional caririense.",
        audioNarration: "No modelo da Figura 6, a decisão financeira e as cinco teorias estão envolvidas pelo anel da Nova Economia Institucional.",
        figureKey: "fig6_strategic_theories"
      },
      {
        slideNum: 5,
        type: "example",
        title: "Exemplo Resolvido: Seu Expedito e a Incerteza",
        subtitle: "Aplicação Prática · Barraca de Romaria",
        content: "Seu Expedito recusa crédito bancário a 1,5% ao mês para comprar estoque pré-romaria por receio de chuvas afastarem os romeiros. Decisão explicada pela Teoria da Utilidade Esperada e aversão ao risco.",
        studyContent: "Para ele, a dor de uma dívida não paga supera a utilidade do ganho potencial adicional. Racionalidade sob incerteza extrema.",
        speakerNotes: "Trabalhe a diferença entre risco calculável e incerteza pura na economia do Cariri.",
        audioNarration: "Seu Expedito recusa empréstimo barato por medo de a romaria ser fraca. A teoria da utilidade esperada explica essa postura de aversão ao risco.",
        figureKey: "example_expedito_risk"
      },
      {
        slideNum: 6,
        type: "caju_lens",
        title: "Metodologia CAJU: Leitura Pelas Quatro Lentes",
        subtitle: "Lente CAJU · Análise Institucional",
        content: "Aplicação das teorias financeiras na realidade regional do Cariri.",
        studyContent: "Cidades do interior frequentemente concentram negócios travados nas fases iniciais devido a assimetrias severas de informação.",
        speakerNotes: "Explore com a turma o pilar J sobre leis de microcrédito e cadastro positivo.",
        audioNarration: "Lente CAJU: Cidades com concentração em fases iniciais; restrições financeiras como custos de transação; leis de microcrédito e diagnóstico no celular.",
        figureKey: "caju_lens_quadrant",
        cajuDetails: {
          c: "Cidades interioranas concentram pequenas firmas nas fases de nascimento e sobrevivência. Raros negócios alcançam escala de maturidade com governança formal.",
          a: "Restrições de crédito nada mais são do que altos custos de transação: assimetria de informações, falta de garantias reais e custo de cobrança judicial desproporcional.",
          j: "Marcos como a Lei do Cadastro Positivo (Lei 12.414/2011), Pronampe (Lei 13.999/2020) e Microcrédito Orientado (Lei 13.636/2018) visam mitigar essas barreiras legais.",
          u: "Questionários automatizados de diagnóstico financeiro no smartphone permitem autoavaliar o estágio do negócio em menos de 5 minutos."
        }
      },
      {
        slideNum: 7,
        type: "local_reality",
        title: "Realidade Local: Sobrevivência por Oportunidade vs Necessidade",
        subtitle: "Evidência Regional Sebrae",
        content: "Negócios abertos por oportunidade têm taxa de sobrevivência de 58% em 5 anos; quando abertos por necessidade (desemprego), a sobrevivência cai para apenas 28%.",
        studyContent: "No Cariri cearense, muitos empreendimentos informais nascem da necessidade emergencial de sustento, sem estudo prévio de mercado ou reserva de contingência.",
        speakerNotes: "Debata por que o empreendedorismo por necessidade tem menor sobrevida.",
        audioNarration: "Segundo dados do Sebrae, empreender por oportunidade garante cinquenta e oito por cento de sobrevivência, contra vinte e oito por cento de quem abre por necessidade.",
        figureKey: "local_survival_chart",
        localSource: {
          source: "Sebrae · Sobrevivência de Empresas no Brasil",
          year: "Relatório de Referência",
          location: "Nordeste / Ceará"
        }
      },
      {
        slideNum: 8,
        type: "remember",
        title: "Para Lembrar Sempre",
        subtitle: "Síntese dos 3 Conceitos Teóricos",
        content: "1. O estágio do ciclo de vida define as prioridades.\n2. Restrição de crédito é custo de transação institucional.\n3. Reputação e saberes locais são recursos estratégicos.",
        studyContent: "A visão baseada em recursos (RBV) mostra que uma clientela leal e o conhecimento dos hábitos locais valem tanto quanto capital financeiro.",
        speakerNotes: "Destaque que ativos intangíveis como confiança e rede comunitária são essenciais.",
        audioNarration: "Para lembrar: o estágio do negócio dita as regras; restrição financeira é custo de transação; e confiança local é capital.",
        figureKey: "remember_theories",
        rememberItems: [
          "Fase do negócio importa: empresa iniciante não gasta como empresa madura.",
          "Restrição financeira é custo: bancos cobram caro quando não conhecem o cliente.",
          "Recursos não financeiros também são capital: reputação local é ativo valioso."
        ]
      },
      {
        slideNum: 9,
        type: "quiz",
        title: "Checagem Rápida: Aula 2",
        subtitle: "Verificação Formativa",
        content: "Duas questões sobre a aplicação das teorias financeiras e do anel institucional da NEI.",
        studyContent: "Responda às questões e leia os comentários explicativos.",
        speakerNotes: "Conduza o quiz com a turma.",
        audioNarration: "Checagem rápida. Responda às duas perguntas sobre as teorias financeiras e a Nova Economia Institucional.",
        figureKey: "quiz_interactive",
        quizQuestions: [
          {
            question: "Na Nova Economia Institucional (NEI), por que pequenos comerciantes têm dificuldade de obter empréstimos em bancos tradicionais?",
            options: [
              "Porque a lei brasileira proíbe empréstimos a pessoas físicas com CNPJ",
              "Devido aos altos custos de transação causados por assimetria de informações e falta de garantias",
              "Porque pequenos negócios não geram juros para as instituições financeiras",
              "Pela exigência constitucional de capital social acima de 500 mil reais"
            ],
            correctIndex: 1,
            explanation: "Para o banco, levantar dados contábeis de um pequeno negócio custa muito caro e o risco percebido é alto, caracterizando custos de transação institucional elevados."
          },
          {
            question: "Quando Seu Expedito prefere não se endividar para aumentar o estoque temendo um movimento fraco, qual teoria financeira melhor descreve sua decisão?",
            options: [
              "Teoria da Estrutura de Capital de Modigliani-Miller",
              "Teoria da Utilidade Esperada e Aversão ao Risco",
              "Teoria dos Mercados Eficientes",
              "Teoria da Paridade do Poder de Compra"
            ],
            correctIndex: 1,
            explanation: "A Teoria da Utilidade Esperada demonstra que os indivíduos ponderam ganhos incertos contra perdas potenciais de acordo com seu perfil de aversão ao risco."
          }
        ]
      }
    ]
  },

  // AULA 3 (AVALIAÇÃO 2)
  {
    id: 3,
    title: "Planejamento Financeiro e Sazonalidade",
    shortTitle: "Planejamento Financeiro",
    objective: "Estimar faturamento, custos e lucros; definir metas e reserva; incorporar a sazonalidade na gestão.",
    isExam2: true,
    color: "#b91c1c",
    caseCharacter: "Dona Socorro e Seu Expedito",
    slides: [
      {
        slideNum: 1,
        type: "opening",
        title: "Quando vai sobrar dinheiro?",
        subtitle: "Abertura · A Meta do Freezer Novo",
        content: "Dona Socorro sonha em comprar um freezer horizontal para armazenar polpas e carnes. Ela diz: 'Vou comprar quando sobrar'. Mas o dinheiro nunca sobra por acaso!",
        studyContent: "Sem um plano orçamentário deliberado com retenção antecipada, receitas extras são absorvidas espontaneamente por despesas imprevistas.",
        speakerNotes: "Alerta importante: esta aula abre o conteúdo da Avaliação 2! Enfatize o papel das metas numéricas.",
        audioNarration: "Aula 3, conteúdo da Avaliação 2. Socorro quer um freezer novo quando sobrar dinheiro. Mas sem planejamento, o dinheiro nunca sobra por acaso.",
        figureKey: "fig3_opening_freezer"
      },
      {
        slideNum: 2,
        type: "concept",
        title: "O que é Planejamento Financeiro?",
        subtitle: "Conceito Orçamentário",
        content: "É o ato deliberado de projetar receitas futuras, despesas essenciais, metas de investimento e margens de segurança. O orçamento é sua expressão numérica e temporal.",
        studyContent: "Planejar permite ao gestor antecipar buracos de liquidez em meses fracos e alocar recursos quando a receita atinge picos sazonais.",
        speakerNotes: "Diferencie meta de desejo: meta tem número, prazo e plano de ação associado.",
        audioNarration: "Planejamento financeiro organiza receitas, despesas e investimentos no tempo. O orçamento é o plano expresso em números.",
        figureKey: "concept_budget_flow"
      },
      {
        slideNum: 3,
        type: "model",
        title: "Fórmulas de Planejamento",
        subtitle: "Modelos Quantitativos Chave",
        content: "• Faturamento = Unidades/dia × Preço unitário × Dias trabalhados\n• Lucro Bruto = Faturamento − Custos Variáveis (CV)\n• Lucro Líquido = Lucro Bruto − Despesas Fixas − Impostos\n• Reserva = 5% a 10% do faturamento bruto",
        studyContent: "As fórmulas de faturamento e lucro formam o alicerce do demonstrativo de resultado simplificado (DRE) para micro e pequenas empresas.",
        speakerNotes: "Escreva e revise as quatro fórmulas no quadro. Mostre a dedução lógica entre receita bruta e lucro líquido.",
        audioNarration: "Fórmulas essenciais: Faturamento é unidades vezes preço vezes dias. Lucro líquido desconta custos e despesas fixas. Reserva retém de cinco a dez por cento.",
        figureKey: "model_formulas_budget",
        formulas: [
          { name: "Faturamento", formula: "Fat = Q_dia × P × Dias", explanation: "Receita bruta projetada para o período comercial." },
          { name: "Lucro Bruto", formula: "LB = Receita − Custo Variável Total", explanation: "Sobram recursos para cobrir os custos fixos da operação." },
          { name: "Lucro Líquido", formula: "LL = LB − Despesas Fixas − Tributos", explanation: "Resultado final do negócio após todas as deduções." },
          { name: "Reserva Financeira", formula: "Reserva = Receita × (5% a 10%)", explanation: "Fundo de liquidez para meses de baixa estação." }
        ]
      },
      {
        slideNum: 4,
        type: "figure",
        title: "Receita Sazonal de uma Barraca de Romaria",
        subtitle: "Figura-Chave 7 · Guardar no Pico para Sustentar o Vale",
        content: "Em Juazeiro do Norte, as romarias em Fevereiro (Candeias), Julho (Padre Cícero), Setembro (Dores) e Novembro (Finados) elevam a receita para R$ 15 mil. Nos meses fracos, cai para R$ 8 mil contra despesa fixa estável de R$ 9 mil.",
        studyContent: "A Figura 7 ilustra que quem não retém a sobra dos meses fortes é obrigado a fechar as portas ou recorrer a agiotas durante os meses de estiagem religiosa.",
        speakerNotes: "Mostre a linha verde de despesas de R$ 9.000 contínua e as barras vermelhas de pico. Explique a regra 'guardar no pico, usar no vale'.",
        audioNarration: "Na Figura 7 vemos a sazonalidade de Juazeiro do Norte: a despesa de nove mil é constante, exigindo guardar nos meses de romaria para cobrir os meses fracos.",
        figureKey: "fig7_seasonal_planning"
      },
      {
        slideNum: 5,
        type: "example",
        title: "Exemplo Resolvido: Marmitas de Dona Socorro",
        subtitle: "Cálculo Passo a Passo",
        content: "Meta: 40 marmitas/dia a R$ 15, operando 22 dias no mês.\n• Faturamento = 40 × 15 × 22 = R$ 13.200\n• Custos e Despesas Totais = R$ 5.160\n• Reserva (10%) = R$ 1.320\n• Saldo Líquido Restante = R$ 6.720 (Pró-labore + Lucro)",
        studyContent: "Com R$ 1.320 guardados por mês de forma disciplinada, o freezer novo de R$ 2.640 é adquirido à vista em exatos 2 meses, com desconto e sem juros!",
        speakerNotes: "Demonstre a simplicidade e a potência do cálculo. O investimento não depende de sorte, mas de 60 dias de retenção metódica.",
        audioNarration: "Quarenta marmitas vezes quinze reais vezes vinte e dois dias rendem treze mil e duzentos reais. Com dez por cento de reserva, o freezer é pago à vista em dois meses.",
        figureKey: "example_socorro_plan"
      },
      {
        slideNum: 6,
        type: "caju_lens",
        title: "Metodologia CAJU: Leitura Pelas Quatro Lentes",
        subtitle: "Lente CAJU · Planejamento e Sazonalidade",
        content: "Como Cidades, Regras Sociais, Legislação e Dispositivos Móveis moldam o planejamento financeiro no semiárido.",
        studyContent: "A Lente CAJU revela como a cultura do consumo imediato compete com a necessidade objetiva de planejamento sazonal.",
        speakerNotes: "Pergunte aos alunos se suas famílias também sentem a variação sazonal da economia local.",
        audioNarration: "Lente CAJU no planejamento: Cidades com romarias e festas; normas informais de consumo imediato; teto de oitenta e um mil do MEI e orçamento no celular.",
        figureKey: "caju_lens_quadrant",
        cajuDetails: {
          c: "Em cidades de forte economia sazonal (romarias em Juazeiro, Expocrato no Crato, festas de padroeiros), planejar significa essencialmente estocar liquidez nos picos para sobreviver no vale.",
          a: "A norma social 'o que entra hoje gasta-se hoje' é compreensível em ambientes de escassez histórica, mas é incompatível com a sobrevivência da firma. O plano orçamentário é uma regra autoimposta disciplinadora.",
          j: "O MEI deve atentar rigorosamente ao limite de faturamento anual de R$ 81.000 (R$ 6.750/mês na média). Ultrapassar sem planejamento implica desenquadramento tributário com cobrança retroativa.",
          u: "Planilha automatizada ou app de orçamento com alertas visuais no smartphone sinaliza antecipadamente os meses em que o saldo projetado ficará no vermelho."
        }
      },
      {
        slideNum: 7,
        type: "local_reality",
        title: "Realidade Local: Impacto das Romarias de Juazeiro",
        subtitle: "Evidência Acadêmica da URCA",
        content: "Pesquisa apresentada na XXVIII Semana de Iniciação Científica da URCA (2025) aponta que pequenos negócios de Juazeiro faturam até 60% da receita anual concentrada nas quatro grandes romarias.",
        studyContent: "A pesquisa destacou que os comerciantes que mantêm reserva financeira formal conseguem comprar mercadorias com desconto antecipado de atacado, dobrando sua margem líquida durante as festas religiosas.",
        speakerNotes: "Valorize a pesquisa científica produzida pelos alunos e professores da URCA.",
        audioNarration: "Trabalhos da Semana Científica da URCA mostram que até sessenta por cento do faturamento anual de pequenos comércios em Juazeiro decorre das romarias.",
        figureKey: "local_romaria_stats",
        localSource: {
          source: "XXVIII Semana de Iniciação Científica · URCA",
          year: "2025",
          location: "Juazeiro do Norte e Região Metropolitana do Cariri"
        }
      },
      {
        slideNum: 8,
        type: "remember",
        title: "Para Lembrar Sempre",
        subtitle: "Síntese Estratégica",
        content: "1. Planejar é distribuir a receita sazonal ao longo do ano todo.\n2. Metas precisam de números exatos, prazos e reservas automáticas.\n3. Comparar o previsto contra o realizado todo final de mês.",
        studyContent: "Um plano sem acompanhamento mensal vira gaveta. O acompanhamento contínuo previne surpresas operacionais.",
        speakerNotes: "Fixe a ideia: receita de romaria não é lucro para gastar todo no churrasco de domingo.",
        audioNarration: "Para lembrar: Planejar distribui a renda do ano. Metas precisam de números. E compare o previsto com o realizado todo mês.",
        figureKey: "remember_budget",
        rememberItems: [
          "Ano não é linear: reserve parte do lucro de meses fartos para sustentar meses fracos.",
          "Metas mensuráveis: defina quanto custa o investimento e quantos meses de poupança ele exige.",
          "Previsto × Realizado: avalie todo dia 30 se o faturamento alcançou o estimado."
        ]
      },
      {
        slideNum: 9,
        type: "quiz",
        title: "Checagem Rápida: Aula 3 (Avaliação 2)",
        subtitle: "Simulado Formativo da Avaliação 2",
        content: "Questões do banco oficial da Avaliação 2 sobre faturamento, reserva e sazonalidade.",
        studyContent: "Teste seus cálculos com os dados de Dona Socorro e Seu Expedito.",
        speakerNotes: "Questão clássica de prova de economia da URCA! Acompanhe os alunos.",
        audioNarration: "Checagem rápida da Avaliação 2. Resolva o cálculo de faturamento e a questão de planejamento sazonal.",
        figureKey: "quiz_interactive",
        quizQuestions: [
          {
            question: "Um comerciante vende 50 lanches por dia a R$ 12,00 cada, funcionando 25 dias no mês. Qual é o faturamento bruto mensal estimado e a reserva recomendada de 10%?",
            options: [
              "Faturamento: R$ 12.000 | Reserva: R$ 1.200",
              "Faturamento: R$ 15.000 | Reserva: R$ 1.500",
              "Faturamento: R$ 18.000 | Reserva: R$ 1.800",
              "Faturamento: R$ 15.000 | Reserva: R$ 3.000"
            ],
            correctIndex: 1,
            explanation: "Cálculo: 50 lanches × R$ 12 = R$ 600 por dia. Em 25 dias: 600 × 25 = R$ 15.000 de faturamento bruto. Uma reserva de 10% corresponde a R$ 1.500."
          },
          {
            question: "Por que um negócio localizado em Juazeiro do Norte não deve basear seus gastos mensais na receita média de setembro (mês de romaria das Dores)?",
            options: [
              "Porque em setembro a prefeitura proíbe a distribuição de lucros",
              "Porque a receita de setembro é um pico atípico e deve ser amortizada para cobrir os déficits operacionais dos meses sem romaria",
              "Porque o Simples Nacional não aceita receitas sazonais",
              "Porque a inflação do Cariri zera o ganho do mês seguinte"
            ],
            correctIndex: 1,
            explanation: "A sazonalidade concentra o faturamento no pico. Tratar o ganho de setembro como receita recorrente gerará colapso de caixa nos meses fracos seguintes."
          }
        ]
      }
    ]
  },

  // AULA 4
  {
    id: 4,
    title: "Fluxo de Caixa Operacional",
    shortTitle: "Fluxo de Caixa",
    objective: "Registrar e projetar entradas e saídas; diferenciar rigorosamente lucro econômico de caixa disponível.",
    isExam2: false,
    color: "#8d5b2c",
    caseCharacter: "Bodega do Bairro e Sabor Caseiro",
    slides: [
      {
        slideNum: 1,
        type: "opening",
        title: "Lucrou, mas não pagou o boleto!",
        subtitle: "Abertura · O Paradoxo do Lucro sem Caixa",
        content: "A bodega teve lucro contábil apurado de R$ 4.000 no mês. Mas no dia 10, o boleto do fornecedor de bebidas venceu e não havia um centavo na conta bancária. Como isso é possível?",
        studyContent: "A diferença crítica está no prazo: as vendas foram a prazo (fiado e cartão em 30 dias), mas o boleto do fornecedor venceu à vista. Lucro é promessa de ganho; caixa é dinheiro disponível hoje.",
        speakerNotes: "Frase de choque para a turma: 'Empresas não quebram por falta de lucro, quebram por falta de caixa!'",
        audioNarration: "Aula 4. Fluxo de Caixa. A bodega lucrou no papel, mas no dia dez não tinha dinheiro para pagar o boleto do fornecedor. Como isso acontece?",
        figureKey: "fig4_opening_bills"
      },
      {
        slideNum: 2,
        type: "concept",
        title: "O que é Fluxo de Caixa?",
        subtitle: "Conceito Dinâmico",
        content: "É o controle e a projeção temporal exata de quando o dinheiro entra fisicamente e quando sai da conta da empresa. Rege a liquidez e a solvência imediata.",
        studyContent: "Diferente da DRE (regime de competência), o fluxo de caixa opera estritamente no regime de caixa: só importa o dia em que o recurso financeiro transitou.",
        speakerNotes: "Ensine a diferenciar regime de competência (data do fato gerador) de regime de caixa (data da liquidação financeira).",
        audioNarration: "Fluxo de caixa é o registro cronológico de quando o dinheiro efetivamente entra e sai. Mede a capacidade diária de honrar compromissos.",
        figureKey: "concept_cash_flow"
      },
      {
        slideNum: 3,
        type: "model",
        title: "A Fórmula Fundamental do Caixa",
        subtitle: "Equação de Continuidade",
        content: "Saldo Final = Saldo Inicial + Entradas Reais − Saídas Reais\n\nO saldo final de um dia (ou semana/mês) é obrigatoriamente o saldo inicial do período seguinte.",
        studyContent: "Se a projeção indicar saldo final negativo em determinado dia do mês, o gestor pode antecipar cobranças, adiar compras não urgentes ou renegociar prazos antes do vencimento.",
        speakerNotes: "Explique como o saldo final negativo gera cheque especial e juros escorchantes se não for antecipado.",
        audioNarration: "Fórmula do caixa: Saldo final é igual ao saldo inicial mais entradas menos saídas. O saldo final de um período abre o período seguinte.",
        figureKey: "model_cash_equation",
        formulas: [
          { name: "Saldo Final", formula: "SF = SI + Entradas − Saídas", explanation: "Determina a liquidez de fechamento do período." }
        ]
      },
      {
        slideNum: 4,
        type: "figure",
        title: "Fluxo de Caixa Semanal em Cascata",
        subtitle: "Figura-Chave 8 · O Gráfico Waterfall",
        content: "Saldo inicial de R$ 500; Vendas à vista sobem +R$ 1.680; Recebido de fiado soma +R$ 300. Descidas: Insumos −R$ 900; Gás e luz −R$ 240; Pró-labore −R$ 600. Saldo final preservado: R$ 740.",
        studyContent: "A Figura 8 demonstra a dinâmica da semana: as entradas constroem o colchão e as saídas operacionais deduzem os valores, garantindo fechamento positivo de R$ 740.",
        speakerNotes: "Apresente o gráfico em cascata da Figura 8. Mostre como cada barra verde eleva o nível e cada barra vermelha consome os recursos.",
        audioNarration: "Na Figura 8 vemos a semana em cascata: quinhentos de saldo inicial, entradas de quase dois mil e saídas de mil setecentos e quarenta, restando setecentos e quarenta.",
        figureKey: "fig8_cash_flow_waterfall"
      },
      {
        slideNum: 5,
        type: "example",
        title: "Exemplo Resolvido: Exercício Sabor Caseiro",
        subtitle: "Aplicação Prática · Quatro Meses de Projeção",
        content: "Mês 1 (Jan): SI R$ 1.000 + Entradas R$ 8.000 − Saídas R$ 7.200 = SF R$ 1.800.\nMês 2 (Fev): SI R$ 1.800 + Entradas R$ 6.500 − Saídas R$ 7.800 = SF R$ 500.\nAlerta em Fev evitou cheque especial!",
        studyContent: "Perceba como a projeção com antecedência identificou a queima de R$ 1.300 em fevereiro, permitindo segurar novas compras e atravessar o mês com saldo positivo.",
        speakerNotes: "Comente a transição de Jan para Fev. Quem não projeta é surpreendido no dia 20 com caixa zerado.",
        audioNarration: "No exercício Sabor Caseiro, a sobra de janeiro financiou o déficit operacional de fevereiro, garantindo a solvência do negócio sem empréstimos bancários.",
        figureKey: "example_sabor_caseiro"
      },
      {
        slideNum: 6,
        type: "caju_lens",
        title: "Metodologia CAJU: Leitura Pelas Quatro Lentes",
        subtitle: "Lente CAJU · O Fenômeno do Fiado",
        content: "A ótica institucional do fiado e a tecnologia dos pagamentos instantâneos nas cidades do interior.",
        studyContent: "O fiado é uma instituição econômica informal que financia o consumo popular, mas transfere o risco de crédito integralmente para as costas do comerciante.",
        speakerNotes: "Peça para os alunos relatarem se as bodegas do seu bairro ainda usam caderneta de fiado e como é feita a cobrança.",
        audioNarration: "Lente CAJU: O fiado substituindo o crédito bancário nas cidades; o enforcement da reputação social; notas promissórias e o Pix no celular.",
        figureKey: "caju_lens_quadrant",
        cajuDetails: {
          c: "Nas cidades e distritos do Cariri, o fiado de caderneta substitui a falta de cartões e contas bancárias dos moradores de menor renda. O pequeno bodegueiro atua como banqueiro local.",
          a: "O fiado opera pelo mecanismo de reputação e laços comunitários ('enforcement' social). O custo de monitoramento é baixo na vizinhança, mas a inadimplência quebra o capital de giro.",
          j: "Instrumentos jurídicos como a nota promissória, confissão de dívida e o Juizado Especial Cível (Lei 9.099/1995) possibilitam cobranças legais sem honorários advocatícios para causas até 20 salários mínimos.",
          u: "Pix e carteiras digitais no celular reduzem drasticamente o prazo de recebimento. Aplicativos de caderneta enviam lembretes automáticos e cordiais pelo WhatsApp."
        }
      },
      {
        slideNum: 7,
        type: "local_reality",
        title: "Realidade Local: Mortalidade por Falta de Giro",
        subtitle: "Dados Oficiais Sebrae",
        content: "Para 22% dos MEIs que encerraram atividades no Brasil, a falta crônica de capital de giro e o descontrole do fluxo de caixa foram os principais causadores da falência.",
        studyContent: "A pesquisa do Sebrae demonstra que a incapacidade de prever os dias de descasamento entre pagamentos e recebimentos é mais letal que a concorrência comercial.",
        speakerNotes: "Destaque a estatística: 1 em cada 5 pequenos negócios quebra exclusivamente por descontrole de caixa.",
        audioNarration: "Vinte e dois por cento dos microempreendedores individuais que fecharam as portas apontam o descontrole de caixa e capital de giro como causa fatal.",
        figureKey: "local_turnover_stats",
        localSource: {
          source: "Sebrae · Sobrevivência de Empresas",
          year: "Relatório Consolidado",
          location: "Brasil e Ceará"
        }
      },
      {
        slideNum: 8,
        type: "remember",
        title: "Para Lembrar Sempre",
        subtitle: "Síntese dos 3 Princípios de Caixa",
        content: "1. Lucro contábil não é dinheiro em caixa.\n2. Projete as entradas e saídas com pelo menos 30 dias de antecedência.\n3. Renegociar prazo com fornecedor é mais barato que tomar empréstimo.",
        studyContent: "O bom gestor nunca pede prazo no dia do vencimento. Quando percebe o descasamento no fluxo projetado, renegocia dez dias antes.",
        speakerNotes: "Enfatize: credibilidade com fornecedor se constrói avisando com antecedência, não sumindo no dia do boleto.",
        audioNarration: "Para lembrar: Lucro não é caixa. Projete com trinta dias de antecedência. E renegociar prazo é melhor que pagar juros de banco.",
        figureKey: "remember_cash",
        rememberItems: [
          "Lucro não é caixa: venda a prazo é promessa; boleto do fornecedor é compromisso à vista.",
          "Projete antes: identifique dias críticos antes que eles aconteçam.",
          "Comunicação antecipada: peça prorrogação ao fornecedor antes do boleto vencer."
        ]
      },
      {
        slideNum: 9,
        type: "quiz",
        title: "Checagem Rápida: Aula 4",
        subtitle: "Verificação Formativa",
        content: "Duas questões sobre projeção de saldo de caixa e governança do fiado.",
        studyContent: "Pratique o cálculo do saldo final e compreenda o impacto do crédito informal.",
        speakerNotes: "Oriente os alunos a utilizarem papel ou a calculadora do celular.",
        audioNarration: "Checagem rápida. Teste seu cálculo de saldo final e responda à pergunta sobre vendas a prazo.",
        figureKey: "quiz_interactive",
        quizQuestions: [
          {
            question: "Uma mercearia iniciou o mês com R$ 800 de saldo. Durante o período teve R$ 4.200 de entradas reais e R$ 4.600 de pagamentos efetuados. Qual é o saldo final do mês?",
            options: [
              "R$ 800 (o saldo inicial permaneceu)",
              "R$ 400 (saldo final positivo)",
              "−R$ 400 (saldo devedor)",
              "R$ 1.200 (houve lucro)"
            ],
            correctIndex: 1,
            explanation: "Saldo Final = 800 (inicial) + 4.200 (entradas) − 4.600 (saídas) = 800 − 400 = R$ 400 positivo."
          },
          {
            question: "Por que uma venda de R$ 500 no fiado de 30 dias pode colocar em risco o fluxo de caixa de quem tem poucos recursos?",
            options: [
              "Porque vendas a prazo pagam o dobro de tributos no MEI",
              "Porque o comerciante precisa pagar o fornecedor do produto à vista enquanto espera 30 dias para receber o dinheiro do cliente",
              "Porque o Banco Central cancela a chave Pix do comerciante",
              "Porque o cliente tem direito legal de não pagar após 15 dias"
            ],
            correctIndex: 1,
            explanation: "O descasamento temporal obriga o comerciante a financiar o cliente com o próprio capital de giro, gerando falta de dinheiro para repor mercadorias."
          }
        ]
      }
    ]
  },

  // AULA 5 (AVALIAÇÃO 2)
  {
    id: 5,
    title: "Custos e Despesas no Pequeno Negócio",
    shortTitle: "Custos e Despesas",
    objective: "Classificar gastos com precisão e calcular custo variável unitário, despesa fixa unitária e ganho de escala.",
    isExam2: true,
    color: "#b91c1c",
    caseCharacter: "Marmitaria da Dona Socorro",
    slides: [
      {
        slideNum: 1,
        type: "opening",
        title: "Quanto custa de verdade uma marmita?",
        subtitle: "Abertura · A Armadilha dos Custos Ocultos",
        content: "Dona Socorro soma o arroz, feijão, frango e salada e calcula R$ 7,00. Mas e o botijão de gás? O detergente da louça? A embalagem térmica com divisória? E a mão de obra dela?",
        studyContent: "Desconsiderar os custos indiretos e os gastos fixos é a causa número um de preços calculados abaixo do custo real de produção, gerando prejuízos silenciosos a cada venda realizada.",
        speakerNotes: "Aula 5 da Avaliação 2! Traga um exemplo tangível de marmita ou produto local para destrinchar os componentes.",
        audioNarration: "Aula 5, conteúdo da Avaliação 2. Dona Socorro conta só o arroz e o frango. Mas e o gás, a embalagem e o trabalho dela? Quanto custa uma marmita?",
        figureKey: "fig5_opening_lunchbox"
      },
      {
        slideNum: 2,
        type: "concept",
        title: "Custo versus Despesa",
        subtitle: "Diferenciação Conceitual",
        content: "• CUSTO: Todo gasto ligado diretamente à produção do produto ou prestação do serviço (ingredientes, gás de cozinha, embalagens descartáveis, mão de obra direta).\n• DESPESA: Gasto ligado à administração, apoio e vendas (internet, propaganda, aluguel, contador).",
        studyContent: "A regra de ouro: se a fábrica parar de produzir hoje, o gasto desaparece? Se sim, é custo de produção. Se continuar existindo para manter o negócio em pé, é despesa administrativa/fixa.",
        speakerNotes: "Treine a turma com exemplos rápidos: farinha (custo), cartão de visita (despesa), energia da cozinha (custo), energia do escritório (despesa).",
        audioNarration: "Custos estão ligados diretamente à fabricação do produto. Despesas sustentam a administração, divulgação e suporte do negócio.",
        figureKey: "concept_cost_vs_expense"
      },
      {
        slideNum: 3,
        type: "model",
        title: "Fixos, Variáveis e Fórmulas de Cálculo",
        subtitle: "Classificação Operacional e Equações",
        content: "• Custo Variável Unitário (CVu) = Insumos + Embalagem + Gás por unidade\n• Despesa Fixa Unitária (DFu) = Despesas Fixas Totais ÷ Quantidade (Q)\n• Custo Médio Unitário = (DF Totais ÷ Q) + CVu",
        studyContent: "Note que o custo variável unitário é praticamente constante por unidade, mas o custo fixo unitário diminui quanto mais você produz e vende.",
        speakerNotes: "Escreva a fórmula do custo médio unitário. Mostre aos alunos que o volume (Q) está no denominador dos custos fixos.",
        audioNarration: "Custo variável unitário varia com a produção. Despesa fixa unitária é o total fixo dividido pelo volume. O custo total unitário soma os dois.",
        figureKey: "model_cost_formulas",
        formulas: [
          { name: "Custo Variável Unitário", formula: "CVu = Insumos + Embalagem + Proporção Gás", explanation: "Gasto direto necessário para produzir uma única unidade." },
          { name: "Despesa Fixa Unitária", formula: "DFu = Despesas Fixas ÷ Q", explanation: "Rateio dos custos de estrutura pela quantidade comercializada." },
          { name: "Custo Unitário Total", formula: "CTu = (CF ÷ Q) + CVu", explanation: "Custo econômico integral que cada unidade carrega." }
        ]
      },
      {
        slideNum: 4,
        type: "figure",
        title: "Ganho de Escala: O Custo Fixo Diluído",
        subtitle: "Figura-Chave 9 · Curva de Custo Médio Decrescente",
        content: "Com 100 marmitas/mês, cada uma carrega R$ 17 de custo fixo (Custo Total = R$ 26,50). Com 300 marmitas, o fixo cai para R$ 5,67 (Custo Total = R$ 15,17). Com 800 marmitas, aproxima-se do CVu de R$ 9,50.",
        studyContent: "A Figura 9 ilustra visualmente por que o aumento de vendas torna a empresa mais competitiva: a curva decrescente demonstra o poder do ganho de escala.",
        speakerNotes: "Destaque o ponto exato da marmitaria em 300 unidades a R$ 15,17 na Figura 9. Mostre a assíntota no CVu verde de R$ 9,50.",
        audioNarration: "Na Figura 9 vemos o ganho de escala: quanto mais marmitas produzidas, mais o custo fixo se dilui, baixando o custo unitário de vinte e seis para quinze reais.",
        figureKey: "fig9_scale_economies"
      },
      {
        slideNum: 5,
        type: "example",
        title: "Exemplo Resolvido: Ficha Técnica de Socorro",
        subtitle: "Cálculo Completo do Exercício da Avaliação 2",
        content: "Produção: 300 marmitas/mês. Custos Fixos Totais (aluguel + pró-labore + luz): R$ 1.700. CVu: R$ 9,50.\n• DFu = R$ 1.700 ÷ 300 = R$ 5,67 por marmita.\n• Custo Médio Unitário = R$ 5,67 + R$ 9,50 = R$ 15,17 por marmita!",
        studyContent: "Se Dona Socorro vendesse a marmita por R$ 13 acreditando que o custo era apenas os ingredientes (R$ 9,50), estaria perdendo R$ 2,17 em cada unidade entregue!",
        speakerNotes: "Cálculo emblemático da disciplina. Mostre que vender por R$ 13 achando que está lucrando é falência garantida.",
        audioNarration: "Com trezentas marmitas e fixos de mil setecentos reais, cada marmita carrega cinco reais e sessenta e sete centavos de custo fixo, totalizando quinze reais e dezessete.",
        figureKey: "example_lunchbox_breakdown"
      },
      {
        slideNum: 6,
        type: "caju_lens",
        title: "Metodologia CAJU: Leitura Pelas Quatro Lentes",
        subtitle: "Lente CAJU · Insumos no Interior e Escala",
        content: "A dinâmica de suprimentos, custos de frete e compras coletivas no Cariri cearense.",
        studyContent: "O pequeno empresário interiorano sofre o 'efeito distância' nos bens industrializados, mas possui vantagens comparativas nos insumos agrícolas regionais.",
        speakerNotes: "Discuta o papel das cooperativas de produtores na Chapada do Araripe.",
        audioNarration: "Lente CAJU: Insumos de fora encarecidos no interior; o papel dos intermediários e compras conjuntas; cooperativas e fichas técnicas no celular.",
        figureKey: "caju_lens_quadrant",
        cajuDetails: {
          c: "Cidades do interior pagam fretes mais altos por insumos industriais externos (embalagens plásticas, gás). Em contrapartida, insumos locais e sazonais (pequi, feijão de corda, mandioca) barateiam nas safras regionais.",
          a: "O atravessador tradicional reduz custos de busca para o produtor, mas se apropria de grande parte da margem. Compras coletivas entre comerciantes reduzem custos de transação e garantem poder de barganha.",
          j: "A Lei das Cooperativas (Lei 5.764/1971) e o marco legal das associações comunitárias conferem segurança jurídica formal para aquisições conjuntas diretas de fabricantes.",
          u: "Ficha técnica salva em imagem ou aplicativo leve no celular permite recalcular o custo unitário imediatamente no momento em que o preço do arroz ou do frango sobe no atacado."
        }
      },
      {
        slideNum: 7,
        type: "local_reality",
        title: "Realidade Local: Insumos do Cariri e Sazonalidade da Safra",
        subtitle: "Evidência de Mercado Regional",
        content: "No auge da safra do pequi e do milho verde na encosta da Chapada do Araripe, o custo de alimentos cai até 40% nas feiras livres de Crato e Juazeiro, aliviando custos operacionais de quem adapta o cardápio.",
        studyContent: "Restaurantes e marmitarias inteligentes alteram seus pratos conforme o calendário agrícola local, reduzindo seu CVu e aumentando a margem sem elevar o preço para o cliente.",
        speakerNotes: "Valorize a gastronomia regional do Cariri como estratégia econômica de custos.",
        audioNarration: "Durante a safra do pequi e milho no Cariri, o custo de insumos alimentícios locais cai até quarenta por cento, viabilizando pratos mais rentáveis.",
        figureKey: "local_cariri_supplies",
        localSource: {
          source: "Pesquisa de Preços da Agricultura Familiar · Cariri",
          year: "2025/2026",
          location: "Crato, Juazeiro do Norte e Barbalha"
        }
      },
      {
        slideNum: 8,
        type: "remember",
        title: "Para Lembrar Sempre",
        subtitle: "Síntese dos 3 Fundamentos de Custos",
        content: "1. Classificar todos os gastos antes de estipular o preço.\n2. Incluir o pró-labore do dono e a depreciação nos custos fixos.\n3. O aumento de volume de vendas dilui os custos fixos por unidade.",
        studyContent: "Nunca esqueça que tempo de trabalho do proprietário custa dinheiro: trabalho gratuito mascara custos e ilude a precificação.",
        speakerNotes: "Frase para gravar: 'Trabalho do dono não é de graça!'.",
        audioNarration: "Para lembrar: Classifique gastos antes de precificar. Pró-labore entra nos custos fixos. E mais volume dilui o custo fixo por unidade.",
        figureKey: "remember_costs",
        rememberItems: [
          "Classificar antes de precificar: não confunda custo direto com despesa administrativa.",
          "Pró-labore na conta: o salário do empreendedor é despesa fixa que precisa ser coberta.",
          "Volume gera escala: vender mais unidades faz o custo fixo por produto cair expressivamente."
        ]
      },
      {
        slideNum: 9,
        type: "quiz",
        title: "Checagem Rápida: Aula 5 (Avaliação 2)",
        subtitle: "Simulado Formativo da Avaliação 2",
        content: "Duas questões clássicas de cálculo de custo unitário e diluição de custos fixos.",
        studyContent: "Realize as operações e confira o gabarito comentado.",
        speakerNotes: "Deixe os alunos resolverem a questão 1 no caderno e confira o resultado.",
        audioNarration: "Checagem rápida da Avaliação 2. Calcule o custo médio unitário e responda sobre a diluição de despesas fixas.",
        figureKey: "quiz_interactive",
        quizQuestions: [
          {
            question: "Uma lanchonete tem despesas fixas mensais de R$ 2.000,00 e custo variável unitário de R$ 6,00 por sanduíche. Se produzir e vender 500 sanduíches no mês, qual é o custo médio unitário de cada sanduíche?",
            options: [
              "R$ 6,00",
              "R$ 8,00",
              "R$ 10,00",
              "R$ 12,50"
            ],
            correctIndex: 2,
            explanation: "Despesa fixa por sanduíche = R$ 2.000 ÷ 500 = R$ 4,00. Custo total unitário = R$ 4,00 (fixo) + R$ 6,00 (variável) = R$ 10,00 por unidade."
          },
          {
            question: "O que acontece com o custo unitário total quando a quantidade produzida aumenta em um negócio com altos custos fixos?",
            options: [
              "O custo unitário sobe, porque a empresa gasta mais matérias-primas",
              "O custo unitário cai, porque os custos fixos são divididos por um número maior de unidades (ganho de escala)",
              "O custo unitário permanece idêntico, pois custos fixos não se alteram",
              "O custo variável unitário se torna negativo"
            ],
            correctIndex: 1,
            explanation: "Os custos fixos totais permanecem os mesmos, logo o custo fixo rateado por unidade decresce à medida que o volume se expande (ganho de escala)."
          }
        ]
      }
    ]
  },

  // AULA 6 (AVALIAÇÃO 2)
  {
    id: 6,
    title: "Precificação e Markup Divisor",
    shortTitle: "Precificação",
    objective: "Calcular o preço pelo markup divisor, entender o impacto destruidor de descontos e combinar custo com valor percebido.",
    isExam2: true,
    color: "#b91c1c",
    caseCharacter: "Dona Socorro e Ateliê de Couro",
    slides: [
      {
        slideNum: 1,
        type: "opening",
        title: "Devo baixar o preço para R$ 13?",
        subtitle: "Abertura · A Pressão da Concorrência",
        content: "O concorrente na esquina da praça está vendendo quentinha a R$ 13,00. O preço calculado de Dona Socorro deu R$ 15,33. Se ela baixar no impulso para empatar com a concorrência, terá lucro ou prejuízo?",
        studyContent: "Copiar o preço do vizinho sem conhecer a estrutura de custos dele é suicídio empresarial. O vizinho pode ter custos menores ou estar marchando rumo à falência.",
        speakerNotes: "Aula 6 central para a Avaliação 2! Pergunte à turma: 'Quem aqui já deu desconto no balcão sem fazer as contas?'.",
        audioNarration: "Aula 6, Avaliação 2. O concorrente vende a treze reais e o preço calculado de Socorro deu quinze e trinta e três. Baixar no impulso dá lucro ou prejuízo?",
        figureKey: "fig6_opening_price_war"
      },
      {
        slideNum: 2,
        type: "concept",
        title: "O que é Precificar?",
        subtitle: "O Tripé da Precificação Estratégica",
        content: "Precificar não é apenas somar uma porcentagem em cima da compra. É equilibrar três forças: Custos internos (o piso), Concorrência de mercado (o balizador) e Valor percebido pelo cliente (o teto).",
        studyContent: "Se o preço estiver abaixo do custo, gera falência. Se estiver acima do valor percebido, ninguém compra. O papel do gestor é construir valor para cobrar com margem saudável.",
        speakerNotes: "Apresente o piso (custo), balizador (mercado) e teto (valor percebido).",
        audioNarration: "Precificar exige equilibrar três forças: custos internos que formam o piso, concorrência no mercado e valor percebido pelo cliente.",
        figureKey: "concept_pricing_triangle"
      },
      {
        slideNum: 3,
        type: "model",
        title: "A Fórmula do Markup Divisor",
        subtitle: "O Método Rigoroso da Economia",
        content: "Preço de Venda = Custo Direto ÷ [1 − (Taxas% + Margem%)]\n\nATENÇÃO: A margem de lucro e as taxas de cartão/tributos incidem sobre o Preço Final de Venda (100%), e NUNCA em cima do custo inicial!",
        studyContent: "O erro comum é multiplicar: Custo × 1,20. Isso não dá 20% de margem sobre a venda! Para ter 20% do faturamento em lucro, você deve usar o Markup Divisor.",
        speakerNotes: "Frise bem: margem é sobre o preço final! Mostre a diferença entre margem e markup multiplicador simplista.",
        audioNarration: "Fórmula do markup divisor: Preço de venda é igual ao custo dividido por um menos as taxas e a margem desejada. A margem incide sobre o preço de venda.",
        figureKey: "model_markup_divisor",
        formulas: [
          { name: "Markup Divisor", formula: "PV = Custo ÷ [1 − (Taxas% + Margem%)]", explanation: "Calcula o preço garantindo que taxas e lucro incidam sobre a receita bruta total." }
        ]
      },
      {
        slideNum: 4,
        type: "figure",
        title: "Composição do Preço pelo Markup Divisor",
        subtitle: "Figura-Chave 10 · Decomposição Visual da Receita",
        content: "Preço Final R$ 15,33 = Custo Total Unitário R$ 11,50 (75%) + Taxa do Cartão de 5% R$ 0,77 (5%) + Margem Desejada de 20% R$ 3,07 (20%). O divisor é 0,75.",
        studyContent: "A Figura 10 mostra com clareza matemática que 11,50 ÷ (1 − 0,05 − 0,20) = 11,50 ÷ 0,75 = R$ 15,33. Cada centavo arrecadado tem destino exato.",
        speakerNotes: "Projete a Figura 10. Aponte cada camada da barra: marrom para custo (75%), amarela para cartão (5%) e verde para margem (20%).",
        audioNarration: "Na Figura 10 vemos a composição: onze e cinquenta de custo, setenta e sete centavos de taxa de cartão e três reais e sete centavos de lucro, totalizando quinze reais e trinta e três.",
        figureKey: "fig10_markup_composition"
      },
      {
        slideNum: 5,
        type: "example",
        title: "O Alto Custo de um Desconto Inocente",
        subtitle: "Simulação de Impacto na Margem Unitária",
        content: "Preço: R$ 15,00. Custo Variável: R$ 9,00. Margem unitária normal: R$ 6,00.\nSe Dona Socorro der 10% de desconto (vender a R$ 13,50):\n• Nova margem: R$ 13,50 − R$ 9,00 = R$ 4,50\n• A margem caiu 25%! Ela precisará vender 33% a mais só para empatar!",
        studyContent: "Um pequeno desconto de 10% corrói desproporcionalmente o lucro porque o custo dos insumos (frango, gás) não diminui quando o desconto é concedido.",
        speakerNotes: "Mostre o gráfico comparativo de barras de margem. 10% de desconto destrói 25% do ganho real.",
        audioNarration: "Um desconto de dez por cento na marmita derruba o lucro unitário em vinte e cinco por cento, exigindo trinta e três por cento a mais de vendas para compensar.",
        figureKey: "example_discount_trap"
      },
      {
        slideNum: 6,
        type: "caju_lens",
        title: "Metodologia CAJU: Leitura Pelas Quatro Lentes",
        subtitle: "Lente CAJU · Guerras de Preço e Valor Local",
        content: "Como o ambiente do Cariri lida com guerras predatórias de preços, normas da feira e o Código de Defesa do Consumidor.",
        studyContent: "Em comunidades menores, guerras de preço destroem a sustentabilidade do ecossistema varejista sem gerar fidelidade duradoura.",
        speakerNotes: "Comente o exemplo do Ateliê de Couro em Espedito Seleiro (Nova Olinda) como case de altíssimo valor percebido.",
        audioNarration: "Lente CAJU: Guerras de preço destrutivas em cidades pequenas; o preço costumeiro da feira; lei de diferenciação de preços no cartão e calculadora no celular.",
        figureKey: "caju_lens_quadrant",
        cajuDetails: {
          c: "Em mercados locais e feiras compactas do Cariri, os preços são públicos e transparentes. A guerra de preços entre vizinhos de banca destrói a rentabilidade de todos sem aumentar a demanda global.",
          a: "O 'preço da feira' e o 'preço do concorrente' funcionam como normas sociais rígidas. Rompê-las para cima exige demonstrar valor superior; segui-las cegamente pode levar ao prejuízo.",
          j: "O CDC (Lei 8.078/1990) proíbe preços enganosos. Já a Lei Federal 13.455/2017 autoriza legalmente cobrar preços diferentes para pagamento em dinheiro/Pix versus cartão de crédito, desde que visivelmente informado.",
          u: "Atalho de calculadora de markup divisor na tela do celular permite ao vendedor simular a margem real no exato momento da negociação no balcão."
        }
      },
      {
        slideNum: 7,
        type: "local_reality",
        title: "Realidade Local: Artesanato de Couro vs Feira Livre",
        subtitle: "Diferenciação de Valor no Cariri",
        content: "No artesanato de couro e palha de Nova Olinda e Juazeiro, o preço é sustentado pelo valor cultural percebido (identidade e design sertanejo). Já na feira livre de hortifrúti, o preço é ditado pelo mercado e controle de perdas.",
        studyContent: "Compreender em qual quadrante seu negócio atua define se você deve brigar por eficiência máxima de custo ou focar na narrativa de valor e acabamento diferenciado.",
        speakerNotes: "Contraste o mestre artesão de couro com o feirante de tomate. Modelos de precificação opostos.",
        audioNarration: "No artesanato do Cariri o preço decorre do valor cultural percebido. Na feira livre, a precificação depende do mercado e do controle rigoroso de perdas.",
        figureKey: "local_artisan_vs_market",
        localSource: {
          source: "Estudos de Economia Criativa e Feiras · URCA",
          year: "2025",
          location: "Nova Olinda e Crato"
        }
      },
      {
        slideNum: 8,
        type: "remember",
        title: "Para Lembrar Sempre",
        subtitle: "Síntese dos 3 Mandamentos do Preço",
        content: "1. A margem de lucro deve incidir sobre o preço de venda.\n2. Taxas de maquininha e impostos devem ser embutidos no cálculo.\n3. Desconto fácil corrói a maior parte do lucro líquido.",
        studyContent: "Dar desconto sem contrapartida (ex: volume maior ou pagamento à vista em dinheiro) desvaloriza o produto perante o cliente.",
        speakerNotes: "Estimule os alunos: quem precifica com markup divisor dorme tranquilo.",
        audioNarration: "Para lembrar: Margem incide sobre o preço de venda. Taxas de cartão entram na conta. E desconto custa muito caro.",
        figureKey: "remember_pricing",
        rememberItems: [
          "Margem sobre o preço: use o Markup Divisor para garantir sua margem real.",
          "Taxas no divisor: some comissão de cartão e tributos para não pagar para vender.",
          "Cuidado com descontos: 10% de desconto pode reduzir seu ganho líquido em mais de um quarto."
        ]
      },
      {
        slideNum: 9,
        type: "quiz",
        title: "Checagem Rápida: Aula 6 (Avaliação 2)",
        subtitle: "Simulado Formativo da Avaliação 2",
        content: "Duas questões do banco da Avaliação 2 sobre o cálculo do Markup Divisor e descontos.",
        studyContent: "Resolva a questão com atenção redobrada à fórmula do divisor.",
        speakerNotes: "Atenção: esta fórmula cai com certeza na prova! Acompanhe os passos da resolução.",
        audioNarration: "Checagem rápida da Avaliação 2. Aplique a fórmula do markup divisor e responda sobre a estratégia de descontos.",
        figureKey: "quiz_interactive",
        quizQuestions: [
          {
            question: "Um produto possui custo total unitário de R$ 30,00. O comerciante terá 10% de custos com taxas de cartão e impostos e deseja uma margem de lucro de 15%. Qual é o preço de venda pelo Markup Divisor?",
            options: [
              "R$ 37,50",
              "R$ 40,00",
              "R$ 45,00",
              "R$ 34,50"
            ],
            correctIndex: 1,
            explanation: "Divisor = 1 − (0,10 + 0,15) = 1 − 0,25 = 0,75. Preço = R$ 30,00 ÷ 0,75 = R$ 40,00. (Se multiplicasse por 1,25 daria 37,50 errado!)."
          },
          {
            question: "Por que uma redução de 10% no preço de venda costuma gerar uma queda percentual muito maior (ex: 25% a 30%) no lucro líquido unitário?",
            options: [
              "Porque a alíquota de impostos sobe quando o preço diminui",
              "Porque os custos de produção permanecem fixos e todo o desconto é retirado exclusivamente da fração correspondente ao lucro",
              "Porque a administradora do cartão de crédito dobra a comissão",
              "Porque o cliente passa a exigir brindes adicionais"
            ],
            correctIndex: 1,
            explanation: "O custo unitário de insumos não se altera. Logo, cada centavo de desconto dado sai integralmente da margem líquida que sobraria para o empreendedor."
          }
        ]
      }
    ]
  },

  // AULA 7 (AVALIAÇÃO 2)
  {
    id: 7,
    title: "Capital de Giro e Ciclos Financeiros",
    shortTitle: "Capital de Giro",
    objective: "Calcular ciclo operacional, ciclo financeiro e necessidade de capital de giro; dominar estratégias para encurtar o ciclo.",
    isExam2: true,
    color: "#b91c1c",
    caseCharacter: "Seu Expedito (Barraca de Romaria)",
    slides: [
      {
        slideNum: 1,
        type: "opening",
        title: "A Romaria está chegando!",
        subtitle: "Abertura · A Demanda Prévia de Caixa",
        content: "Faltam 40 dias para a grande romaria de Juazeiro. Seu Expedito precisa comprar imagens, terços e velas agora, mas os romeiros só vão pagar quando desembarcarem na cidade. De onde tirar dinheiro para estocar?",
        studyContent: "A necessidade de comprar mercadorias antes de receber pelas vendas é a essência do Capital de Giro. Sem recursos para girar, o comerciante assiste de mãos atadas ao pico de demanda passar.",
        speakerNotes: "Aula 7 da Avaliação 2! Conceito fundamental de ciclos na linha do tempo.",
        audioNarration: "Aula 7, Avaliação 2. A romaria está chegando. Seu Expedito precisa comprar mercadoria hoje, mas só recebe quando os romeiros chegarem. Como financiar esse intervalo?",
        figureKey: "fig7_opening_pilgrims"
      },
      {
        slideNum: 2,
        type: "concept",
        title: "O que é Capital de Giro?",
        subtitle: "O Oxigênio da Operação",
        content: "É o volume financeiro necessário para bancar as operações do negócio entre o momento em que a empresa paga seus fornecedores e o momento em que finalmente recebe o dinheiro das vendas.",
        studyContent: "Capital de giro não é lucro acumulado nem dinheiro de investimentos em máquinas. É capital de trânsito contínuo: compra mercadoria, vende, recebe, paga contas e reinveste.",
        speakerNotes: "Use a metáfora do sangue correndo nas veias: sem capital de giro o corpo do negócio para por asfixia.",
        audioNarration: "Capital de giro é o recurso que sustenta a operação da empresa durante o intervalo entre pagar fornecedores e receber dos clientes.",
        figureKey: "concept_working_capital_gear"
      },
      {
        slideNum: 3,
        type: "model",
        title: "Os Três Prazos e as Fórmulas dos Ciclos",
        subtitle: "Equações Temporais Fundamentais",
        content: "• PME: Prazo Médio de Estoque (dias que a mercadoria fica na prateleira)\n• PMR: Prazo Médio de Recebimento (dias até receber dos clientes)\n• PMP: Prazo Médio de Pagamento (dias que o fornecedor concede)\n\n• Ciclo Operacional (CO) = PME + PMR\n• Ciclo Financeiro (CF) = CO − PMP",
        studyContent: "Quanto maior for o Ciclo Financeiro (CF), mais dias a empresa precisa financiar com recursos próprios ou empréstimos. A meta de todo gestor é reduzir o PME e PMR e ampliar o PMP.",
        speakerNotes: "Escreva as equações na lousa. Mostre que Ciclo Financeiro é o tempo em que o negócio fica no 'deserto de caixa'.",
        audioNarration: "Três prazos definem os ciclos: prazo de estoque, prazo de receber e prazo de pagar. Ciclo operacional soma estoque e recebimento. Ciclo financeiro subtrai o prazo do fornecedor.",
        figureKey: "model_cycle_formulas",
        formulas: [
          { name: "Ciclo Operacional", formula: "CO = PME + PMR", explanation: "Tempo total desde a compra da matéria-prima até o recebimento do dinheiro." },
          { name: "Ciclo Financeiro", formula: "CF = (PME + PMR) − PMP", explanation: "Dias em que a empresa precisa financiar a operação com caixa próprio ou empréstimo." },
          { name: "Necessidade de Capital de Giro", formula: "NCG ≈ CF (dias) × Desembolso Diário (R$)", explanation: "Valor monetário necessário para cobrir o descasamento operacional." }
        ]
      },
      {
        slideNum: 4,
        type: "figure",
        title: "Ciclo Operacional e Financeiro na Linha do Tempo",
        subtitle: "Figura-Chave 11 · Régua Temporal do Giro",
        content: "PME = 30 dias (estoque) + PMR = 45 dias (receber) = Ciclo Operacional de 75 dias. O fornecedor dá PMP = 25 dias. O Ciclo Financeiro é de 50 dias (75 − 25). Durante 50 dias, o negócio precisa de capital de giro!",
        studyContent: "A Figura 11 mapeia a linha do tempo: entre o dia 25 (quando paga o fornecedor) e o dia 75 (quando recebe do cliente), há um vácuo financeiro de 50 dias que consome o caixa.",
        speakerNotes: "Mostre a Figura 11 em detalhes. Aponte a seta vermelha de 50 dias: esse é o tempo exato em que a empresa quebra se não tiver reserva ou giro.",
        audioNarration: "Na Figura 11 vemos a linha do tempo: estoque de trinta dias mais quarenta e cinco para receber formam ciclo operacional de setenta e cinco dias. Com vinte e cinco dias de fornecedor, o ciclo financeiro é de cinquenta dias.",
        figureKey: "fig11_working_capital_cycles"
      },
      {
        slideNum: 5,
        type: "example",
        title: "Exemplo Resolvido: A Necessidade em Reais",
        subtitle: "Aplicação Prática com Desembolso Diário",
        content: "Se a barraca de Seu Expedito possui um Ciclo Financeiro de 50 dias e gasta R$ 80 por dia em despesas operacionais fixas e reposição básica:\n• Necessidade de Capital de Giro (NCG) = 50 dias × R$ 80/dia = R$ 4.000,00!\nSe ele tiver apenas R$ 1.500 guardados, faltarão R$ 2.500 no caixa.",
        studyContent: "Para eliminar esse buraco de R$ 2.500 sem pegar empréstimo, ele pode: negociar 15 dias a mais com o fornecedor (PMP 40) e exigir Pix ou entrada no fiado para derrubar o PMR de 45 para 20 dias.",
        speakerNotes: "Demonstre como mudar os prazos operacionais elimina a necessidade de empréstimo bancário com juros.",
        audioNarration: "Cinquenta dias de ciclo financeiro com gasto diário de oitenta reais geram uma necessidade de capital de giro de quatro mil reais no caixa de Seu Expedito.",
        figureKey: "example_expedito_working_capital"
      },
      {
        slideNum: 6,
        type: "caju_lens",
        title: "Metodologia CAJU: Leitura Pelas Quatro Lentes",
        subtitle: "Lente CAJU · Confiança e Microcrédito no Cariri",
        content: "A dinâmica do capital de giro em cidades sazonais, confiança de fornecedores e o microcrédito produtivo orientado.",
        studyContent: "No interior, o prazo do fornecedor é o verdadeiro 'banco' do pequeno varejista: quanto maior a honra comercial e o histórico local, maior o crédito concedido sem juros.",
        speakerNotes: "Comente o case do Crediamigo do Banco do Nordeste, fundado no Ceará e líder mundial em microcrédito orientado.",
        audioNarration: "Lente CAJU: Demanda previsível de capital de giro nas romarias; prazo de fornecedor como confiança; leis de microcrédito produtivo e termômetro do giro no celular.",
        figureKey: "caju_lens_quadrant",
        cajuDetails: {
          c: "Negócios em cidades com picos religiosos e turísticos necessitam de capital de giro altamente concentrado semanas antes do evento. Trata-se de uma demanda financeira previsível e recorrente.",
          a: "O prazo com fornecedores atacadistas é confiança convertida em capital. O comerciante veterano com reputação intocada compra com 45 dias; o novato sem laços precisa pagar tudo à vista.",
          j: "A Lei 13.636/2018 (Programa Nacional de Microcrédito Produtivo Orientado - PNMPO) estabelece taxas reduzidas e metodologia de aval solidário especificamente desenhada para capital de giro de microempresas.",
          u: "Um 'termômetro do giro' no celular permite simular o impacto de conceder prazo ao cliente: o app calcula em tempo real quantos reais a mais serão exigidos em caixa."
        }
      },
      {
        slideNum: 7,
        type: "local_reality",
        title: "Realidade Local: Crediamigo e o Giro Solidário",
        subtitle: "Liderança do Microcrédito no Nordeste",
        content: "No Crediamigo do Banco do Nordeste (BNB), a modalidade de Capital de Giro através de grupos solidários responde por cerca de 70% do volume total de operações no Cariri.",
        studyContent: "A metodologia de aval solidário (onde 3 a 5 comerciantes vizinhos garantem mutuamente os pagamentos do grupo) reduz inadimplência e democratiza o giro sem exigir patrimônio ou hipoteca.",
        speakerNotes: "Explique como funciona o grupo solidário de 3 a 5 vizinhos no Crediamigo.",
        audioNarration: "No Crediamigo, o financiamento de capital de giro via grupos solidários representa cerca de setenta por cento de todas as operações no Cariri.",
        figureKey: "local_crediamigo_stats",
        localSource: {
          source: "Banco do Nordeste / Diário do Nordeste",
          year: "Resultados Consolidados",
          location: "Cariri e Nordeste"
        }
      },
      {
        slideNum: 8,
        type: "remember",
        title: "Para Lembrar Sempre",
        subtitle: "Síntese dos 3 Mandamentos do Giro",
        content: "1. Ciclo Financeiro negativo é o cenário ideal (receber antes de pagar).\n2. Vender a prazo sem reserva própria é convite à asfixia financeira.\n3. Prazo maior com fornecedor é financiamento a juro zero.",
        studyContent: "Supermercados e grandes redes operam com ciclo financeiro negativo: vendem à vista no cartão e pagam os fornecedores em 60 dias, operando com o dinheiro alheio.",
        speakerNotes: "Mostre o exemplo do ciclo financeiro negativo: receber antes de pagar é o paraíso.",
        audioNarration: "Para lembrar: Ciclo financeiro negativo é o melhor cenário. Vender a prazo consome caixa. E prazo com fornecedor é crédito barato.",
        figureKey: "remember_working_capital",
        rememberItems: [
          "Ciclo negativo é ouro: receber do cliente antes de pagar o fornecedor gera caixa livre.",
          "Cuidado com venda a prazo: alongar o PMR exige dinheiro parado no caixa.",
          "Alongue o PMP: negociar prazos maiores com quem lhe vende mercadoria é o empréstimo mais barato que existe."
        ]
      },
      {
        slideNum: 9,
        type: "quiz",
        title: "Checagem Rápida: Aula 7 (Avaliação 2)",
        subtitle: "Simulado Formativo da Avaliação 2",
        content: "Duas questões do banco da Avaliação 2 sobre ciclo operacional e financeiro.",
        studyContent: "Aplique as fórmulas de CO e CF para responder com exatidão.",
        speakerNotes: "Questão que costuma derrubar alunos descuidados! Atenção à ordem das subtrações.",
        audioNarration: "Checagem rápida da Avaliação 2. Resolva o cálculo do ciclo financeiro e interprete a redução de prazos.",
        figureKey: "quiz_interactive",
        quizQuestions: [
          {
            question: "Uma loja do Crato possui Prazo Médio de Estoque (PME) de 20 dias, Prazo Médio de Recebimento (PMR) de 35 dias e negocia com fornecedores um Prazo Médio de Pagamento (PMP) de 15 dias. Quais são o Ciclo Operacional (CO) e o Ciclo Financeiro (CF)?",
            options: [
              "CO = 55 dias | CF = 40 dias",
              "CO = 50 dias | CF = 35 dias",
              "CO = 55 dias | CF = 70 dias",
              "CO = 35 dias | CF = 20 dias"
            ],
            correctIndex: 0,
            explanation: "Ciclo Operacional = PME + PMR = 20 + 35 = 55 dias. Ciclo Financeiro = CO − PMP = 55 − 15 = 40 dias."
          },
          {
            question: "Se essa mesma loja passar a receber todas as suas vendas à vista via Pix (reduzindo o PMR para 0 dias), o que acontecerá com o Ciclo Financeiro?",
            options: [
              "O Ciclo Financeiro aumentará para 55 dias",
              "O Ciclo Financeiro cairá para 5 dias (20 + 0 − 15 = 5 dias), diminuindo drasticamente a necessidade de capital de giro",
              "O negócio precisará de um empréstimo bancário imediato",
              "O fornecedor suspenderá o prazo de pagamento"
            ],
            correctIndex: 1,
            explanation: "Com PMR = 0, CO = 20 + 0 = 20 dias. O CF se torna: 20 − 15 = apenas 5 dias. A empresa quase não precisará bancar intervalo sem dinheiro."
          }
        ]
      }
    ]
  },

  // AULA 8 (AVALIAÇÃO 2)
  {
    id: 8,
    title: "Crédito, Financiamento e Sistemas de Amortização",
    shortTitle: "Crédito e Financiamento",
    objective: "Diferenciar crédito de giro e financiamento de longo prazo; calcular juros e parcelas; comparar propostas de crédito pelo Custo Efetivo Total (CET).",
    isExam2: true,
    color: "#b91c1c",
    caseCharacter: "Seu Expedito e Dona Socorro",
    slides: [
      {
        slideNum: 1,
        type: "opening",
        title: "Dinheiro rápido, na hora e sem consulta!",
        subtitle: "Abertura · A Encruzilhada do Crédito",
        content: "Na mesma manhã de terça-feira, passam na barraca de Seu Expedito o cobrador do agiota local oferecendo R$ 2.000 com juros diários e o agente de microcrédito do banco com proposta parcelada. Qual caminho escolher?",
        studyContent: "A urgência por dinheiro fácil muitas vezes cega o empreendedor para taxas predatórias que transformam pequenos empréstimos em bolas de neve impagáveis.",
        speakerNotes: "Aula 8 da Avaliação 2! Tema de alta relevância social e financeira no interior.",
        audioNarration: "Aula 8, Avaliação 2. Dinheiro rápido e sem consulta na praça. O agiota e o agente de microcrédito aparecem no mesmo dia. Como avaliar o custo real do crédito?",
        figureKey: "fig8_opening_credit_offers"
      },
      {
        slideNum: 2,
        type: "concept",
        title: "Crédito de Giro versus Financiamento",
        subtitle: "Finalidades e Prazos Distintos",
        content: "• CRÉDITO DE GIRO: Curto prazo, usado para bancar descasamentos imediatos de caixa e compras de estoque. Deve ser pago rapidamente.\n• FINANCIAMENTO: Médio/longo prazo, vinculado a bens duráveis (máquinas, reformas, veículos) que geram retorno financeiro ao longo de anos.",
        studyContent: "Nunca financie máquinas em linhas de cheque especial ou giro de curtíssimo prazo, e nunca tome crédito de longo prazo com garantia real para tapar buraco de feira.",
        speakerNotes: "Destaque a regra: casamento de prazos! Bem durável exige financiamento longo; estoque exige giro curto.",
        audioNarration: "Crédito de giro cobre necessidades imediatas de caixa. Financiamento serve para investimentos de longo prazo em equipamentos e reformas.",
        figureKey: "concept_credit_vs_financing"
      },
      {
        slideNum: 3,
        type: "model",
        title: "Fórmulas de Juros e Amortização",
        subtitle: "Matemática Financeira Aplicada",
        content: "• Juros Simples: J = PV × i × n | Montante = PV + J\n• Juros Compostos: M = PV × (1 + i)^n\n• Taxa Efetiva Anual: (1 + i_mensal)^12 − 1\n• Tabela Price (Parcelas Fixas): PMT = PV × i ÷ [1 − (1 + i)^(−n)]",
        studyContent: "Uma taxa aparentemente inofensiva de 5% ao mês cobrada por operadores informais equivale a 79,6% ao ano em juros compostos!",
        speakerNotes: "Escreva e mostre na calculadora financeira a fórmula da Tabela Price. Explique a potência negativa no denominador.",
        audioNarration: "Fórmulas de juros: simples e compostos. A fórmula da Tabela Price calcula parcelas fixas considerando o valor presente, a taxa e o prazo.",
        figureKey: "model_financial_math",
        formulas: [
          { name: "Juros Compostos", formula: "M = PV × (1 + i)^n", explanation: "Juros sobre juros, regime padrão das operações financeiras formais." },
          { name: "Sistema Price", formula: "PMT = PV × [i ÷ (1 − (1 + i)^(-n))]", explanation: "Calcula a prestação mensal fixa em financiamentos bancários." }
        ]
      },
      {
        slideNum: 4,
        type: "figure",
        title: "Price versus SAC: Comportamento das Parcelas",
        subtitle: "Figura-Chave 12 · R$ 1.500 a 2% a.m. em 12 Meses",
        content: "Na Tabela Price, todas as 12 parcelas são fixas em R$ 141,84. No Sistema SAC, a 1ª parcela começa em R$ 155,00 e cai progressivamente até R$ 127,50 na 12ª. No SAC, o total de juros pagos é menor!",
        studyContent: "A Figura 12 compara os dois sistemas: no Price a previsibilidade orçamentária é maior porque a parcela não muda; no SAC o total de juros pagos ao final é cerca de R$ 10 menor no exemplo.",
        speakerNotes: "Projete a Figura 12. Mostre a linha reta vermelha do Price a R$ 141,84 e a reta descendente verde do SAC cruzando no meio do prazo.",
        audioNarration: "Na Figura 12 vemos Price versus SAC: no Price as doze parcelas são fixas em cento e quarenta e um reais. No SAC começam em cento e cinquenta e cinco e caem até cento e vinte e sete.",
        figureKey: "fig12_price_vs_sac"
      },
      {
        slideNum: 5,
        type: "example",
        title: "Compare o Valor Total Pago, Não Só a Parcela!",
        subtitle: "A Ilusão da Parcela que Cabe no Bolso",
        content: "Proposta A: 12 parcelas de R$ 150 = Total R$ 1.800\nProposta B: 10 parcelas de R$ 175 = Total R$ 1.750\nA proposta B tem parcela maior, mas você economiza R$ 50 no total de juros e se livra da dívida 2 meses antes!",
        studyContent: "O vendedor de crédito sempre destaca a parcela pequena. O bom gestor multiplica a parcela pelo número de meses e analisa o Custo Efetivo Total (CET).",
        speakerNotes: "Ensine a regra de ouro: sempre multiplique o número de parcelas pelo valor antes de assinar qualquer contrato.",
        audioNarration: "Compare o total pago e não apenas a parcela: doze vezes cento e cinquenta dá mil e oitocentos. Dez vezes cento e setenta e cinco dá mil setecentos e cinquenta, economizando cinquenta reais.",
        figureKey: "example_loan_comparison"
      },
      {
        slideNum: 6,
        type: "caju_lens",
        title: "Metodologia CAJU: Leitura Pelas Quatro Lentes",
        subtitle: "Lente CAJU · As Engrenagens do Crédito Regional",
        content: "A agiotagem informal, o aval solidário, a Empresa Simples de Crédito e o controle no celular.",
        studyContent: "A assimetria de informações no interior explica o sucesso de agiotas e a relevância de instrumentos como a Empresa Simples de Crédito (ESC).",
        speakerNotes: "Explique a Lei Complementar 167/2019 que criou a Empresa Simples de Crédito.",
        audioNarration: "Lente CAJU: Agiotagem e crédito informal nas cidades; confiança comunitária no aval solidário; marco da Empresa Simples de Crédito e comparador no celular.",
        figureKey: "caju_lens_quadrant",
        cajuDetails: {
          c: "Em pequenas cidades e bairros periféricos, o crédito informal (agiota, vizinho abastado, fornecedor) muitas vezes é mais próximo e desburocratizado que a agência bancária tradicional.",
          a: "O agiota resolve a assimetria de informação porque conhece a rotina da família, mas cobra juros escorchantes sob coerção. O microcrédito orientado substitui garantias físicas pela honra coletiva do grupo solidário.",
          j: "Conjunto legal protetivo: Microcrédito Orientado (Lei 13.636/2018), Pronampe (Lei 13.999/2020), Empresa Simples de Crédito - ESC (LC 167/2019) e Lei do Cadastro Positivo (Lei 12.414/2011).",
          u: "Simulador de crédito no celular com alerta automático caso a soma das parcelas mensais ultrapasse 30% do lucro líquido médio do negócio."
        }
      },
      {
        slideNum: 7,
        type: "local_reality",
        title: "Realidade Local: Crediamigo e a Selic em 2026",
        subtitle: "Dados Oficiais e Cenário Macroeconômico",
        content: "O Crediamigo atingiu R$ 3,5 bilhões em desembolsos no 2º trimestre de 2026. A taxa Selic foi mantida em 13,75% ao ano na 281ª reunião do Copom (set/2026), encarecendo o crédito bancário comercial e valorizando programas públicos de microcrédito subsidiado.",
        studyContent: "Com juros básicos elevados na economia, linhas de crédito livre tradicionais cobram taxas astronômicas, tornando o microcrédito orientado a principal tábua de salvação do pequeno empreendedor.",
        speakerNotes: "Contextualize a Selic de setembro de 2026 a 13,75% a.a. e os números recordes do Crediamigo no BNB.",
        audioNarration: "O Crediamigo desembolsou três bilhões e meio no segundo trimestre de 2026. Com a Selic a treze vírgula setenta e cinco por cento ao ano, o microcrédito subsidiado é fundamental.",
        figureKey: "local_selic_crediamigo",
        localSource: {
          source: "Banco Central do Brasil (Copom) & Banco do Nordeste",
          year: "Setembro de 2026",
          location: "Ceará e Brasil"
        }
      },
      {
        slideNum: 8,
        type: "remember",
        title: "Para Lembrar Sempre",
        subtitle: "Síntese dos 3 Mandamentos do Crédito",
        content: "1. Compare sempre pelo Custo Efetivo Total (CET), nunca apenas pela parcela.\n2. O valor da parcela não deve ultrapassar 30% do lucro líquido real.\n3. Crédito novo não cura prejuízo crônico: resolve apenas tempo.",
        studyContent: "Se o negócio tem prejuízo estrutural porque precifica errado, tomar empréstimo apenas aumentará o tamanho do rombo futuro.",
        speakerNotes: "Frase de impacto: 'Crédito acelera o que já funciona. Se o negócio dá prejuízo, o crédito acelera a falência!'.",
        audioNarration: "Para lembrar: Compare sempre pelo custo efetivo total. Limite a parcela a trinta por cento do lucro. E crédito não conserta prejuízo operacional.",
        figureKey: "remember_credit",
        rememberItems: [
          "Compare o CET: taxas de cadastro e seguros embutidos encarecem a operação.",
          "Limite de 30%: a parcela da dívida deve caber com folga no lucro do negócio.",
          "Crédito não faz milagre: se o negócio está no vermelho por custos descontrolados, crédito vira dívida impagável."
        ]
      },
      {
        slideNum: 9,
        type: "quiz",
        title: "Checagem Rápida: Aula 8 (Avaliação 2)",
        subtitle: "Simulado Formativo da Avaliação 2",
        content: "Duas questões clássicas de cálculo de juros e amortização da Avaliação 2.",
        studyContent: "Analise a comparação entre sistemas de amortização e custo total de empréstimos.",
        speakerNotes: "Oriente os alunos a prestarem atenção nas propriedades do Price e do SAC.",
        audioNarration: "Checagem rápida da Avaliação 2. Resolva a comparação de parcelas e a interpretação do sistema de amortização.",
        figureKey: "quiz_interactive",
        quizQuestions: [
          {
            question: "Qual é a principal diferença estrutural entre o Sistema Francês de Amortização (Tabela Price) e o Sistema de Amortização Constante (SAC)?",
            options: [
              "No Price as parcelas são sempre crescentes e no SAC são fixas",
              "No Price as parcelas periódicas são iguais e fixas; no SAC as parcelas são decrescentes ao longo do tempo",
              "O SAC não cobra juros em financiamentos bancários",
              "A Tabela Price só pode ser utilizada por grandes corporações multinacionais"
            ],
            correctIndex: 1,
            explanation: "No Price, todas as prestações são constantes do início ao fim. No SAC, a cota de amortização do saldo devedor é fixa, fazendo com que as parcelas totais com juros diminuam a cada mês."
          },
          {
            question: "Um microempreendedor com lucro líquido mensal estável de R$ 1.500 está considerando um empréstimo cuja parcela mensal será de R$ 750 (50% do lucro). Segundo as boas práticas financeiras, essa operação é recomendada?",
            options: [
              "Sim, porque o lucro de R$ 1.500 é suficiente para pagar R$ 750 e ainda sobram R$ 750",
              "Não, pois comprometer 50% do lucro deixa a empresa extremamente vulnerável a qualquer oscilação ou mês fraco; o limite prudente é de até 30%",
              "Sim, desde que ele não pague o pró-labore da família",
              "Não, porque nenhum banco aprova parcelas maiores que R$ 100"
            ],
            correctIndex: 1,
            explanation: "Comprometer metade do lucro líquido é perigoso. Qualquer imprevisto operacional nos meses seguintes deixará a empresa sem recursos para honrar a parcela."
          }
        ]
      }
    ]
  },

  // AULA 9 (AVALIAÇÃO 2)
  {
    id: 9,
    title: "Gestão de Investimentos no Pequeno Negócio",
    shortTitle: "Investimentos",
    objective: "Avaliar investimentos internos (ROI, payback, VPL) e opções externas; calcular rentabilidade real; identificar sinais de alerta de golpes financeiros.",
    isExam2: true,
    color: "#b91c1c",
    caseCharacter: "Dona Socorro e Família",
    slides: [
      {
        slideNum: 1,
        type: "opening",
        title: "Sobraram R$ 2.000: O que fazer?",
        subtitle: "Abertura · A Escolha dos Caminhos",
        content: "Após meses de disciplina orçamentária, sobraram R$ 2.000 livres no caixa de Socorro. O filho sugere comprar criptomoedas milagrosas da internet; o gerente do banco sugere título de capitalização; a cozinheira sugere uma seladora automática de embalagens. Qual a melhor decisão?",
        studyContent: "A alocação criteriosa de excedentes de caixa separa empresas que multiplicam sua produtividade daquelas que caem em armadilhas de baixa rentabilidade ou perdas irreversíveis.",
        speakerNotes: "Aula 9 da Avaliação 2! Traga a realidade dos golpes que circulam no WhatsApp no Cariri.",
        audioNarration: "Aula 9, Avaliação 2. Sobraram dois mil reais. Seladora de marmitas, criptomoeda do filho ou título de capitalização do banco? Para onde deve ir o dinheiro?",
        figureKey: "fig9_opening_three_paths"
      },
      {
        slideNum: 2,
        type: "concept",
        title: "O que é Investir?",
        subtitle: "Multiplicando Recursos",
        content: "É a alocação intencional de recursos financeiros no presente visando gerar um fluxo maior de benefícios e retornos econômicos no futuro — seja dentro do próprio negócio (produtividade) ou fora dele (aplicações no mercado).",
        studyContent: "Investir não é apostar. Todo investimento sério se apoia na análise equilibrada de quatro pilares indissociáveis: Retorno esperado, Risco suportável, Prazo de maturação e Liquidez imediata.",
        speakerNotes: "Defina o quarteto de ferro: Retorno, Risco, Prazo e Liquidez. Mostre que não existe alto retorno com baixo risco e alta liquidez.",
        audioNarration: "Investir é aplicar recursos no presente para obter retorno maior no futuro. Todo investimento se apoia em retorno, risco, prazo e liquidez.",
        figureKey: "concept_four_criteria"
      },
      {
        slideNum: 3,
        type: "model",
        title: "Fórmulas de Análise de Investimentos",
        subtitle: "Métricas de Viabilidade Interna e Rentabilidade Real",
        content: "• ROI = (Ganho Líquido Obtido − Custo do Investimento) ÷ Custo do Investimento\n• Payback Simples = Investimento Inicial ÷ Ganho Líquido Mensal\n• Rentabilidade Real (Equação de Fisher): (1 + i_nominal) ÷ (1 + inflação) − 1",
        studyContent: "A rentabilidade real desconta a inflação. Com a inflação em alta, investimentos com juros nominais modestos podem ter rendimento real negativo, destruindo o poder de compra.",
        speakerNotes: "Ensine a fórmula do Payback simples e a Equação de Fisher na lousa. Explique por que poupança tradicional perde para a inflação.",
        audioNarration: "Fórmulas de investimento: ROI mede o retorno percentual. Payback calcula o tempo de retorno do capital. A taxa real desconta a inflação.",
        figureKey: "model_investment_formulas",
        formulas: [
          { name: "Payback Simples", formula: "Payback = Investimento Inicial ÷ Ganho Mensal", explanation: "Calcula quantos meses são necessários para reaver o capital investido." },
          { name: "Rentabilidade Real", formula: "(1 + r) = (1 + i) ÷ (1 + IPCA)", explanation: "Ganho real de poder de compra descontada a corrosão inflacionária." }
        ]
      },
      {
        slideNum: 4,
        type: "figure",
        title: "Mapa dos Investimentos: Risco, Retorno e Liquidez",
        subtitle: "Figura-Chave 13 · Posições Qualitativas Comparadas",
        content: "Tesouro Selic/CDB diário: Risco baixo, retorno baixo, liquidez alta (verde). Fundo multimercado: Risco médio, retorno médio, liquidez média. Máquinas e equipamentos do negócio: Risco médio, retorno alto, liquidez baixa (vermelho). Título de capitalização: Retorno baixo/negativo e liquidez baixa!",
        studyContent: "A Figura 13 demonstra que o título de capitalização é uma das piores escolhas (fundo do gráfico), enquanto o investimento no equipamento do próprio negócio oferece o melhor potencial de retorno.",
        speakerNotes: "Explore a Figura 13. Mostre o tamanho e cor das bolhas: verde para alta liquidez, vermelho para baixa liquidez. Alerte sobre títulos de capitalização.",
        audioNarration: "Na Figura 13 vemos o mapa de risco, retorno e liquidez: Tesouro Selic com baixo risco e alta liquidez; equipamento com alto retorno; e título de capitalização como péssima escolha.",
        figureKey: "fig13_risk_return_liquidity"
      },
      {
        slideNum: 5,
        type: "example",
        title: "Exemplo Resolvido: A Seladora de Embalagens",
        subtitle: "Cálculo de Payback no Negócio de Dona Socorro",
        content: "Investimento na seladora térmica: R$ 1.200,00.\nEconomia de tempo e redução de perdas de comida: R$ 100,00 por mês.\n• Payback = R$ 1.200 ÷ R$ 100/mês = 12 meses!\nEm 1 ano a máquina se paga integralmente e passa a gerar R$ 100 de lucro puro mensal durante anos.",
        studyContent: "Comparando com a renda fixa a 1% ao mês, R$ 1.200 no banco renderiam apenas R$ 12 mensais. Investir na produtividade interna gerou R$ 100 mensais (mais de 8% ao mês de retorno sobre o capital!).",
        speakerNotes: "Demonstre por que investir na produtividade do negócio rende infinitamente mais que o banco para o pequeno empreendedor.",
        audioNarration: "A seladora de mil e duzentos reais gera economia de cem reais por mês. O payback é de doze meses, gerando lucro contínuo a partir do segundo ano.",
        figureKey: "example_sealer_payback"
      },
      {
        slideNum: 6,
        type: "caju_lens",
        title: "Metodologia CAJU: Leitura Pelas Quatro Lentes",
        subtitle: "Lente CAJU · Cultura de Poupança e Proteção Jurídica",
        content: "A tradição sertaneja de poupar em tijolos e gado, a desconfiança bancária e a prevenção a fraudes.",
        studyContent: "A poupança em ativos físicos é historicamente racional no semiárido diante de sucessivas quebras bancárias e planos econômicos passados.",
        speakerNotes: "Discuta com a turma a prática comum de comprar bezerro ou milheiro de tijolo para guardar dinheiro no interior.",
        audioNarration: "Lente CAJU: Poupança tradicional em gado e tijolos no sertão; desconfiança com bancos e golpes de pirâmide; garantias legais do FGC e ferramentas no celular.",
        figureKey: "caju_lens_quadrant",
        cajuDetails: {
          c: "No semiárido nordestino, a poupança tradicional sempre foi feita em ativos reais e tangíveis: cabeças de gado, lotes de terra ou milheiros de tijolos empilhados no quintal. São ativos de baixa liquidez que não resolvem emergências de caixa.",
          a: "A desconfiança histórica em relação ao sistema bancário formal é uma norma informal reforçada por fraudes financeiras e pirâmides que circulam nas cidades do interior.",
          j: "Instrumentos regulados pelo Banco Central e CVM contam com a proteção do Fundo Garantidor de Créditos (FGC) até R$ 250 mil por CPF/CNPJ. Consultar o registro oficial é a primeira barreira jurídica contra estelionatos.",
          u: "Calculadoras móveis de rentabilidade real e um checklist interativo no celular ajudam a identificar propostas suspeitas antes de transferir qualquer valor."
        }
      },
      {
        slideNum: 7,
        type: "local_reality",
        title: "Realidade Local: Sinais de Alerta de Golpes no Cariri",
        subtitle: "Prevenção a Fraudes e Pirâmides Financeiras",
        content: "Sinais clássicos de golpes financeiros que lesam pequenos comerciantes no Cariri: promessa de lucros certos de 5% a 20% ao mês; pressão por sigilo e urgência ('últimas vagas'); bônus por indicação de novos membros; ausência de registro na CVM/Bacen.",
        studyContent: "Quando a Selic oficial está em 13,75% ao ano (pouco mais de 1% ao mês bruto), qualquer proposta que prometa ganho garantido acima de 2% ao mês deve ser tratada como altíssimo risco ou fraude criminosa.",
        speakerNotes: "Alerta cidadão aos alunos: nenhum investimento legal do mundo garante 10% ao mês sem risco.",
        audioNarration: "Atenção aos sinais de golpe no Cariri: promessas de lucros mágicos acima de cinco por cento ao mês, pressão por urgência e falta de registro no Banco Central.",
        figureKey: "local_scam_checklist",
        localSource: {
          source: "Comissão de Valores Mobiliários (CVM) & Polícia Civil CE",
          year: "Alertas 2025/2026",
          location: "Cariri e Ceará"
        }
      },
      {
        slideNum: 8,
        type: "remember",
        title: "Para Lembrar Sempre",
        subtitle: "Síntese dos 3 Princípios de Investimento",
        content: "1. Reserva de emergência exige liquidez diária e risco zero.\n2. Equipamentos que reduzem custos diretos costumam render mais que bancos.\n3. Promessa de retorno garantido muito alto é golpe.",
        studyContent: "Não existe atalho mágico para a riqueza: riqueza sustentável nasce de produtividade, margens controladas e disciplina orçamentária.",
        speakerNotes: "Relembre: a reserva de emergência da empresa não é para render muito, é para estar disponível hoje se o freezer queimar.",
        audioNarration: "Para lembrar: Reserva exige liquidez diária. Equipamentos do próprio negócio trazem alto retorno. E lucro fácil garantido não existe.",
        figureKey: "remember_investments",
        rememberItems: [
          "Reserva tem que ser líquida: dinheiro da segurança deve estar em Tesouro Selic ou CDB com resgate diário.",
          "Produtividade compensa: máquinas eficientes reduzem desperdício e aumentam a margem líquida da empresa.",
          "Desconfie de promessas mágicas: se a proposta parece boa demais para ser verdade, ela certamente é uma fraude."
        ]
      },
      {
        slideNum: 9,
        type: "quiz",
        title: "Checagem Rápida: Aula 9 (Avaliação 2)",
        subtitle: "Simulado Formativo da Avaliação 2",
        content: "Duas questões do banco da Avaliação 2 sobre Payback simples e critérios de liquidez.",
        studyContent: "Realize o cálculo de tempo de retorno e analise as características da reserva.",
        speakerNotes: "Perguntas diretas e práticas da Avaliação 2. Observe a agilidade dos alunos no cálculo.",
        audioNarration: "Checagem rápida da Avaliação 2. Calcule o payback simples do equipamento e analise a liquidez da reserva.",
        figureKey: "quiz_interactive",
        quizQuestions: [
          {
            question: "Uma padaria investiu R$ 3.600,00 na compra de um fatiador automático de frios que gera economia e faturamento extra de R$ 300,00 por mês. Qual é o tempo de Payback Simples desse investimento?",
            options: [
              "6 meses",
              "12 meses",
              "18 meses",
              "24 meses"
            ],
            correctIndex: 1,
            explanation: "Payback Simples = Investimento Inicial ÷ Ganho Mensal = R$ 3.600 ÷ R$ 300 = 12 meses."
          },
          {
            question: "Onde o pequeno empreendedor deve aplicar a reserva de emergência da empresa para garantir que o dinheiro esteja disponível imediatamente em caso de quebra de maquinário?",
            options: [
              "Em consórcio imobiliário não contemplado",
              "Em título de capitalização com carência de 36 meses",
              "Em aplicação de renda fixa pós-fixada (Tesouro Selic ou CDB com liquidez diária) com garantia do FGC",
              "Em ações de empresas de alto risco na Bolsa de Valores"
            ],
            correctIndex: 2,
            explanation: "Reserva de emergência prioriza liquidez imediata e segurança máxima. Fundos com carência ou ativos voláteis não cumprem essa função protetiva."
          }
        ]
      }
    ]
  },

  // AULA 10 (AVALIAÇÃO 2)
  {
    id: 10,
    title: "Indicadores Financeiros e Ponto de Equilíbrio",
    shortTitle: "Indicadores e Break-Even",
    objective: "Calcular Margem de Contribuição e Ponto de Equilíbrio contábil e monetário; estruturar um painel enxuto de indicadores para a gestão.",
    isExam2: true,
    color: "#b91c1c",
    caseCharacter: "Marmitaria da Dona Socorro",
    slides: [
      {
        slideNum: 1,
        type: "opening",
        title: "Este mês foi melhor que o anterior?",
        subtitle: "Abertura · Pilotando sem Painel de Controle",
        content: "Dona Socorro faturou R$ 14.000 em agosto e R$ 13.000 em setembro. Ela acha que agosto foi maravilhoso e setembro foi fraco. Mas em agosto as contas de manutenção foram altíssimas e em setembro os custos caíram pela metade. Quem teve maior lucro?",
        studyContent: "Dirigir um negócio olhando apenas para o faturamento bruto é como pilotar um automóvel na serra sem velocímetro e sem marcador de combustível. Indicadores mostram a real saúde da operação.",
        speakerNotes: "Aula 10 fecha com chave de ouro os conteúdos da Avaliação 2! Enfatize o conceito de Ponto de Equilíbrio.",
        audioNarration: "Aula 10, Avaliação 2. Faturar mais não significa lucrar mais. Como saber se este mês foi realmente melhor? Indicadores financeiros são o painel do negócio.",
        figureKey: "fig10_opening_dashboard"
      },
      {
        slideNum: 2,
        type: "concept",
        title: "Para que servem os Indicadores?",
        subtitle: "Métricas que Salvam Negócios",
        content: "Indicadores financeiros (KPIs) transformam números soltos em diagnósticos acionáveis. Permitem localizar vazamentos de custos, medir a rentabilidade real e antecipar crises antes que o caixa fique negativo.",
        studyContent: "Não é necessário acompanhar dezenas de gráficos complexos. Para pequenos negócios, quatro métricas fundamentais são suficientes para manter o controle total da empresa.",
        speakerNotes: "Explique a regra da simplicidade: quatro números bem acompanhados valem mais que um relatório de cinquenta páginas que ninguém lê.",
        audioNarration: "Indicadores transformam dados soltos em diagnósticos claros. Eles servem para identificar gargalos, medir a eficiência e guiar decisões estratégicas.",
        figureKey: "concept_indicators_stethoscope"
      },
      {
        slideNum: 3,
        type: "model",
        title: "Fórmulas de Margens e Ponto de Equilíbrio",
        subtitle: "Equações Estratégicas da Avaliação 2",
        content: "• Margem de Contribuição Unitária (MCu) = Preço de Venda − Custo Variável Unitário (CVu)\n• Índice de Margem de Contribuição (MC%) = MCu ÷ Preço de Venda\n• Ponto de Equilíbrio em Unidades (PE_q) = Despesas Fixas Totais ÷ MCu\n• Ponto de Equilíbrio em Reais (PE_$) = Despesas Fixas Totais ÷ MC%",
        studyContent: "O Ponto de Equilíbrio (Break-Even Point) indica a quantidade mínima de vendas necessária para cobrir 100% dos custos e despesas fixas. A partir desse volume, cada unidade vendida gera lucro puro.",
        speakerNotes: "Equações centrais da prova! Desenvolva detalhadamente a lógica do Ponto de Equilíbrio na lousa.",
        audioNarration: "Fórmulas de ponto de equilíbrio: margem de contribuição é preço menos custo variável. O ponto de equilíbrio em unidades divide as despesas fixas pela margem unitária.",
        figureKey: "model_breakeven_formulas",
        formulas: [
          { name: "Margem de Contribuição", formula: "MCu = PV − CVu", explanation: "Sobras de cada produto vendido para pagar os custos fixos da estrutura." },
          { name: "Ponto de Equilíbrio (Q)", formula: "PE = DF ÷ (PV − CVu)", explanation: "Quantidade exata que empata receita com custos totais (lucro zero)." },
          { name: "Ponto de Equilíbrio (R$)", formula: "PE_R$ = DF ÷ MC%", explanation: "Faturamento mínimo indispensável para manter o negócio aberto." }
        ]
      },
      {
        slideNum: 4,
        type: "figure",
        title: "Ponto de Equilíbrio da Marmitaria de Socorro",
        subtitle: "Figura-Chave 14 · Cruzamento das Retas de Receita e Custo",
        content: "Preço = R$ 16,00. CVu = R$ 9,50. Despesas Fixas Totais = R$ 2.600,00.\n• MCu = 16,00 − 9,50 = R$ 6,50 por marmita.\n• Ponto de Equilíbrio = R$ 2.600 ÷ 6,50 = 400 marmitas (ou R$ 6.400 em vendas).\nAbaixo de 400 marmitas: área vermelha de PREJUÍZO. Acima de 400: área verde de LUCRO!",
        studyContent: "A Figura 14 projeta o gráfico clássico de Break-Even: a reta verde de receita parte do zero e cruza a reta vermelha de custo total exatamente em 400 marmitas. A partir da 401ª quentinha, o negócio lucra!",
        speakerNotes: "Projete a Figura 14. Aponte o cruzamento em 400 marmitas a R$ 6.400. Mostre a cunha de prejuízo à esquerda e a cunha de lucro à direita.",
        audioNarration: "Na Figura 14 vemos o ponto de equilíbrio: a receita cruza o custo total exatamente em quatrocentas marmitas ou seis mil e quatrocentos reais. Acima disso, a marmitaria lucra.",
        figureKey: "fig14_breakeven_chart"
      },
      {
        slideNum: 5,
        type: "example",
        title: "O 'Dia da Virada' no Mês",
        subtitle: "Traduzindo o Ponto de Equilíbrio em Dias de Trabalho",
        content: "Se Dona Socorro vende em média 25 marmitas por dia:\n• Dias para pagar as contas = 400 marmitas ÷ 25 marmitas/dia = 16 dias!\nAté o dia 16 do mês, tudo o que entra é para pagar fornecedores, aluguel e luz. O lucro de verdade começa a nascer a partir do dia 17!",
        studyContent: "Essa visão temporal do Ponto de Equilíbrio é altamente didática para microempreendedores: mostra quantos dias a empresa trabalha para 'pagar a estrutura' e quantos dias trabalha para enriquecer o negócio.",
        speakerNotes: "Trabalhe o conceito do 'Dia da Virada'. O aluno nunca mais esquece o que é Ponto de Equilíbrio.",
        audioNarration: "Vendendo vinte e cinco marmitas por dia, Socorro atinge o ponto de equilíbrio no décimo sexto dia de trabalho. Do dia dezessete em diante, as vendas geram o lucro da empresa.",
        figureKey: "example_breakeven_days"
      },
      {
        slideNum: 6,
        type: "caju_lens",
        title: "Metodologia CAJU: Leitura Pelas Quatro Lentes",
        subtitle: "Lente CAJU · Indicadores no Contexto do Cariri",
        content: "Parâmetros locais versus médias nacionais, transparência informativa e painel no celular.",
        studyContent: "Indicadores devem refletir a economia regional: comparar margens do Cariri com médias de São Paulo distorce o planejamento.",
        speakerNotes: "Mostre o papel dos alunos de Economia da URCA na coleta de dados de campo nas cidades da região.",
        audioNarration: "Lente CAJU: Benchmarks locais em vez de médias nacionais; redução de assimetria de informações; obrigações simplificadas do MEI e painel no smartphone.",
        figureKey: "caju_lens_quadrant",
        cajuDetails: {
          c: "Indicadores financeiros permitem construir parâmetros de referência locais (benchmarks), comparando estabelecimentos similares de Crato, Juazeiro e Barbalha em vez de importar médias incompatíveis de capitais do Sul/Sudeste.",
          a: "Medir indicadores reduz a assimetria de informação interna e externa. O comerciante que comprova histórico de margem sólida obtém crédito mais barato em bancos e atrai sócios com facilidade.",
          j: "Embora o MEI seja legalmente dispensado de escrituração contábil mercantil completa, ele é obrigado a guardar notas de compra e declarar o DASN-SIMEI. Um painel básico de indicadores atende perfeitamente a essa realidade jurídica.",
          u: "Painel minimalista no celular com semáforo visual (verde, amarelo e vermelho) para 4 métricas essenciais: faturamento, margem de contribuição, caixa disponível e dias para o break-even."
        }
      },
      {
        slideNum: 7,
        type: "local_reality",
        title: "Realidade Local: Indicadores de Campo da Metodologia CAJU",
        subtitle: "Pesquisa Aplicada dos Alunos de Economia da URCA",
        content: "Em missões de campo da disciplina, estudantes da URCA diagnosticam pequenos negócios no Cariri coletando três indicadores-chave: Índice de Informalidade de Caixa, Custo de Transação Percebido e Tempo Médio de Break-Even.",
        studyContent: "Os levantamentos indicam que comerciantes que conhecem seu Ponto de Equilíbrio negociam melhor compras com fornecedores e sofrem 60% menos estresse financeiro no final do mês.",
        speakerNotes: "Conecte o conteúdo teórico diretamente com as atividades de extensão e pesquisa da URCA.",
        audioNarration: "Pesquisas de campo da URCA mostram que comerciantes que conhecem seu ponto de equilíbrio sofrem sessenta por cento menos crises financeiras no encerramento do mês.",
        figureKey: "local_urca_field_metrics",
        localSource: {
          source: "Metodologia CAJU · Documento-Base URCA",
          year: "2026",
          location: "Região do Cariri (CRAJUBAR)"
        }
      },
      {
        slideNum: 8,
        type: "remember",
        title: "Para Lembrar Sempre",
        subtitle: "Síntese dos 3 Mandamentos dos Indicadores",
        content: "1. Quatro indicadores bem acompanhados bastam para o pequeno negócio.\n2. Margem de contribuição negativa é sinal de alerta vermelho imediato.\n3. Sem anotação diária rigorosa, nenhum indicador é confiável.",
        studyContent: "Nunca confie na memória para calcular indicadores: memória de empresário ocupado é naturalmente otimista e esquece pequenas despesas.",
        speakerNotes: "Conclua a revisão dos conteúdos da Avaliação 2 parabenizando os alunos pelo percurso até aqui!",
        audioNarration: "Para lembrar: Quatro indicadores bastam. Margem negativa exige parar e recalcular. E sem registro diário, não existe indicador confiável.",
        figureKey: "remember_indicators",
        rememberItems: [
          "Quatro números bastam: Faturamento, Margem, Caixa e Ponto de Equilíbrio.",
          "Margem negativa é prejuízo: se o preço não cobre sequer o custo variável, cada venda cava um buraco maior.",
          "Dados reais: indicador calculado com 'achismo' gera decisões falsas e arriscadas."
        ]
      },
      {
        slideNum: 9,
        type: "quiz",
        title: "Checagem Rápida: Aula 10 (Avaliação 2)",
        subtitle: "Simulado Formativo da Avaliação 2",
        content: "Duas questões clássicas de cálculo de Ponto de Equilíbrio e interpretação de margens.",
        studyContent: "Realize o cálculo do Ponto de Equilíbrio em unidades para consolidar o aprendizado da Avaliação 2.",
        speakerNotes: "Questão ápice da prova! Certifique-se de que todos dominaram a fórmula do Break-Even.",
        audioNarration: "Checagem rápida da Avaliação 2. Calcule o ponto de equilíbrio em unidades e interprete o conceito de margem de contribuição.",
        figureKey: "quiz_interactive",
        quizQuestions: [
          {
            question: "Uma loja de calçados em Juazeiro do Norte vende sandálias artesanais a R$ 50,00 cada. O custo variável unitário (compra do artesão + embalagem) é de R$ 30,00. As despesas fixas da loja somam R$ 4.000,00 mensais. Quantas sandálias a loja precisa vender por mês para atingir o Ponto de Equilíbrio?",
            options: [
              "100 sandálias",
              "150 sandálias",
              "200 sandálias",
              "250 sandálias"
            ],
            correctIndex: 2,
            explanation: "Margem de Contribuição Unitária = R$ 50 − R$ 30 = R$ 20. Ponto de Equilíbrio = Despesas Fixas ÷ MCu = R$ 4.000 ÷ R$ 20 = 200 sandálias."
          },
          {
            question: "O que significa dizer que um produto possui 'Margem de Contribuição Unitária de R$ 20,00'?",
            options: [
              "Significa que a empresa tem R$ 20,00 de lucro líquido depositado na conta bancária a cada venda",
              "Significa que cada unidade vendida gera R$ 20,00 que contribuem para pagar as despesas fixas do negócio e formar o lucro após o ponto de equilíbrio",
              "Significa que o imposto cobrado pelo governo estadual é de R$ 20,00",
              "Significa que o custo de fabricação do produto é de R$ 20,00"
            ],
            correctIndex: 1,
            explanation: "A Margem de Contribuição não é lucro líquido direto: ela contribui primeiramente para amortizar os custos fixos estruturais da empresa. Só vira lucro após o break-even."
          }
        ]
      }
    ]
  },

  // AULA 11
  {
    id: 11,
    title: "Compliance, Obrigações Fiscais e Reforma Tributária",
    shortTitle: "Compliance e Tributos",
    objective: "Compreender compliance para pequenos negócios, obrigações do MEI e Simples Nacional, e as etapas de transição da Reforma Tributária (CBS/IBS).",
    isExam2: false,
    color: "#8d5b2c",
    caseCharacter: "Marmitaria da Dona Socorro",
    slides: [
      {
        slideNum: 1,
        type: "opening",
        title: "A Vigilância Sanitária passou na rua!",
        subtitle: "Abertura · A Visita do Fiscal e da Empresa",
        content: "Na mesma semana em que a fiscalização sanitária visita a rua, uma grande empresa do Crato liga querendo encomendar 50 marmitas por dia, mas exige emissão de nota fiscal eletrônica. Socorro está preparada?",
        studyContent: "A regularização formal não serve apenas para evitar multas de fiscais: é a chave que abre as portas para contratos corporativos e fornecimento institucional lucrativo.",
        speakerNotes: "Aula 11 aborda compliance e a grande Reforma Tributária brasileira que entra em vigor na transição 2026-2033.",
        audioNarration: "Aula 11. Compliance e Tributos. A vigilância sanitária passou na rua e um cliente corporativo pediu nota fiscal. O negócio está em conformidade com as regras?",
        figureKey: "fig11_opening_inspection"
      },
      {
        slideNum: 2,
        type: "concept",
        title: "O que é Compliance?",
        subtitle: "Muito Mais que Pagar Tributos",
        content: "Vem do inglês 'to comply' (estar em conformidade). Significa conduzir o negócio de acordo com as leis vigentes, normas técnicas, regras ambientais e sanitárias, além de princípios de ética e integridade com clientes e colaboradores.",
        studyContent: "Para o pequeno negócio, compliance significa ter alvará, emitir notas quando devido, manipular alimentos com higiene padrão Anvisa e respeitar os acordos contratuais firmados.",
        speakerNotes: "Desmistifique o termo: compliance não é só para multinacionais, é a garantia de que o negócio não fechará por uma canetada da fiscalização.",
        audioNarration: "Compliance significa agir em conformidade com as leis, normas sanitárias, tributárias e princípios éticos. Garante segurança e credibilidade ao negócio.",
        figureKey: "concept_compliance_shield"
      },
      {
        slideNum: 3,
        type: "model",
        title: "As Sete Áreas de Compliance do Pequeno Negócio",
        subtitle: "Checklist de Proteção Integral",
        content: "1. Fiscal (tributos e notas)\n2. Trabalhista (direitos e segurança)\n3. Sanitária e Ambiental (Anvisa, descarte de resíduos)\n4. LGPD (proteção de dados no WhatsApp)\n5. Código de Defesa do Consumidor\n6. Segurança Operacional (extintores, botijões)\n7. Contratos e Parcerias",
        studyContent: "Falhar gravemente em qualquer uma dessas áreas pode gerar passivos que superam todo o patrimônio acumulado pelo microempreendedor.",
        speakerNotes: "Passeie pelos 7 pontos destacando a Anvisa RDC 216 para quem mexe com comida e a LGPD para listas de contatos no WhatsApp.",
        audioNarration: "Sete áreas exigem atenção: fiscal, trabalhista, sanitária, dados e privacidade, consumidor, segurança do ambiente e contratos formais.",
        figureKey: "model_seven_areas"
      },
      {
        slideNum: 4,
        type: "figure",
        title: "Linha do Tempo da Reforma Tributária do Consumo",
        subtitle: "Figura-Chave 15 · Emenda Constitucional 132/2023 e LC 214/2025",
        content: "• 2026: Fase de teste nas notas (CBS 0,9% e IBS 0,1%).\n• 2027: CBS federal entra em vigor plena; fim de PIS e Cofins; Simples híbrido disponível.\n• 2029 a 2032: Redução gradual de ICMS e ISS e ascensão do IBS.\n• 2033: Novo IVA Dual (CBS + IBS) em operação definitiva no Brasil!",
        studyContent: "A Figura 15 traça a transição histórica: os 5 tributos complexos sobre o consumo dão lugar a dois IVAs (CBS federal e IBS subnacional), com recolhimento no destino.",
        speakerNotes: "Apresente a linha do tempo da Figura 15. Explique a relevância do ano de 2026 e o que muda para o Simples Nacional a partir de 2027.",
        audioNarration: "Na Figura 15 vemos a Reforma Tributária: teste em 2026 com CBS e IBS nas notas; extinção de PIS e Cofins em 2027; transição gradativa até a plena vigência em 2033.",
        figureKey: "fig15_tax_reform_timeline"
      },
      {
        slideNum: 5,
        type: "example",
        title: "O Simples Nacional 'Puro' versus 'Híbrido'",
        subtitle: "A Decisão Estratégica a Partir de 2027",
        content: "No Simples 'Puro', a empresa continua recolhendo a guia única do DAS, mas gera poucos créditos tributários para clientes corporativos.\nNo Simples 'Híbrido' (opção da LC 214/2025), a empresa recolhe CBS/IBS pelo regime geral por fora do DAS, transferindo crédito integral para empresas compradoras!",
        studyContent: "Se Dona Socorro vender marmitas apenas para pessoas físicas no balcão, o Simples puro é ideal. Se vender para refeitórios de fábricas de calçados do Cariri, o regime híbrido a tornará muito mais competitiva.",
        speakerNotes: "Explicação crucial sobre a nova sistemática: quem vende para PJ precisará avaliar o modelo híbrido para não perder clientes corporativos.",
        audioNarration: "A partir de 2027, o Simples híbrido permite recolher CBS e IBS por fora para gerar créditos a clientes empresariais, aumentando a competitividade.",
        figureKey: "example_pure_vs_hybrid"
      },
      {
        slideNum: 6,
        type: "caju_lens",
        title: "Metodologia CAJU: Leitura Pelas Quatro Lentes",
        subtitle: "Lente CAJU · Formalização e o Espaço Público",
        content: "A convivência entre o comércio ambulante e o formal, custos de transação do cumprimento da lei e ferramentas no celular.",
        studyContent: "A informalidade no sertão não é simples desobediência civil, mas um cálculo econômico racional diante do custo de conformidade burocrática.",
        speakerNotes: "Comente como ambulantes e feirantes convivem harmonicamente nas romarias de Juazeiro do Norte.",
        audioNarration: "Lente CAJU: A convivência do comércio ambulante nas praças; custos de transação para se formalizar; marcos do MEI e da Liberdade Econômica; simuladores no celular.",
        figureKey: "caju_lens_quadrant",
        cajuDetails: {
          c: "Em cidades do interior com grandes eventos e feiras, a fiscalização formal é esparsa. A informalidade convive no mesmo espaço urbano com lojas formais, exigindo que a formalização mostre vantagens comerciais palpáveis (como venda a empresas).",
          a: "Cumprir leis tem custos de transação reais: honorários de despachante, alvarás, tempo em filas de repartições públicas. A política pública eficiente é aquela que barateia o custo de cumprir a lei.",
          j: "Arcabouço legal essencial: MEI (LC 128/2008), Simples Nacional (LC 123/2006), Lei de Liberdade Econômica (Lei 13.874/2019, que dispensa alvarás prévios para atividades de baixo risco) e Reforma Tributária (EC 132/2023).",
          u: "Simulador móvel 'MEI versus Informal' calcula no celular a economia real de impostos e a cobertura de auxílio-doença e aposentadoria por apenas R$ 75 mensais de DAS."
        }
      },
      {
        slideNum: 7,
        type: "local_reality",
        title: "Realidade Local: Ambulantes e Romarias no Cariri",
        subtitle: "A Dinâmica Econômica das Ruas de Juazeiro",
        content: "Nas romarias de Juazeiro do Norte, mais de 4.000 ambulantes operam temporariamente nas imediações da Basílica Menor e do Horto. A atuação conjunta do Sebrae e prefeituras locais busca formalizá-los como MEI para acesso a maquininhas e previdência social.",
        studyContent: "A posse do CNPJ MEI permite aos ambulantes emitir nota avulsa e contratar o microcrédito orientado oficial, libertando-os de agiotas de calçada.",
        speakerNotes: "Mostre fotos ou ilustrações da feira das romarias e o processo de cadastramento.",
        audioNarration: "Milhares de ambulantes movimentam as romarias de Juazeiro. A formalização via MEI garante acesso a máquinas de cartão, direitos previdenciários e crédito oficial.",
        figureKey: "local_street_vendors",
        localSource: {
          source: "Sebrae Ceará & Prefeitura de Juazeiro do Norte",
          year: "Relatório de Atendimento 2025/2026",
          location: "Juazeiro do Norte e Crato"
        }
      },
      {
        slideNum: 8,
        type: "remember",
        title: "Para Lembrar Sempre",
        subtitle: "Síntese dos 3 Pilares Fiscais",
        content: "1. Compliance reduz riscos jurídicos e abre portas para clientes corporativos.\n2. O MEI tem obrigações simples (DAS mensal e DASN anual), mas indispensáveis.\n3. A Reforma Tributária mudará a lógica de créditos tributários a partir de 2027.",
        studyContent: "Estar em dia com o DAS assegura salário-maternidade, aposentadoria por idade e auxílio por incapacidade temporária para a família do empreendedor.",
        speakerNotes: "Lembrete: pagar o DAS em dia não é despesa, é o seguro social mais barato do país.",
        audioNarration: "Para lembrar: Compliance gera crédito e atrai empresas. O MEI exige pagar o DAS em dia. E a Reforma Tributária altera o cenário a partir de 2027.",
        figureKey: "remember_compliance",
        rememberItems: [
          "Segurança jurídica: alvarás e higiene correta evitam fechamentos repentinos.",
          "Obrigações básicas do MEI: pagar o boleto DAS mensal e enviar a declaração anual do faturamento.",
          "Reforma Tributária a caminho: acompanhe a transição dos novos tributos CBS e IBS."
        ]
      },
      {
        slideNum: 9,
        type: "quiz",
        title: "Checagem Rápida: Aula 11",
        subtitle: "Verificação Formativa",
        content: "Duas questões sobre obrigações legais do MEI e as novidades da Reforma Tributária.",
        studyContent: "Responda às questões e confira as explicações detalhadas.",
        speakerNotes: "Promova a discussão sobre o modelo híbrido da Reforma Tributária.",
        audioNarration: "Checagem rápida. Responda às perguntas sobre as obrigações do MEI e o funcionamento da Reforma Tributária.",
        figureKey: "quiz_interactive",
        quizQuestions: [
          {
            question: "Quais são as duas obrigações fiscais periódicas centrais que todo Microempreendedor Individual (MEI) deve cumprir impreterivelmente?",
            options: [
              "Emitir balanço patrimonial trimestral auditado e pagar FGTS para 5 funcionários",
              "Pagar a guia mensal do DAS e entregar anualmente a Declaração Simplificada (DASN-SIMEI)",
              "Recolher imposto de renda retido na fonte quinzenalmente",
              "Contratar obrigatoriamente um escritório de advocacia para auditoria externa"
            ],
            correctIndex: 1,
            explanation: "O MEI tem burocracia simplificada: suas únicas duas obrigações recorrentes essenciais são o pagamento do boleto DAS mensal e o envio anual da declaração de faturamento bruto."
          },
          {
            question: "Por que uma pequena empresa optante pelo Simples Nacional poderá optar pelo regime 'híbrido' na Reforma Tributária a partir de 2027?",
            options: [
              "Para deixar de pagar tributos federais e municipais para sempre",
              "Para recolher a CBS e o IBS pelo regime regular e transferir créditos tributários integrais para seus clientes que são empresas (PJ)",
              "Porque a lei extinguirá o Simples Nacional convencional em 2026",
              "Para poder importar mercadorias sem desembaraço aduaneiro"
            ],
            correctIndex: 1,
            explanation: "No modelo híbrido, a microempresa transfere créditos cheios de CBS/IBS para clientes corporativos que apuram tributos no regime regular, evitando ser rejeitada por compradores empresariais."
          }
        ]
      }
    ]
  },

  // AULA 12
  {
    id: 12,
    title: "Gestão de Riscos para Pequenas Empresas",
    shortTitle: "Gestão de Riscos",
    objective: "Identificar tipos de risco; avaliá-los pela Matriz Probabilidade × Impacto; estruturar ações práticas de mitigação e planos de contingência.",
    isExam2: false,
    color: "#8d5b2c",
    caseCharacter: "Marmitaria da Dona Socorro",
    slides: [
      {
        slideNum: 1,
        type: "opening",
        title: "Um cliente, um fornecedor, nenhuma reserva!",
        subtitle: "Abertura · A Vulnerabilidade Extrema",
        content: "Dona Socorro compra o frango em apenas um abatedouro e vende 70% das suas marmitas para os operários de uma única oficina de calçados. O que acontece se o fornecedor fechar ou a oficina demitir funcionários?",
        studyContent: "A concentração excessiva em poucos parceiros comerciais e a ausência de reservas de contingência deixam o pequeno negócio à beira do abismo operacional diante do menor imprevisto.",
        speakerNotes: "Aula 12 conclui o Módulo 3! Trabalhe a resiliência empresarial no semiárido.",
        audioNarration: "Aula 12. Gestão de Riscos. Depender de um único cliente, um único fornecedor e não ter reserva financeira é um perigo imenso. Como blindar o negócio?",
        figureKey: "fig12_opening_cliff"
      },
      {
        slideNum: 2,
        type: "concept",
        title: "O que é Risco Empresarial?",
        subtitle: "Incerteza Mensurável",
        content: "É a probabilidade de ocorrência de um evento inesperado capaz de provocar perdas financeiras, interrupção das operações ou destruição da reputação do empreendimento.",
        studyContent: "O risco difere da incerteza pura porque pode ser mapeado, medido, prevenido e mitigado com decisões estratégicas antecipadas.",
        speakerNotes: "Diferencie risco gerenciável de fatalismo: não é 'seja o que Deus quiser', é planejar contingências.",
        audioNarration: "Risco é a chance de um evento incerto ocorrer e gerar prejuízos financeiros ou operacionais. Gerenciar risco é antecipar soluções.",
        figureKey: "concept_risk_shield"
      },
      {
        slideNum: 3,
        type: "model",
        title: "Os Seis Tipos de Risco e a Equação da Severidade",
        subtitle: "Classificação Operacional e Avaliação",
        content: "Tipos: Financeiro, Operacional, de Mercado, Legal/Fiscal, Tecnológico e Ambiental.\n\nSeveridade do Risco = Probabilidade de Ocorrência × Impacto Potencial\nOrganizado visualmente em uma Matriz 3 × 3 (Baixo, Médio, Alto).",
        studyContent: "Classificar a severidade permite focar recursos escassos nos riscos de quadrante crítico (alta probabilidade e alto impacto), em vez de gastar energia com preocupações triviais.",
        speakerNotes: "Apresente os 6 tipos de risco e mostre a multiplicação de Probabilidade por Impacto.",
        audioNarration: "Existem seis tipos de risco. A severidade de cada um é calculada multiplicando a probabilidade de acontecer pelo tamanho do impacto.",
        figureKey: "model_risk_severity",
        formulas: [
          { name: "Severidade do Risco", formula: "Risco = Probabilidade × Impacto", explanation: "Calcula a prioridade de tratamento na matriz 3x3 de gestão." }
        ]
      },
      {
        slideNum: 4,
        type: "figure",
        title: "Matriz de Risco 3 × 3 da Marmitaria",
        subtitle: "Figura-Chave 16 · O Mapa Visual de Ameaças",
        content: "• Alta Probabilidade / Alto Impacto: Alta do preço do gás de cozinha (crítico!).\n• Alta Probabilidade / Médio Impacto: Estiagem prolongada no Cariri.\n• Média Probabilidade / Baixo Impacto: Fornecedor único fechar.\n• Média Probabilidade / Médio Impacto: Inadimplência do fiado.\n• Baixa Probabilidade / Alto Impacto: Golpe do falso Pix.\n• Baixa Probabilidade / Médio Impacto: Multa sanitária.\n• Baixa Probabilidade / Baixo Impacto: Concorrente novo na rua.",
        studyContent: "A Figura 16 demonstra como alocar cada ameaça na matriz: o gás exige ação imediata de contingência (fogão de indução, compra antecipada); o falso Pix exige treinamento de equipe.",
        speakerNotes: "Projete a Figura 16. Mostre as cores dos 9 quadrantes: verde (baixo), amarelo (médio) e vermelho (alto). Aponte cada um dos 6 riscos posicionados.",
        audioNarration: "Na Figura 16 vemos a matriz de risco da marmitaria: alta do gás no quadrante vermelho mais crítico; inadimplência do fiado em amarelo; e concorrente novo em verde.",
        figureKey: "fig16_risk_matrix"
      },
      {
        slideNum: 5,
        type: "example",
        title: "Exemplo Resolvido: O Gás Subiu 20%!",
        subtitle: "Mitigação Prática de Risco na Marmitaria",
        content: "O botijão de gás subiu de R$ 100 para R$ 120 (+20%). Isso eleva o custo de cada marmita em R$ 0,60.\nOpções de mitigação:\n1. Reajustar o preço de R$ 15,00 para R$ 15,60 comunicando com clareza;\n2. Manter o preço e readequar o cardápio com preparos de cozimento mais rápido (panela de pressão);\n3. Comprar coletivamente botijões com desconto de volume.",
        studyContent: "Perceba que diante do risco concretizado, o gestor capacitado não lamenta: ele escolhe entre reajuste transparente, ganho de eficiência operacional ou barganha coletiva.",
        speakerNotes: "Mostre que crise não se resolve na passividade: há no mínimo 3 alternativas gerenciais viáveis.",
        audioNarration: "O gás de cozinha subiu vinte por cento, encarecendo a marmita em sessenta centavos. A resposta passa por repasse transparente, cardápio inteligente ou compra conjunta.",
        figureKey: "example_gas_hike_response"
      },
      {
        slideNum: 6,
        type: "caju_lens",
        title: "Metodologia CAJU: Leitura Pelas Quatro Lentes",
        subtitle: "Lente CAJU · Resiliência no Semiárido",
        content: "Riscos climáticos sistêmicos, redes comunitárias de apoio, previdência do MEI e ferramentas de proteção digital.",
        studyContent: "O semiárido possui uma dinâmica ecológica única de estiagem cíclica que contamina simultaneamente toda a cadeia de comércio e serviços.",
        speakerNotes: "Explore a diferença entre risco idiossincrático (só da empresa) e risco sistêmico (do semiárido inteiro).",
        audioNarration: "Lente CAJU: A seca como risco climático sistêmico no semiárido; laços de solidariedade como seguro comunitário; Garantia-Safra e proteção previdenciária; catálogo de golpes no celular.",
        figureKey: "caju_lens_quadrant",
        cajuDetails: {
          c: "O semiárido cearense convive com riscos climáticos sistêmicos: secas prolongadas diminuem a renda dos agricultores, o que reduz as compras no comércio da cidade ao mesmo tempo. Diversificar apenas dentro da mesma microrregião protege pouco.",
          a: "Redes informais de solidariedade (parentes, vizinhança de feira, grupos solidários de crédito) funcionam como o principal seguro informal contra choques econômicos, embora tenham alcance limitado quando a crise é generalizada.",
          j: "Instrumentos legais de mitigação: benefícios previdenciários do MEI (com o DAS em dia), seguros prestamistas em contratos de microcrédito e o programa Garantia-Safra para agricultores familiares.",
          u: "Matriz interativa de riscos e aplicativo com catálogo atualizado dos golpes digitais mais frequentes (falso comprovante Pix, clonagem de WhatsApp e boletos adulterados)."
        }
      },
      {
        slideNum: 7,
        type: "local_reality",
        title: "Realidade Local: A Crise do Polo Calçadista do CRAJUBAR",
        subtitle: "O Efeito Dominó da Dependência Econômica",
        content: "Estudos acadêmicos sobre a crise do polo calçadista de Juazeiro do Norte e Crato mostraram que o fechamento ou demissões em grandes fábricas atingiram instantaneamente bodegas, marmitarias e transportadores escolares que dependiam exclusivamente daqueles operários.",
        studyContent: "A lição definitiva de risco regional: pequenos negócios precisam diversificar seu público-alvo para não afundarem juntos quando a indústria âncora do município entra em recessão.",
        speakerNotes: "Relate a história econômica do calçado no Cariri e a importância de não colocar todos os ovos na mesma cesta.",
        audioNarration: "A crise no polo calçadista do Cariri provou que quando uma grande fábrica demite, as marmitarias e bodegas vizinhas sofrem imediatamente. A lição é diversificar clientes.",
        figureKey: "local_crajubar_shoes",
        localSource: {
          source: "Revista Id On Line · Crise no Polo Calçadista do CRAJUBAR",
          year: "Artigo de Referência",
          location: "Juazeiro do Norte e Crato"
        }
      },
      {
        slideNum: 8,
        type: "remember",
        title: "Para Lembrar Sempre",
        subtitle: "Síntese dos 3 Mandamentos do Risco",
        content: "1. Diversificar clientes e fornecedores para não ficar nas mãos de ninguém.\n2. Manter reserva de emergência antes do susto acontecer.\n3. Golpes digitais são o risco financeiro que mais cresce: confira o saldo real na conta bancária!",
        studyContent: "Nunca confie em comprovante de Pix enviado pelo WhatsApp por desconhecido sem atualizar o extrato bancário oficial no aplicativo do banco.",
        speakerNotes: "Finalize a 12ª aula com chave de ouro! Os alunos percorreram toda a Metodologia CAJU do Módulo 3.",
        audioNarration: "Para lembrar: Diversifique fornecedores e clientes. Construa reserva antes da crise. E nunca entregue mercadoria sem checar o Pix na conta bancária.",
        figureKey: "remember_risks",
        rememberItems: [
          "Diversificação é escudo: nunca dependa de apenas um comprador ou distribuidor.",
          "Reserva antecipada: emergência não avisa quando vai bater à porta.",
          "Cuidado com o falso Pix: confira sempre o extrato oficial no aplicativo do banco antes de liberar a entrega."
        ]
      },
      {
        slideNum: 9,
        type: "quiz",
        title: "Checagem Rápida: Aula 12",
        subtitle: "Verificação Formativa Final",
        content: "Duas questões sobre priorização na Matriz de Riscos e mitigação de dependência operacional.",
        studyContent: "Avalie o impacto dos riscos e comemore a conclusão de toda a trilha pedagógica da Aula CAJU!",
        speakerNotes: "Encerre a checagem rápida e convide os alunos para praticarem os desafios práticos na Bodega CAJU!",
        audioNarration: "Checagem rápida final. Classifique os riscos na matriz e celebre a conclusão das doze aulas da Aula CAJU!",
        figureKey: "quiz_interactive",
        quizQuestions: [
          {
            question: "Na Matriz de Risco 3×3, qual quadrante exige prioridade máxima imediata de contingência e mitigação por parte do gestor?",
            options: [
              "Baixa Probabilidade e Baixo Impacto (quadrante verde inferior)",
              "Alta Probabilidade e Alto Impacto (quadrante vermelho superior)",
              "Média Probabilidade e Baixo Impacto",
              "Todos os quadrantes devem receber exatamente o mesmo volume de recursos"
            ],
            correctIndex: 1,
            explanation: "Eventos que têm alta probabilidade de acontecer e que provocam estrago severo no negócio (Alta/Alto) são ameaças críticas que demandam planos de contingência imediatos."
          },
          {
            question: "Qual das seguintes estratégias é a mais eficaz para proteger uma lanchonete contra o risco de inadimplência de clientes no fiado?",
            options: [
              "Aumentar o limite de crédito fiado para os clientes mais antigos",
              "Incentivar o pagamento instantâneo via Pix com pequeno desconto e limitar o saldo máximo da caderneta",
              "Deixar de anotar as vendas fiadas no caderno",
              "Recorrer a empréstimos com agiotas toda sexta-feira"
            ],
            correctIndex: 1,
            explanation: "Estimular o Pix e estabelecer um teto máximo rígido por cliente encurta o prazo médio de recebimento (PMR) e mitiga o risco de calotes."
          }
        ]
      }
    ]
  }
];
