import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoint from "@/components/PainPoint";
import Services from "@/components/Services";
import Differentiators from "@/components/Differentiators";
import SocialProof from "@/components/SocialProof";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <PainPoint />
        <Services />
        <Differentiators />
        <SocialProof />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
