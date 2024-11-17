import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import CarouselEffect from "./Components/Carousel/CarouselEffect.jsx";
import Category from "./Components/Category/Category.jsx";
import Product from "./Components/Product/Product.jsx";
function App() {
  return (
    <>
      <Header />
      <CarouselEffect />
      <Category />
      <Product />
    </>
  );
}

export default App;
