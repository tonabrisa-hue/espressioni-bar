import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroMobile from "../components/HeroMobile";
import Features from "../components/Features";
import History from "../components/History";
import Chopp from "../components/Chopp";
import Pacotes from "../components/Pacotes";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Desktop */}
      <div className="hideOnMobile">
        <Hero />
      </div>

      {/* Mobile */}
      <div className="showOnMobile">
        <HeroMobile />
      </div>

      <Features />
      <History />
      <Chopp />
      <Pacotes />
      <Footer />
    </>
  );
}
