// pages/index.js
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroMobile from "../components/HeroMobile";
import Features from "../components/Features";
import History from "../components/History";
import Chopp from "../components/Chopp";
import Pacotes from "../components/Pacotes";
import Footer from "../components/Footer";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // já checa ao carregar a página
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />
      {isMobile ? <HeroMobile /> : <Hero />}
      <Features />
      <History />
      <Chopp />
      <Pacotes />
      <Footer />
    </>
  );
}
