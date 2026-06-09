import { notFound } from "next/navigation";
import LanguageSwitcher from "../../../components/LanguageSwitcher";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "../../../../src/i18n/routing";
import { buildMetadata } from "../../../../src/lib/seo";
import {
  getPortfolioProjectSchema,
  getPortfolioBreadcrumbSchema,
} from "../../../../src/lib/schemas";
import { getProjectBySlug, getAllSlugs } from "../../../../src/lib/portfolio";
import styles from "../../../page.module.css";

export async function generateStaticParams() {
  const locales = ["pt", "en", "es", "fr"];
  const slugs = getAllSlugs();
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return buildMetadata({
    locale,
    title: project.metaTitle[locale] || project.metaTitle.en,
    description: project.metaDescription[locale] || project.metaDescription.en,
    keywords: project.stack.concat([
      "software development company",
      "Jaguaretech",
      project.sector[locale] || project.sector.en,
    ]),
    path: `/portfolio/${slug}`,
    imageAlt: project.title[locale] || project.title.en,
  });
}

export default async function ProjectPage({ params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const home = await getTranslations("Home");
  const t = await getTranslations({ locale, namespace: "Portfolio" });

  const projectTitle = project.title[locale] || project.title.en;

  const jsonLdArray = [
    getPortfolioProjectSchema(project, locale),
    getPortfolioBreadcrumbSchema(projectTitle, slug),
  ];

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main-content">
        {home("a11y.skipToContent")}
      </a>
      {jsonLdArray.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <header className={styles.header}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandMark} aria-hidden="true" />
          <span className={styles.brandText}>Jaguaretech</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/services">{home("nav.services")}</Link>
          <Link href="/portfolio">{home("nav.portfolio")}</Link>
          <Link href="/#contato">{home("nav.contact")}</Link>
          <LanguageSwitcher />
        </nav>
        <a className={styles.headerCta} href={`mailto:${home("contact.cta")}`}>
          {home("nav.letsTalk")}
        </a>
      </header>

      <main className={styles.main} id="main-content">
        <section className={styles.contentHero} aria-labelledby="project-title">
          <nav aria-label="breadcrumb">
            <p className={styles.eyebrow}>
              <Link href="/portfolio">{t("eyebrow")}</Link>
              {" / "}
              {project.sector[locale] || project.sector.en}
            </p>
          </nav>
          <h1 className={styles.contentTitle} id="project-title">
            {project.title[locale] || project.title.en}
          </h1>
          <p className={styles.contentLead}>
            {project.description[locale] || project.description.en}
          </p>
          <div className={styles.contentMeta}>
            <span className={styles.contentPill}>
              {project.sector[locale] || project.sector.en}
            </span>
            {project.stack.map((tech) => (
              <span key={tech} className={styles.contentPill}>{tech}</span>
            ))}
          </div>
        </section>

        <section className={styles.contentBody}>
          <article className={styles.contentArticle}>
            <h2>{t("challengeLabel")}</h2>
            <p>{project.challenge[locale] || project.challenge.en}</p>
          </article>

          <article className={styles.contentArticle}>
            <h2>{t("solutionLabel")}</h2>
            <p>{project.solution[locale] || project.solution.en}</p>
          </article>

          <article className={styles.contentArticle}>
            <h2>{t("resultsLabel")}</h2>
            <ul className={styles.contentList}>
              {project.results.map((result, i) => (
                <li key={i}>{result[locale] || result.en}</li>
              ))}
            </ul>
          </article>

          <article className={styles.contentArticle}>
            <h2>{t("stackLabel")}</h2>
            <div className={styles.stackGrid}>
              {project.stack.map((tech) => (
                <span key={tech} className={styles.stackTag}>{tech}</span>
              ))}
            </div>
            <p style={{ marginTop: "1.5rem" }}>
              <Link className={styles.inlineLink} href="/portfolio">
                {t("backToPortfolio")}
              </Link>
              {" · "}
              <Link className={styles.inlineLink} href="/services">
                {t("seeServices")}
              </Link>
            </p>
          </article>
        </section>

        <section className={styles.cta} id="contato">
          <div className={styles.ctaContent}>
            <p className={styles.sectionEyebrow}>{home("contact.eyebrow")}</p>
            <h2 className={styles.ctaTitle}>{home("contact.title")}</h2>
            <p className={styles.ctaText}>{home("contact.text")}</p>
          </div>
          <div className={styles.ctaActions}>
            <a className={styles.primaryButton} href={`mailto:${home("contact.cta")}`}>
              {home("contact.cta")}
            </a>
            <Link className={styles.secondaryButton} href="/portfolio">
              {t("eyebrow")}
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerRow}>
          <span className={styles.footerBrand}>Jaguaretech</span>
          <span className={styles.footerText}>{home("footer.tagline")}</span>
        </div>
        <div className={styles.footerRow}>
          <span className={styles.footerText}>{home("footer.location")}</span>
          <div className={styles.footerLinks}>
            <a href={`mailto:${home("contact.cta")}`}>Email</a>
            <Link href="/services">{home("footer.servicesLink")}</Link>
            <Link href="/portfolio">{home("footer.portfolioLink")}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
