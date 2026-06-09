import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default rule for all crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: "/private/",
        crawlDelay: 1,
      },
      // GPTBot (OpenAI)
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: "/private/",
      },
      // CCBot (Common Crawl)
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: "/private/",
      },
      // PerplexityBot
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: "/private/",
      },
      // Anthropic Claude bot
      {
        userAgent: "Claude-Web",
        allow: "/",
        disallow: "/private/",
      },
      // Other AI crawlers
      {
        userAgent: "OmniGrok",
        allow: "/",
      },
      {
        userAgent: "VepaBot",
        allow: "/",
      },
    ],
    sitemap: "https://jaguaretech.com.br/sitemap.xml",
  };
}
