import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import CtaBand from "@/components/landing/CtaBand";
import Footer from "@/components/landing/Footer";

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <CtaBand />
      <Footer />
    </main>
  );
}