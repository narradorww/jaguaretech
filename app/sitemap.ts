import { MetadataRoute } from "next";
import { getAllSlugs } from "../src/lib/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jaguaretech.com.br";
  const locales = ["pt", "en", "es", "fr"];
  const staticRoutes = ["/", "/services", "/portfolio"];
  const portfolioSlugs = getAllSlugs();
  const lastModified = new Date();

  const staticEntries = locales.flatMap((locale) => {
    const prefix = locale === "pt" ? "" : `/${locale}`;
    return staticRoutes.map((route, index) => ({
      url: `${baseUrl}${prefix}${route === "/" ? "" : route}`,
      lastModified,
      changeFrequency: (index === 0 ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: index === 0 ? 1 : 0.7,
    }));
  });

  const portfolioEntries = locales.flatMap((locale) => {
    const prefix = locale === "pt" ? "" : `/${locale}`;
    return portfolioSlugs.map((slug) => ({
      url: `${baseUrl}${prefix}/portfolio/${slug}`,
      lastModified,
      changeFrequency: "monthly" as "monthly",
      priority: 0.8,
    }));
  });

  return [...staticEntries, ...portfolioEntries];
}
