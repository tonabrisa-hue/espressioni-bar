import styles from "@/styles/Footer.module.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoArea}>
          <img src="/branding/logo-eternize.png" alt="Eternize Espressioni" />
          <p>Transformando eventos em experiências inesquecíveis.</p>
        </div>

        {/* Links rápidos */}
        <div className={styles.links}>
          <h4>Links</h4>
          <ul>
            <li><a href="#hero">Início</a></li>
            <li><a href="#historia">Nossa História</a></li>
            <li><a href="#chopp">Painel de Chopp</a></li>
            <li><a href="#pacotes">Pacotes</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div className={styles.contact}>
          <h4>Contato</h4>
          <p>
            Nova Mutum - MT <br />
            <a href="tel:+556592619998">+55 (65) 9 2619-9998</a>
          </p>
          <div className={styles.social}>
            <a href="https://wa.me/556592619998" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com/eternizeespressioni" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.copy}>
        <p>© {new Date().getFullYear()} Eternize Espressioni. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
