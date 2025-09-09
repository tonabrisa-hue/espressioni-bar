import MetaPixel from "@/components/MetaPixel";
import GoogleTag from "@/components/GoogleTag";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <MetaPixel />
      <GoogleTag />
      <Component {...pageProps} />
    </>
  );
}
