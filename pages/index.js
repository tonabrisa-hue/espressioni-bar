import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import History from "../components/History";
import Chopp from "../components/Chopp";
import Pacotes from "../components/Pacotes"; // se já tiver pronto
import Footer from "../components/Footer"; // 🔥 importa o Footer

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <History />
      <Chopp />
      <Pacotes />
      <Footer />   {/* 👈 rodapé final da página */}
    </>
  );
}
