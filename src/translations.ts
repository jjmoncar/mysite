export type Language = "es" | "en" | "pt";

export interface TranslationDictionary {
  nav: {
    home: string;
    services: string;
    projects: string;
    contact: string;
    ctaButton: string;
  };
  hero: {
    badge: string;
    titleFirst: string;
    titleHighlight: string;
    titleLast: string;
    description: string;
    btnProjects: string;
    btnServices: string;
    systemActive: string;
    latency: string;
    clickDiagnostics: string;
  };
  dialogs: {
    telemetryTitle: string;
    operMode: string;
    cpuLoad: string;
    ram: string;
    uptime: string;
    aiModel: string;
    ingress: string;
    changeProfile: string;
    diagnosticLabel: string;
  };
  services: {
    titleFirst: string;
    titleHighlight: string;
    subtitle: string;
    learnMore: string;
    modalTitle: string;
    overview: string;
    capabilities: string;
    impact: string;
    caseStudyLabel: string;
    client: string;
    challenge: string;
    outcome: string;
    closeBtn: string;
  };
  projects: {
    badge: string;
    title: string;
    cta: string;
    detailsTitle: string;
    challengeTitle: string;
    solutionTitle: string;
    techStackTitle: string;
    resultsTitle: string;
    longTermTitle: string;
    closeBtn: string;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    btnSubmit: string;
    errName: string;
    errEmail: string;
    errMessage: string;
    stage1: string;
    stage2: string;
    stage3: string;
    successTitle: string;
    successSub: string;
    idLabel: string;
    hashLabel: string;
    receiptLabel: string;
    nameReceipt: string;
    emailReceipt: string;
    metaReceipt: string;
    btnCopy: string;
    btnCopyOk: string;
    btnNew: string;
  };
  footer: {
    rights: string;
    logActivation: string;
    logsLabel: string;
  };
  legal: {
    privacyTitle: string;
    privacyLastUpdated: string;
    privacySections: { title: string; paragraphs: string[] }[];
    termsTitle: string;
    termsLastUpdated: string;
    termsSections: { title: string; paragraphs: string[] }[];
    closeBtn: string;
  };
  servicesData: {
    id: string;
    title: string;
    icon: string;
    shortDesc: string;
    longDesc: string;
    capabilities: string[];
    metrics: { label: string; value: string }[];
    caseStudy: {
      client: string;
      challenge: string;
      outcome: string;
    };
  }[];
  projectsData: {
    id: string;
    title: string;
    category: string;
    shortDesc: string;
    description: string;
    challenge: string;
    solution: string;
    result: string;
    techStack: string[];
    image: string;
    stats: { label: string; value: string }[];
  }[];
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  es: {
    nav: {
      home: "Home",
      services: "Servicios",
      projects: "Proyectos",
      contact: "Contacto",
      ctaButton: "Let's Talk",
    },
    hero: {
      badge: "Innovate with Intelligence",
      titleFirst: "Diseño y Tecnología que ",
      titleHighlight: "Impulsan",
      titleLast: " el Futuro",
      description: "Desbloqueamos el potencial de su negocio a través de soluciones de IA de vanguardia y arquitectura digital diseñada para la era de la inteligencia artificial.",
      btnProjects: "Ver Proyectos",
      btnServices: "Servicios",
      systemActive: "SISTEMA ACTIVO",
      latency: "Latencia:",
      clickDiagnostics: "Clic para Diagnósticos ➔",
    },
    dialogs: {
      telemetryTitle: "Telemetría Core",
      operMode: "Modo Operacional:",
      cpuLoad: "Cluster CPU Load:",
      ram: "RAM Dedicada:",
      uptime: "Tempo de Fluxo Uptime:",
      aiModel: "Modelo de IA:",
      ingress: "Región de Ingress:",
      changeProfile: "Mudar Perfil de Teste:",
      diagnosticLabel: "JJSERVICES AI Grid v2.4.6",
    },
    services: {
      titleFirst: "Servicios de Consultoría ",
      titleHighlight: "End-to-End",
      subtitle: "Ofrecemos soluciones tecnológicas del más alto estándar, con arquitectura avanzada e integra de vanguardias conceptuales.",
      learnMore: "LEARN MORE",
      modalTitle: "Servicio Especializado",
      overview: "Visión General",
      capabilities: "Capacidades Clave",
      impact: "Impacto de Negocio",
      caseStudyLabel: "Caso de Éxito Relevante",
      client: "Cliente:",
      challenge: "Desafío:",
      outcome: "Resultado:",
      closeBtn: "Entendido",
    },
    projects: {
      badge: "Portfolio",
      title: "Proyectos Destacados",
      cta: "Iniciar un Proyecto ➔",
      detailsTitle: "Visión y Propósito",
      challengeTitle: "El Desafío Clave",
      solutionTitle: "Solución de IA",
      techStackTitle: "Stack de Tecnologias",
      resultsTitle: "Resultados Obtenidos / KPIs",
      longTermTitle: "Impacto de Largo Plazo",
      closeBtn: "Cerrar Detalle",
    },
    contact: {
      title: "¿Listo para el Futuro?",
      subtitle: "Háblenos de su próximo gran desafío tecnológico. Nuestro equipo formulará un diagnóstico preliminar sin cargo.",
      nameLabel: "Nombre Completo",
      namePlaceholder: "John Doe",
      emailLabel: "Correo Electrónico",
      emailPlaceholder: "john@example.com",
      messageLabel: "Mensaje / Alcance del Desafío",
      messagePlaceholder: "¿En qué podemos ayudarte? Describe brevemente las metas...",
      btnSubmit: "Enviar Consulta",
      errName: "Por favor, introduce tu nombre completo.",
      errEmail: "Introduce un correo electrónico válido.",
      errMessage: "Escribe un breve mensaje describiendo tu requerimiento.",
      stage1: "Sanitizando carga de datos primarios...",
      stage2: "Validando hashes de correo electrónico...",
      stage3: "Encriptando y guardando en red de datos segura...",
      successTitle: "Simulación de Consulta Enviada con Éxito",
      successSub: "Transmisión encriptada firmada por la terminal digital de JJSERVICES.",
      idLabel: "ID DE SEGUIMIENTO",
      hashLabel: "HASH DE DIAGNÓSTICO SYS",
      receiptLabel: "RESUMEN DE CONTENIDO RECIBIDO:",
      nameReceipt: "Nombre: ",
      emailReceipt: "Email: ",
      metaReceipt: "Meta: ",
      btnCopy: "Copiar ID de Consulta",
      btnCopyOk: "Copiado!",
      btnNew: "Enviar un nuevo mensaje",
    },
    footer: {
      rights: "© 2026 JJSERVICES. ALL RIGHTS RESERVED.",
      logActivation: "LOG ACTIVATION:",
      logsLabel: "LOGS:",
    },
    legal: {
      privacyTitle: "Política de Privacidad",
      privacyLastUpdated: "Última actualización: 13 de junio de 2026",
      privacySections: [
        {
          title: "1. Información que Recopilamos",
          paragraphs: [
            "Recopilamos únicamente la información que usted decide enviarnos voluntariamente a través de nuestro formulario de contacto digital (Nombre completo, Correo electrónico y el Mensaje o Alcance del Desafío).",
            "No implementamos balizas web ni rastreadores intrusivos para monitorear sus actividades web de forma pasiva."
          ]
        },
        {
          title: "2. Uso de la Información",
          paragraphs: [
            "La información suministrada se procesa única y exclusivamente con el fin de evaluar su requerimiento técnico, formular un diagnóstico conceptual adaptado y ponernos en contacto con usted.",
            "Sus datos de carácter personal nunca serán transferidos, comercializados o distribuidos de ninguna forma a terceros con propósitos de prospección publicitaria."
          ]
        },
        {
          title: "3. Seguridad y Encriptación",
          paragraphs: [
            "Contamos con controles rigurosos integrados para simular y ejecutar de manera segura las transferencias de datos. Todas las interacciones recibidas son tratadas con la máxima seguridad operacional bajo nuestro portal JJSERVICES."
          ]
        },
        {
          title: "4. Derechos del Titular",
          paragraphs: [
            "Usted conserva en todo momento el pleno derecho de solicitar el acceso, rectificación, olvido o cancelación de los datos suministrados enviándonos un mensaje directo mediante nuestros canales oficiales correspondientes."
          ]
        }
      ],
      termsTitle: "Términos del Servicio",
      termsLastUpdated: "Última actualización: 13 de junio de 2026",
      termsSections: [
        {
          title: "1. Aceptación del Acuerdo",
          paragraphs: [
            "Al navegar de manera interactiva por este portal web y utilizar nuestras simulaciones de diagnóstico de JJSERVICES, usted manifiesta su pleno consentimiento y conformidad con los presentes Términos de Servicio."
          ]
        },
        {
          title: "2. Naturaleza de los Diagnósticos",
          paragraphs: [
            "Los reportes de consola, métricas de latencia de red de demostración y estimaciones expuestas en los páneles de simulación son exclusivamente de carácter conceptual, ilustrativo y educativo.",
            "Ningún resultado parcial emitido en este portal constituirá una oferta o compromiso comercial vinculante ni contrato de prestación de servicios de ingeniería hasta que sea firmado formalmente por ambas partes mediante instrumento físico o digital calificado."
          ]
        },
        {
          title: "3. Propiedad Intelectual",
          paragraphs: [
            "El ecosistema y código base de JJSERVICES, incluyendo de forma no limitativa los diseños de interfaces de usuario, esquemas visuales, identidades marcarias corporativas y arquitecturas algorítmicas, pertenecen exclusivamente a sus creadores y licenciantes."
          ]
        },
        {
          title: "4. Deslinde de Responsabilidad",
          paragraphs: [
            "JJSERVICES no asume responsabilidad civil ni contractual por cualquier pérdida indirecta, perjuicios emergentes, interrupciones de negocio o fallas derivadas del uso interpretativo o la confianza depositada en nuestras demostraciones interactivas o simulaciones de red."
          ]
        }
      ],
      closeBtn: "Entendido y Cerrar"
    },
    servicesData: [
      {
        id: "ai",
        title: "Artificial Intelligence",
        icon: "Brain",
        shortDesc: "Estrategias personalizadas de IA que se integran perfectamente con su visión de negocio, optimizando procesos y automatizando la toma de decisiones.",
        longDesc: "Desbloqueamos el potencial corporativo a través del desarrollo e implementación de agentes de inteligencia artificial autónomos, Large Language Models (LLMs) afinados y modelos predictivos a medida. Creamos flujos inteligentes que no solo reaccionan, sino que anticipan las necesidades del mercado, automatizando la toma de decisiones compleja con precisión de cirujano.",
        capabilities: [
          "Integración profunda de LLM y arquitecturas RAG (Retrieval-Augmented Generation)",
          "Modelos de Visión Computacional para detección de anomalías en tiempo real",
          "Sistemas predictivos para optimización de inventarios y previsión financiera",
          "Agentes autónomos inteligentes enfocados en resolver jornadas complejas de clientes"
        ],
        metrics: [
          { label: "Aumento de Eficiencia", value: "+340%" },
          { label: "Reducción de Costes", value: "-62%" },
          { label: "Exactitud del Modelo", value: "99.8%" }
        ],
        caseStudy: {
          client: "AeroSpace Tech Corp",
          challenge: "Analizar gigabytes de telemetría diaria para prever el desgaste de turbinas y reducir paradas no programadas sumamente costosas.",
          outcome: "Implementamos un motor predictivo con LSTM que redujo en un 45% el tiempo de inactividad operacional e identificó fallas 4 días antes."
        }
      },
      {
        id: "uiux",
        title: "UI/UX Design",
        icon: "ViewQuilt",
        shortDesc: "Interfaces cinemáticas y experiencias de usuario diseñadas para la precisión tecnológica, combinando estética futurista con usabilidad intuitiva.",
        longDesc: "Construimos puentes digitales perfectos entre marcas innovadoras y sus usuarios. Nuestra filosofía de diseño combina la sofisticación de la estética cyberpunk/glassmorphic y las microinteracciones responsivas con los requisitos de accesibilidad a nivel global. Diseñamos consolas que convierten grandes volúmenes de datos en flujos inteligibles y sumamente atractivos.",
        capabilities: [
          "Prototipado interactivo de alta fidelidad y sistemas de diseño globales y robustos",
          "Estudios cognitivos y rutas con mínima fricción para operadores en misiones críticas",
          "Interfaces inmersivas con soporte de temas dinámicos y micro-animaciones físicas",
          "Optimización de diseño extrema para pantallas y formatos múltiples"
        ],
        metrics: [
          { label: "Engagement de Usuario", value: "+180%" },
          { label: "Velocidad de Onboarding", value: "< 3 min" },
          { label: "Conversión de Clicks", value: "+4.2x" }
        ],
        caseStudy: {
          client: "Vortex Analytics",
          challenge: "Rediseñar un denso panel legacy saturado de tablas y logs incomprensibles para que los gerentes de operaciones puedan realizar auditorías de salud de la red en segundos.",
          outcome: "Creamos un panel Vortex interactivo centrado en diseño cinemático estructurado por datos, elevando la retención diaria de usuarios un 94%."
        }
      },
      {
        id: "cloud",
        title: "Cloud Architecture",
        icon: "CloudSync",
        shortDesc: "Arquitecturas escalables y resilientes preparadas para el futuro, garantizando alto rendimiento y seguridad en ecosistemas de datos masivos.",
        longDesc: "Concebimos y ejecutamos infraestructuras en la nube modernas de alta escalabilidad bajo demandas de millones de peticiones por segundo. Adoptamos paradigmas multirregión con redundancia activa y tolerancia a fallos geográficos completos. Diseñamos firewalls inteligentes con respuesta automatizada ante ciberataques.",
        capabilities: [
          "Orquestación flexible de contenedores tolerantes a fallos (Kubernetes, Serverless)",
          "Bases de datos mundiales con latencia de replicación activa inferior a 5ms",
          "Pipelines CI/CD automatizados con pruebas de carga y escaneos de seguridad estáticos",
          "Estructura Zero-Trust y encriptación robusta de datos en tránsito y en reposo"
        ],
        metrics: [
          { label: "Uptime de Red Garantizado", value: "99.999%" },
          { label: "Latencia de Respuesta Global", value: "< 12ms" },
          { label: "Eficiencia de Recursos Nube", value: "Ahorro del 40%" }
        ],
        caseStudy: {
          client: "Bio-Sec Global",
          challenge: "Sincronizar millones de claves de cifrado variables entre 6 supercentros internacionales en menos de 100ms por bloque.",
          outcome: "Diseñamos un sistema de sincronización descentralizado de bajo nivel con conmutación por error automatizada que promedió 18ms entre regiones."
        }
      }
    ],
    projectsData: [
      {
        id: "neural-sync",
        title: "Neural Sync Engine",
        category: "AI RESEARCH",
        shortDesc: "Motor generativo de simulación cognitiva de red neural para procesamiento paralelo masivo.",
        description: "Un orquestador de inteligencia artificial de altísimo rendimiento enfocado en emular simulações estruturais e conexões de redes complexas em tempo real. Projetado para integrar fontes de Big Data complexas de instrumentação aeroespacial e diagnósticos biológicos avançados.",
        challenge: "Processar simultaneamente trilhões de parâmetros voláteis sem degradação do pipeline de dados ou dessincronização dos agentes cognitivos.",
        solution: "Desenvolvimento de um aglutinador paralelo em Rust rodando em cluster serverless que processa lotes em buffers circulares de alta taxa com latência estabilizada.",
        result: "Alcançamos uma melhoria inédita de 300% em taxa de transferência em relação às arquiteturas acadêmicas, operando continuamente por meses sem falhas.",
        techStack: ["React", "Rust", "TypeScript", "TensorFlow Core", "WebAssembly", "Cloud Run"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqKRGhzOox2EknI41945ieXw1E5k7JU35_GjRBoH_uVSn1_aRDy0RpgkgBWPmsFgpBt0uEdTeJkWWtG7YM-6i-SEcz-xDJt3cHg14wVGiEXWhU4fRKgtwSqyHQUk_nYPnBSbSfwO2WoCb43ECtMIT71jdjt915nwDf3HzSlVBYds_Cn3xrMcOOmZinJdP55uF0_CINNABkmxNUh8W70n7LUA_9mHSLhFJSGcmKkRAZLbez4mxQcGokYV0vm7-IlNUOWkJacS3vvbFu",
        stats: [
          { label: "Sincronia Estable", value: "99.99%" },
          { label: "Vía Máxima", value: "2.8 GB/s" },
          { label: "Tasa de Error", value: "< 0.001%" }
        ]
      },
      {
        id: "vortex-dashboard",
        title: "Vortex Dashboard",
        category: "UI/UX",
        shortDesc: "Plataforma de alta precisión para monitoreo tridimensional de flujos de red de alta velocidad.",
        description: "Dashboard cinemático ultra-fluido diseñado para visualizar nodos y filamentos de conexiones en tiempo real. Desarrollado para presentar trillones de transacciones de forma instantánea mediante renderización GPU de nivel militar.",
        challenge: "Crear una herramienta visual compacta pero sumamente legible que evite la fatiga ocular de los operadores del sistema.",
        solution: "Configuración de un motor gráfico integrado en Canvas2D con colores de alto contraste combinando tonalidades laranjas y grises mate con desenfoque de fondo en tiempo real.",
        result: "Un ahorro auditado del 70% en el tiempo empleado para detectar anomalías de seguridad en infraestructuras de telecomunicaciones críticas.",
        techStack: ["React-Pixi", "WebGL", "Vite", "Tailwind CSS", "D3.js", "RecoilState"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAT76tFSW0HhZRcW4Aw1iqt0oTQNCp2fG5pCElQfDK6ZTJm5jVd9ZHH-rw1VmpFGFydwwse-cgckooQKOT_8qmMoKJFAO6BmX630_e1euU4ZG1WO0pINQQZ1Ggk6vlFcq_Q6-2tE1PPoOuQ-FaQKBxfe_OHRugBjmJFh8aH5Frn9UUpGRFRd5OSqpCsAYqJjHqM5avttWP9C3n5N9Pv1Ilru6quyaLtnc87X_k3houin_yKyOsmma4sXZZxdl1cuKYvy-hSJDmdcJLy",
        stats: [
          { label: "Frecuencia GPU", value: "144 FPS" },
          { label: "Control de Latencia", value: "0.02ms" },
          { label: "Satisfacción", value: "98.7%" }
        ]
      },
      {
        id: "cyber-limb",
        title: "Cyber Limb Protocol",
        category: "ROBOTICS",
        shortDesc: "Sistema embebido biónico de respuestas neuromotoras instantáneas de bajísima latencia.",
        description: "Protocolo de software integrado diseñado para conectar próteses robóticas avanzadas con impulsos bioeléctricos de forma directa. Traduce patrones de frecuencia en milisegundos para movimientos óptimos.",
        challenge: "Acortar la latencia motora por debajo del límite de percepción biológica (5ms) para asegurar coordinación instantánea.",
        solution: "Un procesador de inferencia local con compresión de red neuronal profunda en hardware ARM integrado en el chasis.",
        result: "Logró la marca de latencia de retroalimentación de 3.2ms, estableciendo el estándar global absoluto de sincronización háptica.",
        techStack: ["C++ Core", "Edge Impulse", "TypeScript Bridge", "Node.js Controller", "Yolo Lite"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8xxd3sNjYMyyL_UrX-9jBiHiZJHgP1pFHPG30tsF93nJ6ugBmTqs-78ycDWWEc_E1oXJAP7c_-8y0G5ZXjocGNsdiDYv69NRz4u1bpMUu4ccZ_TylJ0_rh3-nQztqTyVQTNENhISLpJILNIX1CnotKZJ2GFBthz_xPnEUwWgLjHRM0dy3S_RhfXlV9xZXxTQvr2PYc5jo2ffWVgcjrgk46EgezYa6Id19nJZNhxtFp4A__i0-UJHF-t6mfbwNzXXttyCw1YA3HWpf",
        stats: [
          { label: "Retraso de Decisión", value: "3.2ms" },
          { label: "Exactitud Gestual", value: "99.4%" },
          { label: "Autonomía de Batería", value: "72 Horas" }
        ]
      },
      {
        id: "bio-sec",
        title: "Bio-Sec Architecture",
        category: "CYBERSECURITY",
        shortDesc: "Modelo avanzado de distribución criptográfica tolerante a computación quântica.",
        description: "Infraestructura de encapsulado criptográfico resistente frente a ciberfuerzas quánticas externas que protege activamente redes lógicas de datos industriales.",
        challenge: "Bloquear ataques mediante computación cuántica capaces de romper cifrados simétricos y de clave pública tradicionales.",
        solution: "Uso de polinomios sobre reticulados criptográficos matemáticos optimizados y actualizados vía microenlaces ópticos aeroespaciales dinámicos.",
        result: "Homologación Zero-Vulnerability verificada por agencias federales reguladoras de seguridad de información digital.",
        techStack: ["Rust Security", "Solidity Core", "Python Math", "Next-Gen TLS Hooks", "Krypton JS"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlrhGlm2Sn4qOfbvCHx4MR-E_I6-9385cMbd3vA4K3J_7x_05McYZqWwk5P_rwBvW_SBC-_SU-9FYrOElMr8H-4jZinNN1qpQeuPF-S40gasgYvyT8Y_Pqi8GCSFrC6XEuh8rrxRVi2Sr_-1ZuoNkCdBOuvsfVbDxkNlEyxd4QyYIV7qSAnvO1825YvXzEq4jzO-L2o9DmrToBgxYyRPTDjAe80BpZfTuyRilZJapc7-OySibn0AqcPNPmukP2FeChP7TmA-IOwX9z",
        stats: [
          { label: "Nivel de Entropía", value: "2^512 bit" },
          { label: "Puntos de Fuga", value: "0.00%" },
          { label: "Carga de Overhead", value: "< 0.8%" }
        ]
      }
    ]
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      ctaButton: "Let's Talk",
    },
    hero: {
      badge: "Innovate with Intelligence",
      titleFirst: "Design & Technology that ",
      titleHighlight: "Drive",
      titleLast: " the Future",
      description: "We unlock your business potential through next-generation AI solutions and digital architecture crafted for the epoch of artificial intelligence.",
      btnProjects: "View Projects",
      btnServices: "Services",
      systemActive: "SYSTEM ACTIVE",
      latency: "Latency:",
      clickDiagnostics: "Click for Diagnostics ➔",
    },
    dialogs: {
      telemetryTitle: "Core Telemetry",
      operMode: "Operational Mode:",
      cpuLoad: "Cluster CPU Load:",
      ram: "Dedicated RAM:",
      uptime: "Flow Runtime Uptime:",
      aiModel: "AI Foundation Model:",
      ingress: "Ingress Region:",
      changeProfile: "Change Testing Profile:",
      diagnosticLabel: "JJSERVICES AI Grid v2.4.6",
    },
    services: {
      titleFirst: "End-to-End ",
      titleHighlight: "Consulting Services",
      subtitle: "We deliver digital systems matching elite software parameters, leveraging state-of-the-art frameworks and robust architectural designs.",
      learnMore: "LEARN MORE",
      modalTitle: "Specialized Service",
      overview: "Overview",
      capabilities: "Key Capabilities",
      impact: "Business Impact",
      caseStudyLabel: "Featured Case Study",
      client: "Client:",
      challenge: "Challenge:",
      outcome: "Outcome:",
      closeBtn: "Understood",
    },
    projects: {
      badge: "Portfolio",
      title: "Featured Projects",
      cta: "Launch a Project ➔",
      detailsTitle: "Vision & Value",
      challengeTitle: "The Key Challenge",
      solutionTitle: "AI Solution",
      techStackTitle: "Technology Stack",
      resultsTitle: "Achieved Benchmarks / KPIs",
      longTermTitle: "Long-term Impact",
      closeBtn: "Close Details",
    },
    contact: {
      title: "Ready for the Future?",
      subtitle: "Tell us about your next massive technological checkpoint. Our team will provide a complimentary structured architectural diagnostic.",
      nameLabel: "Full Name",
      namePlaceholder: "John Doe",
      emailLabel: "Email Address",
      emailPlaceholder: "john@example.com",
      messageLabel: "Message / Challenge Outline",
      messagePlaceholder: "How can we help you? Briefly outline your requirements and targets...",
      btnSubmit: "Submit Inquiry",
      errName: "Please provide your full name.",
      errEmail: "Please enter a valid email address.",
      errMessage: "Please write a brief summary describing your inquiry.",
      stage1: "Sanitizing primary data payload...",
      stage2: "Verifying email validation hashes...",
      stage3: "Encrypting and registering in secure ledger...",
      successTitle: "Simulation Callback Transmitted Sucessfully",
      successSub: "Encrypted packet digitally signed by the JJSERVICES Core terminal.",
      idLabel: "TRACKING ID",
      hashLabel: "SYS DIAGNOSTIC HASH",
      receiptLabel: "RECEIVED DATA SUMMARY:",
      nameReceipt: "Name: ",
      emailReceipt: "Email: ",
      metaReceipt: "Scope: ",
      btnCopy: "Copy Query ID",
      btnCopyOk: "Copied!",
      btnNew: "Submit a new message",
    },
    footer: {
      rights: "© 2026 JJSERVICES. ALL RIGHTS RESERVED.",
      logActivation: "LOG ACTIVATION:",
      logsLabel: "LOGS:",
    },
    legal: {
      privacyTitle: "Privacy Policy",
      privacyLastUpdated: "Last updated: June 13, 2026",
      privacySections: [
        {
          title: "1. Information We Collect",
          paragraphs: [
            "We only collect information you voluntarily provide through our contact form (Full Name, Email Address, and Message or Scope of Challenge).",
            "We do not use tracking pixels or invasive tracking mechanisms to monitor your passive web activities."
          ]
        },
        {
          title: "2. Use of Information",
          paragraphs: [
            "The information you choose to share is processed strictly to analyze your technology requirements, formulate an initial digital blueprint, and establish official contact with you.",
            "Your personal details will never be sold, leased, or distributed to third parties for commercial marketing purposes."
          ]
        },
        {
          title: "3. Data Encryption & Safety",
          paragraphs: [
            "We implement robust technical mechanisms to simulate and execute secure records transmission. All submissions are processed securely under our telemetry-monitored dashboard."
          ]
        },
        {
          title: "4. Your Data Rights",
          paragraphs: [
            "You retain full rights to request access, correction, deletion, or restriction of processed records at any time by contacting our support channels."
          ]
        }
      ],
      termsTitle: "Terms of Service",
      termsLastUpdated: "Last updated: June 13, 2026",
      termsSections: [
        {
          title: "1. Agreement Acceptance",
          paragraphs: [
            "By accessing and exploring this platform or using our simulated diagnostic systems, you express complete agreement with these Terms of Service and compliance with local laws."
          ]
        },
        {
          title: "2. Consultative Disclaimers",
          paragraphs: [
            "All generated console reports, latency displays, and digital system estimates on this site serve solely as initial conceptual and experimental demonstrations.",
            "No results constitute a binding commercial warranty, guarantee, or engineering service agreement until explicit physical or qualified digital contracts are signed by authorized parties."
          ]
        },
        {
          title: "3. Intellectual Property Rights",
          paragraphs: [
            "The JJSERVICES code base, including user interface designs, dynamic assets, brand names, and algoritmical components, is the sole property of its creators and licensed partners."
          ]
        },
        {
          title: "4. Limitation of Liability",
          paragraphs: [
            "JJSERVICES shall not be liable for any indirect, operational, collateral, or incidental damages arising from interactive telemetry tests, console output interpretation, or experimental prototype usage."
          ]
        }
      ],
      closeBtn: "Understood & Close"
    },
    servicesData: [
      {
        id: "ai",
        title: "Artificial Intelligence",
        icon: "Brain",
        shortDesc: "Custom AI blueprints that seamlessly align with your enterprise roadmap, streamlining operations and automating high-level executive logic.",
        longDesc: "We materialize game-changing capabilities by training context-aware autonomous agent networks, tuning enterprise LLMs via advanced RAG paradigms, and compiling sub-millisecond predictive modules. We automate complex workflows with math-proven precision.",
        capabilities: [
          "Intense RAG architecture design and cognitive document parsing networks",
          "Advanced computer vision pipelines for real-time edge processing and quality auditing",
          "Deep predictive models mapped for capital allocation and logistical bottlenecks",
          "Multi-agent task force coordination engines handling multi-tiered user requests"
        ],
        metrics: [
          { label: "Flow Efficiency Boost", value: "+340%" },
          { label: "Infrastructure Savings", value: "-62%" },
          { label: "Model Confidence Level", value: "99.8%" }
        ],
        caseStudy: {
          client: "AeroSpace Tech Corp",
          challenge: "Streamline structural turbine degradation forecasting across thousands of sensory vectors to replace legacy schedule-based operations.",
          outcome: "Engineered an LSTM anomaly detector that cut operational maintenance latency by 45%, warning of failures 4 days in advance."
        }
      },
      {
        id: "uiux",
        title: "UI/UX Design",
        icon: "ViewQuilt",
        shortDesc: "Cinematic, high-definition user flows optimized for precision engineering, seamlessly marrying aesthetic depth with ergonomic, intuitive UI structures.",
        longDesc: "We build intuitive human-machine interfaces of unmatched aesthetic caliber. Our philosophy merges cyberpunk neon geometries, layered glassmorphism surfaces, and smooth hardware physical animations. We make dense, complex telemetry logs immediately comprehensible and highly responsive.",
        capabilities: [
          "High-fidelity responsive prototyping and unified design systems",
          "Cognitive friction auditing and UX path-pointing for mission-critical software",
          "Fully accessible reactive dark themes with hardware-accelerated animations",
          "Pixel-perfect cross-platform fluidity supporting complex layout setups"
        ],
        metrics: [
          { label: "User Daily Engagement", value: "+180%" },
          { label: "Average Onboarding Time", value: "< 3 mins" },
          { label: "Visual System CTR", value: "+4.2x" }
        ],
        caseStudy: {
          client: "Vortex Analytics",
          challenge: "Convert a dense, chaotic grid system into a visual dashboard that command staff can read and triage accurately inside seconds.",
          outcome: "Designed a dark, telemetry-driven responsive dashboard console, producing a 94% increase in operator tool retention metrics."
        }
      },
      {
        id: "cloud",
        title: "Cloud Architecture",
        icon: "CloudSync",
        shortDesc: "Resilient, highly scalable global server infrastructures engineered to safeguard high-volume telemetry and minimize global lag.",
        longDesc: "We assemble world-scale container matrices capable of supporting millions of concurrent transactional writes without localized choke points. Our environments feature multi-region active redundancy, immediate edge replication, and network partition safe failovers safeguarded by intelligent cloud firewalls.",
        capabilities: [
          "Auto-scaling high-performance Kubernetes and serverless deployments",
          "Global active-active multi-region databases committing in < 5ms everywhere",
          "Strict automated DevSecOps pipelines integrating static and dynamic auditing",
          "Rigid Zero-Trust security layers utilizing robust encryption standards"
        ],
        metrics: [
          { label: "Guaranteed Global Uptime", value: "99.999%" },
          { label: "Under-load Response Latency", value: "< 12ms" },
          { label: "Cloud Spend Optimizations", value: "40% saved" },
        ],
        caseStudy: {
          client: "Bio-Sec Global",
          challenge: "Instantly distribute encrypted system tokens across 6 major global datacenters with a hard target under 100ms per packet block.",
          outcome: "Architected a peer-to-peer secure ledger layer with smart routing nodes that completed cross-region broadcasts in 18ms."
        }
      }
    ],
    projectsData: [
      {
        id: "neural-sync",
        title: "Neural Sync Engine",
        category: "AI RESEARCH",
        shortDesc: "Cognitive network flow simulator mapped to manage massive parallel pipelines.",
        description: "An ultra-high performance cognitive orchestrator designed to simulate structural grid dynamics in massive parallel arrays. Engineered for aerospacial and biological telemetry data processing.",
        challenge: "Safely map trillions of structural data points simultaneously without losing pipeline cohesion or agent accuracy.",
        solution: "Engineered an asynchronous processing layer in Rust deployed globally via container clusters with optimized circular ring buffers.",
        result: "Atained a massive 300% throughput enhancement compared to traditional academic models, operating under maximum stability.",
        techStack: ["React", "Rust", "TypeScript", "TensorFlow Core", "WebAssembly", "Cloud Run"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqKRGhzOox2EknI41945ieXw1E5k7JU35_GjRBoH_uVSn1_aRDy0RpgkgBWPmsFgpBt0uEdTeJkWWtG7YM-6i-SEcz-xDJt3cHg14wVGiEXWhU4fRKgtwSqyHQUk_nYPnBSbSfwO2WoCb43ECtMIT71jdjt915nwDf3HzSlVBYds_Cn3xrMcOOmZinJdP55uF0_CINNABkmxNUh8W70n7LUA_9mHSLhFJSGcmKkRAZLbez4mxQcGokYV0vm7-IlNUOWkJacS3vvbFu",
        stats: [
          { label: "Stable Sync Rate", value: "99.99%" },
          { label: "Max Peak Volume", value: "2.8 GB/s" },
          { label: "Prediction Error", value: "< 0.001%" }
        ]
      },
      {
        id: "vortex-dashboard",
        title: "Vortex Dashboard",
        category: "UI/UX",
        shortDesc: "High-definition tri-dimensional network visual dashboard built for real-time network traffic audits.",
        description: "A cinematic user experience mapping active data streams and nodes dynamically, enabling immediate identification of localized hardware errors.",
        challenge: "Formulate a data-dense layout that preserves readability and operator visual energy over extended monitoring shifts.",
        solution: "Formulated a GPU-driven Canvas2D visual engine combining soft dark backgrounds, bright orange states, and elegant typography hierarchies.",
        result: "Cut the average timeframe needed to locate critical network errors by 70%, boosting operational efficiency.",
        techStack: ["React-Pixi", "WebGL", "Vite", "Tailwind CSS", "D3.js", "RecoilState"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAT76tFSW0HhZRcW4Aw1iqt0oTQNCp2fG5pCElQfDK6ZTJm5jVd9ZHH-rw1VmpFGFydwwse-cgckooQKOT_8qmMoKJFAO6BmX630_e1euU4ZG1WO0pINQQZ1Ggk6vlFcq_Q6-2tE1PPoOuQ-FaQKBxfe_OHRugBjmJFh8aH5Frn9UUpGRFRd5OSqpCsAYqJjHqM5avttWP9C3n5N9Pv1Ilru6quyaLtnc87X_k3houin_yKyOsmma4sXZZxdl1cuKYvy-hSJDmdcJLy",
        stats: [
          { label: "Average Framerate", value: "144 FPS" },
          { label: "Telemetry Latency", value: "0.02ms" },
          { label: "Operator UX Rating", value: "98.7%" }
        ]
      },
      {
        id: "cyber-limb",
        title: "Cyber Limb Protocol",
        category: "ROBOTICS",
        shortDesc: "Ultra-low latency biometric embedded firmware designed for next-gen prosthetic motor control.",
        description: "An advanced, neural-mesh software layer directly mapping intent signals into physical bionic actions in near-instant response pathways.",
        challenge: "Force latency below the biological threshold (5ms) to achieve natural muscle response matching human intention.",
        solution: "Maintained a streamlined Edge-AI inference model operating inside embedded ARM hardware on-chassis directly.",
        result: "Secured a new global benchmark of 3.2ms response loops, offering users seamless muscular control.",
        techStack: ["C++ Core", "Edge Impulse", "TypeScript Bridge", "Node.js Controller", "Yolo Lite"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8xxd3sNjYMyyL_UrX-9jBiHiZJHgP1pFHPG30tsF93nJ6ugBmTqs-78ycDWWEc_E1oXJAP7c_-8y0G5ZXjocGNsdiDYv69NRz4u1bpMUu4ccZ_TylJ0_rh3-nQztqTyVQTNENhISLpJILNIX1CnotKZJ2GFBthz_xPnEUwWgLjHRM0dy3S_RhfXlV9xZXxTQvr2PYc5jo2ffWVgcjrgk46EgezYa6Id19nJZNhxtFp4A__i0-UJHF-t6mfbwNzXXttyCw1YA3HWpf",
        stats: [
          { label: "Decision Loop", value: "3.2ms" },
          { label: "Gesticulator Accuracy", value: "99.4%" },
          { label: "Operational Life", value: "72 Hours" }
        ]
      },
      {
        id: "bio-sec",
        title: "Bio-Sec Architecture",
        category: "CYBERSECURITY",
        shortDesc: "Post-quantum cryptographical shield protecting critical automation endpoints.",
        description: "High-grade crypto infrastructure utilizing multi-dimensional lattice models to secure industrial operational pipelines against intercept attacks.",
        challenge: "Safeguard assets against quantum-accelerated decryption techniques targeting critical energy or production grids.",
        solution: "Deployed lattice-based encrypted profiles updated rotatively via micro-satellite uplinks.",
        result: "Atained formal Zero-Vulnerability authorization from federal cyber regulatory agencies.",
        techStack: ["Rust Security", "Solidity Core", "Python Math", "Next-Gen TLS Hooks", "Krypton JS"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlrhGlm2Sn4qOfbvCHx4MR-E_I6-9385cMbd3vA4K3J_7x_05McYZqWwk5P_rwBvW_SBC-_SU-9FYrOElMr8H-4jZinNN1qpQeuPF-S40gasgYvyT8Y_Pqi8GCSFrC6XEuh8rrxRVi2Sr_-1ZuoNkCdBOuvsfVbDxkNlEyxd4QyYIV7qSAnvO1825YvXzEq4jzO-L2o9DmrToBgxYyRPTDjAe80BpZfTuyRilZJapc7-OySibn0AqcPNPmukP2FeChP7TmA-IOwX9z",
        stats: [
          { label: "Entropy Level", value: "2^512 bit" },
          { label: "Intrusion Immunity", value: "100.00%" },
          { label: "System Overhead", value: "< 0.8%" }
        ]
      }
    ]
  },
  pt: {
    nav: {
      home: "Home",
      services: "Serviços",
      projects: "Projetos",
      contact: "Contato",
      ctaButton: "Let's Talk",
    },
    hero: {
      badge: "Innovate with Intelligence",
      titleFirst: "Design e Tecnologia que ",
      titleHighlight: "Impulsionam",
      titleLast: " o Futuro",
      description: "Desbloqueamos o potencial de sua empresa através de soluções de IA de última geração e uma arquitetura digital projetada para a era da inteligência artificial.",
      btnProjects: "Ver Projetos",
      btnServices: "Serviços",
      systemActive: "SISTEMA ATIVO",
      latency: "Latência:",
      clickDiagnostics: "Clique para Diagnósticos ➔",
    },
    dialogs: {
      telemetryTitle: "Telemetria Central",
      operMode: "Modo Operacional:",
      cpuLoad: "Cluster CPU Load:",
      ram: "RAM Dedicada:",
      uptime: "Tempo de fluxo ativo (Uptime):",
      aiModel: "Modelo Core de IA:",
      ingress: "Região de Ingress:",
      changeProfile: "Alterar Perfil de Teste:",
      diagnosticLabel: "JJSERVICES AI Grid v2.4.6",
    },
    services: {
      titleFirst: "Serviços de Consultoria ",
      titleHighlight: "End-to-End",
      subtitle: "Oferecemos soluções de altíssimo padrão digital, unindo arquitetura robusta e metodologias disruptivas de engenharia de software.",
      learnMore: "LEARN MORE",
      modalTitle: "Serviço Especializado",
      overview: "Visão Geral",
      capabilities: "Capacidades-Chave",
      impact: "Impacto no Negócio",
      caseStudyLabel: "Caso de Sucesso em Destaque",
      client: "Cliente:",
      challenge: "Desafio:",
      outcome: "Resultado:",
      closeBtn: "Entendido",
    },
    projects: {
      badge: "Portfólio",
      title: "Projetos em Destaque",
      cta: "Iniciar um Projeto ➔",
      detailsTitle: "Visão e Propósito",
      challengeTitle: "O Desafio Principal",
      solutionTitle: "Solução de IA",
      techStackTitle: "Tecnologias Utilizadas",
      resultsTitle: "Resultados Obtidos / KPIs",
      longTermTitle: "Impacto de Longo Prazo",
      closeBtn: "Fechar Detalhes",
    },
    contact: {
      title: "Pronto para o Futuro?",
      subtitle: "Fale conosco sobre seu próximo grande checkpoint tecnológico. Nossa equipe formulará um diagnóstico estruturado sem compromisso.",
      nameLabel: "Nome Completo",
      namePlaceholder: "John Doe",
      emailLabel: "Endereço de E-mail",
      emailPlaceholder: "john@example.com",
      messageLabel: "Mensagem / Detalhes do Desafio",
      messagePlaceholder: "Como podemos ajudar você? Escreva um breve resumo dos requisitos e metas...",
      btnSubmit: "Enviar Mensagem",
      errName: "Por favor, indique seu nome completo.",
      errEmail: "Por favor, insira um e-mail válido.",
      errMessage: "Por favor, escreva uma breve descrição do seu contato.",
      stage1: "Sanitizando carga de dados primários...",
      stage2: "Validando integridade dos e-mails...",
      stage3: "Encriptando e registrando em banco de dados seguro...",
      successTitle: "Simulação de Envio Efetuada com Sucesso",
      successSub: "Pacote criptografado com assinatura digital válida JJSERVICES.",
      idLabel: "ID DE RASTREAMENTO",
      hashLabel: "HASH DIAGNÓSTICO SYS",
      receiptLabel: "SUMÁRIO DO PACOTE RECEBIDO:",
      nameReceipt: "Nome: ",
      emailReceipt: "E-mail: ",
      metaReceipt: "Objetivo: ",
      btnCopy: "Copiar ID da Consulta",
      btnCopyOk: "Copiado!",
      btnNew: "Enviar nova mensagem",
    },
    footer: {
      rights: "© 2026 JJSERVICES. TODOS OS DIREITOS RESERVADOS.",
      logActivation: "LOG ACTIVATION:",
      logsLabel: "LOGS:",
    },
    legal: {
      privacyTitle: "Política de Privacidade",
      privacyLastUpdated: "Última atualização: 13 de junho de 2026",
      privacySections: [
        {
          title: "1. Informações que Coletamos",
          paragraphs: [
            "Coletamos unicamente os dados que você insere voluntariamente em nosso formulário de contato digital (Nome completo, Endereço de e-mail e as Informações/Escopo do Desafio).",
            "Não usamos pixels invisíveis de terceiros ou cookies intrusivos para monitorar rastros navegacionais de maneira oculta."
          ]
        },
        {
          title: "2. Finalidade e Uso dos Dados",
          paragraphs: [
            "Todo dado fornecido é utilizado exclusivamente para avaliar os seus requisitos de sistema, criar propostas de arquiteturas preliminares e viabilizar comunicações diretas de resposta.",
            "As informações de contato jamais serão vendidas, cedidas ou compartilhadas com redes publicitárias ou parceiros externos para fins promocionais de marketing."
          ]
        },
        {
          title: "3. Segurança e Criptografia",
          paragraphs: [
            "Contamos com rotinas rígidas para preservar e processar as solicitações enviadas. As simulações de envio de dados e registros telemétricos de nossa plataforma atendem a padrões de integridade operacional em redundância segura."
          ]
        },
        {
          title: "4. Direitos do Usuário",
          paragraphs: [
            "Você detém total direito de requerer acesso, alteração, portabilidade ou revogação de suas informações de contato a qualquer instante pelos canais oficiais."
          ]
        }
      ],
      termsTitle: "Termos de Serviço",
      termsLastUpdated: "Última atualização: 13 de junho de 2026",
      termsSections: [
        {
          title: "1. Concordância com os Termos",
          paragraphs: [
            "Ao usufruir de nosso portal interativo ou simetrias telemétricas da JJSERVICES, você expressa integral aceitação e compromisso em obedecer a este regulamento e às leis aplicáveis à matéria."
          ]
        },
        {
          title: "2. Isenção Consultiva e Técnica",
          paragraphs: [
            "Todas as exibições de latência de rede virtual, registros de console e logs simulados nesta interface servem estritamente para demonstração teórica e prototipagem exploratória.",
            "Nenhum diagnóstico parcial ou dado provido constituirá obrigatoriedade civil, fiança contratual ou avença comercial até que seja ratificado formalmente por instrumento digital assinado por ambas as partes."
          ]
        },
        {
          title: "3. Ativos e Propriedades Intelectuais",
          paragraphs: [
            "O ecossistema sistemático da JJSERVICES — o que inclui conceitos, artes abstratas, marcas de serviço, interfaces com usuário e núcleos de algoritmos operantes — é de propriedade jurídica e comercial indisponível de seus criadores e parceiros legais."
          ]
        },
        {
          title: "4. Limitação e Exclusão de Danos",
          paragraphs: [
            "A JJSERVICES não responderá civilmente sob aspecto algum por lucros cessantes, perdas indiretas, incidentais ou quebras operacionais decorrentes de tentativas de uso ou confiança depositada em nossas simulações."
          ]
        }
      ],
      closeBtn: "Entendido e Fechar"
    },
    servicesData: [
      {
        id: "ai",
        title: "Artificial Intelligence",
        icon: "Brain",
        shortDesc: "Estratégias personalizadas de IA que se integram perfeitamente com sua visão de negócio, otimizando processos e automatizando a tomada de decisões.",
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
        shortDesc: "Arquiteturas escaláveis e resilientes preparadas para o futuro, garantindo alto rendimento e segurança em ecossistemas de dados masivas.",
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
    ],
    projectsData: [
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
    ]
  }
};
