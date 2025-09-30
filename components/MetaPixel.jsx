"use client";
import Script from "next/script";

const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function MetaPixel() {
  if (!pixelId) {
    console.warn("Meta Pixel ID não encontrado");
    return null;
  }

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* ✅ Rastrear todos os cliques em links do WhatsApp */}
      <Script id="meta-pixel-whatsapp" strategy="afterInteractive">
        {`
          document.addEventListener("DOMContentLoaded", function() {
            const links = document.querySelectorAll("a[href*='wa.me'], a[href*='api.whatsapp.com']");
            links.forEach(link => {
              link.addEventListener("click", () => {
                if (typeof fbq !== "undefined") {
                  fbq("track", "Contact", { content_name: "Clique WhatsApp" });
                }
              });
            });
          });
        `}
      </Script>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
