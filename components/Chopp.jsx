import styles from "@/styles/Chopp.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Chopp() {
  return (
    <section className={styles.history} id="chopp">
      {/* Título com divisor */}
      <div className={styles.sectionDivider}>
        <h2>Painel de Chopp</h2>
      </div>

      <div className={styles.historyGrid}>
        {/* Texto à esquerda */}
        <div className={styles.copy}>
          <p className={styles.choppText}>
            Mais do que praticidade: o <strong>Painel de Chopp Eternize</strong> é uma exclusividade
            pensada para impactar visualmente e trazer uma experiência moderna e personalizada
            para o seu evento. Do primeiro gole ao último detalhe, garantimos elegância e
            sofisticação que encantam seus convidados.
          </p>

          {/* Preço e botão */}
<div className={styles.priceBox}>
  <p className={styles.price}>R$ 650,00</p>
  <a
    href="https://wa.me/556592619998?text=Ol%C3%A1,%20quero%20reservar%20o%20Painel%20de%20Chopp!"
    className={styles.ctaButton}
    target="_blank"
    rel="noopener noreferrer"
  >
    Reservar agora pelo WhatsApp
  </a>
</div>
        </div>

        {/* Carrossel à direita */}
        <div className={styles.visual}>
          <div className={styles.cardVisual}>
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation
              loop
              className={styles.historySwiper}
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <img
                  className={styles.historyMedia}
                  src="/branding/chopp1.jpg"
                  alt="Painel de Chopp 1"
                />
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <img
                  className={styles.historyMedia}
                  src="/branding/chopp2.jpg"
                  alt="Painel de Chopp 2"
                />
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <video
                  className={styles.historyVideo}
                  src="/branding/chopp-video1.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/branding/chopp1.jpg"
                />
              </SwiperSlide>

              {/* Slide 4 */}
              <SwiperSlide>
                <video
                  className={styles.historyVideo}
                  src="/branding/chopp-video2.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/branding/chopp2.jpg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
