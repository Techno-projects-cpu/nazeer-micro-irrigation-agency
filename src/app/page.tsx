import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Standards } from "@/components/Standards";
import { Products } from "@/components/Products";
import { Field } from "@/components/Field";
import { Process } from "@/components/Process";
import { Savings } from "@/components/Savings";
import { Automobile } from "@/components/Automobile";
import { Reasons } from "@/components/Reasons";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Story />
        <Standards />
        <Products />
        <Field />
        <Process />
        <Savings />
        <Automobile />
        <Reasons />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
