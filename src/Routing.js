import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Header/Navbar";
import Home from "./Home";
import AutomotiveInsights from "./MarketInsight/AutomotiveInsights";
import ChemicalsAndMaterials from "./MarketInsight/ChemicalsAndMaterials";
import ConsumerGoods from "./MarketInsight/ConsumerGoods";
import ElectronicsAndSemiconductor from "./MarketInsight/ElectronicsAndSemiconductor";
import FoodAndBeverages from "./MarketInsight/FoodAndBeverages";
import MachineAndEquipment from "./MarketInsight/MachineAndEquipment";
import PharmaAndHealthCare from "./MarketInsight/PharmaAndHealthCare";
import AboutUs from "./Pages/AboutUs";
import BlogAndNews from "./Pages/BlogAndNews";
import ContactUs from "./Pages/ContactUs";
import PressRelease from "./Pages/PressRelease";
import SingleBlog from "./Pages/SingleBlog";

const Routing = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blogandnews" element={<BlogAndNews />} />
        <Route path="/singleblog" element={<SingleBlog />} />
        <Route path="/pressrelease" element={<PressRelease />} />
        <Route path="/chemicalsandmaterials" element={<ChemicalsAndMaterials />} />
        <Route path="/pharmaandhealthcare" element={<PharmaAndHealthCare />} />
        <Route path="/machineandequipment" element={<MachineAndEquipment />} />
        <Route path="/automotiveinsights" element={<AutomotiveInsights />} />
        <Route path="/foodandbeverages" element={<FoodAndBeverages />} />
        <Route path="/consumergoods" element={<ConsumerGoods />} />
        <Route path="/electronicsandsemiconductor" element={<ElectronicsAndSemiconductor />} />
        

      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
