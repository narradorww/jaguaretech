/**
 * JSON-LD schemas for SEO & GEO optimization
 * Used by pages to inject structured data for AI models and search engines
 */

export function getHomePageSchema(locale, metadata) {
  const localeMap = {
    pt: "pt-BR",
    en: "en-US",
    es: "es-ES",
    fr: "fr-FR",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://jaguaretech.com.br/#organization",
        name: "Jaguaretech",
        url: "https://jaguaretech.com.br",
        logo: "https://jaguaretech.com.br/hero-jaguaretch.webp",
        description: metadata.description,
        inLanguage: localeMap[locale],
        address: {
          "@type": "PostalAddress",
          addressCountry: "BR",
          addressLocality: "Brasil",
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "dev@jaguaretech.com.br",
          contactType: "customer service",
          url: "https://jaguaretech.com.br/#contato",
        },
        sameAs: [
          "https://www.linkedin.com/company/jaguaretech",
          "https://twitter.com/jaguaretech",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://jaguaretech.com.br/#website",
        url: "https://jaguaretech.com.br",
        name: "Jaguaretech",
        description: metadata.description,
        inLanguage: localeMap[locale],
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://jaguaretech.com.br/#services",
          },
          query: "required name=search_term_string",
        },
      },
    ],
  };
}

export function getServiceSchema(services, locale) {
  const serviceMap = {
    mobile: "SoftwareApplication",
    ai: "SoftwareApplication",
    web: "SoftwareApplication",
    seo: "SpecialtyService",
    marketing: "SpecialtyService",
    product: "SpecialtyService",
  };

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": serviceMap[service.key] || "Service",
        name: service.title,
        description: service.text,
        provider: {
          "@type": "Organization",
          name: "Jaguaretech",
          url: "https://jaguaretech.com.br",
        },
        areaServed: {
          "@type": "Country",
          name: "BR",
        },
        url: `https://jaguaretech.com.br/#servicos`,
      },
    })),
  };
}

export function getFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getPortfolioProjectSchema(project, locale) {
  const localeMap = {
    pt: "pt-BR",
    en: "en-US",
    es: "es-ES",
    fr: "fr-FR",
  };

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `https://jaguaretech.com.br/portfolio/${project.slug}`,
    name: project.title[locale] || project.title.pt,
    description: project.description[locale] || project.description.pt,
    image: {
      "@type": "ImageObject",
      url: `https://jaguaretech.com.br/portfolio/${project.slug}.webp`,
      width: 1200,
      height: 630,
    },
    inLanguage: localeMap[locale],
    datePublished: project.publishedDate || "2024-01-01",
    keywords: project.stack,
    creator: {
      "@type": "Organization",
      name: "Jaguaretech",
      url: "https://jaguaretech.com.br",
    },
    about: {
      "@type": "Thing",
      name: project.sector[locale] || project.sector.pt,
    },
    url: `https://jaguaretech.com.br/portfolio/${project.slug}`,
    isPartOf: {
      "@type": "CollectionPage",
      url: "https://jaguaretech.com.br/portfolio",
      name: "Portfolio",
    },
  };
}

export function getPortfolioBreadcrumbSchema(projectTitle, projectSlug) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jaguaretech.com.br",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: "https://jaguaretech.com.br/portfolio",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: projectTitle,
        item: `https://jaguaretech.com.br/portfolio/${projectSlug}`,
      },
    ],
  };
}

export function getLocalBusinessSchema(locale) {
  const localeMap = {
    pt: "pt-BR",
    en: "en-US",
    es: "es-ES",
    fr: "fr-FR",
  };

  const businessNames = {
    pt: "Jaguaretech — Estúdio de Software",
    en: "Jaguaretech — Software Studio",
    es: "Jaguaretech — Estudio de Software",
    fr: "Jaguaretech — Studio Logiciel",
  };

  const descriptions = {
    pt: "Software development company especializada em mobile e inteligência artificial",
    en: "Software development company specialized in mobile and artificial intelligence",
    es: "Software development company especializada en mobile e inteligencia artificial",
    fr: "Société de développement logiciel spécialisée dans mobile et intelligence artificielle",
  };

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessNames[locale] || businessNames.pt,
    description: descriptions[locale] || descriptions.pt,
    url: "https://jaguaretech.com.br",
    image: "https://jaguaretech.com.br/hero-jaguaretch.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "Brasil",
      addressRegion: "BR",
      postalCode: "",
      addressCountry: "BR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "dev@jaguaretech.com.br",
      url: "https://jaguaretech.com.br",
    },
    sameAs: [
      "https://www.linkedin.com/company/jaguaretech",
      "https://twitter.com/jaguaretech",
    ],
    areaServed: {
      "@type": "Country",
      name: "BR",
    },
  };
}
