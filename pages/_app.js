import MetaPixel from "@/components/MetaPixel";
import GoogleTag from "@/components/GoogleTag";

// importa apenas os estilos globais que realmente são globais
import "@/styles/globals.css";
import "@/styles/layout.css";
import "@/styles/Navbar.module.css";
import "@/styles/features.css";
import "@/styles/footer.css";

// os arquivos que viraram CSS Modules NÃO entram aqui (Hero, History, Chopp).
// eles serão importados diretamente dentro de cada componente.
 
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <MetaPixel />
      <GoogleTag />
      <Component {...pageProps} />
    </>
  );
}
