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
        title: "Aplicaciones Web",
        icon: "ViewQuilt",
        shortDesc: "desarrollo de aplicaciones web robustas, rápidas y escalables con tecnologías modernas, interfaces fluidas e integraciones seguras.",
        longDesc: "Desarrollo full-stack de primer nivel utilizando frameworks React, Node.js y arquitecturas seguras en la nube. Diseñamos sistemas interactivos que cargan al instante, optimizan los motores de búsqueda y ofrecen escalabilidad infinita para potenciar el valor del negocio.",
        capabilities: [
          "Arquitecturas web SPA, SSR y SSG de alta velocidad",
          "Integración de pasarelas de pago y APIs de terceros",
          "Rendimiento optimizado con Core Web Vitals excelentes",
          "Sistemas de diseño customizados y responsivos en Tailwind CSS"
        ],
        metrics: [
          { label: "Velocidad de Carga", value: "< 0.5s" },
          { label: "Optimización SEO", value: "100%" },
          { label: "Disponibilidad", value: "99.99%" }
        ],
        caseStudy: {
          client: "eCommerce Elite",
          challenge: "Migrar un portal lento a una estructura moderna para mejorar la conversión de ventas y el posicionamiento en buscadores.",
          outcome: "Desarrollamos una SPA en React ultrarrápida que duplicó el tráfico orgánico y aumentó las transacciones exitosas en un 64%."
        }
      },
      {
        id: "uiux",
        title: "Avatares Hiperrealistas",
        icon: "Brain",
        shortDesc: "creación de avatares hiperrealistas interactivos con fidelidad excepcional para asistencia inteligente y experiencias virtuales inmersivas.",
        longDesc: "Desarrollamos avatares 3D interactivos con IA integrados en tiempo real para asistencia virtual, entornos inmersivos de realidad virtual/aumentada y marketing digital de vanguardia. Fusionamos modelado con expresiones fluidas y sincronización labial automática asistida por algoritmos neurales.",
        capabilities: [
          "Modelado y texturizado 3D de alta definición e interactivo",
          "Sincronización labial fluida y generación de voz neural",
          "Integración multiplataforma en entornos web, móviles e inmersivos",
          "Motores de IA conversacional para interacción autónoma en tiempo real"
        ],
        metrics: [
          { label: "Fidelidad Visual", value: "4K UHD" },
          { label: "Latencia de Respuesta", value: "< 150ms" },
          { label: "Retención del Cliente", value: "+85%" }
        ],
        caseStudy: {
          client: "Fintech Asistencia Virtual",
          challenge: "Humanizar el servicio de soporte al cliente con un avatar 3D conversacional inteligente que resuelva dudas en tiempo real.",
          outcome: "Creamos un avatar interactivo ultra-realista capaz de procesar y responder consultas comunes con lenguaje natural de forma instantánea."
        }
      },
      {
        id: "cloud",
        title: "Google Play & Pi Network",
        icon: "CloudSync",
        shortDesc: "desarrollo de aps para Google Play Store y Dapps para Pi Network con integración nativa, blockchain y Web3 descentralizada.",
        longDesc: "Ofrecemos servicios completos de desarrollo móvil nativo e híbrido para Google Play Store, así como contratos inteligentes y aplicaciones descentralizadas (Dapps) seguras diseñadas para desplegarse de manera nativa en el ecosistema de Pi Network (Pi Browser, Pi SDK, autenticación y transacciones Pi).",
        capabilities: [
          "Aplicaciones robustas para Google Play con rendimiento nativo",
          "Dapps optimizadas para el navegador de Pi Network (Pi Browser)",
          "Integración oficial con el SDK de Pi y pagos en la blockchain",
          "Arquitecturas móviles robustas y seguras de alto nivel con encriptación"
        ],
        metrics: [
          { label: "Descargas Estimadas", value: "+500K" },
          { label: "Sincronía Pi SDK", value: "100%" },
          { label: "Latencia Blockchain", value: "< 2s" }
        ],
        caseStudy: {
          client: "Pi Pioneer Utility",
          challenge: "Crear una mini-aplicación de servicios conectada directamente al monedero oficial de los pioneros de la red Pi.",
          outcome: "Diseñamos una Dapp optimizada que alcanzó miles de transacciones diarias seguras con comisiones de red mínimas y una interfaz ultra fluida."
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
        title: "Web Applications",
        icon: "ViewQuilt",
        shortDesc: "development of robust, fast, and scalable web applications leveraging modern frameworks, fluid interfaces, and secure integrations.",
        longDesc: "Elite full-stack development using frameworks like React, Node.js, and secure cloud environments. We design interactive systems that load instantly, optimize search engines, and offer infinite scalability to empower business value.",
        capabilities: [
          "High-speed SPA, SSR, and SSG web architecture",
          "Payment gateway integration and secure third-party APIs",
          "Performance optimization with excellent Core Web Vitals",
          "Custom and responsive design systems in Tailwind CSS"
        ],
        metrics: [
          { label: "Loading Speed", value: "< 0.5s" },
          { label: "SEO Optimization", value: "100%" },
          { label: "Disponibility", value: "99.99%" }
        ],
        caseStudy: {
          client: "eCommerce Elite",
          challenge: "Migrating a slow legacy portal to a modern tech stack to improve sales conversion rates and search motor listings.",
          outcome: "Developed an ultra-fast React SPA that doubled organic search traffic and increased transaction success rates by 64%."
        }
      },
      {
        id: "uiux",
        title: "Hyper-realistic Avatars",
        icon: "Brain",
        shortDesc: "creation of interactive hyper-realistic avatars with exceptional fidelity to power intelligent support and virtual spatial experiences.",
        longDesc: "We design and develop conversational 3D AI avatars integrated in real-time to power custom virtual assistants, immersive VR/AR workspaces, and next-gen retail spaces. We blend premium modeling with natural dynamic expressions and automated lip-syncing.",
        capabilities: [
          "High-definition, interactive 3D modeling and rendering",
          "Fluid lipsync mapping and advanced neural speaker voice generation",
          "Cross-platform deployment across web browsers, mobile displays, and headsets",
          "Conversational engine tuning to command autonomous interactions under natural speech"
        ],
        metrics: [
          { label: "Visual Fidelity", value: "4K UHD" },
          { label: "Decision Latency", value: "< 150ms" },
          { label: "Customer Engagement", value: "+85%" }
        ],
        caseStudy: {
          client: "Fintech Virtual Assistance",
          challenge: "Humanize user support channels with an interactive 3D companion capable of guiding customers through active transfers in real-time.",
          outcome: "Engineered an ultra-real avatar assistant resolving common support tickets seamlessly with pleasant natural conversational speech."
        }
      },
      {
        id: "cloud",
        title: "Google Play & Pi Network",
        icon: "CloudSync",
        shortDesc: "development of apps for Google Play Store and Dapps for Pi Network with native deployment, secure ledger solutions, and Web3 frameworks.",
        longDesc: "Full-scale mobile app compilation certified for Google Play Store distribution alongside highly secure decentralized applications (Dapps) built for the Pi Network Web3 ecosystem (Pi Browser, Pi SDK, secure authentication, and Pi blockchain payments).",
        capabilities: [
          "High-performance mobile application architectures for Google Play",
          "Decentralized apps custom tailored for the Pi Browser",
          "Official Pi SDK implementation including secure cryptocurrency transactions",
          "Secured end-to-end user encryption on all portable structures"
        ],
        metrics: [
          { label: "Estimated Downloads", value: "+500K" },
          { label: "Pi SDK Sincronization", value: "100%" },
          { label: "Blockchain Latency", value: "< 2s" }
        ],
        caseStudy: {
          client: "Pi Pioneer Utility",
          challenge: "Assemble a lightweight mobile utility directly integrating with Pi network wallets to let active pioneers execute low-fee transactions.",
          outcome: "Deployed a decentralized application processing thousands of secure daily Pi transactions securely on the Pi mainnet block ledger."
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
        title: "Aplicações Web",
        icon: "ViewQuilt",
        shortDesc: "desenvolvimento de aplicações web robustas, rápidas e escaláveis com tecnologias modernas, interfaces fluidas e integrações seguras.",
        longDesc: "Desenvolvimento full-stack de alto padrão utilizando React, Node.js e arquiteturas de nuvem seguras. Projetamos sistemas interativos com tempos de carregamento instantâneos, SEO otimizado e escalabilidade infinita para impulsionar o seu negócio digital.",
        capabilities: [
          "Arquiteturas web SPA, SSR e SSG de ultravelocidade",
          "Integração de gateways de pagamento e APIs de terceiros",
          "Otimização extrema de desempenho sob Core Web Vitals",
          "Sistemas de design customizados e responsivos em Tailwind CSS"
        ],
        metrics: [
          { label: "Velocidade de Carga", value: "< 0.5s" },
          { label: "Otimização SEO", value: "100%" },
          { label: "Disponibilidade", value: "99.99%" }
        ],
        caseStudy: {
          client: "eCommerce Elite",
          challenge: "Migrar um portal de e-commerce lento para uma arquitetura moderna para aumentar as conversões de vendas e o rank de busca.",
          outcome: "Desenvolvemos uma SPA de alto desempenho com React reduzindo latência pela metade, o que elevou o tráfego orgânico global em 100%."
        }
      },
      {
        id: "uiux",
        title: "Avatares Hiperrealistas",
        icon: "Brain",
        shortDesc: "criação de avatares hiperrealistas interativos com fidelidade excepcional para assistência inteligente e experiências virtuais imersivas.",
        longDesc: "Desenvolvemos avatares virtuais 3D inteligentes e altamente interativos em tempo real para atendimento ao cliente, marketing futurista e plataformas de metaverso. Integramos expressões faciais realistas com dublagem automática gerada por redes neurais de ponta.",
        capabilities: [
          "Modelagem e texturização 3D de alta fidelidade e interativa",
          "Sincronização labial fluida e geração de áudio neural conversacional",
          "Integração multiplataforma para ambientes digitais, web e móveis",
          "Ativadores autônomos de conversa em tempo real orientados por IA"
        ],
        metrics: [
          { label: "Fidelidade Visual", value: "4K UHD" },
          { label: "Latência de Resposta", value: "< 150ms" },
          { label: "Engajamento do Cliente", value: "+85%" }
        ],
        caseStudy: {
          client: "Fintech Assistência Virtual",
          challenge: "Humanizar o atendimento ao cliente com um assistente virtual 3D capaz de compreender intenções sob linguagem natural e acionar respostas.",
          outcome: "Desenvolvemos um avatar realista conversacional integrado a canais de voz e vídeo, reduzindo a taxa de abandono do suporte em 45%."
        }
      },
      {
        id: "cloud",
        title: "Google Play & Pi Network",
        icon: "CloudSync",
        shortDesc: "desenvolvimento de aps para Google Play Store e Dapps para Pi Network com integração nativa, blockchain e Web3 descentralizada.",
        longDesc: "Desenvolvimento móvel nativo e híbrido de ponta para a Google Play Store, acompanhado de soluções de Web3 seguras e Dapps prontas para o Pi Browser, incluindo autenticação do Pi SDK e microtransações fluidas com taxas garantidas na blockchain Pi.",
        capabilities: [
          "Aplicativos responsivos e nativos publicados na Google Play",
          "Aplicações descentralizadas otimizadas para o Pi Browser",
          "Integração segura do ecossistema Pi SDK (Pi payments e autenticação)",
          "Protocolos criptográficos rígidos para segurança móvel abrangente"
        ],
        metrics: [
          { label: "Downloads Estimados", value: "+500K" },
          { label: "Sincronização Pi SDK", value: "100%" },
          { label: "Latência da Blockchain", value: "< 2s" }
        ],
        caseStudy: {
          client: "Pi Pioneer Utility",
          challenge: "Projetar uma mini-aplicação utilitária móvel ligando os pioneiros da rede ao monedero de pagamentos de forma simplificada.",
          outcome: "Criamos uma Dapp otimizada registrando milhares de transações seguras no ledger blockchain da Pi Network em menos de dois segundos."
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
