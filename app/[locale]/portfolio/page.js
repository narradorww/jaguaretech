import LanguageSwitcher from "../../components/LanguageSwitcher";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "../../../src/i18n/routing";
import { buildMetadata } from "../../../src/lib/seo";
import { portfolioProjects } from "../../../src/lib/portfolio";
import styles from "../../page.module.css";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Meta" });
  const keywords = t("portfolio.keywords")
    .split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);

  return buildMetadata({
    locale,
    title: t("portfolio.title"),
    description: t("portfolio.description"),
    keywords,
    path: "/portfolio",
    imageAlt: "Jaguaretech portfolio de projetos de software e IA",
  });
}

export default async function Portfolio({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const home = await getTranslations("Home");
  const t = await getTranslations({ locale, namespace: "Portfolio" });

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main-content">
        {home("a11y.skipToContent")}
      </a>
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
        <section className={styles.contentHero} aria-labelledby="portfolio-title">
          <p className={styles.eyebrow}>{t("eyebrow")}</p>
          <h1 className={styles.contentTitle} id="portfolio-title">
            {t("heading")}
          </h1>
          <p className={styles.contentLead}>{t("lead")}</p>
          <div className={styles.contentMeta}>
            <span className={styles.contentPill}>{t("pills.mobile")}</span>
            <span className={styles.contentPill}>{t("pills.ai")}</span>
            <span className={styles.contentPill}>{t("pills.integration")}</span>
          </div>
        </section>

        <section className={styles.contentBody} aria-labelledby="projects-list">
          <h2 className={styles.srOnly} id="projects-list">
            {t("projectsListLabel")}
          </h2>
          {portfolioProjects.map((project) => (
            <article key={project.slug} className={styles.contentArticle}>
              <p className={styles.eyebrow}>{project.sector[locale] || project.sector.en}</p>
              <h2>{project.title[locale] || project.title.en}</h2>
              <p>{project.description[locale] || project.description.en}</p>
              <Link className={styles.inlineLink} href={`/portfolio/${project.slug}`}>
                {t("readMore")}
              </Link>
            </article>
          ))}
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
            <Link className={styles.secondaryButton} href="/services">
              {home("footer.servicesLink")}
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
