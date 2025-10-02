import MetaPixel from "@/components/MetaPixel";
import GoogleTag from "@/components/GoogleTag";

// importa apenas os estilos globais
import "@/styles/globals.css";
import "@/styles/layout.css";
import "@/styles/features.css";
import "@/styles/footer.css";

// NÃO importe arquivos *.module.css aqui

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <MetaPixel />
      <GoogleTag />
      <Component {...pageProps} />
    </>
  );
}
