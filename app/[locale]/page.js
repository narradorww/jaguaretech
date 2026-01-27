import LanguageSwitcher from "../components/LanguageSwitcher";
import { setRequestLocale, getTranslations } from "next-intl/server";
import styles from "../page.module.css";

export default async function Home({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");
// ... imports and component setup

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jaguaretech",
    url: "https://jaguaretech.com.br",
    logo: "https://jaguaretech.com.br/hero-jaguaretch.png",
    description: t("hero.lede"),
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "contato@jaguaretch.com.br",
      contactType: "customer service",
    },
    sameAs: [
      "https://www.linkedin.com/company/jaguaretech",
      "https://twitter.com/jaguaretech",
    ],
  };

  return (
    <div className={styles.page}>
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
          <a href="#contato">{t("nav.contact")}</a>
          <LanguageSwitcher />
        </nav>
        <a
          className={styles.headerCta}
          href="mailto:contato@jaguaretch.com.br"
        >
          {t("nav.letsTalk")}
        </a>
      </header>

      <main className={styles.main}>
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
                poster="/hero-jaguaretch.png"
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
          itemScope
          itemType="https://schema.org/Service"
        >
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>{t("services.eyebrow")}</p>
            <h2 className={styles.sectionTitle}>{t("services.title")}</h2>
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

        <section className={styles.section} id="processo">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>{t("process.eyebrow")}</p>
            <h2 className={styles.sectionTitle}>{t("process.title")}</h2>
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

        <section className={styles.section} id="stack">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>{t("stack.eyebrow")}</p>
            <h2 className={styles.sectionTitle}>{t("stack.title")}</h2>
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

        <section className={styles.cta} id="contato">
          <div className={styles.ctaContent}>
            <p className={styles.sectionEyebrow}>{t("contact.eyebrow")}</p>
            <h2 className={styles.ctaTitle}>{t("contact.title")}</h2>
            <p className={styles.ctaText}>{t("contact.text")}</p>
          </div>
          <div className={styles.ctaActions}>
            <a
              className={styles.primaryButton}
              href="mailto:contato@jaguaretch.com.br"
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
            <a href="mailto:contato@jaguaretch.com.br">Email</a>
            <a href="#servicos">{t("nav.services")}</a>
            <a href="#contato">{t("nav.contact")}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
