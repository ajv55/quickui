import Image from "next/image";
import NavBar from "./components/mainPage/nav";
import HeroSection from "./components/mainPage/hero";
import HowItWorksSection from "./components/mainPage/how";
import WhyUsSection from "./components/mainPage/why";
import FeaturesSection from "./components/mainPage/feature";
import ContactSection from "./components/mainPage/contact";
import Footer from "./components/mainPage/footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
