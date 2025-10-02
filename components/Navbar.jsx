import { useEffect, useState } from "react";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 🔴 Não renderiza nada no mobile
  if (isMobile) {
    return null;
  }

  return (
    <header className={styles.header}>
      <div className={styles.navInner}>
        {/* Logo */}
        <a href="/" aria-label="Página inicial">
          <img
            src="/branding/logo-eternize.png"
            alt="Eternize Espressioni"
            className={styles.logoMain}
          />
        </a>

        {/* Desktop Menu */}
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
