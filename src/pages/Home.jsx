import Animate from "../Animate";
import AboutSection from "../components/AboutSection/AboutSection";
import Banner from "../components/Banner/Banner";
import ContactSection from "../components/ContactSection/ContactSection";
import FeatureServices from "../components/FeatureServices/FeatureServices";
import Features from "../components/Features/Features";
import OurWorks from "../components/OurWorks/OurWorks";
import PageHeader from "../components/PageHeader/PageHeader";
import PrevWork from "../components/PrevWork/PrevWork";
import ServiceCount from "../components/ServiceCount/ServiceCount";
import Testimonials from "../components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Animate>
        <PageHeader title="Home" />
        <Banner />
        <OurWorks />
        <AboutSection />
        <FeatureServices />
        <Features />
        <PrevWork />
        <ServiceCount />
        <Testimonials />
        <ContactSection />
      </Animate>
    </>
  );
}
