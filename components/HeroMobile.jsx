// components/HeroMobile.jsx
import styles from "@/styles/HeroMobile.module.css";

export default function HeroMobile() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <span className={styles.subtitle}>Novo conceito em bar temático</span>
        <h1 className={styles.title}>
          Drinks autorais, <br />
          experiência <span className={styles.gold}>imersiva</span> <br />
          e uma <span className={styles.gold}>estrutura personalizada</span>.
        </h1>
        <p className={styles.description}>
          Um bar temático 100% personalizado para o seu evento. Do design do balcão ao menu, tudo harmonizado
          com o tema da festa.
        </p>
        <div className={styles.ctaGroup}>
          <a href="#contato" className={styles.ctaGold}>
            Solicitar Orçamento
          </a>
          <a href="#portfolio" className={styles.cta}>
            Ver portfólio
          </a>
        </div>
      </div>

      <div className={styles.heroMedia}>
        <img src="/branding/hero-mobile.jpg" alt="Eternize Espressioni Bar" />
      </div>
    </section>
  );
}
