import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Story } from "@/components/Story";
import { Quality } from "@/components/Quality";
import { Products } from "@/components/Products";
import { Gallery } from "@/components/Gallery";
import { Process } from "@/components/Process";
import { Calculator } from "@/components/Calculator";
import { Automobile } from "@/components/Automobile";
import { WhyUs } from "@/components/WhyUs";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Quality />
        <Products />
        <Gallery />
        <Process />
        <Calculator />
        <Automobile />
        <WhyUs />
        <Faq />
        <Contact />
      </main>
      <Footer />
      {/* Spacer so the mobile action bar never covers footer content */}
      <div className="h-16 md:hidden" aria-hidden="true" />
      <MobileActionBar />
    </>
  );
}
