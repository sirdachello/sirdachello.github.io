import React from "react";
import "./App.css";
import Header from "./components/Header";
import OpeningSection from "./components/OpeningSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import BenefitsSection from "./components/BenefitsSection";
import ReviewsSection from "./components/ReviewsSection";
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
      </main>
      <footer></footer>
    </>
  );
}

export default App;
