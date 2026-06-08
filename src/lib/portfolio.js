/**
 * Portfolio data — fonte única da verdade para todos os projetos.
 * Para adicionar um projeto: copie a estrutura abaixo e preencha os campos.
 * O campo `slug` vira a URL: /portfolio/[slug]
 *
 * Estrutura de cada projeto:
 * {
 *   slug: "nome-do-projeto",
 *   sector: { pt: "", en: "", es: "", fr: "" },
 *   tags: ["mobile", "ai", "system-integration", "staff-augmentation", "web"],
 *   services: ["mobile", "ai", "system-integration", "staff-augmentation"],
 *   title: { pt: "", en: "", es: "", fr: "" },
 *   description: { pt: "", en: "", es: "", fr: "" },
 *   challenge: { pt: "", en: "", es: "", fr: "" },
 *   solution: { pt: "", en: "", es: "", fr: "" },
 *   results: [
 *     { pt: "", en: "", es: "", fr: "" },
 *   ],
 *   stack: ["React Native", "Node.js", ...],
 *   metaTitle: { pt: "", en: "", es: "", fr: "" },
 *   metaDescription: { pt: "", en: "", es: "", fr: "" },
 * }
 */

export const portfolioProjects = [
  {
    slug: "moveintech-copiloto-logistico",
    sector: {
      pt: "Logística B2B",
      en: "B2B Logistics",
      es: "Logística B2B",
      fr: "Logistique B2B",
    },
    tags: ["ai", "system-integration", "web"],
    services: ["ai", "system-integration"],
    title: {
      pt: "Copiloto de IA para operações logísticas",
      en: "AI copilot for logistics operations",
      es: "Copiloto de IA para operaciones logísticas",
      fr: "Copilote IA pour les opérations logistiques",
    },
    description: {
      pt: "A MoveInTech precisava de uma interface inteligente para que transportadoras consultassem ordens de serviço, documentos fiscais e SLAs em linguagem natural. Desenvolvemos um copiloto conversacional integrado à operação B2B.",
      en: "MoveInTech needed an intelligent interface for carriers to query service orders, fiscal documents, and SLAs in natural language. We built a conversational copilot integrated into their B2B operation.",
      es: "MoveInTech necesitaba una interfaz inteligente para que transportistas consultaran órdenes de servicio, documentos fiscales y SLAs en lenguaje natural. Desarrollamos un copiloto conversacional integrado a la operación B2B.",
      fr: "MoveInTech avait besoin d'une interface intelligente pour que les transporteurs consultent les ordres de service, documents fiscaux et SLAs en langage naturel. Nous avons développé un copilote conversationnel intégré à l'opération B2B.",
    },
    challenge: {
      pt: "A operação logística da MoveInTech envolvia múltiplos tenants, papéis distintos (transportadora, administrador) e documentos fiscais como CT-e que precisavam ser consultados e validados com agilidade. O time operacional perdia tempo navegando entre sistemas para obter informações básicas sobre OS, prazos e pendências.",
      en: "MoveInTech's logistics operation involved multiple tenants, distinct roles (carrier, administrator), and fiscal documents like CT-e that needed to be queried and validated quickly. The operations team lost time navigating between systems to get basic information about service orders, deadlines, and pending items.",
      es: "La operación logística de MoveInTech involucraba múltiples tenants, roles distintos y documentos fiscales como CT-e que necesitaban ser consultados con agilidad. El equipo operativo perdía tiempo navegando entre sistemas para obtener información básica.",
      fr: "L'opération logistique de MoveInTech impliquait plusieurs tenants, des rôles distincts et des documents fiscaux comme les CT-e qui devaient être consultés rapidement. L'équipe opérationnelle perdait du temps à naviguer entre systèmes.",
    },
    solution: {
      pt: "Construímos o MoveChat, um copiloto conversacional com contexto operacional persistente. O agente conhece o perfil e tenant do usuário, sugere ações contextuais e responde consultas sobre OS em andamento, CT-es pendentes e SLAs próximos do vencimento. A interface opera em streaming com fallback para resposta completa e histórico de conversas.",
      en: "We built MoveChat, a conversational copilot with persistent operational context. The agent knows the user's profile and tenant, suggests contextual actions, and answers queries about active service orders, pending CT-e documents, and SLAs nearing expiration. The interface operates in streaming mode with fallback to full response and conversation history.",
      es: "Construimos MoveChat, un copiloto conversacional con contexto operacional persistente. El agente conoce el perfil y tenant del usuario, sugiere acciones contextuales y responde consultas sobre OS en curso, CT-es pendientes y SLAs próximos al vencimiento.",
      fr: "Nous avons construit MoveChat, un copilote conversationnel avec contexte opérationnel persistant. L'agent connaît le profil et le tenant de l'utilisateur, suggère des actions contextuelles et répond aux requêtes sur les OS en cours, les CT-e en attente et les SLAs proches de l'expiration.",
    },
    results: [
      {
        pt: "Copiloto multitenancy com contexto de perfil e operação por usuário.",
        en: "Multi-tenant copilot with per-user profile and operational context.",
        es: "Copiloto multitenancy con contexto de perfil y operación por usuario.",
        fr: "Copilote multi-tenant avec contexte de profil et opération par utilisateur.",
      },
      {
        pt: "Consulta de OS, CT-e e SLAs em linguagem natural, sem navegar entre sistemas.",
        en: "Natural language queries for service orders, CT-e, and SLAs without switching systems.",
        es: "Consulta de OS, CT-e y SLAs en lenguaje natural, sin navegar entre sistemas.",
        fr: "Requêtes en langage naturel pour OS, CT-e et SLAs sans changer de système.",
      },
      {
        pt: "Histórico de conversas e ações sugeridas por jornada operacional.",
        en: "Conversation history and journey-based suggested actions.",
        es: "Historial de conversaciones y acciones sugeridas por jornada operacional.",
        fr: "Historique des conversations et actions suggérées par parcours opérationnel.",
      },
    ],
    stack: ["Next.js", "Node.js", "OpenAI", "PostgreSQL", "AWS"],
    metaTitle: {
      pt: "MoveInTech — Copiloto de IA para logística B2B | Jaguaretech",
      en: "MoveInTech — AI copilot for B2B logistics | Jaguaretech",
      es: "MoveInTech — Copiloto de IA para logística B2B | Jaguaretech",
      fr: "MoveInTech — Copilote IA pour la logistique B2B | Jaguaretech",
    },
    metaDescription: {
      pt: "Como a Jaguaretech desenvolveu o MoveChat, copiloto conversacional com IA para operações logísticas B2B da MoveInTech.",
      en: "How Jaguaretech built MoveChat, a conversational AI copilot for MoveInTech's B2B logistics operations.",
      es: "Cómo Jaguaretech desarrolló MoveChat, copiloto conversacional con IA para operaciones logísticas B2B de MoveInTech.",
      fr: "Comment Jaguaretech a développé MoveChat, un copilote conversationnel IA pour les opérations logistiques B2B de MoveInTech.",
    },
  },
  {
    slug: "talkntalk-plataforma-idiomas",
    sector: {
      pt: "EdTech",
      en: "EdTech",
      es: "EdTech",
      fr: "EdTech",
    },
    tags: ["web", "mobile"],
    services: ["mobile", "web"],
    title: {
      pt: "Plataforma de imersão em idiomas por conversação ao vivo",
      en: "Live conversation language immersion platform",
      es: "Plataforma de inmersión en idiomas por conversación en vivo",
      fr: "Plateforme d'immersion linguistique par conversation en direct",
    },
    description: {
      pt: "A TalkNTalk precisava de uma plataforma robusta para escalar sessões ao vivo de conversação em idiomas para mais de 12 mil alunos, com agendamento, trilha de aprendizado e comunidade integrados.",
      en: "TalkNTalk needed a robust platform to scale live language conversation sessions to over 12,000 students, with scheduling, learning tracks, and an integrated community.",
      es: "TalkNTalk necesitaba una plataforma robusta para escalar sesiones de conversación en vivo en idiomas para más de 12.000 alumnos, con programación, ruta de aprendizaje y comunidad integrados.",
      fr: "TalkNTalk avait besoin d'une plateforme robuste pour faire évoluer les sessions de conversation en direct en langues étrangères pour plus de 12 000 élèves, avec planification, parcours d'apprentissage et communauté intégrée.",
    },
    challenge: {
      pt: "Escalar uma operação de mais de 100 sessões ao vivo por semana exigia uma plataforma confiável de agendamento, controle de vagas e entrega de material de apoio antes de cada sessão. O produto precisava ser fluido o suficiente para não criar atrito numa jornada onde o engajamento é tudo.",
      en: "Scaling an operation of over 100 live sessions per week required a reliable scheduling platform, seat management, and delivery of support materials before each session. The product needed to be fluid enough not to create friction in a journey where engagement is everything.",
      es: "Escalar una operación de más de 100 sesiones en vivo por semana requería una plataforma confiable de programación, control de cupos y entrega de material de apoyo antes de cada sesión.",
      fr: "Faire évoluer une opération de plus de 100 sessions en direct par semaine nécessitait une plateforme de planification fiable, une gestion des places et la livraison de matériel de support avant chaque session.",
    },
    solution: {
      pt: "Desenvolvemos a plataforma completa da TalkNTalk com painel de agendamento de sessões, trilha de 12 módulos, entrega de material pré-sessão e área de comunidade. A arquitetura foi desenhada para suportar crescimento de base sem degradação de experiência.",
      en: "We developed the full TalkNTalk platform with a session scheduling panel, 12-module learning track, pre-session material delivery, and community area. The architecture was designed to support base growth without experience degradation.",
      es: "Desarrollamos la plataforma completa de TalkNTalk con panel de programación de sesiones, ruta de 12 módulos, entrega de material pre-sesión y área de comunidad.",
      fr: "Nous avons développé la plateforme complète TalkNTalk avec un panneau de planification de sessions, un parcours de 12 modules, la livraison de matériel pré-session et une zone communautaire.",
    },
    results: [
      {
        pt: "12.750+ alunos ativos na plataforma.",
        en: "12,750+ active students on the platform.",
        es: "12.750+ alumnos activos en la plataforma.",
        fr: "12 750+ étudiants actifs sur la plateforme.",
      },
      {
        pt: "400 mil+ horas de conversação ao vivo entregues.",
        en: "400,000+ live conversation hours delivered.",
        es: "400.000+ horas de conversación en vivo entregadas.",
        fr: "Plus de 400 000 heures de conversation en direct livrées.",
      },
      {
        pt: "Avaliação 4.9/5 pelos alunos.",
        en: "4.9/5 student rating.",
        es: "Calificación 4.9/5 por los alumnos.",
        fr: "Note 4,9/5 par les étudiants.",
      },
    ],
    stack: ["React Native", "Next.js", "Node.js", "PostgreSQL", "AWS"],
    metaTitle: {
      pt: "TalkNTalk — Plataforma de idiomas ao vivo | Jaguaretech",
      en: "TalkNTalk — Live language learning platform | Jaguaretech",
      es: "TalkNTalk — Plataforma de idiomas en vivo | Jaguaretech",
      fr: "TalkNTalk — Plateforme d'apprentissage des langues en direct | Jaguaretech",
    },
    metaDescription: {
      pt: "Como a Jaguaretech construiu a plataforma da TalkNTalk, que hoje tem 12.750+ alunos e 400 mil horas de conversação entregues.",
      en: "How Jaguaretech built the TalkNTalk platform, which now has 12,750+ students and 400,000+ conversation hours delivered.",
      es: "Cómo Jaguaretech construyó la plataforma de TalkNTalk, que hoy tiene 12.750+ alumnos y 400.000 horas de conversación entregadas.",
      fr: "Comment Jaguaretech a construit la plateforme TalkNTalk, qui compte aujourd'hui 12 750+ étudiants et plus de 400 000 heures de conversation livrées.",
    },
  },
  {
    slug: "chakaruna-produtora-cultural",
    sector: {
      pt: "Economia Criativa",
      en: "Creative Economy",
      es: "Economía Creativa",
      fr: "Économie Créative",
    },
    tags: ["web"],
    services: ["web"],
    title: {
      pt: "Site e plataforma digital para produtora de experiências culturais",
      en: "Website and digital platform for cultural experience producer",
      es: "Sitio web y plataforma digital para productora de experiencias culturales",
      fr: "Site web et plateforme digitale pour producteur d'expériences culturelles",
    },
    description: {
      pt: "A Chakaruna é uma produtora cultural que cria retiros, festivais e imersões que conectam arte, espiritualidade e natureza. Precisavam de uma presença digital à altura da profundidade das experiências que oferecem.",
      en: "Chakaruna is a cultural production company that creates retreats, festivals, and immersions connecting art, spirituality, and nature. They needed a digital presence that matched the depth of the experiences they offer.",
      es: "Chakaruna es una productora cultural que crea retiros, festivales e inmersiones que conectan arte, espiritualidad y naturaleza. Necesitaban una presencia digital a la altura de las experiencias que ofrecen.",
      fr: "Chakaruna est une société de production culturelle qui crée des retraites, des festivals et des immersions reliant art, spiritualité et nature. Ils avaient besoin d'une présence digitale à la hauteur des expériences qu'ils proposent.",
    },
    challenge: {
      pt: "Traduzir para o digital a profundidade e a sensorialidade de uma produtora que trabalha com experiências presenciais transformativas. O site precisava comunicar metodologia, curadoria e confiança sem parecer genérico.",
      en: "Translating to the digital space the depth and sensory quality of a production company that works with transformative in-person experiences. The site needed to communicate methodology, curation, and trust without feeling generic.",
      es: "Traducir al digital la profundidad y sensorialidad de una productora que trabaja con experiencias presenciales transformadoras. El sitio debía comunicar metodología, curaduría y confianza sin parecer genérico.",
      fr: "Traduire dans l'espace digital la profondeur et la qualité sensorielle d'une société de production qui travaille avec des expériences en présentiel transformatrices.",
    },
    solution: {
      pt: "Desenvolvemos o site institucional da Chakaruna com foco em narrativa visual forte, apresentação da metodologia em seis movimentos e curadoria de elenco. A arquitetura editorial prioriza a experiência de leitura e a construção de confiança antes da conversão.",
      en: "We developed Chakaruna's institutional website with a focus on strong visual narrative, presentation of the six-movement methodology, and cast curation. The editorial architecture prioritizes reading experience and trust-building before conversion.",
      es: "Desarrollamos el sitio institucional de Chakaruna con foco en narrativa visual fuerte, presentación de la metodología en seis movimientos y curaduría de elenco.",
      fr: "Nous avons développé le site institutionnel de Chakaruna avec un focus sur la narration visuelle forte, la présentation de la méthodologie en six mouvements et la curation du casting.",
    },
    results: [
      {
        pt: "Presença digital que comunica a profundidade metodológica da produtora.",
        en: "Digital presence that communicates the producer's methodological depth.",
        es: "Presencia digital que comunica la profundidad metodológica de la productora.",
        fr: "Présence digitale qui communique la profondeur méthodologique du producteur.",
      },
      {
        pt: "Narrativa visual alinhada à identidade cultural e sensorial da marca.",
        en: "Visual narrative aligned with the brand's cultural and sensory identity.",
        es: "Narrativa visual alineada con la identidad cultural y sensorial de la marca.",
        fr: "Narration visuelle alignée sur l'identité culturelle et sensorielle de la marque.",
      },
      {
        pt: "Arquitetura editorial que prioriza confiança antes da conversão.",
        en: "Editorial architecture that prioritizes trust before conversion.",
        es: "Arquitectura editorial que prioriza la confianza antes de la conversión.",
        fr: "Architecture éditoriale qui privilégie la confiance avant la conversion.",
      },
    ],
    stack: ["Next.js", "Vercel"],
    metaTitle: {
      pt: "Chakaruna — Site para produtora de experiências culturais | Jaguaretech",
      en: "Chakaruna — Website for cultural experience producer | Jaguaretech",
      es: "Chakaruna — Sitio web para productora de experiencias culturales | Jaguaretech",
      fr: "Chakaruna — Site pour producteur d'expériences culturelles | Jaguaretech",
    },
    metaDescription: {
      pt: "Como a Jaguaretech desenvolveu a presença digital da Chakaruna, produtora de retiros, festivais e imersões culturais.",
      en: "How Jaguaretech built the digital presence for Chakaruna, a producer of cultural retreats, festivals, and immersions.",
      es: "Cómo Jaguaretech desarrolló la presencia digital de Chakaruna, productora de retiros, festivales e inmersiones culturales.",
      fr: "Comment Jaguaretech a construit la présence digitale de Chakaruna, producteur de retraites, festivals et immersions culturelles.",
    },
  },
];

export function getProjectBySlug(slug) {
  return portfolioProjects.find((p) => p.slug === slug) || null;
}

export function getAllSlugs() {
  return portfolioProjects.map((p) => p.slug);
}
