"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Banner from "@/sections/Banner/Banner";
import Benefit from "@/sections/Benefit/Benefit";
import BusinessProducts from "@/sections/businessProducts/businessProducts";
import GridSystem from "@/sections/GridSystem/GridSystem";
import History from "@/sections/History/History";
import LastSection from "@/sections/LastSection/LastSection";
import LocationBrand from "@/sections/LocationBrand/LocationBrand";
import ProductDetails from "@/sections/ProductDetails/ProductDetails";
import Research3C from "@/sections/Research3C/Research3C";
import Result from "@/sections/Result/Result";
import Slide from "@/sections/Slide/Slide";
import TypographyColor from "@/sections/TypographyColor/TypographyColor";

const App = () => {
  useEffect(function () {
    Aos.init({ duration: 1000, disable: `mobile` });
  }, []);
  return (
    <main className="max-w-[100rem] mx-auto overflow-x-hidden">
      <Banner />
      <History />
      <Research3C />
      <Benefit />
      <LocationBrand />
      <BusinessProducts />
      <GridSystem />
      <TypographyColor />
      <Slide />
      <Result />
      <ProductDetails />
      <LastSection />
    </main>
  );
};

export default App;
