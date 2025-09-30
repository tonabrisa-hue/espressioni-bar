import styles from "@/styles/features.module.css";

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles["feat-grid"]}>
        
        <div className={styles["feat-card"]}>
          <img src="/branding/menu.png" alt="Menu sob medida" className={styles.icon} />
          <h3 className={styles["feat-title"]}>Menu sob medida</h3>
          <p className={styles["feat-desc"]}>
           Clássicos perfeitos e criações autorais exclusivas, escolhidos por você no dia da degustação, garantindo uma experiência única e personalizada para o seu evento.
          </p>
        </div>

        <div className={styles["feat-card"]}>
          <img src="/branding/experiencia.png" alt="Experiência completa" className={styles.icon} />
          <h3 className={styles["feat-title"]}>Experiência completa</h3>
          <p className={styles["feat-desc"]}>
Estrutura, taças de vidro, frutas, condimentos e insumos — tudo incluso para que você aproveite sem preocupações.
          </p>
        </div>

        <div className={styles["feat-card"]}>
          <img src="/branding/medalhapremium.png" alt="Padrão Eternize" className={styles.icon} />
          <h3 className={styles["feat-title"]}>Padrão Eternize</h3>
          <p className={styles["feat-desc"]}>
            100% personalizado no tema do seu evento, com apresentação em projeto 3D e materiais de altíssima qualidade.
          </p>
        </div>

      </div>
    </section>
  );
}
