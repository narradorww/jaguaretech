const SITE_URL = "https://jaguaretech.com.br";

const OG_LOCALE_MAP = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
};

const FALLBACK_IMAGE = "/hero-jaguaretch.png";

const BASE_KEYWORDS = {
  en: [
    "software developer",
    "software development company",
    "AI software development",
    "staff augmentation services",
    "custom software development",
    "mobile app development",
    "system integration",
  ],
  pt: [
    "desenvolvimento de software personalizado",
    "solucoes tecnologicas empresariais",
    "integracao de sistemas",
    "desenvolvimento de aplicativos mobile",
    "IA aplicada",
    "consultoria de software",
  ],
  es: [
    "software development company",
    "AI software development",
    "staff augmentation services",
    "desarrollo de software personalizado",
    "integracion de sistemas",
  ],
  fr: [
    "software development company",
    "AI software development",
    "staff augmentation services",
    "developpement logiciel sur mesure",
    "integration de systemes",
  ],
};

function normalizePath(pathname) {
  if (!pathname) {
    return "/";
  }
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export function getLocalePath(locale, pathname) {
  const normalized = normalizePath(pathname);
  if (!locale || locale === "pt") {
    return normalized;
  }
  return `/${locale}${normalized}`;
}

export function buildMetadata({
  locale,
  title,
  description,
  path = "/",
  keywords,
  image = "/hero-jaguaretch.webp",
  imageAlt = "Jaguaretech software development company",
}) {
  const canonicalPath = getLocalePath(locale, path);
  const url = `${SITE_URL}${canonicalPath}`;
  const keywordList = keywords?.length
    ? keywords
    : BASE_KEYWORDS[locale] || BASE_KEYWORDS.en;
  const verification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: keywordList,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
      languages: {
        pt: `${SITE_URL}${getLocalePath("pt", path)}`,
        en: `${SITE_URL}${getLocalePath("en", path)}`,
        es: `${SITE_URL}${getLocalePath("es", path)}`,
        fr: `${SITE_URL}${getLocalePath("fr", path)}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Jaguaretech",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
          type: "image/webp",
        },
        {
          url: FALLBACK_IMAGE,
          width: 1200,
          height: 630,
          alt: imageAlt,
          type: "image/png",
        },
      ],
      locale: OG_LOCALE_MAP[locale] || "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    verification,
  };
}
