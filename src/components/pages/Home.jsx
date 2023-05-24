import React from "react";
import { FeatureBox } from "../components/FeatureBox/FeatureBox";
import { Hero } from "../components/Hero/Hero";
import { ProductList } from "../sections/ProductList/ProductList";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <ProductList />
      <FeatureBox />
    </React.Fragment>
  );
}

export default Home;
