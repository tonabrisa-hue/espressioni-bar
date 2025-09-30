import styles from "@/styles/Hero.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Importa CSS do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Hero() {
  return (
    <section className={styles.hero} id="topo">
      <div className={styles.heroGrid}>
        {/* Texto */}
        <div className={styles.copy}>
          <span className={styles.heroBadgeHighlight}>
            NOVO CONCEITO EM BAR TEMÁTICO
          </span>

          <h1 className={styles.title}>
            Drinks autorais,
            <br />
            experiência imersiva
            <br />e uma{" "}
            <span className={styles.gold}>estrutura personalizada.</span>
          </h1>

          <p className={`${styles.lead} ${styles.subHighlight}`}>
            <strong>Um bar temático 100% personalizado para o seu evento.</strong>
          </p>

          <p className={styles.lead}>
            Do design do balcão ao menu, tudo harmonizado com o seu tema.
            Clássicos perfeitos, criações exclusivas e operação completa — sempre
            com atenção aos detalhes e insumos de alta qualidade.
          </p>

          <p className={`${styles.lead} ${styles.small}`}>
            Drinks clássicos e autorais, serviço premium e visual instagramável —
            do briefing ao brinde final. 🥂
          </p>

          <div className={styles.ctaRow}>
<a
  href="https://wa.me/556592619998?text=Olá%2C%20quero%20um%20orçamento%20para%20o%20Espressioni%20Bar!"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.ctaButton}
>
  Solicitar Orçamento
</a>
            <a className={styles.btnGhost} href="#portfolio">
              Ver portfólio
            </a>
          </div>
        </div>

        {/* Visual + Carrossel + Medalha */}
        <div className={styles.visual}>
          <div className={styles.cardVisual}>
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 7000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation
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
                <video
                  className={styles.heroVideo}
                  src="/branding/bar-video3-optimized.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/branding/espressioni-bar3.jpg"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className={styles.heroVideo}
                  src="/branding/foto-bar1.jpg"
                  alt="Espressioni Bar em evento"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className={styles.heroVideo}
                  src="/branding/foto-bar2.jpg"
                  alt="Detalhe do bar personalizado"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className={styles.heroVideo}
                  src="/branding/foto-bar3.jpg"
                  alt="Equipe Eternize Espressioni em ação"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <img
            src="/branding/medalha-100.png"
            alt="100% Personalizado"
            className={styles.medalha}
          />

          <div className={styles.glow} />
        </div>
      </div>
    </section>
  );
}
