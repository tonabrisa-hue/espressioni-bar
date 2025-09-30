import styles from "@/styles/History.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function History() {
  return (
    <section className={styles.history} id="historia">
      {/* 🔥 Divisor dourado elegante */}
      <div className={styles.sectionDivider}>
        <h2>Nossa História</h2>
      </div>

      <div className={styles.historyGrid}>
        {/* Texto */}
{/* Texto */}
{/* Texto */}
<div className={styles.copy}>
  {/* Divisor elegante já serve como título */}
  <div className={styles.sectionDivider}>

  </div>

  <p className={styles.lead}>
    Meu nome é <strong>Rafael Porto</strong>, designer de interiores e light designer.
    Atuei por nove anos como barman em São Paulo, conquistando certificações e
    aprendendo com grandes mestres — com destaque para meu mentor{" "}
    <strong>Rodrigo Sepulveda (Chile)</strong>.
  </p>

  <p className={styles.lead}>
    Junto com minha esposa <strong>Natalia Porto</strong>, da Eternize Decorações,
    unimos estética e direção de arte às montagens de bar. Assim nasceu o{" "}
    <span className={styles.gold}>Eternize Espressioni</span>: um bar temático que
    combina sofisticação, design e coquetelaria para transformar cada evento em uma
    experiência única.
  </p>

  <p className={styles.lead}>
    Mais do que drinks, oferecemos uma experiência imersiva e sensorial: cada detalhe
    é pensado para encantar — da apresentação do bar às taças e insumos de alta
    qualidade. Nossa missão é transformar o simples ato de brindar em um momento
    memorável e inesquecível.
  </p>
</div>

        {/* Carrossel de imagens e vídeo */}
        <div className={styles.visual}>
          <div className={styles.cardVisual}>
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{ delay: 7000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation
              loop
              className={styles.historySwiper}
            >
              {/* Slide 1 - Imagem */}
              <SwiperSlide>
                <img
                  className={styles.historyMedia}
                  src="/branding/historia1.jpg"
                  alt="História Espressioni 1"
                />
              </SwiperSlide>

              {/* Slide 2 - Imagem */}
              <SwiperSlide>
                <img
                  className={styles.historyMedia}
                  src="/branding/historia2.jpg"
                  alt="História Espressioni 2"
                />
              </SwiperSlide>

              {/* Slide 3 - Vídeo */}
              <SwiperSlide>
                <video
                  className={styles.historyVideo}
                  src="/branding/historia-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/branding/historia2.jpg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
