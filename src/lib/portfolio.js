/**
 * Portfolio data — fonte única da verdade para todos os projetos.
 * Para adicionar um projeto: copie um objeto e preencha os campos.
 * O campo `slug` vira a URL: /portfolio/[slug]
 */

export const portfolioProjects = [
  {
    slug: "fintech-mobile-onboarding",
    sector: { pt: "Fintech", en: "Fintech", es: "Fintech", fr: "Fintech" },
    tags: ["mobile", "system-integration", "ai"],
    services: ["mobile", "system-integration"],
    title: {
      pt: "Plataforma de servicos financeiros mobile-first",
      en: "Mobile-first financial services platform",
      es: "Plataforma de servicios financieros mobile-first",
      fr: "Plateforme de services financiers mobile-first",
    },
    description: {
      pt: "Uma fintech precisava de um produto mobile com onboarding instantaneo e integracao de sistemas legados. Atuamos como software developer parceiro, modernizando a arquitetura e criando uma experiencia confiavel.",
      en: "A fintech needed a mobile product with instant onboarding and legacy system integration. We operated as the software developer partner, modernizing the architecture and delivering a reliable experience.",
      es: "Una fintech necesitaba un producto mobile con onboarding instantaneo e integracion de sistemas legados. Actuamos como software developer socio, modernizando la arquitectura.",
      fr: "Une fintech avait besoin d'un produit mobile avec un onboarding instantane et une integration de systemes legacy. Nous avons modernise l'architecture.",
    },
    challenge: {
      pt: "O cliente tinha um core bancario legado com APIs instáveis e precisava lançar um app mobile em menos de 6 meses, com KYC em tempo real e experiência de onboarding abaixo de 3 minutos.",
      en: "The client had a legacy banking core with unstable APIs and needed to launch a mobile app in under 6 months, with real-time KYC and an onboarding experience under 3 minutes.",
      es: "El cliente tenia un core bancario legado con APIs inestables y necesitaba lanzar una app mobile en menos de 6 meses.",
      fr: "Le client avait un core bancaire legacy avec des APIs instables et devait lancer une app mobile en moins de 6 mois.",
    },
    solution: {
      pt: "Desenhamos uma camada de abstração sobre o core bancário, criando uma API de integração resiliente com circuit breakers e fallbacks. O app foi desenvolvido em React Native com arquitetura offline-first, garantindo experiência fluida mesmo com conexão instável.",
      en: "We designed an abstraction layer over the banking core, creating a resilient integration API with circuit breakers and fallbacks. The app was built in React Native with an offline-first architecture, ensuring a smooth experience even with unstable connectivity.",
      es: "Diseñamos una capa de abstraccion sobre el core bancario, creando una API de integracion resiliente con circuit breakers.",
      fr: "Nous avons concu une couche d'abstraction sur le core bancaire, creant une API d'integration resiliente avec circuit breakers.",
    },
    results: [
      {
        pt: "Integracao com core bancario e KYC em tempo real.",
        en: "Real-time core banking and KYC integration.",
        es: "Integracion con core bancario y KYC en tiempo real.",
        fr: "Integration core bancaire et KYC en temps reel.",
      },
      {
        pt: "Tempo de cadastro reduzido para menos de 3 minutos.",
        en: "Onboarding time reduced to under 3 minutes.",
        es: "Tiempo de registro reducido a menos de 3 minutos.",
        fr: "Temps d'onboarding reduit a moins de 3 minutes.",
      },
      {
        pt: "Arquitetura preparada para crescimento regional.",
        en: "Architecture prepared for regional expansion.",
        es: "Arquitectura preparada para expansion regional.",
        fr: "Architecture prete pour l'expansion regionale.",
      },
    ],
    stack: ["React Native", "Node.js", "PostgreSQL", "AWS", "Redis"],
    metaTitle: {
      pt: "Case: Plataforma fintech mobile-first | Jaguaretech",
      en: "Case: Mobile-first fintech platform | Jaguaretech",
      es: "Case: Plataforma fintech mobile-first | Jaguaretech",
      fr: "Case: Plateforme fintech mobile-first | Jaguaretech",
    },
    metaDescription: {
      pt: "Como a Jaguaretech entregou uma plataforma mobile fintech com onboarding em menos de 3 minutos e integracao de sistemas bancarios legados.",
      en: "How Jaguaretech delivered a fintech mobile platform with under-3-minute onboarding and legacy banking system integration.",
      es: "Como Jaguaretech entrego una plataforma mobile fintech con onboarding en menos de 3 minutos.",
      fr: "Comment Jaguaretech a livre une plateforme mobile fintech avec un onboarding en moins de 3 minutes.",
    },
  },
  {
    slug: "ia-atendimento-empresarial",
    sector: { pt: "Servicos B2B", en: "B2B Services", es: "Servicios B2B", fr: "Services B2B" },
    tags: ["ai", "system-integration"],
    services: ["ai", "system-integration"],
    title: {
      pt: "IA para operacoes de atendimento empresarial",
      en: "AI for enterprise support operations",
      es: "IA para operaciones de atencion empresarial",
      fr: "IA pour les operations de support entreprise",
    },
    description: {
      pt: "Uma empresa de servicos precisava automatizar triagens e aumentar a produtividade. Entregamos AI software development com copilotos, integracao de sistemas e governanca de dados.",
      en: "A services company needed to automate triage and increase productivity. We delivered AI software development with copilots, system integration, and data governance.",
      es: "Una empresa de servicios necesitaba automatizar triajes y aumentar la productividad. Entregamos AI software development con copilotos.",
      fr: "Une entreprise de services devait automatiser le triage et augmenter la productivite. Nous avons livre un AI software development avec copilotos.",
    },
    challenge: {
      pt: "O time de atendimento recebia milhares de tickets por semana com uma base de conhecimento desatualizada e dispersa em múltiplos sistemas. O tempo médio de resposta era alto e a qualidade inconsistente.",
      en: "The support team received thousands of tickets per week with an outdated knowledge base dispersed across multiple systems. Average response time was high and quality inconsistent.",
      es: "El equipo de atencion recibia miles de tickets por semana con una base de conocimiento desactualizada y dispersa.",
      fr: "L'equipe de support recevait des milliers de tickets par semaine avec une base de connaissance obsolete.",
    },
    solution: {
      pt: "Construimos um copiloto treinado com a base de conhecimento interna da empresa, integrado ao sistema de tickets existente. O modelo sugere respostas, prioriza tickets e alerta sobre anomalias, com dashboard de monitoramento de qualidade e compliance.",
      en: "We built a copilot trained on the company's internal knowledge base, integrated into the existing ticketing system. The model suggests responses, prioritizes tickets, and alerts on anomalies, with a quality monitoring and compliance dashboard.",
      es: "Construimos un copiloto entrenado con la base de conocimiento interna, integrado al sistema de tickets existente.",
      fr: "Nous avons construit un copilote entraine sur la base de connaissance interne, integre au systeme de tickets existant.",
    },
    results: [
      {
        pt: "Copiloto treinado com base de conhecimento interna.",
        en: "Copilot trained on internal knowledge base.",
        es: "Copiloto entrenado con base de conocimiento interna.",
        fr: "Copilote entraine sur la base de connaissance interne.",
      },
      {
        pt: "Reducao de 42% no tempo medio de resposta.",
        en: "42% reduction in average response time.",
        es: "Reduccion del 42% en el tiempo medio de respuesta.",
        fr: "Reduction de 42% du temps de reponse moyen.",
      },
      {
        pt: "Monitoramento de qualidade e compliance.",
        en: "Quality monitoring and compliance controls.",
        es: "Monitoreo de calidad y compliance.",
        fr: "Surveillance de la qualite et controles de conformite.",
      },
    ],
    stack: ["Python", "OpenAI", "Node.js", "PostgreSQL", "AWS"],
    metaTitle: {
      pt: "Case: IA para atendimento empresarial | Jaguaretech",
      en: "Case: AI for enterprise support | Jaguaretech",
      es: "Case: IA para atencion empresarial | Jaguaretech",
      fr: "Case: IA pour support entreprise | Jaguaretech",
    },
    metaDescription: {
      pt: "Como a Jaguaretech reduziu 42% no tempo de atendimento com AI software development e copilotos treinados na base de conhecimento interna.",
      en: "How Jaguaretech reduced support response time by 42% with AI software development and copilots trained on internal knowledge.",
      es: "Como Jaguaretech redujo el 42% del tiempo de atencion con AI software development.",
      fr: "Comment Jaguaretech a reduit le temps de support de 42% avec l'AI software development.",
    },
  },
  {
    slug: "staff-augmentation-escala-rapida",
    sector: { pt: "Tecnologia", en: "Technology", es: "Tecnologia", fr: "Technologie" },
    tags: ["staff-augmentation", "mobile", "web"],
    services: ["staff-augmentation"],
    title: {
      pt: "Escala rapida com staff augmentation services",
      en: "Rapid scale with staff augmentation services",
      es: "Escala rapida con staff augmentation services",
      fr: "Montee en charge rapide avec staff augmentation services",
    },
    description: {
      pt: "Um time interno precisava acelerar entregas sem perder qualidade. Montamos squad de engenheiros e designers, mantendo a governanca tecnica do cliente.",
      en: "An internal team needed to accelerate delivery without losing quality. We staffed a squad of engineers and designers while the client retained technical governance.",
      es: "Un equipo interno necesitaba acelerar entregas sin perder calidad. Montamos un squad de ingenieros y diseñadores.",
      fr: "Une equipe interne devait accelerer les livraisons sans perdre en qualite. Nous avons monte un squad d'ingenieurs.",
    },
    challenge: {
      pt: "Uma empresa de tecnologia com produto em crescimento acelerado precisava dobrar a capacidade de entrega em 60 dias, sem comprometer a qualidade do código nem a cultura de engenharia já estabelecida.",
      en: "A technology company with a fast-growing product needed to double delivery capacity in 60 days without compromising code quality or the established engineering culture.",
      es: "Una empresa de tecnologia con producto en crecimiento acelerado necesitaba doblar la capacidad de entrega en 60 dias.",
      fr: "Une entreprise technologique en forte croissance devait doubler sa capacite de livraison en 60 jours.",
    },
    solution: {
      pt: "Integramos um squad de engenheiros seniors ao time existente, respeitando os processos, stack e cultura do cliente. Realizamos onboarding técnico em menos de uma semana e começamos a entregar features em produção no segundo sprint.",
      en: "We integrated a squad of senior engineers into the existing team, respecting the client's processes, stack, and culture. We completed technical onboarding in under a week and began shipping features to production in the second sprint.",
      es: "Integramos un squad de ingenieros seniors al equipo existente, respetando los procesos y cultura del cliente.",
      fr: "Nous avons integre un squad d'ingenieurs seniors a l'equipe existante, respectant les processus et la culture du client.",
    },
    results: [
      {
        pt: "Squad integrado e em producao em menos de 2 semanas.",
        en: "Squad integrated and shipping to production in under 2 weeks.",
        es: "Squad integrado y en produccion en menos de 2 semanas.",
        fr: "Squad integre et en production en moins de 2 semaines.",
      },
      {
        pt: "Capacidade de entrega dobrada sem regressoes.",
        en: "Delivery capacity doubled with no regressions.",
        es: "Capacidad de entrega duplicada sin regresiones.",
        fr: "Capacite de livraison doublee sans regressions.",
      },
      {
        pt: "Governanca tecnica mantida pelo cliente.",
        en: "Technical governance retained by the client.",
        es: "Gobernanza tecnica mantenida por el cliente.",
        fr: "Gouvernance technique maintenue par le client.",
      },
    ],
    stack: ["React Native", "Next.js", "Node.js", "AWS", "GitHub Actions"],
    metaTitle: {
      pt: "Case: Staff augmentation para escala rapida | Jaguaretech",
      en: "Case: Staff augmentation for rapid scale | Jaguaretech",
      es: "Case: Staff augmentation para escala rapida | Jaguaretech",
      fr: "Case: Staff augmentation pour montee en charge | Jaguaretech",
    },
    metaDescription: {
      pt: "Como a Jaguaretech dobrou a capacidade de entrega de um time tech em 60 dias com staff augmentation services sem comprometer qualidade.",
      en: "How Jaguaretech doubled a tech team's delivery capacity in 60 days with staff augmentation services without compromising quality.",
      es: "Como Jaguaretech doblo la capacidad de entrega de un equipo tech en 60 dias con staff augmentation services.",
      fr: "Comment Jaguaretech a double la capacite de livraison d'une equipe tech en 60 jours.",
    },
  },
];

export function getProjectBySlug(slug) {
  return portfolioProjects.find((p) => p.slug === slug) || null;
}

export function getAllSlugs() {
  return portfolioProjects.map((p) => p.slug);
}
