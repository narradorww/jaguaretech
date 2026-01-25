import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#home">
          <span className={styles.brandMark} aria-hidden="true" />
          <span className={styles.brandText}>Jaguaretech</span>
        </a>
        <nav className={styles.nav}>
          <a href="#servicos">Servicos</a>
          <a href="#processo">Processo</a>
          <a href="#stack">Stack</a>
          <a href="#contato">Contato</a>
        </nav>
        <a
          className={styles.headerCta}
          href="mailto:contato@jaguaretch.com.br"
        >
          Vamos conversar
        </a>
      </header>

      <main className={styles.main}>
        <section className={styles.hero} id="home">
          <div className={styles.heroIntro}>
            <p className={styles.eyebrow}>Estudio de software</p>
            <h1 className={styles.heroTitle}>
              Mobile e inteligencia artificial para produtos que lideram.
            </h1>
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
            <div className={styles.heroBadge}>Jaguaretech Lab</div>
          </div>
          <p className={styles.heroLede}>
            A Jaguaretech transforma visoes em apps e plataformas inteligentes.
            Construimos experiencias mobile-first e sistemas de IA que aceleram
            negocios, automatizam decisoes e encantam usuarios.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#contato">
              Iniciar projeto
            </a>
            <a className={styles.secondaryButton} href="#servicos">
              Ver especialidades
            </a>
          </div>
          <div className={styles.heroMeta}>
            <div className={styles.metaCard}>
              <span className={styles.metaTitle}>Mobile first</span>
              <span className={styles.metaText}>
                Apps nativos e multiplataforma com UX precisa.
              </span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaTitle}>IA aplicada</span>
              <span className={styles.metaText}>
                Modelos generativos, visao computacional e automacao.
              </span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaTitle}>Entrega ponta a ponta</span>
              <span className={styles.metaText}>
                Do discovery ao deploy continuo com time senior.
              </span>
            </div>
          </div>
        </section>

        <section className={styles.section} id="servicos">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Especialidades</p>
            <h2 className={styles.sectionTitle}>
              Solucoes digitais com identidade futurista.
            </h2>
            <p className={styles.sectionText}>
              Somos especialistas em mobile e inteligencia artificial. Unimos
              engenharia, design e dados para construir produtos sob medida que
              crescem com o seu negocio.
            </p>
          </div>
          <div className={`${styles.cards} ${styles.stagger}`}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Apps Mobile</h3>
              <p className={styles.cardText}>
                Experiencias fluidas para iOS, Android e multiplataforma.
              </p>
              <ul className={styles.cardList}>
                <li>React Native, Flutter e Swift/Kotlin</li>
                <li>Arquitetura offline-first e push inteligente</li>
                <li>Design system e performance de alto nivel</li>
              </ul>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Sistemas de IA</h3>
              <p className={styles.cardText}>
                Inteligencia aplicada para automatizar e prever resultados.
              </p>
              <ul className={styles.cardList}>
                <li>LLMs, agentes e copilotos de negocio</li>
                <li>Visao computacional e recomendacao</li>
                <li>MLOps, governanca e monitoramento</li>
              </ul>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Plataformas Web</h3>
              <p className={styles.cardText}>
                Front-ends performaticos e APIs seguras para escalar.
              </p>
              <ul className={styles.cardList}>
                <li>Next.js, dashboards e portais de dados</li>
                <li>APIs, integracoes e automacao de processos</li>
                <li>Observabilidade e deploy continuo</li>
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.section} id="processo">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Metodo</p>
            <h2 className={styles.sectionTitle}>
              Um processo claro para projetos ambiciosos.
            </h2>
            <p className={styles.sectionText}>
              Trabalhamos com ciclos curtos e visibilidade total. Da estrategia
              ao produto final, voce acompanha cada entrega.
            </p>
          </div>
          <div className={`${styles.process} ${styles.stagger}`}>
            <article className={styles.processStep}>
              <span className={styles.stepIndex}>01</span>
              <h3 className={styles.stepTitle}>Discovery profundo</h3>
              <p className={styles.stepText}>
                Mapeamos jornada, dados e objetivos para guiar o produto.
              </p>
            </article>
            <article className={styles.processStep}>
              <span className={styles.stepIndex}>02</span>
              <h3 className={styles.stepTitle}>Prototipo e arquitetura</h3>
              <p className={styles.stepText}>
                Definimos fluxos, stack e modelos de IA com seguranca.
              </p>
            </article>
            <article className={styles.processStep}>
              <span className={styles.stepIndex}>03</span>
              <h3 className={styles.stepTitle}>Build acelerado</h3>
              <p className={styles.stepText}>
                Sprints com entregas semanais e feedback constante.
              </p>
            </article>
            <article className={styles.processStep}>
              <span className={styles.stepIndex}>04</span>
              <h3 className={styles.stepTitle}>Escala e evolucao</h3>
              <p className={styles.stepText}>
                Monitoramento, evolucoes e IA treinada com dados reais.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.section} id="stack">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Stack</p>
            <h2 className={styles.sectionTitle}>
              Tecnologia moderna para resultados consistentes.
            </h2>
            <p className={styles.sectionText}>
              Selecionamos as melhores ferramentas para cada desafio, com foco
              em confiabilidade e velocidade de entrega.
            </p>
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
            <p className={styles.sectionEyebrow}>Contato</p>
            <h2 className={styles.ctaTitle}>
              Pronto para criar algo inesquecivel?
            </h2>
            <p className={styles.ctaText}>
              Conte sua ideia e vamos desenhar um caminho rapido para validar,
              construir e escalar.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a
              className={styles.primaryButton}
              href="mailto:contato@jaguaretch.com.br"
            >
              contato@jaguaretch.com.br
            </a>
            <a className={styles.secondaryButton} href="#home">
              Voltar ao topo
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerRow}>
          <span className={styles.footerBrand}>Jaguaretech</span>
          <span className={styles.footerText}>
            Desenvolvimento mobile e inteligencia artificial.
          </span>
        </div>
        <div className={styles.footerRow}>
          <span className={styles.footerText}>Brasil - remoto</span>
          <div className={styles.footerLinks}>
            <a href="mailto:contato@jaguaretch.com.br">Email</a>
            <a href="#servicos">Servicos</a>
            <a href="#contato">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
