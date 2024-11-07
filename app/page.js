import react from "react";
import  Hero from "./Component/homeComponent/hero";
import ThirdSection from './Component/homeComponent/thirdSection'
import ForthSection from './Component/homeComponent/forthSection'
import FifthSection from './Component/homeComponent/fifthSection'
import SixthSection from './Component/homeComponent/sixthSection'
import Footer from "./Component/footer";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Hero />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
      <Toaster />
    </>
  );
}
