import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import LogoSlider from "./clientsection";
import ConnectingSection from "./connectingsection";
import TwoColumnLayout from "./twocolumnlayout";
import StayInSyncSection from "./stayinsyncsection";
import ForTeamsSection from "./forteamssection";
import ExploreSection from "./exploresection";
import Section from "./contactsection";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <LogoSlider />   
      <ConnectingSection />
      <TwoColumnLayout />
      <StayInSyncSection />
      <ForTeamsSection />
      <ExploreSection />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
