import React from "react";
import CounterSection from "./Components/CounterSection";
import MainSlider from "./Components/MainSlider";
import NewsSection from "./Components/NewsSection";
import PartnerSection from "./Components/PartnerSection";
import ReportSection from "./Components/ReportSection";
import ServiceSectionTwo from "./Components/ServiceSectionTwo";
import ServicesSectionOne from "./Components/ServicesSectionOne";
import SponsorSection from "./Components/SponsorSection";
import TestimonialSection from "./Components/TestimonialSection";
import Scroll from "./Footer/Scroll";
// import Footer from "./Footer/Footer";
// import Navbar from "./Header/Navbar";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <MainSlider />
      <ServicesSectionOne />
      <ServiceSectionTwo />
      <ReportSection />
      <PartnerSection />
      <CounterSection />
      <TestimonialSection />
      <SponsorSection />
      <NewsSection />
      <Scroll />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
