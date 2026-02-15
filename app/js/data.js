const DATA = {

  mapaGeral: [
    { area: "Gestao Geral", subarea: "Coordenacao Geral", tarefas: "Definir objectivos; aprovar orcamento; reunioes semanais", responsavel: "", prazo: "", status: "" },
    { area: "Gestao Geral", subarea: "Governanca", tarefas: "Minutas; contratos; autorizacoes", responsavel: "", prazo: "", status: "" },
    { area: "Curadoria & Agenda", subarea: "Temas do Forum", tarefas: "Seleccionar temas e subtemas", responsavel: "", prazo: "", status: "" },
    { area: "Curadoria & Agenda", subarea: "Paineis & Sessoes", tarefas: "Confirmar painelistas; criar descricoes", responsavel: "", prazo: "", status: "" },
    { area: "Curadoria & Agenda", subarea: "Conteudos", tarefas: "Guiao; discursos; apresentacoes; dossier", responsavel: "", prazo: "", status: "" },
    { area: "Logistica", subarea: "Local & Infraestrutura", tarefas: "Montagem; som; luz; palco; streaming", responsavel: "", prazo: "", status: "" },
    { area: "Logistica", subarea: "Seguranca & Acessos", tarefas: "Credenciacao; ambulancia; fluxo", responsavel: "", prazo: "", status: "" },
    { area: "Logistica", subarea: "Catering", tarefas: "Coffee break; VIP; agua", responsavel: "", prazo: "", status: "" },
    { area: "Logistica", subarea: "Transportes", tarefas: "Shuttle; hotel; aeroporto", responsavel: "", prazo: "", status: "" },
    { area: "Relacoes Institucionais", subarea: "Patrocinadores", tarefas: "Reunioes; contratos; activacao", responsavel: "", prazo: "", status: "" },
    { area: "Relacoes Institucionais", subarea: "Institucionais", tarefas: "Ministerios; agencias; universidades", responsavel: "", prazo: "", status: "" },
    { area: "Relacoes Institucionais", subarea: "Oradores", tarefas: "Convites; kits; biografias", responsavel: "", prazo: "", status: "" },
    { area: "Comunicacao & Marketing", subarea: "Identidade Visual", tarefas: "Logo; branding; templates", responsavel: "", prazo: "", status: "" },
    { area: "Comunicacao & Marketing", subarea: "Divulgacao", tarefas: "Redes sociais; imprensa; media partners", responsavel: "", prazo: "", status: "" },
    { area: "Comunicacao & Marketing", subarea: "Materiais", tarefas: "Roll-ups; backdrop; programa", responsavel: "", prazo: "", status: "" },
    { area: "Comunicacao & Marketing", subarea: "Cobertura", tarefas: "Fotos; videos; live coverage", responsavel: "", prazo: "", status: "" },
    { area: "Gestao Financeira", subarea: "Orcamento", tarefas: "Planeamento; controlo", responsavel: "", prazo: "", status: "" },
    { area: "Gestao Financeira", subarea: "Receitas", tarefas: "Patrocinios; parcerias", responsavel: "", prazo: "", status: "" },
    { area: "Gestao Financeira", subarea: "Pagamentos", tarefas: "Fornecedores; equipa; fiscal", responsavel: "", prazo: "", status: "" },
    { area: "Experiencia Participante", subarea: "Inscricoes", tarefas: "Plataforma; base de dados", responsavel: "", prazo: "", status: "" },
    { area: "Experiencia Participante", subarea: "Acolhimento", tarefas: "Credenciacao; apoio; VIP", responsavel: "", prazo: "", status: "" },
    { area: "Experiencia Participante", subarea: "Materiais", tarefas: "Kits; crachas; brindes", responsavel: "", prazo: "", status: "" },
    { area: "Avaliacao Final", subarea: "Indicadores", tarefas: "Participacao; media; impacto", responsavel: "", prazo: "", status: "" },
    { area: "Avaliacao Final", subarea: "Feedback", tarefas: "Questionarios; entrevistas", responsavel: "", prazo: "", status: "" },
    { area: "Avaliacao Final", subarea: "Relatorio Final", tarefas: "Sumario; conclusoes; recomendacoes", responsavel: "", prazo: "", status: "" }
  ],

  planoTrabalho: [
    { fase: "1. Preparacao", descricao: "Planeamento inicial", actividades: "Definir objetivos; aprovar orcamento; formar equipa; calendarizar reunioes", responsavel: "Coordenacao Geral", prazo: "2025-12-01", status: "Em Curso" },
    { fase: "2. Curadoria", descricao: "Construcao do conteudo", actividades: "Definir temas; selecionar painelistas; preparar guioes; recolher bios", responsavel: "Curadoria", prazo: "2025-12-10", status: "Pendente" },
    { fase: "3. Parcerias", descricao: "Alinhamentos externos", actividades: "Negociar patrocinios; confirmar parcerias institucionais; fechar contratos", responsavel: "Relacoes Institucionais", prazo: "2025-12-20", status: "Pendente" },
    { fase: "4. Logistica", descricao: "Infraestrutura e operacoes", actividades: "Reservar espaco; contratar som e luz; planificar catering; transporte", responsavel: "Logistica", prazo: "2026-01-05", status: "Pendente" },
    { fase: "5. Comunicacao", descricao: "Plano de divulgacao", actividades: "Aprovar identidade visual; lancar campanha; articular com media partners", responsavel: "Comunicacao", prazo: "2025-12-15", status: "Pendente" },
    { fase: "6. Execucao", descricao: "Operacao do evento", actividades: "Credenciacao; coordenacao de palco; fluxo de participantes; monitoramento", responsavel: "Operacoes", prazo: "Data do Evento", status: "Pendente" },
    { fase: "7. Avaliacao", descricao: "Fecho e relatorio", actividades: "Recolha de feedback; compilar indicadores; elaborar relatorio final", responsavel: "Coordenacao / Avaliacao", prazo: "30 dias pos-evento", status: "Pendente" }
  ],

  checklist: [
    { area: "Gestao Geral", item: "Objectivos definidos", detalhe: "Documento aprovado pela coordenacao", responsavel: "Coordenacao Geral", prazo: "2025-11-30", concluido: true },
    { area: "Gestao Geral", item: "Orcamento aprovado", detalhe: "Orcamento detalhado e assinado", responsavel: "Direccao Financeira", prazo: "2025-12-05", concluido: false },
    { area: "Gestao Geral", item: "Contratos assinados", detalhe: "Fornecedores chave contratados", responsavel: "Direccao Juridica", prazo: "2025-12-10", concluido: false },
    { area: "Curadoria", item: "Temas confirmados", detalhe: "Lista de temas e descricao", responsavel: "Curadoria", prazo: "2025-11-30", concluido: true },
    { area: "Curadoria", item: "Paineis completos", detalhe: "Titulos e moderadores definidos", responsavel: "Curadoria", prazo: "2025-12-10", concluido: false },
    { area: "Curadoria", item: "Oradores confirmados", detalhe: "Confirmacoes por escrito e logistica", responsavel: "Curadoria/Protocolo", prazo: "2025-12-15", concluido: false },
    { area: "Logistica", item: "Auditorio reservado", detalhe: "Contrato de espaco assinado", responsavel: "Logistica", prazo: "2025-12-01", concluido: true },
    { area: "Logistica", item: "Palco pronto", detalhe: "Desenho e aprovacao de cenografia", responsavel: "Producao", prazo: "2026-01-05", concluido: false },
    { area: "Logistica", item: "Som & luz testados", detalhe: "Testes de equipamento realizados", responsavel: "Tecnicos de AV", prazo: "Data do Evento -1", concluido: false },
    { area: "Logistica", item: "Catering confirmado", detalhe: "Cardapio e fornecedores fechados", responsavel: "Logistica", prazo: "2026-01-01", concluido: false },
    { area: "Comunicacao", item: "Identidade visual aprovada", detalhe: "Logo, templates e manual", responsavel: "Comunicacao", prazo: "2025-11-25", concluido: true },
    { area: "Comunicacao", item: "Plano de divulgacao activo", detalhe: "Calendario de posts e press releases", responsavel: "Comunicacao", prazo: "2025-12-01", concluido: false },
    { area: "Comunicacao", item: "Materiais graficos prontos", detalhe: "Roll-ups, programas, crachas", responsavel: "Comunicacao/Design", prazo: "2025-12-20", concluido: false },
    { area: "Parcerias", item: "Patrocinios fechados", detalhe: "Contratos e confirmacoes financeiras", responsavel: "Relacoes Institucionais", prazo: "2025-12-20", concluido: false },
    { area: "Experiencia", item: "Plataforma de inscricao activa", detalhe: "Formulario online e gestao de dados", responsavel: "TI/Comunicacao", prazo: "2025-11-20", concluido: true },
    { area: "Experiencia", item: "Crachas e kits prontos", detalhe: "Design e producao de kits sustentaveis", responsavel: "Protocolo/Logistica", prazo: "2025-12-28", concluido: false },
    { area: "Pos-evento", item: "Feedback recolhido", detalhe: "Questionarios e analise", responsavel: "Avaliacao", prazo: "30 dias pos-evento", concluido: false },
    { area: "Pos-evento", item: "Relatorio final entregue", detalhe: "Relatorio consolidado com recomendacoes", responsavel: "Coordenacao", prazo: "45 dias pos-evento", concluido: false }
  ],

  dashboard: [
    { metrica: "Participantes", meta: 500, actual: 120, unidade: "", icon: "users" },
    { metrica: "Empresas", meta: 80, actual: 20, unidade: "", icon: "building" },
    { metrica: "Patrocinios", meta: 5, actual: 1, unidade: "", icon: "handshake" },
    { metrica: "Conteudos Prontos", meta: 100, actual: 30, unidade: "%", icon: "file-text" },
    { metrica: "Oradores Confirmados", meta: 30, actual: 10, unidade: "", icon: "mic" },
    { metrica: "Orcamento Executado", meta: 23936111, actual: 5000000, unidade: "KZ", icon: "wallet" },
    { metrica: "Logistica Pronta", meta: 100, actual: 40, unidade: "%", icon: "truck" },
    { metrica: "Satisfacao Esperada", meta: 80, actual: 0, unidade: "%", icon: "smile" }
  ],

  equipas: [
    { equipa: "Curadoria", responsavel: "A definir", tarefas: "Agenda, paineis, oradores", prazo: "2025-12-10", estado: "Em Curso", obs: "Lista de potenciais painelistas em anexo" },
    { equipa: "Logistica", responsavel: "A definir", tarefas: "Local, montagem, catering, transporte", prazo: "2026-01-05", estado: "Pendente", obs: "Detalhes tecnicos com fornecedores" },
    { equipa: "Comunicacao", responsavel: "A definir", tarefas: "Branding, media, posts, materiais", prazo: "2025-12-15", estado: "Em Curso", obs: "Plano de comunicacao em elaboracao" },
    { equipa: "Protocolo", responsavel: "A definir", tarefas: "Acolhimento, VIP, crachas, kits", prazo: "2025-12-28", estado: "Pendente", obs: "Mapas de fluxo e credenciacao" },
    { equipa: "Financeira", responsavel: "A definir", tarefas: "Orcamento, pagamentos, relatorios", prazo: "Continuo", estado: "Em Curso", obs: "Documentos fiscais pendentes" },
    { equipa: "Relacoes Institucionais", responsavel: "A definir", tarefas: "Patrocinios, governo, parceiros", prazo: "2025-12-20", estado: "Pendente", obs: "Propostas comerciais em preparacao" },
    { equipa: "Operacoes", responsavel: "A definir", tarefas: "Coordenacao no dia, planos de contingencia", prazo: "Data do Evento", estado: "Pendente", obs: "Checklist operacional final" }
  ],

  anexos: [
    { nome: "CC-CGGC-DQ-AIBC-20251105 - Solicitacao de Propostas Tecnicas e Comerciais para Renovacao da LAI do AHCC - ALLORA.pdf", caminho: "/mnt/data/CC-CGGC-DQ-AIBC-20251105.pdf" },
    { nome: "Termos de Referencia - Auditoria Ambiental Renovacao LAI AHCC.pdf", caminho: "/mnt/data/TdR_Auditoria_Ambiental.pdf" }
  ],

  instituicoes: [
    {
      nomeInstituicao: "Exemplo Instituicao",
      responsavel: "Nome do Responsavel",
      contacto: "+244 900 000 000",
      email: "exemplo@instituicao.com",
      tipoParceria: "Patrocinador Principal",
      representanteIndicado: "Nome do Representante",
      tarefas: "Apoio financeiro; divulgacao; presenca institucional",
      recomendacoes: "Manter contacto regular; alinhar expectativas",
      logotipo: "/logos/exemplo.png",
      biografia: "Breve descricao da instituicao e sua missao",
      painel: "Painel onde participa",
      fotografia: "/fotos/exemplo.jpg",
      datas: "2025-12-01 a 2026-02-15"
    }
  ]
};
