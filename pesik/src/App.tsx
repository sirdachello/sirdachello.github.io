import React from "react";
import "./App.css";
import Header from "./components/Header";
import OpeningSection from "./components/OpeningSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import BenefitsSection from "./components/BenefitsSection";
import ReviewsSection from "./components/ReviewsSection";
import AboutSectionLast from "./components/AboutSectionLast"
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <main>
         <OpeningSection />
        <AboutSection />
        <ServiceSection />
        <BenefitsSection /> 
        <ReviewsSection />
        <AboutSectionLast />

      </main>
      <Footer />
    </>
  );
}

export default App;
