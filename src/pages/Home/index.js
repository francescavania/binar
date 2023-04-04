import Banner from "../../components/Banner";
import Hero from "../../components/Hero";
import OurServices from "../../components/OurServices";
import Testimonial from "../../components/Testimonial";
import WhyUs from "../../components/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <Banner />
    </>
  );
}
