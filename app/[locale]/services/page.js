import LanguageSwitcher from "../../components/LanguageSwitcher";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "../../../src/i18n/routing";
import { buildMetadata } from "../../../src/lib/seo";
import styles from "../../page.module.css";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Meta" });
  const keywords = t("services.keywords")
    .split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);

  return buildMetadata({
    locale,
    title: t("services.title"),
    description: t("services.description"),
    keywords,
    path: "/services",
    imageAlt: "Jaguaretech custom software development services",
  });
}

export default async function Services({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const home = await getTranslations("Home");
  const isPt = locale === "pt";

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
        <section className={styles.contentHero} aria-labelledby="services-title">
          <p className={styles.eyebrow}>{home("nav.services")}</p>
          <h1 className={styles.contentTitle} id="services-title">
            {isPt
              ? "Desenvolvimento de software personalizado, IA e integracao de sistemas"
              : "Custom software development, AI software development, and staff augmentation"}
          </h1>
          <p className={styles.contentLead}>
            {isPt
              ? "Somos um software development company que entrega solucoes tecnologicas empresariais com squads de engenharia senior. Criamos produtos mobile-first, plataformas de IA e integracao de sistemas que escalam com seguranca."
              : "We are a software development company delivering AI software development, mobile apps, and enterprise system integration. Our software developers work in senior squads that scale safely and fast."}
          </p>
          <div className={styles.contentMeta}>
            <span className={styles.contentPill}>
              {isPt ? "Desenvolvimento de software" : "Software development"}
            </span>
            <span className={styles.contentPill}>
              {isPt ? "IA aplicada" : "AI software development"}
            </span>
            <span className={styles.contentPill}>
              {isPt ? "Staff augmentation" : "Staff augmentation services"}
            </span>
          </div>
        </section>

        <section className={styles.contentBody}>
          <article className={styles.contentArticle}>
            <h2>
              {isPt
                ? "Desenvolvimento de software personalizado"
                : "Custom software development"}
            </h2>
            <p>
              {isPt
                ? "Desenhamos produtos completos, do discovery ao lancamento. Construimos arquitetura, UI, APIs e dados com foco em performance, confiabilidade e crescimento."
                : "We design complete products from discovery to launch. We build architecture, UI, APIs, and data pipelines focused on performance, reliability, and growth."}
            </p>
            <ul className={styles.contentList}>
              <li>
                {isPt
                  ? "Experiencias mobile-first e plataformas web de alta performance."
                  : "Mobile-first experiences and high-performance web platforms."}
              </li>
              <li>
                {isPt
                  ? "Roadmap tecnico alinhado a resultados de negocio."
                  : "Technical roadmaps aligned to business outcomes."}
              </li>
              <li>
                {isPt
                  ? "Design system, QA continuo e observabilidade."
                  : "Design systems, continuous QA, and observability."}
              </li>
            </ul>
          </article>

          <article className={styles.contentArticle}>
            <h2>{isPt ? "AI software development" : "AI software development"}</h2>
            <p>
              {isPt
                ? "Criamos sistemas inteligentes com LLMs, visao computacional e automacao. A IA entra na jornada do usuario com governanca, seguranca e resultados mensuraveis."
                : "We build intelligent systems with LLMs, computer vision, and automation. AI enters the user journey with governance, security, and measurable outcomes."}
            </p>
            <ul className={styles.contentList}>
              <li>
                {isPt
                  ? "Copilotos e agentes para acelerar operacoes."
                  : "Copilots and agents to accelerate operations."}
              </li>
              <li>
                {isPt
                  ? "MLOps, monitoramento de drift e auditoria."
                  : "MLOps, drift monitoring, and audit trails."}
              </li>
              <li>
                {isPt
                  ? "Integração com dados internos e stack existente."
                  : "Integration with internal data and existing stacks."}
              </li>
            </ul>
          </article>

          <article className={styles.contentArticle}>
            <h2>
              {isPt ? "Integracao de sistemas" : "System integration"}
            </h2>
            <p>
              {isPt
                ? "Unificamos dados e processos entre ERPs, CRMs, gateways de pagamento e apps mobile. Garantimos rastreabilidade, seguranca e resiliencia."
                : "We unify data and processes across ERPs, CRMs, payment gateways, and mobile apps. We deliver traceability, security, and resilience."}
            </p>
            <ul className={styles.contentList}>
              <li>
                {isPt
                  ? "APIs seguras com controle de acesso e logs."
                  : "Secure APIs with access control and logging."}
              </li>
              <li>
                {isPt
                  ? "Orquestracao de dados e integrações em tempo real."
                  : "Real-time integrations and data orchestration."}
              </li>
              <li>
                {isPt
                  ? "Arquitetura pronta para novas unidades e mercados."
                  : "Architecture ready for new business units and markets."}
              </li>
            </ul>
          </article>

          <article className={styles.contentArticle}>
            <h2>
              {isPt ? "Staff augmentation services" : "Staff augmentation services"}
            </h2>
            <p>
              {isPt
                ? "Reforcamos seu time com engenheiros, designers e especialistas em IA. Voce ganha velocidade sem perder qualidade, mantendo o controle tecnico do produto."
                : "We augment your team with engineers, designers, and AI specialists. You gain speed without losing quality while keeping technical control of the product."}
            </p>
            <p>
              {isPt ? (
                <>
                  Veja exemplos reais no nosso
                  {" "}
                  <Link href="/portfolio">portfólio de projetos</Link>.
                </>
              ) : (
                <>
                  Explore real outcomes in our
                  {" "}
                  <Link href="/portfolio">project portfolio</Link>.
                </>
              )}
            </p>
          </article>
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
