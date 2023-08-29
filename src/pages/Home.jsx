import AboutSection from "../components/AboutSection/AboutSection";
import Banner from "../components/Banner/Banner";
import MarqueeSlide from "../components/MarqueeSlide/MarqueeSlide";
import OurWorks from "../components/OurWorks/OurWorks";

export default function Home() {
  return (
    <>
      <Banner />
      <OurWorks />
      <AboutSection />
      <MarqueeSlide/>
    </>
  );
}
