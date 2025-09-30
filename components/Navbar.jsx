import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.navInner}>
        
        {/* Logo */}
        <img 
          src="/branding/logo-eternize.png" 
          alt="Eternize Espressioni" 
          className={styles.logoMain} 
        />

        {/* Menu */}
        <nav className={styles.menu}>
          <a href="https://drive.google.com/file/d/1c_Ie-BvUkEZpczDx8QProIJOrCM9LSLy/view?usp=sharing" target="_blank" rel="noreferrer">
            Drinks
          </a>
          <a href="#pacotes">
            Pacotes
          </a>
          <a href="#contato">Contato</a>
          <a href="https://www.instagram.com/eternizeespressioni/" target="_blank" rel="noreferrer">
            @eternizeespressioni
          </a>
          <a href="https://www.instagram.com/eternizenm/" target="_blank" rel="noreferrer">
            @eternizenm
          </a>
        </nav>

        {/* Botão WhatsApp */}
        <a
          href="https://wa.me/556592619998?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento!"
          className={styles.btnWa}
          target="_blank"
          rel="noreferrer"
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
