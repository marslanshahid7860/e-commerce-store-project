import React from 'react'
import { Hero } from '../components/Hero/Hero';
import { ProductList } from '../sections/ProductList/ProductList';

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <ProductList />
    </React.Fragment>
  );
}

export default Home;
