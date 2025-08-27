// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* SEO Tags */}
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Eternize Espressioni Bar – Bar cenográfico 100% personalizado no tema do seu evento. Drinks autorais e atendimento premium."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Eternize Espressioni Bar" />
        <meta
          property="og:description"
          content="Bar cenográfico 100% personalizado no tema do seu evento. Drinks autorais e atendimento premium."
        />
        <meta
          property="og:image"
          content="/branding/eternize-espressioni-logo.png"
        />
        <meta property="og:url" content="https://seu-dominio.com.br" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eternize Espressioni Bar" />
        <meta
          name="twitter:description"
          content="Bar cenográfico 100% personalizado no tema do seu evento. Drinks autorais e atendimento premium."
        />
        <meta
          name="twitter:image"
          content="/branding/eternize-espressioni-logo.png"
        />

        {/* Google Ads Tag Global */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11296263507"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11296263507');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
