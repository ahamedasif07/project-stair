import React from "react";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import CustomizeProject from "./components/CustomizeProject";
import BookingModal from "./components/froms/BookingModel";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <HowItWorks />
      <BookingModal />
      <CustomizeProject />
    </div>
  );
};

export default Home;
