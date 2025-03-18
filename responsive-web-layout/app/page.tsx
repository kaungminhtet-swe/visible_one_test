import FooterSection from "./footer-section";
import HeroSection from "./hero-section";
import MainSection from "./main-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <MainSection />
      <FooterSection />
    </div>
  );
}
