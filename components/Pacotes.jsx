import styles from "@/styles/Pacotes.module.css";

export default function Pacotes() {
  const whatsappNumber = "5565992619998"; // seu número WhatsApp

  // Função que cria o link com mensagem personalizada
  const sendWhatsApp = (pacote) => {
    const msg = `Olá, gostaria de informações sobre o pacote *${pacote}*!`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className={styles.pacotes} id="pacotes">
      <div className={styles.sectionDivider}>
        <h2>Pacotes</h2>
      </div>

      <div className={styles.grid}>
        {/* Pacote Essencial */}
        <div className={styles.card}>
          <img src="/branding/essencial.png" alt="Pacote Essencial" />
          <h3>Essencial</h3>
          <p>
            • De 40 a 120 pessoas <br />
            • Balcão temático personalizado <br />
            • Até 3 bartenders <br />
            • 4 horas de evento <br />
            • 5 drinks inclusos <br />
           Caipifrutas, Vodka/Saquê/Cachaça, Mojito, Passion Mojito, Soda italiana
          </p>
          <div className={styles.price}>R$ 45,00 por pessoa</div>
          <a href={sendWhatsApp("Pacote Essencial")} className={styles.ctaButton}>
            Reservar Pacote Essencial
          </a>
        </div>

        {/* Pacote Experience */}
<div className={styles.card}>
  <div className={styles.badge}>
    ⭐ <span>Mais Vendido</span>
  </div>
<img src="/branding/Experience.png" alt="Pacote Experience" className={styles.packageImage} />
S
  <h3>Experience</h3>
  <div className={styles.ribbon}>Pacote preferido pelos clientes</div>
  <p>
            • A partir de 40 pessoas <br />
            • Estrutura completa personalizada no tema do evento <br />
            • Bartenders conforme o número de convidados <br />
            • 4 horas de evento <br />
            • Cardápio completo
  </p>
  <div className={styles.price}>R$ 65,00 por pessoa</div>
  <a 
    href="https://wa.me/556592619998?text=Quero%20o%20Pacote%20Experience%20(Mais%20Vendido)"
    target="_blank" 
    rel="noopener noreferrer"
    className={styles.ctaButton}
  >
    Reservar agora pelo WhatsApp
  </a>
</div>

        {/* Pacote Carrinho Bar */}
        <div className={styles.card}>
          <img src="/branding/carrinhobar.png" alt="Pacote Carrinho Bar" />
          <h3>Carrinho Bar Exclusive</h3>
          <p>
            • Até 40 pessoas <br />
            • Carrinho bar personalizado <br />
            • 2 bartenders <br />
            • 3 horas de evento <br />
            • 3 drinks inclusos<br />
            <br />
            CARDÀPIOS
          </p>
          <div className={styles.price}>
            R$ 38,00 Essencial <br /> R$ 49,00 Experience
          </div>
          <a href={sendWhatsApp("Carrinho Bar Exclusive")} className={styles.ctaButton}>
            Reservar Carrinho Bar
          </a>
        </div>
      </div>
    </section>
  );
}
