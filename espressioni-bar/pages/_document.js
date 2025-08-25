// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Eternize Espressioni Bar — Bar cenográfico 100% personalizado no tema do seu evento. Drinks autorais, experiência imersiva e atendimento memorável."
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Eternize Espressioni Bar" />
        <meta
          property="og:description"
          content="Bar cenográfico 100% personalizado no tema do seu evento. Drinks autorais, experiência imersiva e atendimento memorável."
        />
        <meta property="og:image" content="/branding/eternize-espressioni-logo.png" />
        <meta property="og:url" content="https://seu-dominio.com.br" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eternize Espressioni Bar" />
        <meta
          name="twitter:description"
          content="Bar cenográfico 100% personalizado no tema do seu evento. Drinks autorais, experiência imersiva e atendimento memorável."
        />
        <meta name="twitter:image" content="/branding/eternize-espressioni-logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
