import { SmoothScroll } from "@/components/SmoothScroll";
import { PressFeedback } from "@/components/PressFeedback";
import { IndexRail } from "@/components/IndexRail";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Languages } from "@/components/Languages";
import { Story } from "@/components/Story";
import { Standards } from "@/components/Standards";
import { Field } from "@/components/Field";
import { Products } from "@/components/Products";
import { Epigraph } from "@/components/Epigraph";
import { Process } from "@/components/Process";
import { Water } from "@/components/Water";
import { Savings } from "@/components/Savings";
import { CtaBand } from "@/components/CtaBand";
import { Automobile } from "@/components/Automobile";
import { Reasons } from "@/components/Reasons";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <PressFeedback />
      <IndexRail />
      <Header />
      <main id="main" tabIndex={-1}>
        {/* Cover — plate 01 */}
        <Hero />
        {/* The regional sub-sites, straight under the cover */}
        <Languages />
        {/* 01 */}
        <Story />
        {/* 02 — tonal panel */}
        <Standards />
        {/* 03 — the night band */}
        <Field />
        {/* 04 — the specimen table */}
        <Products />
        {/* Epigraph — the second and last use of statement type */}
        <Epigraph />
        {/* 05 */}
        <Process />
        {/* 06 */}
        <Water />
        {/* 07 — the ledger */}
        <Savings />
        {/* The moss band */}
        <CtaBand />
        {/* 08 */}
        <Automobile />
        {/* 09 */}
        <Reasons />
        {/* 10 */}
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
