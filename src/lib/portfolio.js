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

export const portfolioProjects = [];

export function getProjectBySlug(slug) {
  return portfolioProjects.find((p) => p.slug === slug) || null;
}

export function getAllSlugs() {
  return portfolioProjects.map((p) => p.slug);
}
