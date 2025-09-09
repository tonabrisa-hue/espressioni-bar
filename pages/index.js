export default function Home() {
  const waLink =
    "https://wa.me/556592619998?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20para%20o%20Espressioni%20Bar!";
  const instaLink = "https://instagram.com/eternizenm";
  const portfolioLink =
    "https://drive.google.com/file/d/1c_Ie-BvUkEZpczDx8QProIJOrCM9LSLy/view?usp=sharing";
  const eternizeDecorLink = "https://instagram.com/eternizenm";

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="wrap nav-inner">
          <img
            src="/branding/eternize-espressioni-logo.png"
            alt="Eternize Espressioni"
            className="logo-main"
          />

          <nav className="nav-menu">
            <a href="#menu">Menu</a>
            <a href={portfolioLink} target="_blank" rel="noreferrer">
              Drinks
            </a>
            <a href="#contato">Contato</a>
            <a href={instaLink} target="_blank" rel="noreferrer">
              @eternizenm
            </a>
          </nav>

          <a className="btn-wa-top" href={waLink} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </div>
        <div className="accent-bar" />
      </header>

      {/* HERO */}
      <section className="hero" id="topo">
        <div className="wrap hero-grid">
          {/* Texto */}
          <div className="copy">
            <span className="badge">✨ novo conceito em bar temático</span>

            <h1 className="title">
              Drinks autorais,
              <br />
              experiência imersiva
              <br />e um <span className="gold">atendimento memorável.</span>
            </h1>

            <p className="lead">
              <strong>Espressioni Bar</strong> é um{" "}
              <strong>bar temático 100% personalizado para o seu evento</strong> —
              do design do balcão ao menu, tudo harmonizado com o seu tema.
              Clássicos perfeitos, criações exclusivas e operação completa.
            </p>

            <p className="lead small">
              Drinks clássicos e autorais, serviço premium e visual instagramável —
              do briefing ao brinde final. 🥂
            </p>

            <div className="cta-row">
              <a className="btn-cta" href={waLink} target="_blank" rel="noreferrer">
                Solicitar orçamento
              </a>
              <a className="btn-ghost" href={portfolioLink} target="_blank" rel="noreferrer">
                Ver portfólio
              </a>
            </div>
          </div>

          {/* Visual + Medalha */}
          <div className="visual">
            <div className="card-visual">
              <video
                className="hero-video"
                src="/branding/bar-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                poster="/branding/espressioni-bar.jpg"
              />
            </div>

            {/* Medalha 100% Personalizado (imagem enviada) */}
            <img
              src="/branding/medalha-100.png"
              alt="100% Personalizado"
              className="medalha"
            />

            <div className="glow" />
          </div>
        </div>
      </section>

      {/* DESTAQUES (entre hero e história) */}
      <section className="features" id="destaques">
        <div className="wrap feat-grid">
          {/* Card 1 */}
          <article className="feat-card">
            <div className="ico-wrap">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path
                  d="M3 4h18l-7.5 7.5V20h3M12 20H9v-8.5L3 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7h10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="feat-title">Menu sob medida</h3>
              <p className="feat-desc">
                Clássicos perfeitos e autorais exclusivos que conversam com o tema do seu
                evento.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="feat-card">
            <div className="ico-wrap">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path
                  d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M9 11l2 2 4-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="feat-title">Experiência completa</h3>
              <p className="feat-desc">
                Balcão, bar tools, copos/taças, canudos e guardanapos: a operação vai pronta
                para servir.
              </p>
            </div>
          </article>

          {/* Card 3 – texto ajustado */}
          <article className="feat-card">
            <div className="ico-wrap">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path
                  d="M12 2l2.3 5.1 5.7.6-4.2 3.8 1.2 5.5-5-2.7-5 2.7 1.2-5.5L4 7.7l5.7-.6L12 2z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="feat-title">Padrão Eternize</h3>
              <p className="feat-desc">
                Personalização e alta qualidade dos materiais.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="history" id="historia">
        <div className="wrap hist-grid">
          <figure
            className="team-photo"
            aria-label="Equipe Eternize Espressioni"
          />
          <div>
            <h2 className="section-title">Nossa História</h2>
            <p className="section-sub">
              Meu nome é <strong>Rafael Porto</strong>, designer de interiores e light
              designer. Atuei por nove anos como barman em São Paulo, em casas de alto
              padrão, conquistando certificações e aprendendo com grandes mestres — com
              destaque para meu mentor <strong>Rodrigo Sepúlveda (Chile)</strong>.
            </p>
            <p className="section-sub">
              Junto com minha esposa <strong>Natalia Porto</strong>, da{" "}
              <a href={eternizeDecorLink} target="_blank" rel="noreferrer">
                Eternize Decorações
              </a>
              , unimos estética e direção de arte às montagens de bar. Assim nasceu o{" "}
              <strong>Espressioni Bar</strong>: um bar temático que combina sofisticação,
              design e coquetelaria para transformar cada evento em uma experiência única.
            </p>
            <a
           
            >
            
            </a>
          </div>
        </div>
      </section>

      {/* PAINEL DE CHOPP */}
      <section className="chopp" id="chopp">
        <div className="wrap chopp-grid">
          <div className="chopp-media">
            <video
              className="chopp-video"
              src="/branding/painel-chopp.mp4"
              autoPlay
              muted
              loop
              playsInline
              poster="/branding/painel-chopp.jpg"
            />
          </div>
          <div className="chopp-copy">
            <h2 className="section-title">Painel de Chopp</h2>
            <p className="section-sub">
              Nosso painel de chopp leva elegância e performance ao seu evento: tiragem
              estável, temperatura ideal e um visual que harmoniza com o tema da festa.
            </p>
            <ul className="chopp-list">
              <li>° Chopeira com regulagem fina e vazão constante</li>
             <li>° Estética personalizada conforme o projeto</li>
              <li>° Higienização e operação profissional</li>
            </ul>
            <a className="btn-cta" href={waLink} target="_blank" rel="noreferrer">
              Quero o painel no meu evento
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="contato">
        <div className="wrap foot-flex">
          <p className="foot-copy">
            © {new Date().getFullYear()} Eternize Espressioni — todos os direitos reservados.
          </p>
          <div className="socials">
            <a href={instaLink} target="_blank" rel="noreferrer" className="social insta">
              📸 Instagram
            </a>
            <a href={waLink} target="_blank" rel="noreferrer" className="social wa">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* GLOBAL */}
      <style jsx global>{`
        *{box-sizing:border-box;margin:0;padding:0}
        html,body,#__next{height:100%}
        body{
          background:#000;color:#fff;
          font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
          -webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;
        }
        .wrap{max-width:1200px;margin:0 auto;padding:0 20px}
        a{color:inherit;text-decoration:none}
        .accent-bar{height:3px;background:linear-gradient(90deg,#a855f7,#f59e0b);opacity:.9}
        .gold{background:linear-gradient(180deg,#ffdf6b,#b68a27);-webkit-background-clip:text;background-clip:text;color:transparent}
      `}</style>

      {/* PAGE CSS */}
      <style jsx>{`
        /* NAV */
        .navbar{position:sticky;top:0;background:rgba(5,5,5,.9);backdrop-filter:saturate(140%) blur(6px);z-index:50}
        .nav-inner{display:grid;grid-template-columns:auto 1fr auto;align-items:center;height:86px;gap:18px}
        .logo-main{height:200px;margin-top:-50px;object-fit:contain;filter:drop-shadow(0 3px 12px rgba(0,0,0,.35))}
        .nav-menu{display:flex;gap:28px;margin-top:-50px;justify-self:center}
        .nav-menu a{opacity:.92}
        .nav-menu a:hover{opacity:1}
        .btn-wa-top{
          background:#25D366;color:#0b1a0f;margin-top:-50px;font-weight:800;border-radius:999px;padding:12px 18px;
          box-shadow:0 6px 18px rgba(37,211,102,.28)
        }

        /* HERO GRID */
        .hero{position:relative;padding:46px 0 28px;background:radial-gradient(1200px 500px at 20% -10%,rgba(168,85,247,.18),transparent 60%)}
        .hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:36px;align-items:center}
        .badge{
          display:inline-block;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);
          padding:8px 12px;border-radius:999px;font-size:14px;margin-bottom:14px
        }
        .title{font-weight:900;line-height:1.04;margin-bottom:12px;font-size:clamp(28px,6vw,58px);text-shadow:0 2px 12px rgba(0,0,0,.45)}
        .lead{color:#dcdcdc;font-size:clamp(14px,1.2vw,18px);line-height:1.75;margin-top:10px;max-width:720px}
        .lead.small{opacity:.96}
        .cta-row{margin-top:22px;display:flex;gap:14px;flex-wrap:wrap}
        .btn-cta{
          padding:14px 20px;border-radius:14px;background:#25D366;color:#0b1a0f;font-weight:800;
          box-shadow:0 8px 22px rgba(37,211,102,.26);transition:transform .15s ease,filter .15s ease
        }
        .btn-cta:hover{transform:translateY(-1px);filter:brightness(1.05)}
        .btn-ghost{padding:13px 18px;border-radius:12px;border:1px solid rgba(255,255,255,.16);color:#fff;opacity:.9}
        .btn-ghost:hover{opacity:1;border-color:rgba(255,255,255,.28)}

        /* VISUAL */
        .visual{position:relative}
        .card-visual{
          height:440px;border-radius:22px;overflow:hidden;
          border:1px solid rgba(255,255,255,.08);
          box-shadow:0 25px 60px rgba(0,0,0,.6), inset 0 0 0 1px rgba(255,255,255,.03)
        }
        .hero-video{width:100%;height:100%;object-fit:cover;display:block}
        .glow{
          position:absolute;inset:auto 20px -18px 20px;height:4px;border-radius:999px;
          background:linear-gradient(90deg,#a855f7,#ec4899,#f59e0b);filter:blur(1px);opacity:.75
        }
        .medalha{
          position:absolute;right:18px;bottom:-100px;width:150px;
          filter:drop-shadow(0 8px 18px rgba(0,0,0,.45));z-index:5
        }

        /* FEATURES */
        .features{padding:12px 0 6px}
        .feat-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:24px}
        .feat-card{
          display:flex;gap:14px;align-items:flex-start;background:#131313;border:1px solid rgba(255,255,255,.08);
          border-radius:16px;padding:18px 20px;box-shadow:0 8px 26px rgba(0,0,0,.32)
        }
        .ico-wrap{
          width:42px;height:42px;border-radius:12px;display:grid;place-items:center;
          color:#d4a72c;border:1px solid rgba(212,167,44,.34);
          background:linear-gradient(180deg,rgba(212,167,44,.12),rgba(212,167,44,.04))
        }
        .feat-title{font-size:18px;font-weight:800;margin-top:2px}
        .feat-desc{color:#cfcfcf;margin-top:6px;line-height:1.7}

        /* HISTÓRIA */
        .history{padding:18px 0 28px}
        .hist-grid{display:grid;grid-template-columns:.95fr 1.05fr;gap:28px;align-items:center}
        .team-photo{
          height:340px;border-radius:20px;border:1px solid rgba(255,255,255,.08);
          background:url('/branding/equipe.jpg') center/cover no-repeat;
          box-shadow:0 16px 40px rgba(0,0,0,.45)
        }
        .section-title{font-size:clamp(22px,2.6vw,32px);font-weight:900;margin-bottom:8px}
        .section-sub{color:#d6d6d6;line-height:1.75;max-width:760px}
        .section-sub + .section-sub{margin-top:10px}

        /* CHOPP */
        .chopp{padding:8px 0 38px}
        .chopp-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:28px;align-items:center}
        .chopp-media{
          height:360px;border-radius:22px;overflow:hidden;border:1px solid rgba(255,255,255,.09);
          box-shadow:0 24px 54px rgba(0,0,0,.55)
        }
        .chopp-video{width:100%;height:100%;object-fit:cover;display:block}
        .chopp-list{margin:10px 0 16px 18px;color:#d6d6d6;line-height:1.8}

        /* FOOTER */
        .footer{margin-top:8px;border-top:1px solid rgba(255,255,255,.08);background:#0b0b0b}
        .foot-flex{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:18px 0}
        .foot-copy{font-size:14px;color:#aaa}
        .socials{display:flex;gap:18px}
        .social{font-weight:700}
        .insta{color:#e1306c}.wa{color:#25d366}

        /* RESPONSIVO */
        @media (max-width: 1024px){
          .nav-menu{display:none}
          .btn-wa-top{display:none}
          .hero-grid{grid-template-columns:1fr}
          .visual{order:-1}
          .card-visual{height:330px}
          .medalha{width:130px;bottom:-8px}
          .feat-grid{grid-template-columns:1fr}
          .hist-grid,.chopp-grid{grid-template-columns:1fr}
        }
        @media (max-width: 640px){
          .title{font-size:clamp(30px,9vw,44px)}
          .medalha{width:110px}
        }
      `}</style>
    </>
  );
}
