import LanguageSwitcher from "../components/LanguageSwitcher";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "../../src/i18n/routing";
import { buildMetadata } from "../../src/lib/seo";
import styles from "../page.module.css";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Meta" });
  const keywords = t("home.keywords")
    .split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);

  return buildMetadata({
    locale,
    title: t("home.title"),
    description: t("home.description"),
    keywords,
    path: "/",
    imageAlt: "Jaguaretech software development company and AI studio",
  });
}

export default async function Home({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");
  const meta = await getTranslations({ locale, namespace: "Meta" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Jaguaretech",
        url: "https://jaguaretech.com.br",
        logo: "https://jaguaretech.com.br/hero-jaguaretch.webp",
        description: meta("home.description"),
        address: {
          "@type": "PostalAddress",
          addressCountry: "BR",
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "dev@jaguaretech.com.br",
          contactType: "customer service",
        },
        sameAs: [
          "https://www.linkedin.com/company/jaguaretech",
          "https://twitter.com/jaguaretech",
        ],
      },
      {
        "@type": "WebSite",
        name: "Jaguaretech",
        url: "https://jaguaretech.com.br",
        description: meta("home.description"),
        inLanguage: locale,
      },
    ],
  };

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main-content">
        {t("a11y.skipToContent")}
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className={styles.header}>
        <a className={styles.brand} href="#home">
          <span className={styles.brandMark} aria-hidden="true" />
          <span className={styles.brandText}>Jaguaretech</span>
        </a>
        <nav className={styles.nav}>
          <a href="#servicos">{t("nav.services")}</a>
          <a href="#processo">{t("nav.process")}</a>
          <a href="#stack">{t("nav.stack")}</a>
          <a href="#insights">{t("nav.insights")}</a>
          <a href="#contato">{t("nav.contact")}</a>
          <LanguageSwitcher />
        </nav>
        <a
          className={styles.headerCta}
          href={`mailto:${t("contact.cta")}`}
        >
          {t("nav.letsTalk")}
        </a>
      </header>

      <main className={styles.main} id="main-content">
        <section className={styles.hero} id="home">
          <div className={styles.heroIntro}>
            <p className={styles.eyebrow}>{t("hero.eyebrow")}</p>
            <h1 className={styles.heroTitle}>{t("hero.title")}</h1>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroFrame}>
              <video
                className={styles.heroVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                loading="lazy"
                poster="/hero-jaguaretch.webp"
                aria-label="Video heroico da Jaguaretech"
              >
                <source src="/jaguar.mp4" type="video/mp4" />
              </video>
            </div>
            <div className={styles.heroBadge}>{t("hero.badge")}</div>
          </div>
          <p className={styles.heroLede}>{t("hero.lede")}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#contato">
              {t("hero.primaryCta")}
            </a>
            <a className={styles.secondaryButton} href="#servicos">
              {t("hero.secondaryCta")}
            </a>
          </div>
          <div className={styles.heroMeta}>
            <div className={styles.metaCard}>
              <span className={styles.metaTitle}>
                {t("hero.meta.mobileFirst.title")}
              </span>
              <span className={styles.metaText}>
                {t("hero.meta.mobileFirst.text")}
              </span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaTitle}>
                {t("hero.meta.aiApplied.title")}
              </span>
              <span className={styles.metaText}>
                {t("hero.meta.aiApplied.text")}
              </span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaTitle}>
                {t("hero.meta.endToEnd.title")}
              </span>
              <span className={styles.metaText}>
                {t("hero.meta.endToEnd.text")}
              </span>
            </div>
          </div>
        </section>

        <section
          className={styles.section}
          id="servicos"
          aria-labelledby="servicos-title"
          itemScope
          itemType="https://schema.org/Service"
        >
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>{t("services.eyebrow")}</p>
            <h2 className={styles.sectionTitle} id="servicos-title">
              {t("services.title")}
            </h2>
            <p className={styles.sectionText}>{t("services.text")}</p>
          </div>
          <div className={`${styles.cards} ${styles.stagger}`}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>{t("services.mobile.title")}</h3>
              <p className={styles.cardText}>{t("services.mobile.text")}</p>
              <ul className={styles.cardList}>
                <li>{t("services.mobile.list.0")}</li>
                <li>{t("services.mobile.list.1")}</li>
                <li>{t("services.mobile.list.2")}</li>
              </ul>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>{t("services.ai.title")}</h3>
              <p className={styles.cardText}>{t("services.ai.text")}</p>
              <ul className={styles.cardList}>
                <li>{t("services.ai.list.0")}</li>
                <li>{t("services.ai.list.1")}</li>
                <li>{t("services.ai.list.2")}</li>
              </ul>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>{t("services.web.title")}</h3>
              <p className={styles.cardText}>{t("services.web.text")}</p>
              <ul className={styles.cardList}>
                <li>{t("services.web.list.0")}</li>
                <li>{t("services.web.list.1")}</li>
                <li>{t("services.web.list.2")}</li>
              </ul>
            </article>
          </div>
        </section>

        <section
          className={styles.section}
          id="processo"
          aria-labelledby="processo-title"
        >
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>{t("process.eyebrow")}</p>
            <h2 className={styles.sectionTitle} id="processo-title">
              {t("process.title")}
            </h2>
            <p className={styles.sectionText}>{t("process.text")}</p>
          </div>
          <div className={`${styles.process} ${styles.stagger}`}>
            <article className={styles.processStep}>
              <span className={styles.stepIndex}>01</span>
              <h3 className={styles.stepTitle}>
                {t("process.steps.discovery.title")}
              </h3>
              <p className={styles.stepText}>
                {t("process.steps.discovery.text")}
              </p>
            </article>
            <article className={styles.processStep}>
              <span className={styles.stepIndex}>02</span>
              <h3 className={styles.stepTitle}>
                {t("process.steps.prototype.title")}
              </h3>
              <p className={styles.stepText}>
                {t("process.steps.prototype.text")}
              </p>
            </article>
            <article className={styles.processStep}>
              <span className={styles.stepIndex}>03</span>
              <h3 className={styles.stepTitle}>
                {t("process.steps.build.title")}
              </h3>
              <p className={styles.stepText}>{t("process.steps.build.text")}</p>
            </article>
            <article className={styles.processStep}>
              <span className={styles.stepIndex}>04</span>
              <h3 className={styles.stepTitle}>
                {t("process.steps.scale.title")}
              </h3>
              <p className={styles.stepText}>{t("process.steps.scale.text")}</p>
            </article>
          </div>
        </section>

        <section
          className={styles.section}
          id="stack"
          aria-labelledby="stack-title"
        >
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>{t("stack.eyebrow")}</p>
            <h2 className={styles.sectionTitle} id="stack-title">
              {t("stack.title")}
            </h2>
            <p className={styles.sectionText}>{t("stack.text")}</p>
          </div>
          <div className={styles.stackGrid}>
            <span className={styles.stackTag}>React Native</span>
            <span className={styles.stackTag}>Flutter</span>
            <span className={styles.stackTag}>Next.js</span>
            <span className={styles.stackTag}>Node.js</span>
            <span className={styles.stackTag}>Python</span>
            <span className={styles.stackTag}>TensorFlow</span>
            <span className={styles.stackTag}>OpenAI</span>
            <span className={styles.stackTag}>AWS</span>
            <span className={styles.stackTag}>Vercel</span>
            <span className={styles.stackTag}>PostgreSQL</span>
          </div>
        </section>

        <section
          className={styles.section}
          id="insights"
          aria-labelledby="insights-title"
        >
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>{t("insights.eyebrow")}</p>
            <h2 className={styles.sectionTitle} id="insights-title">
              {t("insights.title")}
            </h2>
            <p className={styles.sectionText}>{t("insights.text")}</p>
          </div>
          <div className={`${styles.cards} ${styles.stagger}`}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>
                {t("insights.portfolio.title")}
              </h3>
              <p className={styles.cardText}>{t("insights.portfolio.text")}</p>
              <Link className={styles.inlineLink} href="/portfolio">
                {t("insights.portfolio.link")}
              </Link>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>
                {t("insights.services.title")}
              </h3>
              <p className={styles.cardText}>{t("insights.services.text")}</p>
              <Link className={styles.inlineLink} href="/services">
                {t("insights.services.link")}
              </Link>
            </article>
          </div>
        </section>

        <section className={styles.cta} id="contato">
          <div className={styles.ctaContent}>
            <p className={styles.sectionEyebrow}>{t("contact.eyebrow")}</p>
            <h2 className={styles.ctaTitle}>{t("contact.title")}</h2>
            <p className={styles.ctaText}>{t("contact.text")}</p>
          </div>
          <div className={styles.ctaActions}>
            <a
              className={styles.primaryButton}
              href={`mailto:${t("contact.cta")}`}
            >
              {t("contact.cta")}
            </a>
            <a className={styles.secondaryButton} href="#home">
              {t("contact.backToTop")}
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerRow}>
          <span className={styles.footerBrand}>Jaguaretech</span>
          <span className={styles.footerText}>{t("footer.tagline")}</span>
        </div>
        <div className={styles.footerRow}>
          <span className={styles.footerText}>{t("footer.location")}</span>
          <div className={styles.footerLinks}>
            <a href={`mailto:${t("contact.cta")}`}>Email</a>
            <a href="#servicos">{t("nav.services")}</a>
            <Link href="/services">{t("footer.servicesLink")}</Link>
            <Link href="/portfolio">{t("footer.portfolioLink")}</Link>
            <a href="#contato">{t("nav.contact")}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
