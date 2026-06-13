import { ServiceDetail, ProjectDetail } from "./types";

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    icon: "Brain",
    shortDesc: "Estrategias personalizadas de IA que se integran perfectamente con su visión de negocio, optimizando procesos y automatizando la toma de decisiones.",
    longDesc: "Desbloqueamos o potencial corporativo através do desenvolvimento e implementação de agentes de inteligência artificial autônomos, Large Language Models (LLMs) afinados e modelos preditivos sob medida. Criamos fluxos inteligentes que não apenas reagem, mas antecipam as necessidades do mercado, automatizando tomadas de decisões complexas com precisão cirúrgica.",
    capabilities: [
      "Integração profunda de LLMs e arquiteturas RAG (Retrieval-Augmented Generation)",
      "Modelos de Visão Computacional para detecção de anomalias em tempo real",
      "Sistemas preditivos para otimização de suprimentos e previsão financeira",
      "Agentes inteligentes autônomos focados em resolução de jornadas complexas de clientes"
    ],
    metrics: [
      { label: "Aumento de Eficiência", value: "+340%" },
      { label: "Redução de Custos de Processamento", value: "-62%" },
      { label: "Acurácia de Predição de Modelos", value: "99.8%" }
    ],
    caseStudy: {
      client: "AeroSpace Tech Corp",
      challenge: "Analisar gigabytes de telemetria diária para prever fadiga de turbinas e reduzir paradas não programadas altamente custosas.",
      outcome: "Implementamos um motor preditivo com LSTM que reduziu em 45% o tempo de inatividade operacional e identificou anomalias 4 dias antes de falhas mecânicas."
    }
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    icon: "ViewQuilt",
    shortDesc: "Interfaces cinemáticas e experiências de usuário desenhadas para a precisão tecnológica, combinando estética futurista com usabilidade intuitiva.",
    longDesc: "Construímos pontes digitais impecáveis entre marcas inovadoras e seus usuários. A nossa filosofia de design alia a sofisticação da estética sci-fi, glassmorphism e micro-interações responsivas ao rigor absoluto de acessibilidade mundial. Criamos dashboards que transformam montanhas de dados em diagramas altamente scannáveis e visualmente arrebatadores.",
    capabilities: [
      "Prototipagem interativa em alta fidelidade e design de sistemas globais robustos",
      "Estudos de cognição e caminhos de menor atrito para operadores em missões críticas",
      "Interfaces imersivas com suporte a temas dinâmicos e micro-animações físicas",
      "Otimização visual extrema para exibições em múltiplos formatos e dispositivos"
    ],
    metrics: [
      { label: "Engajamento do Usuário", value: "+180%" },
      { label: "Velocidade de Onboarding", value: "Menos de 3min" },
      { label: "Taxa de Conversão de Cliques", value: "+4.2x" }
    ],
    caseStudy: {
      client: "Vortex Analytics",
      challenge: "Redesenhar uma plataforma legada densa cheia de tabelas e logs incompreensíveis para que gerentes de topo pudessem auditar a integridade operacional rapidamente.",
      outcome: "Criamos a interface do Vortex Dashboard focada em design cinemático guiado por dados, elevando a retenção diária de clientes em 94%."
    }
  },
  {
    id: "cloud",
    title: "Cloud Architecture",
    icon: "CloudSync",
    shortDesc: "Arquiteturas escaláveis e resilientes preparadas para o futuro, garantizando alto rendimiento y seguridad en ecosistemas de datos masivos.",
    longDesc: "Concebemos e executamos infraestruturas modernas que escalam sozinhas sob demanda de milhões de acessos por segundo. Adotamos o paradigma multi-região nativo, alta redundância tolerante a falhas geográficas e entrega segura por CDN inteligente de latência nula. Garantimos proteção permanente contra ameaças digitais usando firewalls autoreativos baseados em IA.",
    capabilities: [
      "Orquestração flexível de contêineres resilientes (Kubernetes, Serverless)",
      "Bancos de dados mundiais com replicação ativa de latência abaixo de 5ms",
      "Pipeline CI/CD automatizado com testes térmicos e estáticos embutidos",
      "Segurança Zero Trust e encriptação ponta a ponta em trânsito e repouso"
    ],
    metrics: [
      { label: "Tempo de Uptime Garantido", value: "99.999%" },
      { label: "Tempo de Resposta Global", value: "< 12ms" },
      { label: "Redução de Desperdício em Cloud", value: "Otimização de 40%" }
    ],
    caseStudy: {
      client: "Bio-Sec Global",
      challenge: "Sincronizar bilhões de chaves de criptografia geradas dinamicamente entre 6 centros de processamento internacionais em menos de 100ms por bloco.",
      outcome: "Desenhamos uma arquitetura descentralizada de baixo nível com redundância automatizada que atingiu sincronia em 18ms em média, com tolerância total contra partições de rede."
    }
  }
];

export const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: "neural-sync",
    title: "Neural Sync Engine",
    category: "AI RESEARCH",
    shortDesc: "Motor generativo de simulação cognitiva de rede neural para processamento paralelo massivo.",
    description: "Um orquestrador de inteligência artificial de altíssimo desempenho focado em emular simulações estruturais e conexões de redes complexas em tempo real. Projetado para integrar fontes de Big Data complexas de instrumentação aeroespacial e diagnósticos biológicos avançados.",
    challenge: "Processar simultaneamente trilhões de parâmetros voláteis sem degradação do pipeline de dados ou dessincronização dos agentes cognitivos.",
    solution: "Desenvolvimento de um aglutinador paralelo em Rust rodando em cluster serverless que processa lotes em buffers circulares de alta taxa com latência estabilizada.",
    result: "Alcançamos uma melhoria inédita de 300% em taxa de transferência em relação às arquiteturas acadêmicas, operando continuamente por meses sem falhas.",
    techStack: ["React", "Rust", "TypeScript", "TensorFlow Core", "WebAssembly", "Cloud Run"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqKRGhzOox2EknI41945ieXw1E5k7JU35_GjRBoH_uVSn1_aRDy0RpgkgBWPmsFgpBt0uEdTeJkWWtG7YM-6i-SEcz-xDJt3cHg14wVGiEXWhU4fRKgtwSqyHQUk_nYPnBSbSfwO2WoCb43ECtMIT71jdjt915nwDf3HzSlVBYds_Cn3xrMcOOmZinJdP55uF0_CINNABkmxNUh8W70n7LUA_9mHSLhFJSGcmKkRAZLbez4mxQcGokYV0vm7-IlNUOWkJacS3vvbFu",
    stats: [
      { label: "Sincronia Estável", value: "99.99%" },
      { label: "Vazão Máxima", value: "2.8 GB/s" },
      { label: "Taxa de Erro de Predição", value: "< 0.001%" }
    ]
  },
  {
    id: "vortex-dashboard",
    title: "Vortex Dashboard",
    category: "UI/UX",
    shortDesc: "Plataforma de alta precisão para monitoramento tridimensional de fluxos de rede de alta velocidade.",
    description: "Dashboard cinemático ultra-fluido projetado para visualizar nós e filamentos de conexões em tempo real. Desenvolvido para apresentar trilhões de transações instantaneamente usando renderização acelerada por GPU de nível militar.",
    challenge: "Criar uma ferramenta visual densa, mas incrivelmente limpa e legível que evite fadiga visual de operadores e se adeque a múltiplos formatos de display físico.",
    solution: "Implementação de um motor customizado em Canvas2D combinando vetores dinâmicos, paleta cromática em alto contraste de tons laranjas e pretos e foco seletivo em tempo real.",
    result: "Redução comprovada de 70% no tempo despendido para triagem de anomalias críticas por gerentes operacionais de rede.",
    techStack: ["React-Pixi", "WebGL", "Vite", "Tailwind CSS", "D3.js", "RecoilState"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAT76tFSW0HhZRcW4Aw1iqt0oTQNCp2fG5pCElQfDK6ZTJm5jVd9ZHH-rw1VmpFGFydwwse-cgckooQKOT_8qmMoKJFAO6BmX630_e1euU4ZG1WO0pINQQZ1Ggk6vlFcq_Q6-2tE1PPoOuQ-FaQKBxfe_OHRugBjmJFh8aH5Frn9UUpGRFRd5OSqpCsAYqJjHqM5avttWP9C3n5N9Pv1Ilru6quyaLtnc87X_k3houin_yKyOsmma4sXZZxdl1cuKYvy-hSJDmdcJLy",
    stats: [
      { label: "FPS de Renderização", value: "144 FPS" },
      { label: "Controle de Latência", value: "0.02ms" },
      { label: "Satisfação do Operador", value: "98.7%" }
    ]
  },
  {
    id: "cyber-limb",
    title: "Cyber Limb Protocol",
    category: "ROBOTICS",
    shortDesc: "Sistema embarcado bionico de respostas neuromotoras instantâneas de baixíssima latência.",
    description: "Protocolo de software integrado construído para ligar próteses biônicas de nível superior a impulsos bioelétricos reais. O sistema analisa biofrequências em milissegundos para emular movimentos humanos extremamente naturais.",
    challenge: "Minimizar a latência de processamento decisório para menos de 5ms para garantir que o movimento bionico coincida perfeitamente com a intenção cognitiva.",
    solution: "Uso de inteligência de borda com modelos de compressão escalares ultra-pequenos mapeados diretamente em chips ARM embarcados.",
    result: "Atingiu uma taxa recorde mundial de feedback de 3.2ms, oferecendo sensação imediata de teto de controle real para os reabilitados.",
    techStack: ["C++ Core", "Edge Impulse", "TypeScript Bridge", "Node.js Controller", "Yolo Lite"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8xxd3sNjYMyyL_UrX-9jBiHiZJHgP1pFHPG30tsF93nJ6ugBmTqs-78ycDWWEc_E1oXJAP7c_-8y0G5ZXjocGNsdiDYv69NRz4u1bpMUu4ccZ_TylJ0_rh3-nQztqTyVQTNENhISLpJILNIX1CnotKZJ2GFBthz_xPnEUwWgLjHRM0dy3S_RhfXlV9xZXxTQvr2PYc5jo2ffWVgcjrgk46EgezYa6Id19nJZNhxtFp4A__i0-UJHF-t6mfbwNzXXttyCw1YA3HWpf",
    stats: [
      { label: "Tempo de Decisão", value: "3.2ms" },
      { label: "Precisão do Gesto", value: "99.4%" },
      { label: "Autonomia Operativa", value: "72 Horas" }
    ]
  },
  {
    id: "bio-sec",
    title: "Bio-Sec Architecture",
    category: "CYBERSECURITY",
    shortDesc: "Modelo avançado de distribuição criptográfica tolerante a computação quântica.",
    description: "Uma robusta arquitetura criptográfica que grava registros invioláveis em superfícies de silício através de emanação de luz estruturada dinâmica. Impede o monitoramento e falsificação de pacotes em infraestruturas industriais.",
    challenge: "Proteger canais de rede pública contra descriptografia baseada na evolução acelerada de computadores quânticos.",
    solution: "Implementação de chaves criptográficas pós-quânticas baseadas em reticulados criptográficos atualizados rotativamente via satélite.",
    result: "Selo de homologação internacional de nível militar sem ocorrências de breaches sob testes pesados de estresse externo.",
    techStack: ["Rust Security", "Solidity Core", "Python Math", "Next-Gen TLS Hooks", "Krypton JS"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlrhGlm2Sn4qOfbvCHx4MR-E_I6-9385cMbd3vA4K3J_7x_05McYZqWwk5P_rwBvW_SBC-_SU-9FYrOElMr8H-4jZinNN1qpQeuPF-S40gasgYvyT8Y_Pqi8GCSFrC6XEuh8rrxRVi2Sr_-1ZuoNkCdBOuvsfVbDxkNlEyxd4QyYIV7qSAnvO1825YvXzEq4jzO-L2o9DmrToBgxYyRPTDjAe80BpZfTuyRilZJapc7-OySibn0AqcPNPmukP2FeChP7TmA-IOwX9z",
    stats: [
      { label: "Nível de Entropia", value: "2^512 bit" },
      { label: "Resistência a Intrusão", value: "100.00%" },
      { label: "Overhead de Rede adicionais", value: "< 0.8%" }
    ]
  }
];
