import Script from "next/script";
import { useEffect, useRef } from "react";

export default function MyApp({ Component, pageProps }) {
  // ❗️Hook no topo do componente (fora do useEffect)
  const lastFire = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onClick = (e) => {
      const target = e.target.closest('a, button');
      if (!target) return;

      const href = target.getAttribute('href') || '';
      const isWhats = /wa\.me|api\.whatsapp\.com/i.test(href);
      if (!isWhats) return;

      // debounce 500ms
      const now = Date.now();
      if (now - lastFire.current < 500) return;
      lastFire.current = now;

      const payload = {
        send_to: 'AW-11296263507/46Q4CMSb_o4bENOavYoq',
        value: 1.0,
        currency: 'BRL',
      };

      if (typeof window.gtag === "function") {
        window.gtag('event', 'conversion', payload);
      } else if (navigator.sendBeacon) {
        const url = 'https://www.google-analytics.com/g/collect';
        const data = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(url, data);
      }
    };

    // captura antes da navegação
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return (
    <>
      {/* Global Site Tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-11296263507"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || function(){dataLayer.push(arguments);};
          gtag('js', new Date());
          gtag('config', 'AW-11296263507');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
