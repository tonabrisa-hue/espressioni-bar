// components/Navbar.jsx
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.navInner}>
        {/* Logo (link para home) */}
        <a href="/" aria-label="Página inicial">
          <img
            src="/branding/logo-eternize.png"
            alt="Eternize Espressioni"
            className={styles.logoMain}
          />
        </a>

        {/* Menu Desktop */}
        <nav id="primary-navigation" className={styles.menu} role="navigation">
          <a
            href="https://drive.google.com/file/d/1c_Ie-BvUkEZpczDx8QProIJOrCM9LSLy/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Drinks
          </a>
          <a href="#pacotes">Pacotes</a>
          <a href="#contato">Contato</a>
          <a
            href="https://www.instagram.com/eternizeespressioni/"
            target="_blank"
            rel="noreferrer"
          >
            @eternizeespressioni
          </a>
          <a
            href="https://www.instagram.com/eternizenm/"
            target="_blank"
            rel="noreferrer"
          >
            @eternizenm
          </a>
          <a
            href="https://wa.me/556592619998?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento!"
            className={styles.btnWa}
            target="_blank"
            rel="noreferrer"
          >
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
