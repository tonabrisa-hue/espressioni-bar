import styles from "@/styles/Hero.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Importa CSS do Swiper
import "swiper/css";
import "swiper/css/pagination";

export default function HeroMobile() {
  return (
    <section className={styles.heroMobile} id="topo">
      {/* Carrossel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className={styles.heroSwiper}
      >
        <SwiperSlide>
          <video
            className={styles.heroVideo}
            src="/branding/bar-video-optimized.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/branding/espressioni-bar.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <video
            className={styles.heroVideo}
            src="/branding/bar-video2-optimized.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/branding/espressioni-bar2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={styles.heroVideo}
            src="/branding/foto-bar1.jpg"
            alt="Bar em evento"
          />
        </SwiperSlide>
      </Swiper>

      {/* Medalha */}
      <img
        src="/branding/medalha-100.png"
        alt="100% Personalizado"
        className={styles.medalha}
      />

      {/* Texto */}
      <h1 className={styles.heroTitle}>
        Drinks autorais, experiência imersiva <br />
        e uma <span className={styles.gold}>estrutura personalizada.</span>
      </h1>

      <p className={styles.heroSubtitle}>
        Um bar temático 100% personalizado para o seu evento.
      </p>

      <div className={styles.heroButtons}>
        <a
          href="https://wa.me/556592619998?text=Olá%2C%20quero%20um%20orçamento%20para%20o%20Espressioni%20Bar!"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.heroButtonPrimary}
        >
          Solicitar Orçamento
        </a>
        <a href="#portfolio" className={styles.heroButtonSecondary}>
          Ver portfólio
        </a>
      </div>
    </section>
  );
}
